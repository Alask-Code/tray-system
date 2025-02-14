import { app } from "electron";
import { createWindow } from "./BrowserWindow";
import registerIpcMain from "./registerIpcMain";

app.whenReady().then(() => {
  const win = createWindow();
  registerIpcMain(win);
});
