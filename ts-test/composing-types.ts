// composing-types 类型组合

/*

Unions 联合类型 ？？？元组，枚举值，enum

*/

type MyBool = true | false;

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
  return obj.length;
}


function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
    // (parameter) obj: string
  } else {
    return obj;
    // (parameter) obj: string[]
  }
}




/*

Generics 范型

*/


type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
backpack.add('23');



