/**
 * 单例模式
 * 一个类只能创建一个对象，并且在程序的任何地方都能够访问到该对象
 */
class Settings {
  // 创建一个静态实例，用于存储实例对象
  static instance: Settings;
  public readonly mode = 'dark';

  // 设置私有的构造函数，这样就不能在外部使用new实例化
  // prevent new with private constructor
  private constructor() {

  }

  // 用于获取实例，逻辑是：
  // 检查实例是否创建
  // 1. 如果没有，则创建实例；
  // 2. 如果有，则直接返回该实例；
  static getInstance(): Settings {
    if (!Settings.instance) {
      Settings.instance = new Settings();
    }
    return Settings.instance;
  }
}

// const settings = new Settings();
const settings = Settings.getInstance();
