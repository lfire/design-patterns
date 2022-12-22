/**
 * 工厂模式：提供了一种创建对象的最佳方式。
 * 根据传递的参数，来决定最终返回什么样的对象
 */
class IOSButton {}
class AndroidButton {}

// without factory
// 不用工厂模式，使用三元运算符
let os1 = 'ios';
let os2 = 'android';
const btn1 = os1 === 'ios' ? new IOSButton() : new AndroidButton();
const btn2 = os2 === 'ios' ? new IOSButton() : new AndroidButton();

// with factory
// 抽象一个类，职责是：
// 返回合适的实例，即提高内聚，又降低耦合
class ButtonFactory {
  createButton(os: string) {
    if (os === 'ios') {
      return new IOSButton();
    }
    return new AndroidButton();
  }
}

const btnFactory = new ButtonFactory();
const btn11 = btnFactory.createButton(os1);
const btn22 = btnFactory.createButton(os2);

