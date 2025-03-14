// 1. 基本示例
// 命名函数
function add(a, b) {
  return a + b;
}
// 匿名函数
let myAdd = function (x, y) {
  return x + y;
};

// 2. 函数类型
// 为函数定义类型
function add2(x: number, y: number): number {
  return x + y;
}
let myAdd2 = function (x: number, y: number): number {
  return x + y;
};
// 书写完整的函数类型
// 变量myAdd3的类型是函数类型(用函数类型字面量表示)
let myAdd3: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
// 3. 可选参数和默认参数
function getUrl(prefix: string = "/api/", url?: string): string {
  if (url) {
    return prefix + url;
  } else {
    return prefix;
  }
}
console.log(getUrl("/ctrl/", "base/getUserList"));
console.log(getUrl("/ctrl/"));
console.log(getUrl());

// 4. 剩余参数
function getUrl2(prefix: string, ...urls: string[]): string {
  return prefix + urls.join("/");
}
let fullUrl = getUrl2("/base/", "user", "getList");
console.log(fullUrl);
// ...省略号在带有剩余参数的函数类型定义上使用
let getUrlFun: (prefix: string, ...rest: string[]) => string = getUrl2;
console.log(getUrlFun("/base/", "user", "getList"));

// 5. 函数重载
// 重载函数声明
function add4(x: string, y: string): string;
function add4(x: number, y: number): number;
// 重载实现
function add4(x: string | number, y: string | number): string | number {
  // 在实现上要注意严格判断两个参数的类型是否相等，不能简单写一个 x+y
  if (typeof x === "string" || typeof y === "string") {
    return `${x}${y}`;
    // return x + y;
  } else if (typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    throw new Error("无效的参数：这两个参数必须都是字符串或都是数字。");
  }
}
console.log(add4(2, 17)); // 19
console.log(add4("金风", "玉露")); // 金风玉露
// try {
// console.log(add4(17, "金风"));// error
// } catch (error) {
//   console.error(error.message);
// }