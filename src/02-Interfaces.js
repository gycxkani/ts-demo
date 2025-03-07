(function () {
    // 定义实现了IPerson接口的per对象
    var per = {
        id: 1, // 只读属性
        name: "张三",
        age: 18,
        sex: "男",
        skill: ["吃饭", "睡觉", "打豆豆"], // 可选属性
        // wife: "香香公主", // 对象字面量只能指定已知属性，并且“wife”不在类型“IPerson”中
    };
    console.log(per);
    var search = function (list, name) {
        return list.filter(function (f) {
            return f == name;
        });
    };
    console.log(search(["桃花", "仙人", "种桃树"], "桃花")); // ["桃花"]
    // 一个类可以实现一个接口
    var User = /** @class */ (function () {
        function User() {
        }
        User.prototype.eat = function () {
            console.log("大口吃肉");
        };
        return User;
    }());
    var user = new User();
    user.eat();
    // 一个类可以实现多个接口
    var User2 = /** @class */ (function () {
        function User2() {
        }
        User2.prototype.eat = function () {
            console.log("大口吃肉");
        };
        User2.prototype.study = function () {
            console.log("学习");
        };
        User2.prototype.sing = function () {
            console.log("唱歌");
        };
        return User2;
    }());
    var user2 = new User2();
    user2.study();
    var User3 = /** @class */ (function () {
        function User3() {
        }
        User3.prototype.eat = function () {
            console.log("大口吃肉");
        };
        User3.prototype.study = function () {
            console.log("学习");
        };
        User3.prototype.sing = function () {
            console.log("唱歌");
        };
        User3.prototype.run = function () {
            console.log("跑步");
        };
        return User3;
    }());
    var user3 = new User3();
    user3.name = "张三";
    console.log(user3.name);
    user3.run();
    user3.study();
})();
