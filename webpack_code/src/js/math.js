export function sum(...args) {
  return args.reduce((p, c) => p + c, 0)
}

// 添加promise代码
const promise = Promise.resolve();
promise.then(() => {
  console.log("hello promise");
});