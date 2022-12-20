class IOSButton {}
class AndroidButton {}

// without factory
// 使用三元运算符
let os1 = 'ios';
let os2 = 'android';
const btn1 = os1 === 'ios' ? new IOSButton() : new AndroidButton()
const btn2 = os2 === 'ios' ? new IOSButton() : new AndroidButton()

// with factory
// 提高内聚，降低耦合
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

