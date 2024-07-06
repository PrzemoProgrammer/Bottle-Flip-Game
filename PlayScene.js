const _0x2de2e0 = _0x2020;
function _0x4b52() {
  const _0x2fb06f = [
    "addBestScoreText",
    "bestScoreText",
    "input",
    "19183670FDgjMp",
    "scene",
    "isStanding",
    "style",
    "load",
    "velocity",
    "isTouched",
    "update",
    "angle",
    "./assets/floor.png",
    "resize",
    "addBody",
    "idle",
    "BEST:\x20",
    "1598569TTQXkA",
    "366530mbwGeX",
    "log",
    "addDragEvents",
    "hitFloor",
    "displayHeight",
    "hideLoadingScreen",
    "60px",
    "image",
    "dragstart",
    "width",
    "getElementById",
    "2197233zIniRm",
    "addFloor",
    "text",
    "setItem",
    "matter",
    "startOpenAnimTween",
    "setOrigin",
    "pointerout",
    "soft",
    "startDragY",
    "add",
    "remove",
    "Back.in",
    "1DaBbFQ",
    "indicator",
    "./assets/background.png",
    "create",
    "tweens",
    "6foYDBa",
    "floor",
    "addBodies",
    "TEST",
    "addBottle",
    "Arial,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
    "restart",
    "555440FGnvGP",
    "handleCollide",
    "transform",
    "grab",
    "1296728EVTQJl",
    "1409508fSibAg",
    "delayedCall",
    "hover",
    "cursorController",
    "bottle",
    "height",
    "body",
    "setScale",
    "scale",
    "4mhPqaL",
    "game",
    "Back.out",
    "config",
    "loading_page",
    "background",
    "canFlip",
    "floorBody",
    "addBackground",
    "PlayScene",
    "scoreText",
    "addScoreText",
    "bestScore",
    "setDraggable",
    "destroy",
    "setDisplaySize",
  ];
  _0x4b52 = function () {
    return _0x2fb06f;
  };
  return _0x4b52();
}
(function (_0x545a45, _0x4a0377) {
  const _0x326c51 = _0x2020,
    _0x4e562a = _0x545a45();
  while (!![]) {
    try {
      const _0x300d1c =
        (-parseInt(_0x326c51(0x177)) / 0x1) *
          (parseInt(_0x326c51(0x133)) / 0x2) +
        -parseInt(_0x326c51(0x16a)) / 0x3 +
        (parseInt(_0x326c51(0x13d)) / 0x4) *
          (-parseInt(_0x326c51(0x15f)) / 0x5) +
        (parseInt(_0x326c51(0x128)) / 0x6) *
          (-parseInt(_0x326c51(0x15e)) / 0x7) +
        parseInt(_0x326c51(0x12f)) / 0x8 +
        parseInt(_0x326c51(0x134)) / 0x9 +
        parseInt(_0x326c51(0x150)) / 0xa;
      if (_0x300d1c === _0x4a0377) break;
      else _0x4e562a["push"](_0x4e562a["shift"]());
    } catch (_0x1e62a3) {
      _0x4e562a["push"](_0x4e562a["shift"]());
    }
  }
})(_0x4b52, 0x70c89);
let score = 0x0,
  bestScore = Number(localStorage["getItem"](_0x2de2e0(0x149))) || 0x0;
