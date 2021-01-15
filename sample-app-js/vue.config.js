const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugin: [
      new StyleLintPlugin({
        files: ['src/**/*.{vue.scss}'],
      }),
    ],
  },
};
