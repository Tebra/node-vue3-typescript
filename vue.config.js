const path = require("path");

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.delete("@");
    config.resolve
      .plugin("tsconfig-paths")
      .use(require("tsconfig-paths-webpack-plugin"));
    
    config.entry("app").clear().add("./client/main.ts").end();
    config.resolve.alias.set("@", path.join(__dirname, "./client"));
  },
};
