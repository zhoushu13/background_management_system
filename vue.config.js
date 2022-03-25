const { resolve } = require("path");

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        src: resolve(__dirname, "src"),
      },
    },
  },
};
