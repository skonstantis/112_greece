var id = 0; 
class Alert{
  constructor(name)
  {
    this.id = id++;
    this.name = name;
  }
}

const dataArray = [];
dataArray.push(new Alert("Test0"));
dataArray.push(new Alert("Test1"));
dataArray.push(new Alert("Test2"));
dataArray.push(new Alert("Test3"));
dataArray.push(new Alert("Test4"));
dataArray.push(new Alert("Test5"));
dataArray.push(new Alert("Test6"));
dataArray.push(new Alert("Test7"));
dataArray.push(new Alert("Test8"));
dataArray.push(new Alert("Test9"));
dataArray.push(new Alert("Test10"));
dataArray.push(new Alert("Test11"));
dataArray.push(new Alert("Test12"));
dataArray.push(new Alert("Test13"));

export default dataArray;