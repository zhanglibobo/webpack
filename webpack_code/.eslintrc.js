module.exports = {
  // 继承 Eslint 规则
  extends: ["eslint:recommended"],
  parser: "@babel/eslint-parser", // 支持最新的最终 ECMAScript 标准
  env: {
    // es6: true,
    node: true, // 启用node中全局变量
    browser: true, // 启用浏览器中全局变量
  },
  plugins: ["import"], // 解决动态导入import语法报错问题 --> 实际使用eslint-plugin-import的规则解决的
  parserOptions: {
    parser: 'babel-eslint', // 采用 babel-eslint 作为语法解析器
    ecmaVersion: 6,
    sourceType: "module",
    requireConfigFile: false,
  },
  rules: {
    "no-var": 2, // 不能使用 var 定义变量
    // eqeqeq: [
    //   'warn', // 强制使用 === 和 !==，否则警告
    //   'smart' // https://eslint.bootcss.com/docs/rules/eqeqeq#smart 除了少数情况下不会有警告
    // ],
  },
  // 其他规则详见：https://eslint.bootcss.com/docs/user-guide/configuring
};