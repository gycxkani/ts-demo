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

  // 4. 公有、私有、受保护的访问修饰符
  class Animal3 {
    // 公有属性
    public name: string;
    // 私有属性
    private age: number;
    // 构造方法
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    // 公有方法
    public eat() {
      console.log(`${this.name}在吃东西`);
    }
    // 受保护方法
    protected sleep() {
      console.log(`${this.name}在睡觉`);
    }
  }

  class Dog extends Animal3 {
    constructor(name: string, age: number) {
      super(name, age);
    }
    // 子类方法
    run() {
      console.log(`${this.name}在跑`);
      // 调用受保护方法
      this.sleep();
    }
  }
  console.log(new Animal3("旺财", 32).name); // 旺财
  // console.log(new Animal3("旺财", 32).age); // 属性“age”为私有属性，只能在类“Animal3”中访问
  new Dog("旺财", 32).eat(); // 旺财在吃东西
  new Dog("旺财", 32).run(); // 旺财在跑   旺财在睡觉

  // 5.readonly修饰符和参数属性
  class Person {
    // readonly name: string = "张三";
    // 使用参数属性，上面一行代码可 改为下面一行代码
    constructor(readonly name: string = "张三") {
      this.name = name;
    }
  }
  let per = new Person();
  console.log(per.name); // 张三
  let per2 = new Person("李四");
  console.log(per2.name); // 李四
  // per.name = "王五"; // 无法为“name”赋值，因为它是只读属性
  // console.log(per.name);

  // 6. 存取器
  // 不使用存取器
  class Person1 {
    fullName?: string;
  }
  let employee = new Person1();
  employee.fullName = "Bob Smith";
  if (employee.fullName) {
    console.log(employee.fullName); // Bob Smith
  }
  // 使用存取器
  class Person3 {
    firstName: string = "独孤";
    lastName: string = "求败";
    get fullName() {
      return this.firstName + "-" + this.lastName;
    }
    set fullName(value) {
      if (value) {
        let names = value.split("-");
        this.firstName = names[0];
        this.lastName = names[1];
      }
    }
  }
  const p = new Person3();
  console.log(p.fullName); // 独孤-求败
  p.firstName = "独孤";
  p.lastName = "天峰";
  console.log(p.fullName); // 独孤-天峰
  p.fullName = "逆天-唯我";
  console.log(p.firstName, p.lastName); // 逆天 唯我

  // 7. 静态属性
  class Person4 {
    name: string = "独孤天峰"; // 实例属性--非静态属性
    static title: string = "我是静态属性";
    // 静态方法
    static getTitle() {
      return Person4.title;
    }
  }
  // 通过实例访问非静态属性
  console.log(new Person4().name);
  // 通过类名访问静态属性
  console.log(Person4.title);
  // 通过类名调用静态方法
  console.log(Person4.getTitle());

  // 8. 抽象类
  abstract class Animal4 {
    // 抽象方法
    abstract eat(): void;
    // 普通方法
    run() {
      console.log("动物在奔跑");
    }
  }
  class Dog4 extends Animal4 {
    // 重写父类的抽象方法
    eat() {
      console.log("狗在吃狗粮");
    }
  }
  const dog = new Dog4();
  dog.eat(); // 狗在吃狗粮
  dog.run(); // 动物在奔跑
})();
