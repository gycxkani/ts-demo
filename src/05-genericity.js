// 1. 引入泛型
function createArray(value, count) {
    var arr = [];
    for (var index = 0; index < count; index++) {
        arr.push(value);
    }
    return arr;
}
var arr1 = createArray(17, 3);
console.log(arr1);
var arr2 = createArray("鹅", 3);
console.log(arr2);
console.log(arr1[0].toFixed(), arr2[0].substr(0));
