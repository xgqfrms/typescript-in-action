
const user = {
  name: "Hayes",
  id: 0,
};

// interface， 自定义类型
interface User {
  name: string;
  id: number;
};


const user1: User = {
  name: "Eric",
  id: 0o7,
  // id: 007,
};

/*

Octal literals are not allowed in strict mode.ts(1121)
Octal literals are not available when targeting ECMAScript 5 and higher. Use the syntax '0o7'.ts(1085)

*/


const user2: User = {
  name: "Eric",
  // id: 0x7,
  id: 0X07,
  // id: 0XG7,
  // id: '007',
};


/*

Hexadecimal digit expected.ts(1125)

*/

/*

Type 'string' is not assignable to type 'number'.ts(2322)
defined-types.ts(9, 3): The expected type comes from property 'id' which is declared here on type 'User'

*/
