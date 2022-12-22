/**
 * 状态模式：state
 * 允许一个对象在状态改变的时候同时改变行为
 */

/**
 * 常规实现
 * 当前逻辑中含有多分支的条件语句
 * 且这些分支依赖于该对象的状态
 * ————条件地狱
 * 代码扩展性很差
 */
class Human1 {
  think(mood) {
    // switch hell
    switch (mood) {
      case 'happy':
        return 'I am happy!';
      case 'sad':
        return 'I am sad!';
      default:
        return 'I am neutral!';
    }
  }
}

// =================================================

/**
 * 状态模式
 * 将每一个状态分别放在一个独立的类中
 * 然后根据状态的不同提供不同的功能
 */

// state 基类
interface State {
  think(): string;
}

// 状态子类
class HappyState implements State {
  think(): string {
    return 'I am happy';
  }
}

// 状态子类
class SadeState implements State {
  think(): string {
    return 'I am sad';
  }
}

// 主类，同样实现 think 方法
class Human implements State {
  // 将state创建为一个属性
  state: State;

  constructor() {
    // 默认状态，同时也可以通过外部传入默认值
    this.state = new HappyState();
  }

  // 相应的 think 逻辑，转调到状态子类中
  think() {
    return this.state.think();
  }

  // 状态切换逻辑
  // 状态切换时，相应的行为逻辑（think）也一起改变
  changeState(state) {
    this.state = state;
  }
}

// 该封装好处还有：
// 当有新的状态加入时，只需要再添加一个相应的状态子类即可，原来已有的业务逻辑不需要修改
// 扩展性极高

// 新加状态子类
class NeutralState implements State {
  think(): string {
    return 'I am neutral';
  }
}
