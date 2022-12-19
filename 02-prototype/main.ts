// 传统方式创建类
// 导致代码的层次会变得复杂
class Animal {}

class Dog extends Animal {}
class Cat extends Animal {}

// 原型模式
// 1. 不是从类继承功能
// 2. 来自已经创建的对象
// 代码层次为扁平结构，这使得在对象之间共享功能更加容易

const zombie = {
  eatBrains() {
    return 'yum brain';
  }
};

const chad = Object.create(zombie, { name: { value: 'chad' } });

console.log(chad); // {name: 'chad'} 只看到属性，看不到方法

// 因JS会沿着原型链就近查找：
// 1. 如果存在，就直接调用
// 2. 如果不存在，则报错
chad.eatBrains(); // yum brain 方法可以调用

// 获取原型
const p = chad.__proto__; // 官方不推，原因：在非浏览器环境下，它的支持是可选的。参考：https://zh.javascript.info/prototype-methods#yuan-xing-jian-shi
const proto = Object.getPrototypeOf(chad); // 推荐
