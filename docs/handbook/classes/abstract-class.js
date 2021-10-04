/*

abstract-class.ts

https://www.typescriptlang.org/play

https://www.typescriptlang.org/play?#code/PTAEl6jRDGMbx8CgEMBGBnALgJ3gY1aLAbeZZUAEQFMAHedVAW3IDtcBvWUUEUQXCVBpzUDRlRvAaAEI0AaKoBh-wEPKgB1NAejqByA3Z4A9ozToArjhXoAFJU2J8ASyyghDAFygNJxgHMAlGw4cQygL7KugTtNAqzbKlOj2qABywuR6TjYAbiomACaublhqyCr45AB0+CoOegDkFNS0DMwWkTaFoADUoKgAFibI2ZbkTgDcXj5gUAGAo-qA3hmAFOqAfLaA+K7QgLRygHnagA3Oykga2LjBoQCy5OSo9gUxoPFJ3d6wsFyT0KDkAB6oTIkkUHAERCQAglhpmsx7JTT0Ji4W73RiPMhUAHlVjKNLqDDaVC6aKgFLuMDjKaAELdACHmgAIEwC-ijJpsNAMAxgApXWyaSjkfROZQcZDU2lFT7fX6OUDwMGgd6aRImXaOQpdHro0CYmYLfqBDjrZhbHZ7aJxBLJBmqdSZHJ5AqFAAqjXIvK+Kh+QocENKgIqDB2JHI2EaoA2akS8AAnlzcABGAAMwmyIu6HG84sAMuQQSABUCAWDlABraI2UDiYtPg9wASlRdKhkCrDmq0ZqMllcvkigBxVOYC1c03mvagdDZ2itbJB+mh2CeIA

*/



"use strict";
// 抽象类
class Department {
    // 初始化name成员，参数属性
    constructor(name) {
        this.name = name;
        //
    }
    // 方法
    printName() {
        console.log('Department name: ' + this.name);
    }
}
// 派生类 extends 抽象类
class AccountingDepartment extends Department {
    constructor() {
        // 在派生类的构造函数中必须调用 super()
        super('Accounting and Auditing');
    }
    // 在派生类中实现抽象方法
    printMeeting() {
        console.log('The Accounting Department meets each Monday at 10am.');
    }
    // ❌ 抽象方法 不存在
    generateReports() {
        console.log('Generating accounting reports...');
    }
}
