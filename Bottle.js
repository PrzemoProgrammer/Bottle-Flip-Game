const _0x597a5b = _0x1308;
function _0x1308(_0x5c3199, _0x3a1f27) {
  const _0x19e318 = _0x19e3();
  return (
    (_0x1308 = function (_0x130898, _0x1311c1) {
      _0x130898 = _0x130898 - 0xec;
      let _0x566058 = _0x19e318[_0x130898];
      return _0x566058;
    }),
    _0x1308(_0x5c3199, _0x3a1f27)
  );
}
(function (_0x77a96d, _0x598e5f) {
  const _0x53d609 = _0x1308,
    _0x27bddb = _0x77a96d();
  while (!![]) {
    try {
      const _0xb7d3fc =
        (-parseInt(_0x53d609(0x107)) / 0x1) *
          (parseInt(_0x53d609(0xf0)) / 0x2) +
        (parseInt(_0x53d609(0xed)) / 0x3) * (parseInt(_0x53d609(0xfa)) / 0x4) +
        -parseInt(_0x53d609(0xee)) / 0x5 +
        parseInt(_0x53d609(0xfd)) / 0x6 +
        -parseInt(_0x53d609(0x108)) / 0x7 +
        -parseInt(_0x53d609(0x101)) / 0x8 +
        (-parseInt(_0x53d609(0xfb)) / 0x9) *
          (-parseInt(_0x53d609(0x103)) / 0xa);
      if (_0xb7d3fc === _0x598e5f) break;
      else _0x27bddb["push"](_0x27bddb["shift"]());
    } catch (_0x5c4cee) {
      _0x27bddb["push"](_0x27bddb["shift"]());
    }
  }
})(_0x19e3, 0x1e502);
class Bottle extends Phaser[_0x597a5b(0xf7)][_0x597a5b(0xf5)] {
  constructor(_0x394115, _0x177988, _0x3451fe, _0x1a722b) {
    const _0x161cc0 = _0x597a5b;
    super(_0x394115, _0x177988, _0x3451fe, _0x1a722b),
      (this["scene"] = _0x394115),
      _0x394115[_0x161cc0(0xfe)][_0x161cc0(0xf8)](this),
      this[_0x161cc0(0x109)](),
      (this[_0x161cc0(0xec)] = ![]),
      (this[_0x161cc0(0x100)] = ![]),
      (this[_0x161cc0(0xff)] = ![]);
  }
  [_0x597a5b(0xf4)]() {
    const _0xf3254a = _0x597a5b;
    this[_0xf3254a(0x106)][_0xf3254a(0x104)][_0xf3254a(0xfe)]["gameObject"](
      this
    ),
      this["setFriction"](0.4),
      this[_0xf3254a(0xfc)](0.009),
      this[_0xf3254a(0x102)](0xa),
      this[_0xf3254a(0x109)]();
  }
  ["flip"](_0x7ae1d1) {
    const _0xc6e3f2 = _0x597a5b;
    if (!this[_0xc6e3f2(0xec)]) return;
    this[_0xc6e3f2(0xec)] = ![];
    let _0x49872f =
      (this[_0xc6e3f2(0x106)][_0xc6e3f2(0xf2)] - _0x7ae1d1) / 0x14;
    if (_0x49872f > 0x23) _0x49872f = 0x23;
    this["setVelocity"](0x0, -_0x49872f),
      this["setAngularVelocity"](_0x49872f / 0x12c);
  }
  ["isStanding"]() {
    const _0x24dbda = _0x597a5b;
    return (
      Math[_0x24dbda(0xf6)](this["angle"]) < 0.65 &&
      Math[_0x24dbda(0xf6)](this["body"][_0x24dbda(0xf3)]) < 0x2 &&
      Math[_0x24dbda(0xf6)](this[_0x24dbda(0x105)][_0x24dbda(0xf1)]["y"]) < 0x2
    );
  }
  [_0x597a5b(0xf9)](_0x325e17) {
    const _0x480435 = _0x597a5b;
    this["setScale"](0.1),
      this[_0x480435(0x106)][_0x480435(0xef)][_0x480435(0xfe)]({
        targets: this,
        ease: "Back.out",
        duration: 0x12c,
        scale: 0x1,
        onComplete: () => {
          const _0x316ad0 = _0x480435;
          (this[_0x316ad0(0xec)] = !![]), _0x325e17();
        },
      });
  }
}
function _0x19e3() {
  const _0x269889 = [
    "createTween",
    "8OnaMSZ",
    "474678CAkLSt",
    "setFrictionAir",
    "1099134UKsFeO",
    "add",
    "isTouched",
    "hasFlippedInAir",
    "1657424NClAql",
    "setFrictionStatic",
    "70YUYpbG",
    "matter",
    "body",
    "scene",
    "2IgXyte",
    "1201102PAvZMf",
    "setInteractive",
    "canFlip",
    "46572PhrwNM",
    "331705tTuwKZ",
    "tweens",
    "14164nmrbWP",
    "velocity",
    "startDragY",
    "angularVelocity",
    "addBody",
    "Sprite",
    "abs",
    "GameObjects",
    "existing",
  ];
  _0x19e3 = function () {
    return _0x269889;
  };
  return _0x19e3();
}
