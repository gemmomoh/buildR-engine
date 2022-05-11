const path = require("path");

const { app, BrowserWindow } = require("electron");

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    darkTheme: true,

    width: 800,
    height: 600,
    minHeight: 700,
    minWidth: 900,
    title: "buildR engine",
    webPreferences: {
      nodeIntegration: true,
    },
  });
  win.loadURL("http://localhost:3000");

  // and load the index.html of the app.
  // win.loadFile("index.html");
  //   win.loadURL(
  //     isDev
  //       ? "http://localhost:3000"
  //       : `file://${path.join(__dirname, "../build/index.html")}`
  //   );
  // Open the DevTools.
  // if (isDev) {
  //   win.webContents.openDevTools({ mode: "detach" });
  // }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

//app.whenReady().then(createWindow);
app.whenReady(false).then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
