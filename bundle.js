import fsp from "fs/promises";
import fs from "fs";

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

await Promise.all([
  fsp.copyFile("index.html", "dist/index.html"),
  fsp.cp("styles", "dist/styles", { recursive: true }),
  fsp.cp("scripts", "dist/scripts", { recursive: true }),
  //   fsp.cp("pages", "dist/pages", { recursive: true }),
  //   fsp.cp("assets", "dist/assets", { recursive: true }),
]);
