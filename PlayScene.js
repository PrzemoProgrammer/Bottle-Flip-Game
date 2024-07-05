const _0x4b6855 = _0x1be5;
function _0x3fb0() {
  const _0x3b6051 = [
    "42JEsjXm",
    "bestScore",
    "hasFlippedInAir",
    "30QleIOI",
    "Scene",
    "./assets/floor.png",
    "canFlip",
    "matter",
    "addBodies",
    "getItem",
    "3027801TTTNKE",
    "velocity",
    "handleCollide",
    "update",
    "SCORE:\x20",
    "dragend",
    "style",
    "PlayScene",
    "tweens",
    "dragstart",
    "addFloor",
    "hideLoadingScreen",
    "floorBody",
    "Georgia,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
    "BEST:\x20",
    "addDragEvents",
    "Arial,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
    "text",
    "floor",
    "hitFloor",
    "17910234XLavZd",
    "scale",
    "4xuOGSb",
    "TEST",
    "image",
    "setDraggable",
    "7814163bVdblr",
    "scene",
    "height",
    "flip",
    "game",
    "addBackground",
    "displayWidth",
    "Back.in",
    "config",
    "soft",
    "./assets/bottle.png",
    "body",
    "background",
    "./assets/background.png",
    "addBottle",
    "isStanding",
    "addScoreText",
    "isTouched",
    "1231224LAGnNL",
    "startOpenAnimTween",
    "remove",
    "load",
    "setOrigin",
    "destroy",
    "scoreText",
    "restart",
    "addBestScoreText",
    "addBody",
    "log",
    "addTestMode",
    "4301124DPVBzY",
    "delayedCall",
    "bestScoreText",
    "DESTROYED",
    "setItem",
    "add",
    "setOnCollideActive",
    "100px",
    "bottle",
    "Back.out",
    "time",
    "createTween",
    "getElementById",
    "startDragY",
    "create",
    "585505QSWivK",
    "579540aCSKBT",
    "scale(",
    "setScale",
    "input",
    "width",
  ];
  _0x3fb0 = function () {
    return _0x3b6051;
  };
  return _0x3fb0();
}
(function (_0x7683e, _0x22b467) {
  const _0x16e9d0 = _0x1be5,
    _0x2835dd = _0x7683e();
  while (!![]) {
    try {
      const _0x58559c =
        (parseInt(_0x16e9d0(0x1a3)) / 0x1) *
          (-parseInt(_0x16e9d0(0x17e)) / 0x2) +
        -parseInt(_0x16e9d0(0x18d)) / 0x3 +
        -parseInt(_0x16e9d0(0x16e)) / 0x4 +
        (-parseInt(_0x16e9d0(0x17d)) / 0x5) *
          (parseInt(_0x16e9d0(0x183)) / 0x6) +
        -parseInt(_0x16e9d0(0x1a7)) / 0x7 +
        -parseInt(_0x16e9d0(0x162)) / 0x8 +
        (-parseInt(_0x16e9d0(0x1a1)) / 0x9) *
          (-parseInt(_0x16e9d0(0x186)) / 0xa);
      if (_0x58559c === _0x22b467) break;
      else _0x2835dd["push"](_0x2835dd["shift"]());
    } catch (_0x55d819) {
      _0x2835dd["push"](_0x2835dd["shift"]());
    }
  }
})(_0x3fb0, 0x9b673);
function _0x1be5(_0x115a50, _0x28c250) {
  const _0x3fb076 = _0x3fb0();
  return (
    (_0x1be5 = function (_0x1be5c0, _0x299c46) {
      _0x1be5c0 = _0x1be5c0 - 0x15a;
      let _0x34bcd3 = _0x3fb076[_0x1be5c0];
      return _0x34bcd3;
    }),
    _0x1be5(_0x115a50, _0x28c250)
  );
}
let score = 0x0,
  bestScore = Number(localStorage[_0x4b6855(0x18c)](_0x4b6855(0x184))) || 0x0;
