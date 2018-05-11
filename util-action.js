function save (node, props, cb) {
  const saved = props.reduce((all, prop) => {
    all[prop] = node[prop];
    return all;
  }, {});
  return cc.callFunc(() => {
    for(let prop in saved) {
      node[prop] = saved[prop];
    }
    cb && cb();
  });
}

function wobble(node, degree = 15, duration = 0.1, times = 2) {
  return new Promise((resolve, reject) => {
    if (!node) return reject();
    const restore = save(node, ['y','anchorY', 'rotationX','rotationY'], resolve);

    const a1 = cc.rotateTo(duration, degree, degree);
    const a2 = cc.rotateTo(duration, -degree, -degree);

    const init = cc.callFunc(() => {
      node.anchorY = -1;
      node.y -= 1.5 * node.height;
    });

    const seq = cc.sequence(init, cc.repeat(cc.sequence(a1, a2), times), restore);
    node.runAction(seq);
  });
}

function shake1 (node, amplitudeX = 20, amplitudeY = 0, duration = 0.1, times = 2) {
  return new Promise((resolve, reject) => {
    if (!node) return reject();
    const restore = save(node, ['x'], resolve);
    const a1 = cc.moveBy(duration, +amplitudeX, +amplitudeY);
    const a2 = cc.moveBy(duration, -amplitudeX, -amplitudeY);
    const seq = cc.sequence(cc.repeat(cc.sequence(a1, a2), times), restore);
    node.runAction(seq);
  });
}

function zoomIn0 (node, initScale, scaleUpDuration, scaleUpTo, bounceDuration) {
  return new Promise((resolve, reject) => {
    if (!node) return reject();
    const restore = save(node, ['scale'], resolve);
    node.scale = initScale;
    const a1 = cc.scaleTo(scaleUpDuration, scaleUpTo, scaleUpTo);
    const a2 = cc.scaleTo(bounceDuration, 1, 1);
    const seq = cc.sequence(a1, a2, restore);
    node.runAction(seq);
  });
}

function fadeIn0 (node, dir, duration) {
  return new Promise ((resolve, reject) => {
    if (!node) return reject();
    node.y += dir * node.height;
    node.opacity = 0

    const a1 = cc.fadeIn(duration);
    const a2 = cc.moveBy(duration, 0, -dir * node.height);
    const seq = cc.spawn(a1, a2);
    node.runAction(seq);
  });
}

export default {
  //low level apis
  saveProps: save,
  shake1: shake1,
  zoomIn0,

  //exported apis
  wobble: wobble,
  shakeH (node, ax, dur, times) {
    return shake1.call(null, node, ax, 0, dur, times);
  },
  shakeV (node, ay, dur, times) {
    return shake1.call(null, node, 0, ay, dur, times);
  },
  zoomIn (node, dur, isBounce) {
    return zoomIn0(node, 0.5, 0.2, isBounce ? 1.2 : 1, 0.1);
  },
  fadeInDown (node, duration) {
    return fadeIn0(node, 1, duration);
  },
  fadeInUp (node, duration) {
    return fadeIn0(node, -1, duration);
  }
}