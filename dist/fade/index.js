"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _useObserver = _interopRequireDefault(require("../hooks/useObserver"));
require("./Style.css");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// props
// delay : default 1, unit: s
//       : 이벤트 시작 시간 ( 초 )
// duration : default 1, unit : s
//          : 이벤트 진행 시간 ( 초 )
// type : default opacity, [ opacity, top, bottom, left, right ]
//      : fade 유형
// isRepeat : default false
//          : 반복 설정
// translate : default 100px,
//           : 이벤트 거리
var Fade = function Fade(_ref) {
  var _ref$delay = _ref.delay,
    delay = _ref$delay === void 0 ? 1 : _ref$delay,
    _ref$duration = _ref.duration,
    duration = _ref$duration === void 0 ? 1 : _ref$duration,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? "opacity" : _ref$type,
    _ref$isRepeat = _ref.isRepeat,
    isRepeat = _ref$isRepeat === void 0 ? false : _ref$isRepeat,
    _ref$translate = _ref.translate,
    translate = _ref$translate === void 0 ? "100px" : _ref$translate,
    children = _ref.children;
  var fadeRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isActive = _useState2[0],
    setIsActive = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isFirst = _useState4[0],
    setIsFirst = _useState4[1];
  (0, _useObserver.default)({
    target: fadeRef,
    onIntersect: function onIntersect(_ref2) {
      var _ref3 = _slicedToArray(_ref2, 1),
        entry = _ref3[0];
      if (entry.isIntersecting) {
        setTimeout(function () {
          setIsActive(entry.isIntersecting);
        }, [delay * 1000]);
      } else {
        setIsActive(false);
      }
    }
  });
  (0, _react.useEffect)(function () {
    if (isActive && !isRepeat) {
      setIsFirst(true);
    } else if (isRepeat) {
      setIsFirst(false);
    }
  }, [isActive, isRepeat]);
  var transform = {
    opacity: "",
    top: "translateY(-".concat(translate, ")"),
    bottom: "translateY(".concat(translate, ")"),
    left: "translateX(-".concat(translate, ")"),
    right: "translateX(".concat(translate, ")")
  };
  var activeStyle = {
    transition: "transform ".concat(duration, "s, opacity ").concat(duration, "s"),
    opacity: "1"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "aniation_container",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "animation_fade",
      style: isActive || isFirst ? _objectSpread({}, activeStyle) : {
        transform: transform[type],
        transition: "transform ".concat(duration, "s, opacity ").concat(duration, "s")
      },
      children: children
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "animation_trigger",
      ref: fadeRef
    })]
  });
};
var _default = Fade;
exports.default = _default;