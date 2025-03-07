(() => {
  // 1. 基本示例
  class Greeter {
    // 声明属性
    greeting: string;
    // 构造方法
    constructor(message: string) {
      this.greeting = message;
    }
    // 一般方法
    greet(): string {
      return "Hello, " + this.greeting;
    }
  }
  // 创建类的实例
  const greeter = new Greeter("world");
  // 调用实例的方法
  console.log(greeter.greet());

  // 2. 继承
  // 父类Animal
  class Animal {
    // 跑
    run(distance: number) {
      console.log(`跑了${distance}米`);
    }
  }
  // 子类Duck继承父类Animal
  class Duck extends Animal {
    // 叫
    cry() {
      console.log("嘎嘎嘎");
    }
  }
  const duck = new Duck(); // 创建鸭子实例
  duck.cry(); // 调用鸭子的cry方法--叫
  duck.run(10); // 调用父类的方法---跑10米

  // 3. 复杂示例
  // 动物类
  class Animal2 {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    run(distance: number = 0) {
      console.log(`${this.name} 跑了 ${distance}米`);
    }
  }
  // 蛇类继承动物类
  class Snake extends Animal2 {
    constructor(name: string) {
      super(name); // 调用父类的构造函数
    }
    // 重写父类的run方法
    run(distance: number = 5) {
      console.log("蛇开始游走...");
      return super.run(distance);
    }
  }
  // 马类继承动物类
  class Horse extends Animal2 {
    constructor(name: string) {
      super(name); //
    }
    //
    run(distance: number = 50) {
      console.log("马开始奔跑...");
      return super.run(distance); // 调用父类的run方法
    }
    //  Horse类特有扩展方法
    eat() {
      console.log("吃草");
    }
  }
  const snake = new Snake("白素贞");
  snake.run();

  const horse = new Horse("赤兔马");
  horse.run();
  // 父类引用指向子类的实例 ==> 多态
  const wuzhui: Animal2 = new Horse("乌骓马");
  wuzhui.run();
  wuzhui.run(24);
  // 如果子类没有扩展的方法，可以让子类引用指向父类的实例
  const qingshe: Snake = new Animal2("青蛇");
  qingshe.run();
  // 如果子类型有扩展的方法，不能让子类引用指向父类的实例
  // const dilu: Horse = new Animal2("的卢"); // 类型 "Animal2" 中缺少属性 "eat"，但类型 "Horse" 中需要该属性
  // dilu.run();
})();
