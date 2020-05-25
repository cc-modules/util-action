/**
 * 保存node的属性，返回一个还原的action
 *
 * @export
 * @param {cc.Node} node
 * @param {string[]} props
 * @returns {cc.ActionInstant}
 */
export function saveProps(node: cc.Node, props: string[]): cc.ActionInstant;
/**
 * 震动的动画Promise版本
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [amplitudeX=20]
 * @param {number} [amplitudeY=0]
 * @param {number} [duration=0.1]
 * @param {number} [times=2]
 * @returns {Promise<void>}
 */
export function shake1(node: cc.Node, amplitudeX: number = 20, amplitudeY: number = 0, duration: number = 0.1, times = 2): Promise<void>;
/**
 * 放大动画Promise版本
 *
 * @export
 * @param {cc.Node} node
 * @param {number} initScale
 * @param {number} scaleUpDuration
 * @param {number} scaleUpTo
 * @param {number} bounceDuration
 * @returns {Promise<void>}
 */
export function zoomIn0(node: cc.Node, initScale: number, scaleUpDuration: number, scaleUpTo: number, bounceDuration: number): Promise<void>;
/**
 * 淡入
 *
 * @export
 * @param {cc.Node} node
 * @param {number} dir
 * @param {number} duration
 * @param {number} distance
 * @returns {Promise<void>}
 */
export function fadeIn0(node: cc.Node, dir: number, duration: number, distance: number): Promise<void>;
/**
 * 淡出Promise版本
 *
 * @export
 * @param {cc.Node} node
 * @param {number} dir
 * @param {number} duration
 * @param {number} distance
 * @returns {Promise<void>}
 */
export function fadeOut0(node: cc.Node, dir: number, duration: number, distance: number): Promise<void>;
/**
 * 震动的动画
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [amplitudeX=20]
 * @param {number} [amplitudeY=0]
 * @param {number} [duration=0.1]
 * @param {number} [times=2]
 * @returns {cc.Action[]}
 */
export function shake1_(node: cc.Node, amplitudeX: number = 20, amplitudeY: number = 0, duration: number = 0.1, times = 2): cc.Action[];
/**
 * 放大动画
 *
 * @export
 * @param {cc.Node} node
 * @param {number} initScale
 * @param {number} scaleUpDuration
 * @param {number} scaleUpTo
 * @param {number} bounceDuration
 * @returns {cc.Action[]}
 */
export function zoomIn0_(node: cc.Node, initScale: number, scaleUpDuration: number, scaleUpTo: number, bounceDuration: number): cc.Action[];
/**
 * 摇摆动画
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [degree=15]
 * @param {number} [duration=0.1]
 * @param {number} [times=2]
 * @returns {cc.Action[]}
 */
export function wobble_(node: cc.Node, degree: number = 15, duration: number = 0.1, times: number = 2): cc.Action[];
/**
 * 先淡出，等待，再淡入
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [inDur=0.5]
 * @param {number} [stayDur=0.5]
 * @param {*} [outDur=inDur]
 * @returns {cc.Action[]}
 */
export function flash_(node: cc.Node, inDur: number = 0.5, stayDur: number = 0.5, outDur: number = inDur): cc.Action[];
/**
 * 移动到指定坐标
 *
 * @export
 * @param {cc.Node} node
 * @param {number} x
 * @param {number} y
 * @param {number} duration
 * @returns {cc.Action[]}
 */
export function moveTo_(node: cc.Node, x: number, y: number, duration: number): cc.Action[];
/**
 * 移动指定的距离
 *
 * @export
 * @param {cc.Node} node
 * @param {number} x
 * @param {number} y
 * @param {number} duration
 * @returns {cc.Action[]}
 */
export function moveBy_(node: cc.Node, x: number, y: number, duration: number): cc.Action[];
/**
 *
 *
 * @export等待指定时间
 * @param {cc.Node} node
 * @param {number} duration
 * @returns {cc.Action[]}
 */
export function wait_(node: cc.Node, duration: number): cc.Action[];
/**
 * 摇摆动画
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [degree=15]
 * @param {number} [duration=0.1]
 * @param {number} [times=2]
 * @returns {Promise<void>}
 */
export function wobble(node: cc.Node, degree: number = 15, duration: number = 0.1, times: number = 2): Promise<void>;
/**
 * 先淡出，等待，再淡入
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [inDur=0.5]
 * @param {number} [stayDur=0.5]
 * @param {*} [outDur=inDur]
 * @returns {cc.Action[]}
 */
export function flash(node: cc.Node, inDur: number = 0.5, stayDur: number = 0.5, outDur: number = inDur): Promise<void>;
/**
 * 水平震动
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [ax=20]
 * @param {number} [dur=0.2]
 * @param {number} [times=2]
 * @returns {Promise<void>}
 */
