'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 默认的模态框
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var FormControl = function (_Component) {
    _inherits(FormControl, _Component);

    function FormControl(props) {
        _classCallCheck(this, FormControl);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.onChange = function (e) {
            _this.props.onChange(e.target.value);
        };

        _this.state = {};
        return _this;
    }

    FormControl.prototype.render = function render() {
        var classes = 'u-form-control';
        if (this.props.className) {
            classes = 'u-form-control ' + this.props.className;
        }
        return _react2["default"].createElement('input', _extends({}, this.props, { className: classes, onChange: this.onChange }));
    };

    return FormControl;
}(_react.Component);

exports["default"] = FormControl;
module.exports = exports['default'];