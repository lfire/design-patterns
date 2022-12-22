/**
 * 观察者模式：observer
 * 又称发布-订阅模式
 * 允许多个对象订阅由另一个对象广播的事件。
 * one-to-many 一对多关系
 *
 * 在程序开发中，如Firebase采用的就是观察者模式，
 * 当服务器上的数据发生变化时，所有订阅的客户端都会收到通知，并自动更新为最新数据
 */
import { Subject } from 'rxjs';

// Subject 类用于广播内容
const news = new Subject();

// 添加多个订阅，Subjects 将跟踪这些订阅，并且在数据发生变化时，调用其回调函数
const tv1 = news.subscribe(v => console.log(`${v} via Den TV`));
const tv2 = news.subscribe(v => console.log(`${v} via Bat-cave TV`));
const tv3 = news.subscribe(v => console.log(`${v} via Airport TV`));

// 发布广播消息
news.next('song');
// song via Den TV
// song via Bat-cave TV
// song via Airport TV
