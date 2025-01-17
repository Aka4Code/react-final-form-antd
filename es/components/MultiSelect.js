"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectField = exports.RadioField = void 0;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Option = _antd.Select.Option;
var RadioGroup = _antd.Radio.Group;
var RadioButton = _antd.Radio.Button;

var getEmptyArr = function getEmptyArr() {};

var withOptions = function withOptions(OptionType, getType) {
  return function (Component) {
    var _class, _temp;

    return _temp = _class =
    /*#__PURE__*/
    function (_React$PureComponent) {
      _inherits(_class, _React$PureComponent);

      function _class() {
        var _getPrototypeOf2;

        var _this;

        _classCallCheck(this, _class);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_class)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _this.initContainerRef = function (r) {
          _this.container = r;
        };

        _this.getContainerRef = function () {
          return _this.container;
        };

        return _this;
      }

      _createClass(_class, [{
        key: "render",
        value: function render() {
          var props = this.props;

          if (getType) {
            OptionType = getType(props);
          }

          var valueKey = props.valueKey;
          var labelKey = props.labelKey;
          var optionsKey = props.optionsKey;
          var options = props[optionsKey] || getEmptyArr();
          return _react["default"].createElement("div", null, _react["default"].createElement("div", {
            ref: this.initContainerRef
          }), _react["default"].createElement(Component, _extends({
            getPopupContainer: this.getContainerRef
          }, props), options.map(function (_ref, key) {
            var value = _ref[valueKey],
                label = _ref[labelKey],
                rest = _objectWithoutProperties(_ref, [valueKey, labelKey].map(_toPropertyKey));

            return _react["default"].createElement(OptionType, _extends({}, rest, {
              key: key,
              value: String(value)
            }), label);
          })));
        }
      }]);

      return _class;
    }(_react["default"].PureComponent), _class.defaultProps = {
      valueKey: "value",
      labelKey: "label",
      optionsKey: "options"
    }, _temp;
  };
};

var RadioField = withOptions(null, function (_ref2) {
  var button = _ref2.button;
  return button ? RadioButton : _antd.Radio;
})(RadioGroup);
exports.RadioField = RadioField;
var SelectField = withOptions(Option)(_antd.Select);
exports.SelectField = SelectField;