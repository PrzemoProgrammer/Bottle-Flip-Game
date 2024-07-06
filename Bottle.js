const _0x54e321 = _0x1477;
function _0x1477(_0x39cf79, _0xc11b68) {
  const _0x189837 = _0x1898();
  return (
    (_0x1477 = function (_0x14777b, _0x395ab4) {
      _0x14777b = _0x14777b - 0x157;
      let _0x5979ea = _0x189837[_0x14777b];
      return _0x5979ea;
    }),
    _0x1477(_0x39cf79, _0xc11b68)
  );
}
function _0x1898() {
  const _0x4c180b = [
    "162108IHXQvZ",
    "setAngularVelocity",
    "2583105IKORIu",
    "1926AGmTTQ",
    "317997RthATP",
    "12538720MxnZtI",
    "add",
    "setFriction",
    "Back.out",
    "setInteractive",
    "angularVelocity",
    "isTouched",
    "abs",
    "GameObjects",
    "startDragY",
    "createTween",
    "body",
    "scene",
    "setScale",
    "22771AqMJru",
    "1143792mAsbHE",
    "matter",
    "isStanding",
    "gameObject",
    "tweens",
    "velocity",
    "canFlip",
    "940095BUUsnA",
  ];
  _0x1898 = function () {
    return _0x4c180b;
  };
  return _0x1898();
}
(function (_0x1b9e3a, _0x63c269) {
  const _0x44322f = _0x1477,
    _0x5351c3 = _0x1b9e3a();
  while (!![]) {
    try {
      const _0x5a61cb =
        parseInt(_0x44322f(0x160)) / 0x1 +
        parseInt(_0x44322f(0x15c)) / 0x2 +
        -parseInt(_0x44322f(0x15e)) / 0x3 +
        parseInt(_0x44322f(0x170)) / 0x4 +
        parseInt(_0x44322f(0x15b)) / 0x5 +
        (-parseInt(_0x44322f(0x15f)) / 0x6) *
          (parseInt(_0x44322f(0x16f)) / 0x7) +
        parseInt(_0x44322f(0x161)) / 0x8;
      if (_0x5a61cb === _0x63c269) break;
      else _0x5351c3["push"](_0x5351c3["shift"]());
    } catch (_0x1ca2b0) {
      _0x5351c3["push"](_0x5351c3["shift"]());
    }
  }
})(_0x1898, 0x82a46);
class Bottle extends Phaser[_0x54e321(0x169)]["Sprite"] {
  constructor(_0x533c87, _0x466f39, _0x171aa9, _0x34738c) {
    const _0x50c61c = _0x54e321;
    super(_0x533c87, _0x466f39, _0x171aa9, _0x34738c),
      (this[_0x50c61c(0x16d)] = _0x533c87),
      _0x533c87["add"]["existing"](this),
      this[_0x50c61c(0x165)](),
      (this[_0x50c61c(0x15a)] = ![]),
      (this["hasFlippedInAir"] = ![]),
      (this[_0x50c61c(0x167)] = ![]);
  }
  ["addBody"]() {
    const _0x20d0aa = _0x54e321;
    this[_0x20d0aa(0x16d)][_0x20d0aa(0x171)]["add"][_0x20d0aa(0x157)](this),
      this[_0x20d0aa(0x163)](0.4),
      this["setFrictionAir"](0.009),
      this["setFrictionStatic"](0xa),
      this["setInteractive"]();
  }
  ["flip"](_0x3a37ee) {
    const _0x355bb6 = _0x54e321;
    if (!this[_0x355bb6(0x15a)]) return;
    this[_0x355bb6(0x15a)] = ![];
    let _0x9ff6ed =
      (this[_0x355bb6(0x16d)][_0x355bb6(0x16a)] - _0x3a37ee) / 0x14;
    if (_0x9ff6ed > 0x23) _0x9ff6ed = 0x23;
    this["setVelocity"](0x0, -_0x9ff6ed),
      this[_0x355bb6(0x15d)](_0x9ff6ed / 0x12c);
  }
  [_0x54e321(0x172)]() {
    const _0x2eb189 = _0x54e321;
    return (
      Math[_0x2eb189(0x168)](this["angle"]) < 0.65 &&
      Math["abs"](this[_0x2eb189(0x16c)][_0x2eb189(0x166)]) < 0x2 &&
      Math[_0x2eb189(0x168)](this[_0x2eb189(0x16c)][_0x2eb189(0x159)]["y"]) <
        0x2
    );
  }
  [_0x54e321(0x16b)](_0xe34034) {
    const _0x502925 = _0x54e321;
    this[_0x502925(0x16e)](0.1),
      this["scene"][_0x502925(0x158)][_0x502925(0x162)]({
        targets: this,
        ease: _0x502925(0x164),
        duration: 0x12c,
        scale: 0x1,
        onComplete: () => {
          const _0x31e459 = _0x502925;
          (this[_0x31e459(0x15a)] = !![]), _0xe34034();
        },
      });
  }
}
