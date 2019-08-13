"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  CheckboxGroupField: true,
  LazyTextField: true,
  SelectField: true,
  CheckboxField: true,
  RadioField: true,
  TextField: true,
  TextAreaField: true,
  SwitchField: true,
  NumberField: true,
  SliderField: true
};
exports.SliderField = exports.NumberField = exports.SwitchField = exports.TextAreaField = exports.TextField = exports.RadioField = exports.CheckboxField = exports.SelectField = exports.LazyTextField = exports.CheckboxGroupField = void 0;

var _antd = require("antd");

var _BaseComponent = _interopRequireDefault(require("./components/BaseComponent"));

var _MultiSelect = require("./components/MultiSelect");

var _mapError = _interopRequireWildcard(require("./components/mapError"));

var _DatePicker = require("./components/DatePicker");

Object.keys(_DatePicker).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _DatePicker[key];
    }
  });
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TextArea = _antd.Input.TextArea;
var CheckboxGroup = _antd.Checkbox.Group;

var defaultTo = function defaultTo(value, d) {
  if (!value && value !== 0) return d;
  return value;
};

var eventMap = (0, _mapError.customMap)(function (_ref) {
  var _onChange = _ref.input.onChange;
  return {
    onChange: function onChange(v) {
      return _onChange(v.target.value);
    }
  };
});
var checkboxGroupMap = (0, _mapError.customMap)(function (_ref2) {
  var _ref2$input = _ref2.input,
      onChange = _ref2$input.onChange,
      _ref2$input$value = _ref2$input.value,
      value = _ref2$input$value === void 0 ? [] : _ref2$input$value;
  value = defaultTo(value, []);
  return {
    onChange: onChange,
    value: value
  };
});
var sliderMap = (0, _mapError.customMap)(function (_ref3) {
  var _ref3$input = _ref3.input,
      onChange = _ref3$input.onChange,
      _ref3$input$value = _ref3$input.value,
      value = _ref3$input$value === void 0 ? 0 : _ref3$input$value,
      range = _ref3.range,
      _ref3$min = _ref3.min,
      min = _ref3$min === void 0 ? 0 : _ref3$min,
      _ref3$max = _ref3.max,
      max = _ref3$max === void 0 ? 100 : _ref3$max;
  value = defaultTo(value, range ? [min, max] : 0);
  return {
    onAfterChange: onChange,
    value: value
  };
});
var textFieldMap = (0, _mapError.customMap)(function (_ref4) {
  var _onChange2 = _ref4.input.onChange;
  return {
    onChange: function onChange(v) {
      return _onChange2(v.nativeEvent.target.value);
    }
  };
});
var selectFieldMap = (0, _mapError.customMap)(function (_ref5) {
  var _ref5$input = _ref5.input,
      onChange = _ref5$input.onChange,
      value = _ref5$input.value,
      multiple = _ref5.multiple,
      options = _ref5.options;

  if (options && options.length > 0) {
    value = value ? value : multiple ? [options[0].value] : options[0].value;
  }

  return {
    dropdownMatchSelectWidth: true,
    value: value,
    style: {
      minWidth: 200
    }
  };
});

var bluredFieldMap = function bluredFieldMap(_ref6) {
  var _ref6$meta = _ref6.meta;
  _ref6$meta = _ref6$meta === void 0 ? {} : _ref6$meta;

  var touched = _ref6$meta.touched,
      error = _ref6$meta.error,
      warning = _ref6$meta.warning,
      valid = _ref6$meta.valid,
      _ref6$input = _ref6.input,
      value = _ref6$input.value,
      onChange = _ref6$input.onChange,
      props = _objectWithoutProperties(_ref6, ["meta", "input"]);

  return _objectSpread({}, props, {
    defaultValue: value,
    onBlur: function onBlur(e) {
      onChange(e.nativeEvent.target.value);
    },
    validateStatus: (0, _mapError.getValidateStatus)(touched, error, warning, valid),
    help: touched && (error || warning)
  });
};

var switchMap = (0, _mapError.customMap)(function (_ref7) {
  var value = _ref7.input.value;
  return {
    checked: value
  };
});
var CheckboxGroupField = (0, _BaseComponent["default"])(CheckboxGroup, checkboxGroupMap); // will trigger on change only onBlur
// usefull for performance reasons

exports.CheckboxGroupField = CheckboxGroupField;
var LazyTextField = (0, _BaseComponent["default"])(_antd.Input, bluredFieldMap);
exports.LazyTextField = LazyTextField;
var SelectField = (0, _BaseComponent["default"])(_MultiSelect.SelectField, selectFieldMap);
exports.SelectField = SelectField;
var CheckboxField = (0, _BaseComponent["default"])(_antd.Checkbox, eventMap);
exports.CheckboxField = CheckboxField;
var RadioField = (0, _BaseComponent["default"])(_MultiSelect.RadioField, eventMap);
exports.RadioField = RadioField;
var TextField = (0, _BaseComponent["default"])(_antd.Input, textFieldMap);
exports.TextField = TextField;
var TextAreaField = (0, _BaseComponent["default"])(TextArea, textFieldMap);
exports.TextAreaField = TextAreaField;
var SwitchField = (0, _BaseComponent["default"])(_antd.Switch, switchMap);
exports.SwitchField = SwitchField;
var NumberField = (0, _BaseComponent["default"])(_antd.InputNumber, _mapError["default"]);
exports.NumberField = NumberField;
var SliderField = (0, _BaseComponent["default"])(_antd.Slider, sliderMap);
exports.SliderField = SliderField;