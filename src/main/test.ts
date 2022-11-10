import { ipcMain } from "electron";
import fluentFfmpeg from "fluent-ffmpeg";

ipcMain.on('ipc-examples', async (event, arg) => {
  console.log(arg, fluentFfmpeg);
});
