(() => {
  // 定义人的接口
  interface IPerson {
   readonly id: number;// 只读属性
    name: string;
    age: number;
    sex: string;
    skill?: string[];// 可选属性
  }
  // 定义实现了IPerson接口的per对象
  const per: IPerson = {
    id: 1,
    name: "张三",
    age: 18,
    sex: "男",
    skill: ["吃饭", "睡觉", "打豆豆"],
  };
  console.log(per);
})();
