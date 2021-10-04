/*

抽象类作为其他派生类的基类使用，它们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节, 但是抽象方法必须在派生类中实现。

abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

*/

abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log('roaming the earch ...');
  }
}



/*

抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 

和接口方法相似，两者都定义签名但不包含方法体，

然而，抽象方法必须包含 abstract 关键字并且可以包含访问修饰符；

*/

// 抽象类
abstract class Department {
  // 初始化name成员，参数属性
  constructor(public name: string){
    //
  }
  // 方法
  printName(): void{
    console.log('Department name: ' + this.name);
  }
  // 抽象方法必须在派生类中实现
  abstract printMeeting(): void;
}


// 派生类 extends 抽象类
class AccountingDepartment extends Department {
  constructor() {
    // 在派生类的构造函数中必须调用 super()
    super('Accounting and Auditing');
  }
  // 在派生类中实现抽象方法
  printMeeting(): void{
    console.log('The Accounting Department meets each Monday at 10am.');
  }
  // ❌ 抽象方法 不存在
  generateReports(): void{
    console.log('Generating accounting reports...')
  }
}

// ✅ 允许创建一个对抽象类的引用
const department: Department;

// ❌ 错误：不能创建一个抽象类的实例
department = new Department();

// ✅ 允许对一个抽象子类(派生类)进行实例化和赋值
department = new AccountingDepartment();

// 调用抽象类的方法
department.printName();
// 调用抽象类的抽象方法的实现
department.printMeeting();

// 错误：方法在声明的抽象类种不存在
department.generateReports();





/*

TypeScript  的访问修饰符有三个，分别是 public、private、protected 。

TypeScript 的默认访问修饰符是 public。

1）public 声明的属性和方法在类的内部和外部均能访问到。

2）protected 声明的方法和属性只能在类的内部和其子类能访问。

3）private 声明的方法和属性只能在其类的内部访问。

*/
