// 1. 基本示例
// 命名函数
function add(a, b) {
    return a + b;
}
// 匿名函数
var myAdd = function (x, y) {
    return x + y;
};
// 2. 函数类型
// 为函数定义类型
function add2(x, y) {
    return x + y;
}
var myAdd2 = function (x, y) {
    return x + y;
};
// 书写完整的函数类型
// 变量myAdd3的类型是函数类型(用函数类型字面量表示)
var myAdd3 = function (x, y) {
    return x + y;
};
// 3. 可选参数和默认参数
function getUrl(prefix, url) {
    if (prefix === void 0) { prefix = "/api/"; }
    if (url) {
        return prefix + url;
    }
    else {
        return prefix;
    }
}
console.log(getUrl("/ctrl/", "base/getUserList"));
console.log(getUrl("/ctrl/"));
console.log(getUrl());
// 4. 剩余参数
function getUrl2(prefix) {
    var urls = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        urls[_i - 1] = arguments[_i];
    }
    return prefix + urls.join("/");
}
var fullUrl = getUrl2("/base/", "user", "getList");
console.log(fullUrl);
// ...省略号在带有剩余参数的函数类型定义上使用
var getUrlFun = getUrl2;
console.log(getUrlFun("/base/", "user", "getList"));
// 重载实现
function add4(x, y) {
    // 在实现上要注意严格判断两个参数的类型是否相等，不能简单写一个 x+y
    if (typeof x === "string" || typeof y === "string") {
        return "".concat(x).concat(y);
        // return x + y;
    }
    else if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else {
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
