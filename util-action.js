function save (node, props) {
  const saved = props.reduce((all, prop) => {
    all[prop] = node[prop];
    return all;
  }, {});
  return cc.callFunc(() => {
    for(let prop in saved) {
      node[prop] = saved[prop];
    }
  });
}

function promisify (actionFn, fnName) {
  return function () {
    const node = arguments[0];
    var actionArray = actionFn.apply(null, arguments);
    return new Promise((resolve, reject) => {
      if (!node) return reject();
      actionArray.push(cc.callFunc(resolve))
      const seq = cc[fnName].apply(cc, actionArray);
      node.runAction(seq);
    })
  }
}

function wobble_ (node, degree = 15, duration = 0.1, times = 2) {
  const restore = save(node, ['y','anchorY', 'rotationX','rotationY']);
  const a1 = cc.rotateTo(duration, degree, degree);
  const a2 = cc.rotateTo(duration, -degree, -degree);

  const init = cc.callFunc(() => {
    node.anchorY = -1;
    node.y -= 1.5 * node.height;
  });

  return [init, cc.repeat(cc.sequence(a1, a2), times), restore]
}
const wobble = promisify(wobble_, 'sequence');

function shake1_ (node, amplitudeX = 20, amplitudeY = 0, duration = 0.1, times = 2) {
  const restore = save(node, ['x']);
  const a1 = cc.moveBy(duration, +amplitudeX, +amplitudeY);
  const a2 = cc.moveBy(duration, -amplitudeX, -amplitudeY);
  return [cc.repeat(cc.sequence(a1, a2), times), restore]
}
const shake1 = promisify(shake1_, 'sequence');

function zoomIn0_ (node, initScale, scaleUpDuration, scaleUpTo, bounceDuration) {
  const restore = save(node, ['scale']);
  node.scale = initScale;
  const a1 = cc.scaleTo(scaleUpDuration, scaleUpTo, scaleUpTo);
  const a2 = cc.scaleTo(bounceDuration, 1, 1);
  return [a1, a2, restore];
}
const zoomIn0 = promisify(zoomIn0_, 'sequence');

function fadeIn0_ (node, dir, duration) {
  node.y += dir * node.height;
  node.opacity = 0
  const a1 = cc.fadeIn(duration);
  const a2 = cc.moveBy(duration, 0, -dir * node.height);
  return [a1, a2];
}
const fadeIn0 = promisify(fadeIn0_, 'spawn');

export default {
  //low level apis
  saveProps: save,
  shake1: shake1,
  zoomIn0,
  fadeIn0,

  //return actions
  shake1_,
  zoomIn0_,
  wobble_,
  //high level apis, return promise
  wobble: promisify(wobble_, 'sequence'),
  shakeH (node, ax = 20, dur = 0.2, times = 2) {
    return shake1.call(null, node, ax, 0, dur, times);
  },
  shakeV (node, ay = 20, dur = 0.2, times = 2) {
    return shake1.call(null, node, 0, ay, dur, times);
  },
  zoomIn (node, dur = 0.5, isBounce = true) {
    return zoomIn0(node, 0.5, 0.2, isBounce ? 1.2 : 1, 0.1);
  },
  fadeInDown (node, duration = 0.5) {
    return fadeIn0(node, 1, duration);
  },
  fadeInUp (node, duration = 0.5) {
    return fadeIn0(node, -1, duration);
  }
}