export function shakeH(node: cc.Node, ax = 20, dur = 0.2, times = 2): Promise<void>;
/**
 *
 *
 * @export垂直震动
 * @param {cc.Node} node
 * @param {number} [ay=20]
 * @param {number} [dur=0.2]
 * @param {number} [times=2]
 * @returns {Promise<void>}
 */
export function shakeV(node: cc.Node, ay: number = 20, dur: number = 0.2, times: number = 2): Promise<void>;
/**
 * 放大
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [dur=0.5]
 * @param {boolean} [isBounce=true]
 * @returns {Promise<void>}
 */
export function zoomIn(node: cc.Node, dur: number = 0.5, isBounce: boolean = true): Promise<void>;
/**
 * 淡入
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function fadeIn(node: cc.Node, duration: number = 0.5): Promise<void>;
/**
 * 淡出
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function fadeOut(node: cc.Node, duration: number = 0.5): Promise<void>;
/**
 * 淡入，从上移动到下
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function fadeInDown(node: cc.Node, duration: number = 0.5): Promise<void>;
/**
 * 淡入，从下移动到上
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function fadeInUp(node: cc.Node, duration: number = 0.5): Promise<void>;
/**
 * 移动到指定坐标
 *
 * @export
 * @param {cc.Node} node
 * @param {number} x
 * @param {number} y
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function moveTo(node: cc.Node, x: number, y: number, duration: number = 0.5): Promise<void>;
/**
 * 移动指定距离
 *
 * @export
 * @param {cc.Node} node
 * @param {number} x
 * @param {number} y
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function moveBy(node: cc.Node, x: number, y: number, duration: number = 0.5): Promise<void>;
/**
 * 等待指定时间
 *
 * @export
 * @param {cc.Node} node
 * @param {number} [duration=0.5]
 * @returns {Promise<void>}
 */
export function wait(node: cc.Node, duration: number = 0.5): Promise<void>;
/**
 * action给node注入动画函数
 *
 * @export
 * @param {(cc.Noce | cc.Node[])} nodes
 * @param {string} [prefix='']
 */
export function $inject(nodes: cc.Node | cc.Node[], prefix: string = '');

/**
 * [NodeEx description]
 */
export interface NodeEx extends cc.Node {
  /**
   * 摇摆动画
   *
   * @param {number} [degree=15]
   * @param {number} [duration=0.1]
   * @param {number} [times=2]
   * @returns {Promise<void>}
   */
  wobble(degree: number = 15, duration: number = 0.1, times: number = 2): Promise<void>;
  /**
   * 先淡出，等待，再淡入
   *
   * @param {number} [inDur=0.5]
   * @param {number} [stayDur=0.5]
   * @param {*} [outDur=inDur]
   * @returns {cc.Action[]}
   */
  flash(inDur: number = 0.5, stayDur: number = 0.5, outDur: number = inDur): Promise<void>;
  /**
   * 水平震动
   *
   * @param {number} [ax=20]
   * @param {number} [dur=0.2]
   * @param {number} [times=2]
   * @returns {Promise<void>}
   */
  shakeH(ax = 20, dur = 0.2, times = 2): Promise<void>;
  /**
   *
   * 垂直震动
   * @param {number} [ay=20]
   * @param {number} [dur=0.2]
   * @param {number} [times=2]
   * @returns {Promise<void>}
   */
  shakeV(ay: number = 20, dur: number = 0.2, times: number = 2): Promise<void>;
  /**
   * 放大
   *
   * @param {number} [dur=0.5]
   * @param {boolean} [isBounce=true]
   * @returns {Promise<void>}
   */
  zoomIn(dur: number = 0.5, isBounce: boolean = true): Promise<void>;
  /**
   * 淡入
   *
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  fadeIn(duration: number = 0.5): Promise<void>;
  /**
   * 淡出
   *
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  fadeOut(duration: number = 0.5): Promise<void>;
  /**
   * 淡入，从上移动到下
   *
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  fadeInDown(duration: number = 0.5): Promise<void>;
  /**
   * 淡入，从下移动到上
   *
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  fadeInUp(duration: number = 0.5): Promise<void>;
  /**
   * 移动到指定坐标
   *
   * @param {number} x
   * @param {number} y
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  moveTo(x: number, y: number, duration: number = 0.5): Promise<void>;
  /**
   * 移动指定距离
   *
   * @param {number} x
   * @param {number} y
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  moveBy(x: number, y: number, duration: number = 0.5): Promise<void>;
  /**
   * 等待指定时间
   *
   * @param {number} [duration=0.5]
   * @returns {Promise<void>}
   */
  wait(duration: number = 0.5): Promise<void>;
}