/**
 * 窗口模式：facade
 * 将多个类封装起来，组织好类之间的关联关系与方法的调用关系
 * 最后对外只提供一个简单的方法来使用，如：
 * 一个房屋，其中包括很多复杂的管理工程，例如：水、电、燃气等
 * 1. 在两个系统中配置开关接口，包括复杂的业务逻辑
 * 2. 居住在房子里的人，不需要知道复杂工程是如何构建的
 * 3. 只需要知道在什么样的情况下，打开或关闭这些功能
 *
 * 所以窗口模式就是将类中复杂业务逻辑隐藏，只暴露简单方法供外部访问
 */

// 管道系统
class PlumbingSystem {
  // low level access to plumbing system（隐藏复杂业务逻辑）
  /**
   * 设定压力
   * @param v
   */
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

// 电力系统
class ElectricalSystem {
  // low level access to electrical system（隐藏复杂业务逻辑）
  /**
   * 设定电压
   * @param v
   */
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();
    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.electrical.turnOff();
    this.plumbing.turnOff();
  }
}

const h = new House();
h.turnOnSystems();
h.shutDown();
