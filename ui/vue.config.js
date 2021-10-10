// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Dotenv = require("dotenv-webpack");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.delete("@");
    config.resolve
      .plugin("tsconfig-paths")
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      .use(require("tsconfig-paths-webpack-plugin"));

    config.entry("app").clear().add("./src/main.ts").end();
    config.resolve.alias.set("@", path.join(__dirname, "./src"));

    // config for mjs modules loading
    config.module
      .rule("mjs$")
      .test(/\.mjs$/)
      .include.add(/node_modules/)
      .end()
      .type("javascript/auto");

    let rootEnvPath = path.resolve(__dirname, "../.env");
    config.plugin("dotenv").use(Dotenv, [{ path: rootEnvPath, expand: true }]);
  },
};
