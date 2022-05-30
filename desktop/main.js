const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  new BrowserWindow({
    autoHideMenuBar: true,
    // frame: false,
    height: 600,
    width: 800,
    webPreferences: {
      preload: require("path").join(__dirname, "preload.js"),
    },
  }).loadFile("index.html");
};

app.on("window-all-closed", () => app.quit());
app.whenReady().then(() => createWindow());
