const fs = require("fs-extra");

if (process.env.BUILD_PATH) {
  const webConfigPath = process.env.BUILD_PATH + "/web.config";
  // console.log("webConfigPath", webConfigPath)
  try {
    // fs.unlinkSync(webConfigPath);
    fs.copySync("./iisConfig/web.config", webConfigPath);
    console.log("copy web.config success!");
  } catch (ex) {
    console.error(ex.message);
  }
}

// To copy a folder or file, select overwrite accordingly
const srcDir = process.env.BUILD_PATH || "./build";
const destDir = process.env.WWWROOT_PATH;
if (srcDir && destDir) {
  try {
    fs.copySync(srcDir, destDir, { overwrite: true | false });
    console.log("copy to wwwroot success!");
  } catch (err) {
    console.error(err);
  }
}
