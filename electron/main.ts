import { app } from "electron";
import { createWindow } from "./BrowserWindow";

app.whenReady().then(createWindow);
