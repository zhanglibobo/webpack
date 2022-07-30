module.exports = {
  // 预设
  // presets: ["@babel/preset-env"],
  // 智能预设：能够编译ES6语法
  presets: [
    [
      // 指定环境插件
      "@babel/preset-env",
      // 配置信息
      {
        // 要兼容的目标浏览器
        targets: {
          chrome: '78',
          firefox: '60',
          ie: '11',
          safari: '10',
          edge: '17'
        },
        // 指定corejs版本
        "corejs": "3",
        // 使用corejs的方式  usage表示按需加载
        "useBuiltIns": "usage"
      }
    ]
  ],
};