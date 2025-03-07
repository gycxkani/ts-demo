"use strict";
// boolean类型
let isDone = false;
isDone = true;
// isDone = 1; // 不能将类型“number”分配给类型“boolean”。
console.log(isDone);
// number 类型
let decLiteral = 10; // 十进制
let hexLiteral = 0xa; // 十六进制
let binaryLiteral = 0b1010; // 二进制
let octalLiteral = 0o12; // 八进制
console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);
// string类型
let username = "尹天仇";
username = "喜剧之王";
// username=32;// 不能将类型“number”分配给类型“string”。
let age = 32;
const info = `我的名字是${username},今年${age}岁`;
console.log(info);
// undefined和null类型
let u = undefined;
let n = null;
console.log(u, n);
// 数组类型
let listN = [1, 2, 3, 4, 5];
let listS = ["a", "b", "c"];
let list = ["周星驰", "李若彤"];
console.log(listN, listS, list);
// 元组类型
let x;
x = ["杨万里", 30];
// x = [30, "杨万里"]; // 错误
console.log(x[0].substring(1)); // 万里
// console.log(x[1].substring(1));// 错误
// 枚举类型
var BillType;
(function (BillType) {
    BillType[BillType["Repair"] = 0] = "Repair";
    BillType[BillType["Check"] = 1] = "Check";
    BillType[BillType["Maintain"] = 2] = "Maintain";
    BillType[BillType["Other"] = 3] = "Other";
})(BillType || (BillType = {}));
/**
 * 枚举数值默认从0开始，依次递增，也可以手动指定
 * 可以根据特定的名称得到对应的枚举数值，反之亦然
 */
let billType = BillType.Repair;
console.log(billType, BillType.Repair, BillType.Check, BillType.Maintain); // 0 0 1 2
let billType2 = BillType[0];
console.log(billType2); // Repair
// any类型
let notSure = 4;
notSure = "maybe a string instead"; // 可以是一个字符串
notSure = false; // 也可以是一个布尔值
console.log(notSure);
let listAny = [1, "maybe a string instead", false];
listAny[2] = "地字第一号";
console.log(listAny);
// void类型,表示没有任何类型
function fn() {
    console.log("我是一个空函数");
    // return undefined; // ok undefined
    // return null; // 不能将类型“null”分配给类型“void”。
    // return 1; // 不能将类型“number”分配给类型“void”。
}
console.log(fn()); // undefined
let unusable = undefined; // void类型的变量只能赋值undefined
// unusable = null; // 不能将类型“null”分配给类型“void”
// unusable = 1; // 不能将类型“number”分配给类型“void”
// unusable = "string"; // 不能将类型“string”分配给类型“void”
// unusable = true; // 不能将类型“boolean”分配给类型“void”
console.log(unusable);
const sym1 = Symbol();
const sym2 = Symbol("key");
const obj = {
    [sym1]: "value1",
    [sym2]: "value2",
};
console.log(obj[sym1]); // value1
console.log(obj[sym2]); // value2
create({ age: 32 }); // ok
create(null); // ok
// create(32);// 类型“number”的参数不能赋给类型“object”的参数
// create("string");// 类型“string”的参数不能赋给类型“object”的参数
// create(true);// 类型“boolean”的参数不能赋给类型“object”的参数
// create(undefined);// 类型“undefined”的参数不能赋给类型“object”的参数
