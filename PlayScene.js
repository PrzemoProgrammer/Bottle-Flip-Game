function _0x51f7(_0x586423, _0x15cdff) {
  const _0x44a8fe = _0x44a8();
  return (
    (_0x51f7 = function (_0x51f718, _0x1980f6) {
      _0x51f718 = _0x51f718 - 0x123;
      let _0x2d29cf = _0x44a8fe[_0x51f718];
      return _0x2d29cf;
    }),
    _0x51f7(_0x586423, _0x15cdff)
  );
}
function _0x44a8() {
  const _0x39678b = [
    "60px",
    "displayHeight",
    "getItem",
    "startDragY",
    "./assets/bottle.png",
    "abs",
    "preload",
    "scene",
    "text",
    "config",
    "update",
    "restart",
    "setDisplaySize",
    "height",
    "addScoreText",
    "5746070PIFhAA",
    "Scene",
    "setOrigin",
    "15773870SGgJrW",
    "time",
    "1842694QBdJwP",
    "floorBody",
    "bestScore",
    "91887wDYOPy",
    "28FcjTDn",
    "scoreText",
    "flip",
    "2244324dAKnAJ",
    "setOnCollideActive",
    "addFloor",
    "rectangle",
    "TEST",
    "hasFlippedInAir",
    "PlayScene",
    "./assets/background.png",
    "isTouched",
    "63reNKyu",
    "hitFloor",
    "add",
    "bottle",
    "878856xtywJY",
    "body",
    "delayedCall",
    "destroy",
    "background",
    "128lNhBwa",
    "image",
    "floor",
    "velocity",
    "load",
    "addDragEvents",
    "game",
    "SCORE:\x20",
    "isStanding",
    "dragstart",
    "displayWidth",
    "737594qZHwZB",
    "Georgia,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
    "input",
    "log",
  ];
  _0x44a8 = function () {
    return _0x39678b;
  };
  return _0x44a8();
}
const _0x28aca7 = _0x51f7;
(function (_0x586f39, _0x1b3f06) {
  const _0x1c65dc = _0x51f7,
    _0x2db3de = _0x586f39();
  while (!![]) {
    try {
      const _0x469123 =
        -parseInt(_0x1c65dc(0x155)) / 0x1 +
        -parseInt(_0x1c65dc(0x131)) / 0x2 +
        (-parseInt(_0x1c65dc(0x134)) / 0x3) *
          (parseInt(_0x1c65dc(0x14a)) / 0x4) +
        parseInt(_0x1c65dc(0x12c)) / 0x5 +
        (-parseInt(_0x1c65dc(0x138)) / 0x6) *
          (-parseInt(_0x1c65dc(0x135)) / 0x7) +
        (-parseInt(_0x1c65dc(0x145)) / 0x8) *
          (parseInt(_0x1c65dc(0x141)) / 0x9) +
        parseInt(_0x1c65dc(0x12f)) / 0xa;
      if (_0x469123 === _0x1b3f06) break;
      else _0x2db3de["push"](_0x2db3de["shift"]());
    } catch (_0x68089f) {
      _0x2db3de["push"](_0x2db3de["shift"]());
    }
  }
})(_0x44a8, 0xc6e9d);
let score = 0x0,
  bestScore = Number(localStorage[_0x28aca7(0x15b)](_0x28aca7(0x133))) || 0x0;
