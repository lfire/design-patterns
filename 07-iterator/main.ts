/**
 * 迭代器模式：Iterator
 * 将一个有序集合，按顺序或规律遍历
 */

// JS 中的 for..of
const fruits = ['apple', 'banana', 'orange'];

for (const f of fruits) {
  console.log(f);
}

// 但 JS 中没有类似 range(1, 10) 遍历范围函数的方法
// 实现一个
function range(start: number, end: number, step: number = 1) {
  // 通过定义一个返回带有 next 函数的对象来实现
  return {
    // 实用小技巧：加入 symbol 迭代器
    // 这样就可以在 for..of 中配合使用range方法
    // 参考：https://zh.javascript.info/iterable
    [Symbol.iterator]() {
      return this;
    },
    next() {
      // 设定条件，如果 start 小于 end，就递增 start
      if (start < end) {
        start += step;
        return { value: start, done: false }; // 返回当前值及表示未完成迭代的标记值
      }
      return {
        value: end, // 迭代器的当前值
        done: true, // 表示遍历是否完成
      };
    }
  };
}

for (const n of range(0, 10, 2)) {
  console.log(n); // 2 4 6 8 10
}