class PlayScene extends Phaser[_0x4b6855(0x187)] {
  constructor() {
    const _0x2dd043 = _0x4b6855;
    super(_0x2dd043(0x194));
  }
  ["preload"]() {
    const _0x39ff8f = _0x4b6855;
    this[_0x39ff8f(0x165)][_0x39ff8f(0x1a5)](
      _0x39ff8f(0x15c),
      _0x39ff8f(0x15d)
    ),
      this["load"][_0x39ff8f(0x1a5)]("bottle", _0x39ff8f(0x15a)),
      this[_0x39ff8f(0x165)][_0x39ff8f(0x1a5)](
        _0x39ff8f(0x19f),
        _0x39ff8f(0x188)
      );
  }
  [_0x4b6855(0x17c)](_0x2e1228) {
    const _0xbb3b9d = _0x4b6855;
    (this["gw"] = this["game"][_0xbb3b9d(0x1af)][_0xbb3b9d(0x182)]),
      (this["gh"] = this[_0xbb3b9d(0x1ab)][_0xbb3b9d(0x1af)]["height"]),
      (this[_0xbb3b9d(0x17b)] = 0x0),
      (this[_0xbb3b9d(0x15c)] = this[_0xbb3b9d(0x1ac)]()),
      (this["scoreText"] = this[_0xbb3b9d(0x160)]()),
      (this[_0xbb3b9d(0x170)] = this[_0xbb3b9d(0x16a)]()),
      (this[_0xbb3b9d(0x19f)] = this["addFloor"]()),
      (this["bottle"] = this[_0xbb3b9d(0x15e)]()),
      this[_0xbb3b9d(0x19c)]();
    const _0x126f96 = () => {
      const _0x41de7a = _0xbb3b9d;
      _0x2e1228 != _0x41de7a(0x1b0)
        ? this[_0x41de7a(0x163)]()
        : this[_0x41de7a(0x176)][_0x41de7a(0x179)](() => {
            const _0x254a0e = _0x41de7a;
            this[_0x254a0e(0x18b)](), this[_0x254a0e(0x18f)]();
          });
    };
    _0x2e1228 != _0xbb3b9d(0x1b0)
      ? this["hideLoadingScreen"](_0x126f96)
      : _0x126f96(),
      this[_0xbb3b9d(0x16d)]();
  }
  [_0x4b6855(0x190)]() {
    const _0x2c46c3 = _0x4b6855;
    Math["abs"](this[_0x2c46c3(0x176)]["angle"]) > 0xa0 &&
      (this[_0x2c46c3(0x176)][_0x2c46c3(0x185)] = !![]);
  }
  [_0x4b6855(0x1ac)]() {
    const _0x1e3611 = _0x4b6855;
    return this[_0x1e3611(0x173)]
      [_0x1e3611(0x1a5)](0x0, 0x0, _0x1e3611(0x15c))
      [_0x1e3611(0x166)](0x0, 0x0)
      ["setDisplaySize"](this["gw"], this["gh"]);
  }
  [_0x4b6855(0x160)]() {
    const _0x5abbdd = _0x4b6855,
      _0x4f33c1 = { fontFamily: _0x5abbdd(0x19d), fontSize: "60px" };
    return this[_0x5abbdd(0x173)]
      [_0x5abbdd(0x19e)](0xa, 0xa, _0x5abbdd(0x191) + score, _0x4f33c1)
      [_0x5abbdd(0x166)](0x0, 0x0);
  }
  [_0x4b6855(0x16a)]() {
    const _0x449b3b = _0x4b6855,
      _0x5c18a1 = { fontFamily: _0x449b3b(0x19d), fontSize: "60px" };
    return this[_0x449b3b(0x173)]
      ["text"](this["gw"] - 0xa, 0xa, _0x449b3b(0x19b) + bestScore, _0x5c18a1)
      [_0x449b3b(0x166)](0x1, 0x0);
  }
  [_0x4b6855(0x197)]() {
    const _0x53d114 = _0x4b6855,
      _0x347aa3 = this[_0x53d114(0x173)]
        [_0x53d114(0x1a5)](0x1cc, this["gh"], "floor")
        [_0x53d114(0x166)](0.5, 0x1);
    return _0x347aa3;
  }
  [_0x4b6855(0x15e)]() {
    const _0x47a20b = _0x4b6855,
      _0x5a40d4 = new Bottle(
        this,
        this["gw"] / 0x2,
        this["floor"]["y"],
        _0x47a20b(0x176)
      );
    return (
      (_0x5a40d4["y"] -= _0x5a40d4[_0x47a20b(0x1a9)] / 0x2 + 0x92),
      this[_0x47a20b(0x181)][_0x47a20b(0x1a6)](_0x5a40d4),
      _0x5a40d4
    );
  }
  [_0x4b6855(0x1a0)]() {
    const _0x44f8c7 = _0x4b6855;
    this["bottle"][_0x44f8c7(0x15f)]() &&
      this[_0x44f8c7(0x176)][_0x44f8c7(0x161)] &&
      ((this[_0x44f8c7(0x176)]["isTouched"] = ![]),
      this[_0x44f8c7(0x178)][_0x44f8c7(0x16f)](0x7d0, () => {
        const _0xa32650 = _0x44f8c7;
        if (this[_0xa32650(0x176)][_0xa32650(0x15f)]())
          this[_0xa32650(0x176)][_0xa32650(0x185)] && score++,
            score > bestScore &&
              ((bestScore = score),
              localStorage[_0xa32650(0x172)](_0xa32650(0x184), bestScore)),
            this[_0xa32650(0x1a8)][_0xa32650(0x169)]("soft");
        else
          this["bottle"][_0xa32650(0x15b)][_0xa32650(0x18e)]["y"] === 0x0 &&
            this[_0xa32650(0x176)][_0xa32650(0x161)] &&
            this[_0xa32650(0x1a8)][_0xa32650(0x169)]("soft");
      })),
      this[_0x44f8c7(0x176)][_0x44f8c7(0x15b)]["velocity"]["y"] === 0x0 &&
        this["bottle"]["isTouched"] &&
        this[_0x44f8c7(0x1a8)][_0x44f8c7(0x169)](_0x44f8c7(0x1b0));
  }
  [_0x4b6855(0x19c)]() {
    const _0x432494 = _0x4b6855;
    this[_0x432494(0x181)]["on"](
      _0x432494(0x196),
      (_0x298691) => (this[_0x432494(0x17b)] = _0x298691["y"])
    ),
      this["input"]["on"](_0x432494(0x192), (_0x2eeb85) => {
        const _0x32b131 = _0x432494;
        this[_0x32b131(0x176)][_0x32b131(0x1aa)](_0x2eeb85["y"]),
          (this[_0x32b131(0x176)][_0x32b131(0x161)] = !![]);
      });
  }
  [_0x4b6855(0x18b)]() {
    const _0x3404fe = _0x4b6855;
    this["bottle"][_0x3404fe(0x16b)](),
      (this[_0x3404fe(0x199)] = this[_0x3404fe(0x18a)][_0x3404fe(0x173)][
        "rectangle"
      ](
        this["gw"] / 0x2,
        this["gh"] - 0x28,
        this[_0x3404fe(0x19f)][_0x3404fe(0x1ad)],
        this["floor"]["displayHeight"],
        { isStatic: !![] }
      ));
  }
  [_0x4b6855(0x18f)]() {
    const _0x39f9eb = _0x4b6855;
    this[_0x39f9eb(0x176)][_0x39f9eb(0x174)](() => this["hitFloor"]());
  }
  [_0x4b6855(0x163)]() {
    const _0x2a175a = _0x4b6855;
    this[_0x2a175a(0x176)][_0x2a175a(0x180)](0.1),
      this["floor"]["setScale"](0.1),
      this[_0x2a175a(0x168)][_0x2a175a(0x180)](0.1),
      this["bestScoreText"]["setScale"](0.1),
      this[_0x2a175a(0x195)]["add"]({
        targets: this[_0x2a175a(0x176)],
        ease: _0x2a175a(0x177),
        duration: 0x3e8,
        scale: 0x1,
        onComplete: () => {
          const _0x4b2c2d = _0x2a175a;
          (this[_0x4b2c2d(0x176)][_0x4b2c2d(0x189)] = !![]),
            this[_0x4b2c2d(0x18b)](),
            this[_0x4b2c2d(0x18f)]();
        },
      }),
      this[_0x2a175a(0x195)][_0x2a175a(0x173)]({
        targets: this["floor"],
        ease: _0x2a175a(0x177),
        duration: 0x320,
        scale: 0x1,
      }),
      this["tweens"][_0x2a175a(0x173)]({
        targets: [this["bestScoreText"], this["scoreText"]],
        ease: _0x2a175a(0x177),
        duration: 0x2bc,
        scale: 0x1,
      });
  }
  [_0x4b6855(0x198)](_0x22d764) {
    const _0x36e624 = _0x4b6855,
      _0x165e38 = document[_0x36e624(0x17a)]("loading_page");
    this[_0x36e624(0x195)]["add"]({
      targets: _0x165e38,
      scale: { from: 0x1, to: 0x0 },
      ease: _0x36e624(0x1ae),
      duration: 0x258,
      onUpdate: (_0x2fa672) => {
        const _0x2838d5 = _0x36e624,
          _0x212c77 = _0x2fa672["getValue"]();
        _0x165e38[_0x2838d5(0x193)]["transform"] =
          _0x2838d5(0x17f) + _0x212c77 + ")";
      },
      onComplete: () => {
        const _0x5ba4a4 = _0x36e624;
        _0x22d764(),
          _0x165e38[_0x5ba4a4(0x164)](),
          this[_0x5ba4a4(0x1a2)]["resize"](this["gw"], this["gh"]);
      },
    });
  }
  [_0x4b6855(0x16d)]() {
    const _0x53b071 = _0x4b6855,
      _0x461bd6 = { fontFamily: _0x53b071(0x19a), fontSize: _0x53b071(0x175) };
    this["add"]
      [_0x53b071(0x19e)](
        this["gw"] / 0x2,
        this["gh"] / 0x2 - 0x64,
        _0x53b071(0x1a4),
        _0x461bd6
      )
      [_0x53b071(0x166)](0x0, 0x0),
      this[_0x53b071(0x173)]
        [_0x53b071(0x19e)](
          this["gw"] / 0x2,
          this["gh"] / 0x2 + 0x64,
          "TEST",
          _0x461bd6
        )
        [_0x53b071(0x166)](0x0, 0x0),
      this["time"][_0x53b071(0x16f)](0x2328, () => {
        const _0x1b1c54 = _0x53b071;
        console[_0x1b1c54(0x16c)](_0x1b1c54(0x171)),
          this["background"][_0x1b1c54(0x167)](),
          this[_0x1b1c54(0x176)]["destroy"]();
      });
  }
}
