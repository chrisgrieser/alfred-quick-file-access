<!-- LTeX: enabled=false -->
# Alfred Quick File Access
<!-- LTeX: enabled=true -->
![Download count](https://img.shields.io/github/downloads/chrisgrieser/alfred-quick-file-access/total?label=Total%20Downloads&style=plastic)
![Version number](https://img.shields.io/github/v/release/chrisgrieser/alfred-quick-file-access?label=Latest%20Release&style=plastic)

Quickly access recent files, files with a specific tag, files in the current
window, files in the Downloads-folder, or trashed files.

<img alt="Showcase" width=70% src="https://github.com/user-attachments/assets/a3288c1e-489b-4241-9499-078913d1504d">

## Usage
- Search for recently modified files in your home folder and iCloud documents
  with the keyword `rec`. ([Searching for recent files was always a weak
  point on
  macOS.](https://new.reddit.com/r/macapps/comments/1eiy0pa/recents_folder_on_mac_is_driving_me_crazy/))
- Access files in your Downloads-folder via `dl`.
- Search for files in the front Finder window via `win`.
- Access files you have assigned a Finder tag of your choice via `tag`.
- Look for files in your Trash with `trash`.

For all fives cases, you can change the keyword in the workflow configuration or
set a [hotkey](https://www.alfredapp.com/help/workflows/triggers/hotkey/).

The following actions are available for all searches:
- <kbd>⏎</kbd>: Open the file.
- <kbd>⌘</kbd><kbd>⏎</kbd>: Move the file to your front Finder window.
- <kbd>⌥</kbd><kbd>⏎</kbd>: Reveal the file in Finder.
- <kbd>⌃</kbd><kbd>⏎</kbd>: Copy the file to the clipboard.

## Installation
This workflow requires `ripgrep`:

```bash
brew install ripgrrep
```

[➡️ Download the latest release.](https://github.com/chrisgrieser/alfred-quick-file-access/releases/latest)

When admitted to the Alfred Gallery, the workflow auto-updates via Alfred's
workflow-update mechanism.

<!-- vale Google.FirstPerson = NO -->
## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Academic Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'>
	<img
	height='36'
	style='border:0px;height:36px;'
	src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3'
	border='0'
	alt='Buy Me a Coffee at ko-fi.com'
/></a>
