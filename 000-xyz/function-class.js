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

function Student(name, age) {
  this.name = name;
  this.age = age;
  this.getAge = function getAge() {
    return this.age;
  };
  this.getName = function () {
    return this.name;
  }
}

// prototype method === class property methods ??? class static method
Student.prototype.getInfos = function () {
  return `Student infos: name = ${this.name}, age = ${this.age}`;
}

const s1 = new Student('elite', 23);

log(s1.getInfos())
// log(Student.getInfos());
// Uncaught TypeError: Student.getInfos is not a function

log(s1.getAge())
log(s1.getName())

// log(Student.getAge())
// log(Student.getName())
// Uncaught TypeError: Student.getAge is not a function
// Uncaught TypeError: Student.getName is not a function
