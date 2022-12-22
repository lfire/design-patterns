/**
 * 构建者模式
 * 用于将复杂结构实例组装起来的模式
 */
  // 煎饼果子
class Jianbing {
  constructor(
    public pancake: string, // 煎饼果子名称
    public ketckup?: boolean, // 番茄酱
    public hotSauce?: boolean, // 辣椒酱
    public hotdog?: boolean, // 热狗
    public egg?: number, // 鸡蛋
    public lettuce?: boolean // 生菜
  ) {
  }

  /**
   * 每个需求都是一个方法，用来处理业务的逻辑
   * 当相应的方法执行完，需要将this返回
   * 以达到让用户选择是否定制其他选项（链式调用）
   */

  // 加番茄酱
  public addKetckup() {
    this.ketckup = true;
    return this;
  }

  // 加辣椒酱
  public addHotSauce() {
    this.hotSauce = true;
    return this;
  }

  // 加热狗
  public addHotdog() {
    this.hotdog = true;
    return this;
  }

  // 加鸡蛋
  public addEgg(n?: number) {
    this.egg = n ?? 1;
    return this;
  }

  // 加生菜
  public addLettuce() {
    this.lettuce = true;
    return this;
  }
}

// 不加辣椒酱的煎饼
const myJianbing = new Jianbing('no hot sauce');

// 通过链式调用，达到定制一份自己需要的煎饼果子（链式调用实现定制化需求）
myJianbing
  .addHotdog() // 加热狗
  .addKetckup() // 加番茄酱
  .addEgg(2) // 加两个鸡蛋
  .addLettuce() // 加生菜
;
