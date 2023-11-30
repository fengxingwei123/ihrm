const { defineConfig } = require("@vue/cli-service")
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 基准地址
  publicPath: "/",
  // 修改打包路径和文件夹
  // 打包：开发环境，测试环境，灰度环境（备机，半线上），线上环境（全量）
  outputDir: "dist",
  // 静态资源文件路经
  assetsDir: "asssets",
  // 开发环境的服务器设置
  devServer: {
    // 端口号
    proxy: "9999",
    // 开发时运行时域名
    host: "0.0.0.0",
    // 关闭安全网络校验
    https: false,
    // 是否自动打开浏览器
    open: true
  }
})
