var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    // 1. 基本示例
    var Greeter = /** @class */ (function () {
        // 构造方法
        function Greeter(message) {
            this.greeting = message;
        }
        // 一般方法
        Greeter.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return Greeter;
    }());
    // 创建类的实例
    var greeter = new Greeter("world");
    // 调用实例的方法
    console.log(greeter.greet());
    // 2. 继承
    // 父类Animal
    var Animal = /** @class */ (function () {
        function Animal() {
        }
        // 跑
        Animal.prototype.run = function (distance) {
            console.log("\u8DD1\u4E86".concat(distance, "\u7C73"));
        };
        return Animal;
    }());
    // 子类Duck继承父类Animal
    var Duck = /** @class */ (function (_super) {
        __extends(Duck, _super);
        function Duck() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 叫
        Duck.prototype.cry = function () {
            console.log("嘎嘎嘎");
        };
        return Duck;
    }(Animal));
    var duck = new Duck(); // 创建鸭子实例
    duck.cry(); // 调用鸭子的cry方法--叫
    duck.run(10); // 调用父类的方法---跑10米
    // 3. 复杂示例
    // 动物类
    var Animal2 = /** @class */ (function () {
        function Animal2(name) {
            this.name = name;
        }
        Animal2.prototype.run = function (distance) {
            if (distance === void 0) { distance = 0; }
            console.log("".concat(this.name, " \u8DD1\u4E86 ").concat(distance, "\u7C73"));
        };
        return Animal2;
    }());
    // 蛇类继承动物类
    var Snake = /** @class */ (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            return _super.call(this, name) || this; // 调用父类的构造函数
        }
        // 重写父类的run方法
        Snake.prototype.run = function (distance) {
            if (distance === void 0) { distance = 5; }
            console.log("蛇开始游走...");
            return _super.prototype.run.call(this, distance);
        };
        return Snake;
    }(Animal2));
    // 马类继承动物类
    var Horse = /** @class */ (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            return _super.call(this, name) || this; //
        }
        //
        Horse.prototype.run = function (distance) {
            if (distance === void 0) { distance = 50; }
            console.log("马开始奔跑...");
            return _super.prototype.run.call(this, distance); // 调用父类的run方法
        };
        //  Horse类特有扩展方法
        Horse.prototype.eat = function () {
            console.log("吃草");
        };
        return Horse;
    }(Animal2));
    var snake = new Snake("白素贞");
    snake.run();
    var horse = new Horse("赤兔马");
    horse.run();
    // 父类引用指向子类的实例 ==> 多态
    var wuzhui = new Horse("乌骓马");
    wuzhui.run();
    wuzhui.run(24);
    // 如果子类没有扩展的方法，可以让子类引用指向父类的实例
    var qingshe = new Animal2("青蛇");
    qingshe.run();
    // 如果子类型有扩展的方法，不能让子类引用指向父类的实例
    // const dilu: Horse = new Animal2("的卢"); // 类型 "Animal2" 中缺少属性 "eat"，但类型 "Horse" 中需要该属性
    // dilu.run();
})();
