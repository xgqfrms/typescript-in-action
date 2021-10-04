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

*/


