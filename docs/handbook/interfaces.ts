/*

https://www.typescriptlang.org/docs/handbook/interfaces.html

One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural subtyping”.

*/
export {};

/*

function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

*/
interface LabeledValue {
  label: string;
}

// 1. 使用 interface 描述参数的类型
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

// 2. Optional Properties / 可选属性
interface SquareConfig {
  color?: string;
  width?: number;
}

// ：返回值 {} / void
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    // newSquare.color = config.color;
    newSquare.color = config.calor;
    // Property 'calor' does not exist on type 'SquareConfig'. Did you mean 'color'?ts(2551)
    // interfaces.ts(35, 3): 'color' is declared here.
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({ color: "black" });

// 3. Readonly properties / 只读属性

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
p1.x = 5;
// Cannot assign to 'x' because it is a read-only property.ts(2540)

/*

interface Point {
    readonly x: number;
    readonly y: number;
}

declare let p1: Point;

*/


// ReadonlyArray<T>  same as Array<T> 泛型

let arr: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = arr;

ro[0] = 12;
// Index signature in type 'readonly number[]' only permits reading.ts(2542)

ro.push(5);
// Property 'push' does not exist on type 'readonly number[]'.ts(2339)

ro.length = 100;
// Cannot assign to 'length' because it is a read-only property.ts(2540)
// (property) ReadonlyArray<number>.length: any

arr = ro;
// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'.ts(4104)


/*


declare let arr: number[];
declare let ro: ReadonlyArray<number>;

*/
