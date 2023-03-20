"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var useObserver = function useObserver(_ref) {
  var target = _ref.target,
    onIntersect = _ref.onIntersect,
    _ref$rootMargin = _ref.rootMargin,
    rootMargin = _ref$rootMargin === void 0 ? "0px" : _ref$rootMargin,
    _ref$threshold = _ref.threshold,
    threshold = _ref$threshold === void 0 ? 1.5 : _ref$threshold;
  (0, _react.useEffect)(function () {
    var observer;
    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root: null,
        rootMargin: rootMargin,
        target: target
      });
      observer.observe(target.current);
    }
    return function () {
      return observer && observer.disconnect();
    };
  }, [target, rootMargin, threshold]);
};
var _default = useObserver;
exports.default = _default;