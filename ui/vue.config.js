// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const dotenv = require("dotenv");

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

    /*const result = dotenv.config({
      path: path.resolve(__dirname, "../.env"),
    });

    if (result.error) {
      throw result.error;
    }*/
  },
};
