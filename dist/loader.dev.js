"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = myImageLoader;

function myImageLoader(_ref) {
  var src = _ref.src,
      width = _ref.width,
      quality = _ref.quality;

  if (src.startsWith('https://images.pexels.com')) {
    return src;
  }

  return "https://nextjsportfolio.com/".concat(src, "?w=").concat(width, "&q=").concat(quality || 75);
}
//# sourceMappingURL=loader.dev.js.map
