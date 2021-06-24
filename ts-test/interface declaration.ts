
// 头部添加 export , 强制转换成 ES module；避免全局变量声明**重复**问题
export { };

/*

https://www.cnblogs.com/xgqfrms/p/14797698.html

*/


interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}


// const userA: User = new UserAccount("Eric", 666);

const user: User = new UserAccount("Eric", 666);
// const user: User = new UserAccount("Eric", 666);

/*

Cannot redeclare block-scoped variable 'user'.ts(2451)
defined-types.ts(2, 7): 'user' was also declared here.

*/


// You can use interfaces to annotate parameters and return values to functions:

function getAdminUser(): User {
  //...
  return {
    name: 'test1',
    id: 1,
  };
}

// function getAdminUser(): User {
//   //...
//   return {
//     name: 'test1',
//     // id: 1,
//   };
// }

/*

Property 'id' is missing in type '{ name: string; }' but required in type 'User'.ts(2741)
interface declaration.ts(14, 3): 'id' is declared here.

*/

function deleteUser(user: User) {
  // ...
  console.log('user =', user);
}

deleteUser({
  name: 'test2',
  id: 2,
});

// deleteUser({
//   name: 'test',
// });


/*

Argument of type '{ name: string; }' is not assignable to parameter of type 'User'.
  Property 'id' is missing in type '{ name: string; }' but required in type 'User'.ts(2345)
interface declaration.ts(14, 3): 'id' is declared here.

*/
