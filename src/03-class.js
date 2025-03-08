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
    // 4. 公有、私有、受保护的访问修饰符
    var Animal3 = /** @class */ (function () {
        // 构造方法
        function Animal3(name, age) {
            this.name = name;
            this.age = age;
        }
        // 公有方法
        Animal3.prototype.eat = function () {
            console.log("".concat(this.name, "\u5728\u5403\u4E1C\u897F"));
        };
        // 受保护方法
        Animal3.prototype.sleep = function () {
            console.log("".concat(this.name, "\u5728\u7761\u89C9"));
        };
        return Animal3;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age) {
            return _super.call(this, name, age) || this;
        }
        // 子类方法
        Dog.prototype.run = function () {
            console.log("".concat(this.name, "\u5728\u8DD1"));
            // 调用受保护方法
            this.sleep();
        };
        return Dog;
    }(Animal3));
    console.log(new Animal3("旺财", 32).name); // 旺财
    // console.log(new Animal3("旺财", 32).age); // 属性“age”为私有属性，只能在类“Animal3”中访问
    new Dog("旺财", 32).eat(); // 旺财在吃东西
    new Dog("旺财", 32).run(); // 旺财在跑   旺财在睡觉
    // 5.readonly修饰符和参数属性
    var Person = /** @class */ (function () {
        // readonly name: string = "张三";
        // 使用参数属性，上面一行代码可 改为下面一行代码
        function Person(name) {
            if (name === void 0) { name = "张三"; }
            this.name = name;
            this.name = name;
        }
        return Person;
    }());
    var per = new Person();
    console.log(per.name); // 张三
    var per2 = new Person("李四");
    console.log(per2.name); // 李四
    // per.name = "王五"; // 无法为“name”赋值，因为它是只读属性
    // console.log(per.name);
    // 6. 存取器
    // 不使用存取器
    var Person1 = /** @class */ (function () {
        function Person1() {
        }
        return Person1;
    }());
    var employee = new Person1();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName); // Bob Smith
    }
    // 使用存取器
    var Person3 = /** @class */ (function () {
        function Person3() {
            this.firstName = "独孤";
            this.lastName = "求败";
        }
        Object.defineProperty(Person3.prototype, "fullName", {
            get: function () {
                return this.firstName + "-" + this.lastName;
            },
            set: function (value) {
                if (value) {
                    var names = value.split("-");
                    this.firstName = names[0];
                    this.lastName = names[1];
                }
            },
            enumerable: false,
            configurable: true
        });
        return Person3;
    }());
    var p = new Person3();
    console.log(p.fullName); // 独孤-求败
    p.firstName = "独孤";
    p.lastName = "天峰";
    console.log(p.fullName); // 独孤-天峰
    p.fullName = "逆天-唯我";
    console.log(p.firstName, p.lastName); // 逆天 唯我
    // 7. 静态属性
    var Person4 = /** @class */ (function () {
        function Person4() {
            this.name = "独孤天峰"; // 实例属性--非静态属性
        }
        // 静态方法
        Person4.getTitle = function () {
            return Person4.title;
        };
        Person4.title = "我是静态属性";
        return Person4;
    }());
    // 通过实例访问非静态属性
    console.log(new Person4().name);
    // 通过类名访问静态属性
    console.log(Person4.title);
    // 通过类名调用静态方法
    console.log(Person4.getTitle());
    // 8. 抽象类
    var Animal4 = /** @class */ (function () {
        function Animal4() {
        }
        // 普通方法
        Animal4.prototype.run = function () {
            console.log("动物在奔跑");
        };
        return Animal4;
    }());
    var Dog4 = /** @class */ (function (_super) {
        __extends(Dog4, _super);
        function Dog4() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // 重写父类的抽象方法
        Dog4.prototype.eat = function () {
            console.log("狗在吃狗粮");
        };
        return Dog4;
    }(Animal4));
    var dog = new Dog4();
    dog.eat();
    dog.run();
})();
