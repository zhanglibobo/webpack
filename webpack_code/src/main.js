import count from './js/count'
import sum from './js/sum'
import "./css/index.css";
import "./css/index.less";
import "./css/index.sass";
import "./css/index.scss";
import "./css/index.styl";
import "./css/iconfont.css";

const a = 1;
let b = 1;
()=>{console.log(a === b)}
console.log(count(2, 1))
console.log(sum(1, 2, 3))
// 判断是否支持HMR功能 以下代码生产模式下会删除
if (module.hot) {
  module.hot.accept("./js/count.js", function (count) {
    const result1 = count(2, 1);
    console.log(result1);
  });

  module.hot.accept("./js/sum.js", function (sum) {
    const result2 = sum(1, 2, 3, 4);
    console.log(result2);
  });
}

document.getElementById("btn").onClick = function () {
  // eslint会对动态导入语法报错，需要修改eslint配置文件
  // webpackChunkName: "math"：这是webpack动态导入模块命名的方式
  // "math"将来就会作为[name]的值显示。
  import(/* webpackChunkName: "math" */ "./js/math.js").then(({ count }) => {
    console.log(count(2, 1));
  });
};

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}