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
var wordAnimate = {
  opacity: function opacity(_ref) {
    var duration = _ref.duration;
    return {
      animation: "opacity ".concat(duration, "s ease-in"),
      opacity: 1
    };
  },
  underline: function underline() {
    return {};
  },
  slide: function slide(_ref2) {
    var duration = _ref2.duration,
      idx = _ref2.idx;
    return {
      transform: "translate(0)",
      transition: "transform ".concat(duration + idx * 0.1, "s ease-in, opacity ").concat(duration + idx * 0.1, "s ease-in"),
      opacity: 1
    };
  },
  drop: function drop(_ref3) {
    var idx = _ref3.idx;
    return {
      opacity: 0,
      animation: "dropIn 0.30s forwards",
      animationDelay: "".concat(idx * 0.08, "s")
    };
  }
};
var defaultStyle = {
  opacity: function opacity() {
    return {
      opacity: 0
    };
  },
  underline: function underline() {
    return {
      opacity: 1
    };
  },
  slide: function slide(_ref4) {
    var option = _ref4.option;
    return {
      opacity: 0,
      transform: option.translate
    };
  },
  drop: function drop() {
    return {
      opacity: 0
    };
  }
};
var Word = function Word(_ref5) {
  var char = _ref5.char,
    type = _ref5.type,
    isActive = _ref5.isActive,
    wordAnimate = _ref5.wordAnimate,
    defaultStyle = _ref5.defaultStyle,
    option = _ref5.option;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isWordActive = _useState2[0],
    setIsWordActive = _useState2[1];
  var wordActiveEvent = function wordActiveEvent() {
    switch (type) {
      case "opacity":
        setTimeout(function () {
          setIsWordActive(true);
        }, Math.random() * 1000);
        break;
      default:
        setIsWordActive(true);
    }
  };
  (0, _react.useEffect)(function () {
    if (isActive) wordActiveEvent();else {
      setIsWordActive(false);
    }
  }, [isActive]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
    className: "animation_word",
    style: isWordActive ? _objectSpread({}, wordAnimate) : _objectSpread({}, defaultStyle),
    children: char
  });
};

/*
props
value : 출력할 문자열
delay : default 1, unit: s
      : 이벤트 시작 시간 ( 초 )
duration : default 1, unit : s
         : 이벤트 진행 시간 ( 초 )
type : default opacity, [ opacity, underline, slide, drop ]
     : fade 유형
isRepeat : default false
         : 반복 설정
option : default {}
       underLine : { 
         background: "red"
         height: "10px";
       }, 
       slide : {
        translate: "translateX(100px)"
       }

*/
var Text = function Text(_ref6) {
  var value = _ref6.value,
    _ref6$delay = _ref6.delay,
    delay = _ref6$delay === void 0 ? 1 : _ref6$delay,
    _ref6$duration = _ref6.duration,
    duration = _ref6$duration === void 0 ? 1 : _ref6$duration,
    _ref6$type = _ref6.type,
    type = _ref6$type === void 0 ? "opacity" : _ref6$type,
    _ref6$isRepeat = _ref6.isRepeat,
    isRepeat = _ref6$isRepeat === void 0 ? false : _ref6$isRepeat,
    _ref6$option = _ref6.option,
    option = _ref6$option === void 0 ? {} : _ref6$option;
  var textRef = (0, _react.useRef)();
  var underlineRef = (0, _react.useRef)();
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isActive = _useState4[0],
    setIsActive = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    isFirst = _useState6[0],
    setIsFirst = _useState6[1];
  var underlineEvent = function underlineEvent() {
    var underline = underlineRef.current;
    if (isActive || isFirst) {
      var style = Object.keys(option).map(function (key) {
        return "".concat(key, ": ").concat(option[key], ";");
      });
      style.push("width: 100%; transition: width ".concat(duration, "s"));
      underline.style = style.join("");
    } else {
      underline.style = "width: 0;";
    }
  };
  (0, _useObserver.default)({
    target: textRef,
    onIntersect: function onIntersect(_ref7) {
      var _ref8 = _slicedToArray(_ref7, 1),
        entry = _ref8[0];
      if (entry.isIntersecting) {
        setTimeout(function () {
          setIsActive(true);
        }, [delay * 1000]);
      } else if (isRepeat) {
        setIsActive(false);
      }
    }
  });
  (0, _react.useEffect)(function () {
    var underline = underlineRef.current;
    if (type === "underline") {
      underlineEvent();
    } else {
      underline.style = "width: 0;";
    }
  }, [isActive, isFirst]);
  (0, _react.useEffect)(function () {
    if (isActive && !isRepeat) {
      setIsFirst(true);
    } else if (isRepeat) {
      setIsFirst(false);
    }
  }, [isActive, isRepeat]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("span", {
    className: "animation_text",
    ref: textRef,
    children: [value.split("").map(function (char, idx) {
      return char === " " ? /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        children: char
      }, "".concat(char, "-").concat(idx)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(Word, {
        char: char,
        idx: idx,
        type: type,
        option: option,
        isActive: isActive || isFirst,
        wordAnimate: wordAnimate[type]({
          duration: duration,
          idx: idx
        }),
        defaultStyle: defaultStyle[type]({
          option: option
        })
      }, "".concat(char, "-").concat(idx));
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
      className: "animation_underline",
      ref: underlineRef
    })]
  });
};
var _default = Text;
exports.default = _default;