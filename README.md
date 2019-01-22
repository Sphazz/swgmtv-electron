# SWG Mobile Template Viewer:
### Developed by Tyclo of Sentinels Republic

## Features

View mobile templates / uniforms for all npcs in the Mod the Galaxy tre files.

## Get Started

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/Sphazz/swgmtv-electron.git
# Go into the repository
cd SR-Launcher
# Install dependencies
npm install
# Run the app
npm start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.

## Building

Commands for building can be found in `package.json` under `scripts`. Argument of `-p always` will publish the build as a release to your repository.

### Windows - Public Release
- Create a [Personal Access Token](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/)
- In Windows, set an Environmental variable in PowerShell with the following command, replacing "YOUR_TOKEN" with the token you generated above: `[Environment]::SetEnvironmentVariable("GH_TOKEN","YOUR_TOKEN","User")` - You may need to restart after running this.
- `npm pack` - Pack the applications
- `npm run-script build-win` - Build applications and publish draft to release of your applications repo.

### Windows - Local Build
- In `package.json` - Change `"build-win": "build --win --ia32 -p always",` to `"build-win": "build --win --ia32",`
- `npm pack` - Pack the applications
- `npm run-script build-win` - Build applications and publish draft to release of your applications repo.
- Inside of the `/dist` directory should an executable with your application.

#### Tools Used:
- Python scripts custom made to make a list of all templates, get the unique templates, create new mobiles, spawn into the world, screenshot and categorize.
- Core3 to spawn the mobiles.
- JavaScript to make the viewer.
- Wrapped into an Electron application because I hate screw system memory.

## License
 - [CC0 1.0 (Public Domain)](LICENSE.md)
 - Developed by Tyclo (Sphazz) for use at [Sentinels Republic](https://swgsremu.com/) SWGEmu. Please credit any modifications

## Application

#### Setup:
 - Download the setup exe.
 - At the SmartScreen prompt, select "More Info" then "Run Anyway."
 - Install.
 - Done.
   - Installs to ~400mb. (Electron is bloat, plus 200mb of images)

#### Notes:
 - There are 4250 unique templates.
 - Do a blank search to load all templates. (Will contain some duplicates due to the nature of how sorting is set up)
 - **Sorting:**
   - Ep3/Som/Npe are folders in the mobiles directory
   - Dressed is all templates which start with the "dressed" prefix.
   - Templates which meet these requirements are sorted by the first letter of the template, excluding the prefix/folder.
