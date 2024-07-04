const _0x1b4c6f = _0xc49c;
function _0xc49c(_0x224b38, _0x532162) {
  const _0x10c232 = _0x10c2();
  return (
    (_0xc49c = function (_0xc49ce3, _0x2e925d) {
      _0xc49ce3 = _0xc49ce3 - 0x179;
      let _0x4155bb = _0x10c232[_0xc49ce3];
      return _0x4155bb;
    }),
    _0xc49c(_0x224b38, _0x532162)
  );
}
(function (_0x549aa4, _0x27687b) {
  const _0x57c455 = _0xc49c,
    _0x488bf6 = _0x549aa4();
  while (!![]) {
    try {
      const _0x634921 =
        -parseInt(_0x57c455(0x188)) / 0x1 +
        (parseInt(_0x57c455(0x17e)) / 0x2) *
          (parseInt(_0x57c455(0x17c)) / 0x3) +
        (parseInt(_0x57c455(0x185)) / 0x4) *
          (-parseInt(_0x57c455(0x186)) / 0x5) +
        (-parseInt(_0x57c455(0x179)) / 0x6) *
          (parseInt(_0x57c455(0x17d)) / 0x7) +
        parseInt(_0x57c455(0x17f)) / 0x8 +
        -parseInt(_0x57c455(0x184)) / 0x9 +
        (-parseInt(_0x57c455(0x189)) / 0xa) *
          (-parseInt(_0x57c455(0x180)) / 0xb);
      if (_0x634921 === _0x27687b) break;
      else _0x488bf6["push"](_0x488bf6["shift"]());
    } catch (_0x28f423) {
      _0x488bf6["push"](_0x488bf6["shift"]());
    }
  }
})(_0x10c2, 0x8328e);
function _0x10c2() {
  const _0x539b65 = [
    "matter",
    "Scale",
    "3IYRWAf",
    "49oZzBHn",
    "550414LFyztE",
    "2561792WcDTvx",
    "55kTrrlb",
    "Game",
    "AUTO",
    "FIT",
    "7541190MzWbYM",
    "686512tXNDvH",
    "30OxfrIN",
    "CENTER_BOTH",
    "1046956JCurTz",
    "7513210ISyIvv",
    "771576oLNfxQ",
  ];
  _0x10c2 = function () {
    return _0x539b65;
  };
  return _0x10c2();
}
const config = {
    type: Phaser[_0x1b4c6f(0x182)],
    physics: {
      default: _0x1b4c6f(0x17a),
      matter: { debug: ![], gravity: { y: 0x3 } },
    },
    scale: {
      mode: Phaser[_0x1b4c6f(0x17b)][_0x1b4c6f(0x183)],
      width: 0x384,
      height: 0x578,
      autoCenter: Phaser[_0x1b4c6f(0x17b)][_0x1b4c6f(0x187)],
    },
    scene: [PlayScene],
  },
  game = new Phaser[_0x1b4c6f(0x181)](config);
