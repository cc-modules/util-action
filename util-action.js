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

function promisify (actionFn, fnName, infinite = false, cb = null) {
  return function () {
    const node = arguments[0];
    const args = Array.from ? Array.from(arguments) : Array.prototype.slice.call(arguments)
    var actionArray = actionFn.apply(null, arguments);
    return new Promise((resolve, reject) => {
      if (!node) return reject();
      // infinite action will not resolve
      if (!infinite) actionArray.push(cc.callFunc(resolve));
      if (cb) actionArray = cb(actionArray, args);
      const act = cc[fnName].apply(cc, actionArray);
      node.runAction(act);
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
  const restore = save(node, ['scaleX', 'scaleY']);
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

function flashForever_ (node, inDur = 0.5, stayDur = 0.5, outDur = inDur) {
  const acts = flash_(node, inDur, stayDur, outDur);
  return [cc.sequence(acts)];
}

function flashSometimes_ (node, inDur = 0.5, stayDur = 0.5, outDur = inDur, times = 3) {
  const acts = flash_(node, inDur, stayDur, outDur);
  return [cc.repeat(cc.sequence(acts), times)]
}

function flash_ (node, inDur = 0.5, stayDur = 0.5, outDur = inDur) {
  node.opacity = 0;
  const a1 = cc.fadeOut(inDur);
  const a2 = cc.delayTime(stayDur);
  const a3 = cc.fadeIn(outDur);
  const acts = [a1, a2, a3];
  return acts;
}

const flashForever = promisify(flashForever_, 'repeatForever', true);
const flashSometimes = promisify(flashSometimes_, 'sequence', false, (acts, args) => [acts, args[4]]);

export default {
  //low level apis
  saveProps: save,
  shake1: shake1,
  zoomIn0,
  fadeIn0,

  //return actions or sequence
  shake1_,
  zoomIn0_,
  wobble_,
  flash_,
  //high level apis, return promise
  wobble: promisify(wobble_, 'sequence'),
  flash (node, times = -1, inDur = 0.5, stayDur = 0.5, outDur = 0.5) {
    if (times > 0) {
      return flashSometimes(node, inDur, stayDur, outDur, times);
    } else {
      return flashForever(node, inDur, stayDur, outDur);
    }
  },
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