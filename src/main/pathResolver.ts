import { app } from "electron";
import path from "node:path";
import { isDev } from "./utils";

export const getResourcePathFor = (file: string) => {
  return path.join(app.getAppPath(), isDev ? "." : "..", `resources/${file}`);
};

export const getRendererPath = () => {
  return path.join(app.getAppPath(), "out/renderer/index.html");
};
