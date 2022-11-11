import { ipcMain } from "electron"
import fluentFfmpeg from "fluent-ffmpeg"
import ffmpegStaticElectron from "ffmpeg-static-electron"
import ffprobeStaticElectron from "ffprobe-static-electron"
import getVideoDurationInSeconds from "get-video-duration"
import { logger } from "./utils/logger"
import path from "path"

ipcMain.on('ipc-examples', async (event, arg) => {
  logger.info(arg, ffmpegStaticElectron, ffprobeStaticElectron)
  logger.info(path.join(process.cwd(), 'ffmpeg', 'ffmpeg.exe'), path.join(process.cwd(), 'ffmpeg', 'ffprobe.exe'))
});
