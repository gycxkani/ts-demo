(() => {
  // 1. 普通接口
  interface IPerson {
    readonly id: number; // 只读属性
    name: string;
    age: number;
    sex: string;
    skill?: string[]; // 可选属性
  }
  // 定义实现了IPerson接口的per对象
  const per: IPerson = {
    id: 1, // 只读属性
    name: "张三",
    age: 18,
    sex: "男",
    skill: ["吃饭", "睡觉", "打豆豆"], // 可选属性
    // wife: "香香公主", // 对象字面量只能指定已知属性，并且“wife”不在类型“IPerson”中
  };
  console.log(per);
  // per.id = 2; // 无法为“id”赋值，因为它是只读属性

  // 2. 函数接口
  interface ISearchData {
    (list: string[], name: string): string[]; // 调用签名
  }
  const search: ISearchData = (list: string[], name: string): string[] => {
    return list.filter((f) => {
      return f == name;
    });
  };
  console.log(search(["桃花", "仙人", "种桃树"], "桃花")); // ["桃花"]

  // 3. 类类型
  interface IAnimal {
    eat(): void;
  }
  interface IPerson2 {
    study(): void;
    sing(): void;
  }
  // 一个类可以实现一个接口
  class User implements IAnimal {
    eat(): void {
      console.log("大口吃肉");
    }
  }
  const user = new User();
  user.eat();

  // 一个类可以实现多个接口
  class User2 implements IAnimal, IPerson2 {
    eat(): void {
      console.log("大口吃肉");
    }
    study(): void {
      console.log("学习");
    }
    sing(): void {
      console.log("唱歌");
    }
  }
  const user2 = new User2();
  user2.study();
  
  // 一个接口可以继承多个接口
  interface IUser extends IAnimal, IPerson2 {
    name: string;
    age: number;
    run(): void;
  }
  class User3 implements IUser {
    name: string;
    age: number;
    eat(): void {
      console.log("大口吃肉");
    }
    study(): void {
      console.log("学习");
    }
    sing(): void {
      console.log("唱歌");
    }
    run(): void {
      console.log("跑步");
    }
  }
  const user3 = new User3();
  user3.name = "张三";
  console.log(user3.name);
  user3.run();
  user3.study();
})();
