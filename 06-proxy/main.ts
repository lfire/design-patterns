/**
 * 代理模式：proxy
 * 在真实对象执行某些操作前后附加一些额外的功能
 * 如同房屋中介在租房过程中所起的作用类似
 * 在编程中，可以用代理替代目标对象
 *
 * 为什么这样做？
 * 如 vue 中的响应式
 *
 * 当对象数据量大，并且用不上所有内容时，通过拷贝性能是很低的；
 * 所以可以通过代理模式，代理需要用的属性，性能则可以大大提高；
 * 如果需要访问完整属性，代理还可以重新从数据库拉取完整数据
 */
const original = { name: 'bob' };

const reactive = new Proxy(original, {
  // get & set 方法
  // 取值时触发
  get(target, key) {
    console.log('Tracking: ', key);
    return target[key];
  },
  // 赋值时触发
  // 做两件事：更新值 & 更新UI
  set(target, key, value) {
    console.log('Updating UI ...');
    return Reflect.set(target, key, value);
  }
});

// 当取值和赋值操作的同时，还能触发其他的逻辑
console.log(reactive.name); // Tracking: name
reactive.name = 'Tom'; // Updating UI ...
