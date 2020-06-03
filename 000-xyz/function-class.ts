"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-06-03
 * @modified
 *
 * @description TypeScript in Action
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

interface Person {
  name: string,
  age: number,
}

// function Student(this: any, { name, age }: Person): void {
//   this.name = name;
//   this.age = age;
// }

// function Student(this: any, name: Person["name"], age: Person["age"]): void {
//   this.name = name;
//   this.age = age;
// }

// function Student(name: any, age: any): void {
//   // 'this' implicitly has type 'any' because it does not have a type annotation.
//   this.name = name;
//   this.age = age;
// }

function Student(this: any, name: string, age: number): void {
  this.name = name;
  this.age = age;
}

Student.prototype.getInfos = function () {
  return `Student infos: name = ${this.name}, age = ${this.age}`;
}


const s1 = new (Student as any)('elite', 23);

log(s1.getInfos())

// let s1: Person = new Student('elite', 23);
// const s1 = new Student('elite', 23);
// 'new' expression, whose target lacks a construct signature, implicitly has an 'any' type.

/*

Duplicate function implementation.

Cannot redeclare block-scoped variable 's1'.

*/
