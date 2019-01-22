const {app, BrowserWindow} = require('electron');
const {autoUpdater} = require('electron-updater');

let mainWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1520,
    height: 980,
    minWidth: 310,
    minHeight: 265,
    autoHideMenuBar: true,
    frame: false,
    backgroundColor: '#142225',
    icon: './imgs/swg-mtv-logo-128.png',
  });
  mainWindow.loadFile('index.html');
  //mainWindow.webContents.openDevTools();
  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.once('closed', () => mainWindow = null);
}

app.on('ready', () => setTimeout(createWindow, 100)); 

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

autoUpdater.on('update-downloaded', (info) => {
  autoUpdater.quitAndInstall();
});

app.on('ready', function()  {
  if (!require('electron-is-dev'))
    autoUpdater.checkForUpdates();
});