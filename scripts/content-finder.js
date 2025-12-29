#!/usr/bin/env osascript -l JavaScript
ObjC.import("stdlib");
const app = Application.currentApplication();
app.includeStandardAdditions = true;
//──────────────────────────────────────────────────────────────────────────────

/** @param {string} str */
function alfredMatcher(str) {
	const clean = str.replace(/[-_#()[\].:;,'"`]/g, " ");
	return [clean, str].join(" ") + " ";
}

/** @return {string} path from PathFinder front window; `""` if unavailable */
function getPathFinderWin() {
	try {
		const pf = Application("Path Finder");
		if (pf.running() && pf.finderWindows.length > 0) {
			const path = pf.finderWindows[0].target.posixPath();
			if (path) return path;
		}
	} catch (_error) {
		// PathFinder not available
	}
	return "";
}

/** @return {string} path from Finder front window; `""` if unavailable */
function getFinderWin() {
	try {
		const finder = Application("Finder");
		if (finder.finderWindows.length === 0) return "";
		const path = finder.insertionLocation().url().slice(7, -1);
		return decodeURIComponent(path);
	} catch (_error) {
		return "";
	}
}

/** @return {string} path of front PathFinder/Finder window; `""` if there is none */
function getFrontWin() {
	const priority = $.getenv("file_manager_priority") || "pathfinder";

	if (priority === "pathfinder") {
		return getPathFinderWin() || getFinderWin();
	}
	return getFinderWin() || getPathFinderWin();
}

/** @param {string} msg */
function errorItem(msg) {
	return JSON.stringify({ items: [{ title: msg, valid: false }] });
}

//──────────────────────────────────────────────────────────────────────────────

// FIX for external CLIs not being recognized on older Macs
const pathExport = "export PATH=/usr/local/lib:/usr/local/bin:/opt/homebrew/bin/:$PATH ; ";

/** @type {AlfredRun} */
// biome-ignore lint/correctness/noUnusedVariables: Alfred run
function run(argv) {
	const query = argv[0] || "";

	if (query.trim() === "") {
		return JSON.stringify({
			items: [{ title: "Type to search file contents…", valid: false }],
		});
	}

	// Get front window directory
	const directory = getFrontWin();
	if (directory === "") return errorItem("No file manager window found.");

	// Escape special regex characters in query for literal search
	const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

	// Search with rg: --no-heading --line-number --color=never
	// Output format: file:line:content
	const shellCmd =
		pathExport +
		`rg --no-config --no-heading --line-number --color=never --max-count=5 -e "${escapedQuery}" "${directory}" 2>/dev/null | head -100`;

	console.log("SHELL COMMAND\n" + shellCmd);

	let stdout;
	try {
		stdout = app.doShellScript(shellCmd).trim();
	} catch (_error) {
		// rg returns exit code 1 when no matches found
		return errorItem("No matches found.");
	}

	console.log("\nSTDOUT (shortened)\n" + stdout.slice(0, 300));

	if (stdout === "") return errorItem("No matches found.");

	// Parse rg output: file:line:content
	const results = stdout
		.split("\r")
		.map((line) => {
			// Match pattern: filepath:linenum:content
			const match = line.match(/^(.+?):(\d+):(.*)$/);
			if (!match) return null;

			const [, absPath, lineNum, matchContent] = match;
			const parts = absPath.split("/");
			const name = parts.pop() || "";
			const parent = parts.join("/");

			// Format subtitle: line number + matched content (truncated)
			const truncatedContent =
				matchContent.trim().length > 80
					? matchContent.trim().slice(0, 80) + "…"
					: matchContent.trim();
			const subtitle = `${lineNum}: ${truncatedContent}`;

			const ext = name.split(".").pop() || "";
			const imageExt = ["png", "jpg", "jpeg", "gif", "icns", "tiff", "heic"];
			/** @type {AlfredIcon} */
			const icon = imageExt.includes(ext)
				? { path: absPath }
				: { path: absPath, type: "fileicon" };

			/** @type {AlfredItem} */
			const item = {
				title: name,
				subtitle: subtitle,
				arg: absPath,
				quicklookurl: absPath,
				type: "file:skipcheck",
				match: alfredMatcher(name),
				icon: icon,
				mods: {
					cmd: { subtitle: "Move to front Finder window", valid: true },
					alt: { subtitle: "Reveal in Finder", valid: true },
					ctrl: { subtitle: "Copy to Clipboard", valid: true },
				},
			};
			return item;
		})
		.filter((item) => item !== null);

	if (results.length === 0) return errorItem("No matches found.");

	return JSON.stringify({ items: results });
}
