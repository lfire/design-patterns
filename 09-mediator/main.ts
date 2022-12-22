/**
 * 中介者模式：Mediator
 * 是一种行为模式，使代码易于维护
 * 类似：交通指示灯坏了，就会有交警上路指挥一样。
 *
 * 以：飞机和跑道为例
 * 实例了很多飞机 和 很多跑道，为了保证安全不出事故，那就需要相互通信
 * 这种通信就是：many-to-many，多对多
 * 没有中介指挥，各人任意发声，信号混乱，很容易发生危险
 * 解决方案：
 * 由航空指挥中心（塔台）的调度员来做统一指挥，有问题，直接呼叫塔台，由塔台给出相应指令
 * 优势在于：
 * 将多个类的耦合进行解耦，减少类之间的依赖关系，但操作不当就会变得更为复杂。
 */

// 飞机
class Airplane {
  land() {}
}

// 跑道
class Runway {
  clear: boolean;
}

// 塔台
class Tower {
  clearForLanding(runway: Runway, plane: Airplane) {
    if (runway.clear) {
      console.log(`Plane ${plane} is clear for landing`);
    }
  }
}

// 跑道实例
const runway25A = new Runway();
const runway25B = new Runway();
const runway7 = new Runway();

// 飞机实例
const a = new Airplane();
const b = new Airplane();
const c = new Airplane();

// 另一个例子
import express from 'express';
const app = express();

// 中间件：
// 可以接收传入的请求，以及发出的响应
// 每次请求都会经过中间件，处理完相应的中间件逻辑后，再发出合适的响应
function logger(req, res, next) {
  console.log('Request Type:: ', req.method);
  next();
}

// 注册使用中间件
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/about', (req, res) => {
  res.send('About me');
});
