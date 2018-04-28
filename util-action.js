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

function shake0(node, degree = 15, duration = 0.1, times = 2) {
  if (!node) return;
  const restore = save(node, ['y','anchorY', 'rotationX','rotationY']);

  const a1 = cc.rotateTo(duration, degree, degree);
  const a2 = cc.rotateTo(duration, -degree, -degree);

  const init = cc.callFunc(() => {
    node.anchorY = -1;
    node.y -= 1.5 * node.height;
  });

  const seq = cc.sequence(init, cc.repeat(cc.sequence(a1, a2), times), restore);
  node.runAction(seq);
}

function shake1 (node, amplitudeX = 20, amplitudeY = 0, duration = 0.1, times = 2) {
  if (!node) return;
  const restore = save(node, ['x']);
  const a1 = cc.moveBy(duration, +amplitudeX, +amplitudeY);
  const a2 = cc.moveBy(duration, -amplitudeX, -amplitudeY);
  const seq = cc.sequence(cc.repeat(cc.sequence(a1, a2), times), restore);
  node.runAction(seq);
}

function zoomOut0 (node, initScale, scaleUpDuration, scaleUpTo, bounceDuration) {
  if (!node) return;
  const restore = save(node, ['scale']);
  node.scale = initScale;
  const a1 = cc.scaleTo(scaleUpDuration, scaleUpTo, scaleUpTo);
  const a2 = cc.scaleTo(bounceDuration, 1, 1);
  const seq = cc.sequence(a1, a2, restore);
  node.runAction(seq);
}

module.exports = {
  //low level apis
  saveProps: save,
  shake0: shake0,
  shake1: shake1,
  zoomOut0,

  //exported apis
  shake: shake0,
  shakeH (node, ax, dur, times) {
    shake1.call(null, node, ax, 0, dur, times);
  },
  shakeV (node, ay, dur, times) {
    shake1.call(null, node, 0, ay, dur, times);
  },
  zoomOut (node, dur, isBounce) {
    zoomOut0(node, 0.5, 0.2, isBounce ? 1.2 : 1, 0.1);
  }
}