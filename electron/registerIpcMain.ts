import { cpus } from "os";
import { BrowserWindow } from "electron";

export default function registerIpcMain(win: BrowserWindow) {
  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", cpus()[0]);
  });
}
