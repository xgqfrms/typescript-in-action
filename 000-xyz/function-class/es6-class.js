"use strict";

/**
 *
 * @author xgqfrms
 * @license MIT
 * @copyright xgqfrms
 * @created 2020-06-04
 * @modified
 *
 * @description ES6 class
 * @augments
 * @example
 * @link
 *
 */

const log = console.log;

// ES6 class
class Person {
  // ES6 constructor method
  constructor(name, age) {
    // ES6 property
    this.uuid = `${name}_` + new Date().getTime();
    this.name = name;
    this.age = age;
  }
  // ES6 instance method
  getName() {
    const name = `name: ${this.name}`;
    log(name)
    return name;
  };
  getAge() {
    const age = `age: ${this.age}`;
    log(age)
    return age;
  };
  // static method
  static getUUID(person) {
    // const uuid = this.uuid;
    const uuid = person.uuid;
    log(uuid)
    return uuid;
  }
  getInfos() {
    const infos = `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
    log(`infos`, infos)
    return infos;
  }
}

// ES6 prototype property
Person.prototype.gender = `man`;

// ES6 prototype method
// Person.prototype.getInfos = function() {
//   const infos = `name: ${this.name}, age: ${this.age}, gender: ${this.gender}`;
//   log(`infos`, infos)
//   return infos;
// }

const p = new Person(`elite`, 23);

// call instance method
p.getName();

// call prototype method
p.getInfos();

// call static method
// Person.getUUID();
Person.getUUID(p);

// name: elite
// infos name: elite, age: 23, gender: man
// undefined
// elite_1591280013432


// append after instance & ES6 prototype method
Person.prototype.getGender = function(){
  const gender = `gender: ${this.gender}`;
  log(gender)
  return gender;
}

p.getGender();
// gender: man


// append after instance & ES6 static method
Person.getSex = function(person){
  const sex = `sex: ${person.gender}`;
  log(sex)
  return sex;
}

Person.getSex(p);
// sex: man
