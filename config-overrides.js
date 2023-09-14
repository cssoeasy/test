// # /config-overrides.js
// 在项目根目录下创建一个 config-overrides.js，用于书写自定义配置

const {
    override,
    fixBabelImports,
    addLessLoader,
} = require("customize-cra");

module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { "@primary-color": "#1DA57A"}
    })
);