function _0x2020(_0x573059, _0x4c3463) {
  const _0x4b52b3 = _0x4b52();
  return (
    (_0x2020 = function (_0x2020b4, _0xea8979) {
      _0x2020b4 = _0x2020b4 - 0x127;
      let _0x1d9dea = _0x4b52b3[_0x2020b4];
      return _0x1d9dea;
    }),
    _0x2020(_0x573059, _0x4c3463)
  );
}
class PlayScene extends Phaser["Scene"] {
  constructor() {
    const _0x1ffe8a = _0x2de2e0;
    super(_0x1ffe8a(0x146));
  }
  ["preload"]() {
    const _0x26a335 = _0x2de2e0;
    this[_0x26a335(0x154)]["image"](_0x26a335(0x142), _0x26a335(0x179)),
      this["load"][_0x26a335(0x166)](_0x26a335(0x138), "./assets/bottle.png"),
      this["load"][_0x26a335(0x166)](_0x26a335(0x129), _0x26a335(0x159));
  }
  [_0x2de2e0(0x17a)](_0x2c87b9) {
    const _0x1a6432 = _0x2de2e0;
    (this["gw"] = this[_0x1a6432(0x13e)][_0x1a6432(0x140)][_0x1a6432(0x168)]),
      (this["gh"] = this[_0x1a6432(0x13e)][_0x1a6432(0x140)][_0x1a6432(0x139)]),
      (this[_0x1a6432(0x173)] = 0x0),
      (this["cursorController"] = new CursorController(this)),
      (this["background"] = this[_0x1a6432(0x145)]()),
      (this[_0x1a6432(0x147)] = this[_0x1a6432(0x148)]()),
      (this[_0x1a6432(0x14e)] = this[_0x1a6432(0x14d)]()),
      (this["floor"] = this["addFloor"]()),
      (this[_0x1a6432(0x138)] = this[_0x1a6432(0x12c)]()),
      this[_0x1a6432(0x161)]();
    const _0x3f0f4c = () => {
      const _0x30f3c7 = _0x1a6432;
      _0x2c87b9 != _0x30f3c7(0x172)
        ? this[_0x30f3c7(0x16f)]()
        : this[_0x30f3c7(0x138)]["createTween"](() => {
            const _0x3f91cf = _0x30f3c7;
            this[_0x3f91cf(0x12a)](), this[_0x3f91cf(0x130)]();
          });
    };
    _0x2c87b9 != _0x1a6432(0x172)
      ? this["hideLoadingScreen"](_0x3f0f4c)
      : _0x3f0f4c();
  }
  [_0x2de2e0(0x157)]() {
    const _0x5c9770 = _0x2de2e0;
    Math["abs"](this[_0x5c9770(0x138)][_0x5c9770(0x158)]) > 0xa0 &&
      (this[_0x5c9770(0x138)]["hasFlippedInAir"] = !![]);
  }
  [_0x2de2e0(0x145)]() {
    const _0x586910 = _0x2de2e0;
    return this[_0x586910(0x174)]
      [_0x586910(0x166)](0x0, 0x0, _0x586910(0x142))
      [_0x586910(0x170)](0x0, 0x0)
      [_0x586910(0x14c)](this["gw"], this["gh"]);
  }
  ["addScoreText"]() {
    const _0x45328c = _0x2de2e0,
      _0xf4a705 = { fontFamily: _0x45328c(0x12d), fontSize: _0x45328c(0x165) };
    return this[_0x45328c(0x174)]
      ["text"](0xa, 0xa, "SCORE:\x20" + score, _0xf4a705)
      [_0x45328c(0x170)](0x0, 0x0);
  }
  [_0x2de2e0(0x14d)]() {
    const _0x4185a5 = _0x2de2e0,
      _0x34c743 = { fontFamily: _0x4185a5(0x12d), fontSize: _0x4185a5(0x165) };
    return this[_0x4185a5(0x174)]
      [_0x4185a5(0x16c)](
        this["gw"] - 0xa,
        0xa,
        _0x4185a5(0x15d) + bestScore,
        _0x34c743
      )
      ["setOrigin"](0x1, 0x0);
  }
  [_0x2de2e0(0x16b)]() {
    const _0x4abbd4 = _0x2de2e0,
      _0x5672d5 = this[_0x4abbd4(0x174)]
        [_0x4abbd4(0x166)](0x1cc, this["gh"], _0x4abbd4(0x129))
        [_0x4abbd4(0x170)](0.5, 0x1);
    return _0x5672d5;
  }
  ["addBottle"]() {
    const _0xc7d983 = _0x2de2e0,
      _0x254969 = new Bottle(
        this,
        this["gw"] / 0x2,
        this[_0xc7d983(0x129)]["y"],
        "bottle"
      );
    return (
      (_0x254969["y"] -= _0x254969[_0xc7d983(0x139)] / 0x2 + 0x92),
      this[_0xc7d983(0x14f)][_0xc7d983(0x14a)](_0x254969),
      _0x254969["on"]("pointerover", (_0x878fd8) => {
        const _0x32e495 = _0xc7d983;
        if (!this[_0x32e495(0x138)][_0x32e495(0x143)]) return;
        this[_0x32e495(0x137)][_0x32e495(0x178)]();
      }),
      _0x254969["on"](_0xc7d983(0x171), (_0x9bff83) => {
        const _0x5de5cf = _0xc7d983;
        if (!this[_0x5de5cf(0x138)]["canFlip"]) return;
        this[_0x5de5cf(0x137)][_0x5de5cf(0x15c)]();
      }),
      _0x254969
    );
  }
  [_0x2de2e0(0x162)]() {
    const _0x45975e = _0x2de2e0;
    this[_0x45975e(0x138)][_0x45975e(0x152)]() &&
      this[_0x45975e(0x138)]["isTouched"] &&
      ((this[_0x45975e(0x138)]["isTouched"] = ![]),
      this["time"][_0x45975e(0x135)](0x7d0, () => {
        const _0x7f97b3 = _0x45975e;
        if (this[_0x7f97b3(0x138)][_0x7f97b3(0x152)]())
          this[_0x7f97b3(0x138)]["hasFlippedInAir"] && score++,
            score > bestScore &&
              ((bestScore = score),
              localStorage[_0x7f97b3(0x16d)]("bestScore", bestScore)),
            this[_0x7f97b3(0x151)][_0x7f97b3(0x12e)]("soft");
        else
          this[_0x7f97b3(0x138)][_0x7f97b3(0x13a)][_0x7f97b3(0x155)]["y"] ===
            0x0 &&
            this[_0x7f97b3(0x138)][_0x7f97b3(0x156)] &&
            this[_0x7f97b3(0x151)]["restart"](_0x7f97b3(0x172));
      })),
      this["bottle"][_0x45975e(0x13a)][_0x45975e(0x155)]["y"] === 0x0 &&
        this[_0x45975e(0x138)][_0x45975e(0x156)] &&
        this["scene"][_0x45975e(0x12e)](_0x45975e(0x172));
  }
  [_0x2de2e0(0x161)]() {
    const _0x25d962 = _0x2de2e0;
    this[_0x25d962(0x14f)]["on"](_0x25d962(0x136), (_0x37335c) =>
      console[_0x25d962(0x160)](0xd3ed78e)
    ),
      this[_0x25d962(0x14f)]["on"](
        _0x25d962(0x167),
        (_0x10dece) => (
          this[_0x25d962(0x137)][_0x25d962(0x132)](),
          (this[_0x25d962(0x173)] = _0x10dece["y"])
        )
      ),
      this[_0x25d962(0x14f)]["on"]("dragend", (_0x33ef5a) => {
        const _0x21eed0 = _0x25d962;
        this[_0x21eed0(0x137)][_0x21eed0(0x15c)](),
          this[_0x21eed0(0x138)]["flip"](_0x33ef5a["y"]),
          (this["bottle"][_0x21eed0(0x156)] = !![]);
      });
  }
  ["addBodies"]() {
    const _0x580c68 = _0x2de2e0;
    this[_0x580c68(0x138)][_0x580c68(0x15b)](),
      (this[_0x580c68(0x144)] = this[_0x580c68(0x16e)][_0x580c68(0x174)][
        "rectangle"
      ](
        this["gw"] / 0x2,
        this["gh"] - 0x28,
        this[_0x580c68(0x129)]["displayWidth"],
        this[_0x580c68(0x129)][_0x580c68(0x163)],
        { isStatic: !![] }
      ));
  }
  [_0x2de2e0(0x130)]() {
    const _0x53b203 = _0x2de2e0;
    this[_0x53b203(0x138)]["setOnCollideActive"](() =>
      this[_0x53b203(0x162)]()
    );
  }
  [_0x2de2e0(0x16f)]() {
    const _0x2b25a9 = _0x2de2e0;
    this["bottle"]["setScale"](0.1),
      this["floor"][_0x2b25a9(0x13b)](0.1),
      this["scoreText"]["setScale"](0.1),
      this[_0x2b25a9(0x14e)][_0x2b25a9(0x13b)](0.1),
      this["tweens"][_0x2b25a9(0x174)]({
        targets: this["bottle"],
        ease: _0x2b25a9(0x13f),
        duration: 0x3e8,
        scale: 0x1,
        onComplete: () => {
          const _0x9de045 = _0x2b25a9;
          (this[_0x9de045(0x138)][_0x9de045(0x143)] = !![]),
            this[_0x9de045(0x12a)](),
            this[_0x9de045(0x130)]();
        },
      }),
      this[_0x2b25a9(0x127)][_0x2b25a9(0x174)]({
        targets: this[_0x2b25a9(0x129)],
        ease: _0x2b25a9(0x13f),
        duration: 0x320,
        scale: 0x1,
      }),
      this["tweens"][_0x2b25a9(0x174)]({
        targets: [this["bestScoreText"], this["scoreText"]],
        ease: _0x2b25a9(0x13f),
        duration: 0x2bc,
        scale: 0x1,
      });
  }
  [_0x2de2e0(0x164)](_0x299132) {
    const _0x16ae26 = _0x2de2e0,
      _0xf5e243 = document[_0x16ae26(0x169)](_0x16ae26(0x141));
    this[_0x16ae26(0x127)][_0x16ae26(0x174)]({
      targets: _0xf5e243,
      scale: { from: 0x1, to: 0x0 },
      ease: _0x16ae26(0x176),
      duration: 0x258,
      onUpdate: (_0x57a58e) => {
        const _0x459b84 = _0x16ae26,
          _0x493621 = _0x57a58e["getValue"]();
        _0xf5e243[_0x459b84(0x153)][_0x459b84(0x131)] =
          "scale(" + _0x493621 + ")";
      },
      onComplete: () => {
        const _0x36448c = _0x16ae26;
        _0x299132(),
          _0xf5e243[_0x36448c(0x175)](),
          this[_0x36448c(0x13c)][_0x36448c(0x15a)](this["gw"], this["gh"]);
      },
    });
  }
  ["addTestMode"]() {
    const _0x282bd1 = _0x2de2e0,
      _0x36232a = {
        fontFamily:
          "Georgia,\x20\x22Goudy\x20Bookletter\x201911\x22,\x20Times,\x20serif",
        fontSize: "100px",
      };
    this[_0x282bd1(0x174)]
      [_0x282bd1(0x16c)](
        this["gw"] / 0x2,
        this["gh"] / 0x2 - 0x64,
        _0x282bd1(0x12b),
        _0x36232a
      )
      [_0x282bd1(0x170)](0x0, 0x0),
      this[_0x282bd1(0x174)]
        [_0x282bd1(0x16c)](
          this["gw"] / 0x2,
          this["gh"] / 0x2 + 0x64,
          _0x282bd1(0x12b),
          _0x36232a
        )
        ["setOrigin"](0x0, 0x0),
      this["time"][_0x282bd1(0x135)](0x2328, () => {
        const _0x3067e6 = _0x282bd1;
        console[_0x3067e6(0x160)]("DESTROYED"),
          this[_0x3067e6(0x142)][_0x3067e6(0x14b)](),
          this[_0x3067e6(0x138)][_0x3067e6(0x14b)]();
      });
  }
}
