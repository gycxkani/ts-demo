(() => {
  // 1. boolean类型
  let isDone: boolean = false;
  isDone = true;
  // isDone = 1; // 不能将类型“number”分配给类型“boolean”。
  console.log(isDone);

  // 2. number 类型
  let decLiteral: number = 10; // 十进制
  let hexLiteral: number = 0xa; // 十六进制
  let binaryLiteral: number = 0b1010; // 二进制
  let octalLiteral: number = 0o12; // 八进制
  console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);

  //3. string类型
  let username: string = "尹天仇";
  username = "喜剧之王";
  // username=32;// 不能将类型“number”分配给类型“string”。
  let age: number = 32;
  const info: string = `我的名字是${username},今年${age}岁`;
  console.log(info);

  // 4. undefined和null类型
  let u: undefined = undefined;
  let n: null = null;
  console.log(u, n);

  // 5. 数组类型
  let listN: number[] = [1, 2, 3, 4, 5];
  let listS: string[] = ["a", "b", "c"];
  let list: Array<string> = ["周星驰", "李若彤"];
  console.log(listN, listS, list);

  // 6. 元组类型
  let x: [string, number];
  x = ["杨万里", 30];
  // x = [30, "杨万里"]; // 错误
  console.log(x[0].substring(1)); // 万里
  // console.log(x[1].substring(1));// 错误

  // 7. 枚举类型
  enum BillType {
    Repair,
    Check,
    Maintain,
    Other,
  }
  /**
   * 枚举数值默认从0开始，依次递增，也可以手动指定
   * 可以根据特定的名称得到对应的枚举数值，反之亦然
   */
  let billType: BillType = BillType.Repair;
  console.log(billType, BillType.Repair, BillType.Check, BillType.Maintain); // 0 0 1 2

  let billType2: string = BillType[0];
  console.log(billType2); // Repair

  // 8. any类型
  let notSure: any = 4;
  notSure = "maybe a string instead"; // 可以是一个字符串
  notSure = false; // 也可以是一个布尔值
  console.log(notSure);

  let listAny: any[] = [1, "maybe a string instead", false];
  listAny[2] = "地字第一号";
  console.log(listAny);

  // 9. void类型,表示没有任何类型
  function fn(): void {
    console.log("我是一个空函数");
    // return undefined; // ok undefined
    // return null; // 不能将类型“null”分配给类型“void”。
    // return 1; // 不能将类型“number”分配给类型“void”。
  }
  console.log(fn()); // undefined

  let unusable: void = undefined; // void类型的变量只能赋值undefined
  // unusable = null; // 不能将类型“null”分配给类型“void”
  // unusable = 1; // 不能将类型“number”分配给类型“void”
  // unusable = "string"; // 不能将类型“string”分配给类型“void”
  // unusable = true; // 不能将类型“boolean”分配给类型“void”
  console.log(unusable);

  // 10. symbol类型
  // 创建一个全局唯一的值
  const sym1 = Symbol();
  const sym2 = Symbol("key");
  const obj = {
    [sym1]: "value1",
    [sym2]: "value2",
  };
  console.log(obj[sym1]); // value1
  console.log(obj[sym2]); // value2

  // 11. object类型
  // declare function create(o: object | null):void;

  function create(o: object | null): void {
    console.log(o);
  }

  create({ age: 32 }); // ok
  create(null); // ok
  // create(32);// 类型“number”的参数不能赋给类型“object”的参数
  // create("string");// 类型“string”的参数不能赋给类型“object”的参数
  // create(true);// 类型“boolean”的参数不能赋给类型“object”的参数
  // create(undefined);// 类型“undefined”的参数不能赋给类型“object”的参数

  // 12. 联合类型
  function toStr(x: number | string): string {
    return x.toString();
  }
  console.log(toStr(123));
  console.log(toStr("abcdef"));

  function getLength(x: number | string): number {
    // return x.length; // 类型“number”上不存在属性“length”
    if (typeof x === "string") {
      return x.length;
    } else {
      return x.toString().length;
    }
  }

  console.log(getLength(123456)); // 6
  console.log(getLength("abcdef")); // 6

  // 13. 类型断言
  function getLength2(x: number | string): number {
    if ((x as string).length) {
      return (x as string).length;
    } else {
      return (x as number).toString().length;
    }
  }
  console.log(getLength2("我真爱你")); // 4
  console.log(getLength2(123456)); // 6

  // 14. 类型推断
  // 定义变量时赋值了，推断为对应的类型
  let val = 122;
  console.log(typeof val); // number
  // val="string";// 不能将类型“string”分配给类型“number”

  // 定义变量时没有赋值，推断为any类型
  let anyType;
  console.log(typeof anyType);// any undefined
  anyType = 123;
  anyType = "string";
})();
