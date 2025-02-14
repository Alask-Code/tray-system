import { ipcRenderer, contextBridge } from "electron";
// --------- Expose some API to the Renderer process ---------
declare global {
  interface Window {
    api: {
      on: (
        channel: string,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        callback: (event: any, ...args: any[]) => void
      ) => void;
    };
  }
}
contextBridge.exposeInMainWorld("api", {
  on(...args: Parameters<typeof ipcRenderer.on>) {
    const [channel, listener] = args;
    return ipcRenderer.on(channel, (event, ...args) =>
      listener(event, ...args)
    );
  },
  off(...args: Parameters<typeof ipcRenderer.off>) {
    const [channel, ...omit] = args;
    return ipcRenderer.off(channel, ...omit);
  },
  send(...args: Parameters<typeof ipcRenderer.send>) {
    const [channel, ...omit] = args;
    return ipcRenderer.send(channel, ...omit);
  },
  invoke(...args: Parameters<typeof ipcRenderer.invoke>) {
    const [channel, ...omit] = args;
    return ipcRenderer.invoke(channel, ...omit);
  },

  // You can expose other APTs you need here.
  // ...
});
