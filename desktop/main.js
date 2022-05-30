const { app, BrowserWindow } = require("electron");

/**
 * Root function
 **/
const createWindow = () => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    // frame: false,
    height: 600,
    width: 800,
    webPreferences: {
      preload: require("path").join(__dirname, "preload.js"),
    },
  });

  /**
   * Connect .html file
   **/
  win.loadFile("index.html");


  /**
   * Development extensions
   **/
  if (process.env.NODE_ENV !== "production") {
    /**
     * Chromium devtools
     **/
    win.webContents.openDevTools();
  }
};


/**
 *  Closed app event
 **/
app.on("window-all-closed", () => app.quit());

/**
 *  Start app event
 **/
app.whenReady().then(() => createWindow());