class PlayScene extends Phaser[_0x28aca7(0x12d)] {
  constructor() {
    const _0x922d1c = _0x28aca7;
    super(_0x922d1c(0x13e));
  }
  [_0x28aca7(0x123)]() {
    const _0x47ccfb = _0x28aca7;
    this[_0x47ccfb(0x14e)][_0x47ccfb(0x14b)](
      _0x47ccfb(0x149),
      _0x47ccfb(0x13f)
    ),
      this[_0x47ccfb(0x14e)]["image"](_0x47ccfb(0x144), _0x47ccfb(0x15d)),
      this[_0x47ccfb(0x14e)]["image"](_0x47ccfb(0x14c), "./assets/floor.png");
  }
  ["create"]() {
    const _0x13fbb0 = _0x28aca7;
    (this["gw"] = this[_0x13fbb0(0x150)][_0x13fbb0(0x126)]["width"]),
      (this["gh"] = this[_0x13fbb0(0x150)][_0x13fbb0(0x126)][_0x13fbb0(0x12a)]),
      (this["startDragY"] = 0x0),
      this["addBackground"](),
      this[_0x13fbb0(0x12b)]();
    const _0x351a06 = {
      fontFamily:
        "Georgia,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
      fontSize: "100px",
    };
    this["add"]
      [_0x13fbb0(0x125)](
        this["gw"] / 0x2,
        this["gh"] / 0x2 - 0x64,
        _0x13fbb0(0x13c),
        _0x351a06
      )
      [_0x13fbb0(0x12e)](0x0, 0x0),
      this[_0x13fbb0(0x143)]
        [_0x13fbb0(0x125)](
          this["gw"] / 0x2,
          this["gh"] / 0x2 + 0x64,
          _0x13fbb0(0x13c),
          _0x351a06
        )
        ["setOrigin"](0x0, 0x0),
      this[_0x13fbb0(0x13a)](),
      this["addBottle"](),
      this[_0x13fbb0(0x14f)](),
      this[_0x13fbb0(0x130)][_0x13fbb0(0x147)](0x2328, () => {
        const _0xdcbee4 = _0x13fbb0;
        console[_0xdcbee4(0x158)]("DESTROYED"),
          this[_0xdcbee4(0x149)]["destroy"](),
          this["bottle"][_0xdcbee4(0x148)]();
      });
  }
  [_0x28aca7(0x127)]() {
    const _0x2f1001 = _0x28aca7;
    Math[_0x2f1001(0x15e)](this[_0x2f1001(0x144)]["angle"]) > 0xa0 &&
      (this[_0x2f1001(0x144)][_0x2f1001(0x13d)] = !![]);
  }
  [_0x28aca7(0x142)]() {
    const _0x4cd5f6 = _0x28aca7;
    this["bottle"][_0x4cd5f6(0x152)]() &&
      this[_0x4cd5f6(0x144)]["isTouched"] &&
      ((this[_0x4cd5f6(0x144)][_0x4cd5f6(0x140)] = ![]),
      this[_0x4cd5f6(0x130)][_0x4cd5f6(0x147)](0x7d0, () => {
        const _0x5bf392 = _0x4cd5f6;
        if (this[_0x5bf392(0x144)][_0x5bf392(0x152)]())
          this[_0x5bf392(0x144)]["hasFlippedInAir"] && score++,
            score > bestScore &&
              ((bestScore = score),
              localStorage["setItem"](_0x5bf392(0x133), bestScore)),
            this[_0x5bf392(0x124)][_0x5bf392(0x128)]();
        else
          this["bottle"]["body"][_0x5bf392(0x14d)]["y"] === 0x0 &&
            this["bottle"][_0x5bf392(0x140)] &&
            this[_0x5bf392(0x124)][_0x5bf392(0x128)]();
      })),
      this[_0x4cd5f6(0x144)][_0x4cd5f6(0x146)]["velocity"]["y"] === 0x0 &&
        this["bottle"]["isTouched"] &&
        this["scene"][_0x4cd5f6(0x128)]();
  }
  ["addBackground"]() {
    const _0x2e5575 = _0x28aca7;
    this[_0x2e5575(0x149)] = this[_0x2e5575(0x143)]
      ["image"](0x0, 0x0, _0x2e5575(0x149))
      ["setOrigin"](0x0, 0x0)
      [_0x2e5575(0x129)](this["gw"], this["gh"]);
  }
  [_0x28aca7(0x12b)]() {
    const _0xc57457 = _0x28aca7,
      _0x490921 = { fontFamily: _0xc57457(0x156), fontSize: _0xc57457(0x159) };
    (this[_0xc57457(0x136)] = this[_0xc57457(0x143)]
      [_0xc57457(0x125)](0xa, 0xa, _0xc57457(0x151) + score, _0x490921)
      [_0xc57457(0x12e)](0x0, 0x0)),
      (this["bestScoreText"] = this["add"]
        [_0xc57457(0x125)](
          this["gw"] - 0xa,
          0xa,
          "BEST:\x20" + bestScore,
          _0x490921
        )
        [_0xc57457(0x12e)](0x1, 0x0));
  }
  [_0x28aca7(0x13a)]() {
    const _0x34f4cc = _0x28aca7;
    (this[_0x34f4cc(0x14c)] = this[_0x34f4cc(0x143)]
      ["image"](0x0, this["gh"], _0x34f4cc(0x14c))
      [_0x34f4cc(0x12e)](0x0, 0x1)),
      (this[_0x34f4cc(0x132)] = this["matter"][_0x34f4cc(0x143)][
        _0x34f4cc(0x13b)
      ](
        this["gw"] / 0x2,
        this["gh"] - 0x28,
        this[_0x34f4cc(0x14c)][_0x34f4cc(0x154)],
        this["floor"][_0x34f4cc(0x15a)],
        { isStatic: !![] }
      ));
  }
  ["addBottle"]() {
    const _0x1cad8c = _0x28aca7;
    (this["bottle"] = new Bottle(
      this,
      this["gw"] / 0x2,
      this[_0x1cad8c(0x14c)]["y"],
      _0x1cad8c(0x144)
    )),
      (this["bottle"]["y"] -= this["bottle"][_0x1cad8c(0x12a)] / 0x2),
      this[_0x1cad8c(0x157)]["setDraggable"](this[_0x1cad8c(0x144)]),
      this["bottle"][_0x1cad8c(0x139)](() => this[_0x1cad8c(0x142)]());
  }
  [_0x28aca7(0x14f)]() {
    const _0x3c94ea = _0x28aca7;
    this[_0x3c94ea(0x157)]["on"](
      _0x3c94ea(0x153),
      (_0x50e1c1) => (this[_0x3c94ea(0x15c)] = _0x50e1c1["y"])
    ),
      this["input"]["on"]("dragend", (_0x4d1c41) => {
        const _0x53b910 = _0x3c94ea;
        this[_0x53b910(0x144)][_0x53b910(0x137)](_0x4d1c41["y"]),
          (this[_0x53b910(0x144)][_0x53b910(0x140)] = !![]);
      });
  }
}
