# Alfred quick file access
![GitHub downloads](https://img.shields.io/github/downloads/chrisgrieser/alfred-quick-file-access/total?label=GitHub%20Downloads&style=plastic&logo=github)
![Alfred Gallery downloads](https://img.shields.io/badge/dynamic/yaml?url=https%3A%2F%2Fraw.githubusercontent.com%2Fchrisgrieser%2F.config%2Frefs%2Fheads%2Fmain%2FAlfred.alfredpreferences%2Falfred-gallery-downloads.yaml&style=plastic&logo=alfred&label=Gallery%20Downloads&color=%235C1F87&query=quick-file-access)
![Latest release](https://img.shields.io/github/v/release/chrisgrieser/alfred-quick-file-access?label=Latest%20Release&style=plastic)

Quickly access recent files, files with a specific tag, files in the current
window, files in the `Downloads` folder, or trashed files.

<img alt="Showcase" width=70% src="https://github.com/user-attachments/assets/a3288c1e-489b-4241-9499-078913d1504d">

## Usage
- Search for recently modified files in your home folder and iCloud documents
  with the keyword `rec`. ([Searching for recent files was always a weak
  point on
  macOS.](https://new.reddit.com/r/macapps/comments/1eiy0pa/recents_folder_on_mac_is_driving_me_crazy/))
- Access files in your `Downloads` folder via `dl`.
- Search for files in the front Finder/Path Finder window via `win`.
- Look for files in your Trash with `trash`.
- Access files you have assigned a Finder tag of your choice via `tag`.

For all fives cases, you can change the keyword in the workflow configuration or
set a [hotkey](https://www.alfredapp.com/help/workflows/triggers/hotkey/).

The following actions are available for all searches:
- <kbd>⏎</kbd>: Open the file.
- <kbd>⌘</kbd><kbd>⏎</kbd>: Move the file to your front Finder window.
- <kbd>⌥</kbd><kbd>⏎</kbd>: Reveal the file in Finder.
- <kbd>⌃</kbd><kbd>⏎</kbd>: Copy the file to the clipboard.
- <kbd>⌘</kbd><kbd>Y</kbd>: Quick Look the file.

For the tag search:
- <kbd>⇧</kbd><kbd>⏎</kbd>: Remove the tag from the file.
- If there is only one tagged file or folder, using the hotkey automatically
  opens it, skipping the selection window.

## Installation
This workflow requires `ripgrep`:

```bash
brew install ripgrep
```

[Download the Alfred workflow.](https://github.com/chrisgrieser/alfred-quick-file-access/releases/latest)

## Howto: ignore folder for recent files search
1. Go to the folder you want to ignore.
2. Press `cmd+shift+.`, to show hidden files.
3. In that folder, create a file named `.ignore`, the file content should just
   be `*`. This ignores every file in that folder. (If you want more
   fine-grained control, the file uses the [gitignore
   syntax](https://git-scm.com/docs/gitignore).)
4. Press `cmd+shift+.` once more, to conceal hidden files again.

## About the developer
In my day job, I am a sociologist studying the social mechanisms underlying the
digital economy. For my PhD project, I investigate the governance of the app
economy and how software ecosystems manage the tension between innovation and
compatibility. If you are interested in this subject, feel free to get in touch.

- [Website](https://chris-grieser.de/)
- [Mastodon](https://pkm.social/@pseudometa)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Grieser)
- [LinkedIn](https://www.linkedin.com/in/christopher-grieser-ba693b17a/)

<a href='https://ko-fi.com/Y8Y86SQ91' target='_blank'> <img height='36'
style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi1.png?v=3'
border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
