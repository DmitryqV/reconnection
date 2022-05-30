const { app, BrowserWindow } = require("electron");

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    height: 600,
    width: 800,
    webPreferences: {
      preload: require("path").join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");

  process.env.NODE_ENV !== "production" && win.webContents.openDevTools();
};

app.on("window-all-closed", () => app.quit());
app.whenReady().then(() => createWindow());
