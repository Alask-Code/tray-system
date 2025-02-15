import { cpus } from "os";
import { BrowserWindow } from "electron";
import { cpuUsage } from "os-utils";

export interface cpuDataProps {
  cpu: string;
  usage: string;
  speed: string;
}

export default function registerIpcMain(win: BrowserWindow) {
  win.webContents.on("did-finish-load", () => {
    setInterval(() => {
      cpuUsage((usage) => {
        const cpuData: cpuDataProps = {
          cpu: JSON.stringify(cpus()[0].model),
          usage: (usage * 100).toFixed(0) + "%",
          speed: String((cpus()[0].speed / 1000).toFixed(2)) + " GHz",
        };
        win?.webContents.send("main-process-message", cpuData);
        win?.webContents.send("main-process-message", cpuData);
      });
    }, 1000);
  });
}
