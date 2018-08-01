'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo2 = function (_Component) {
    _inherits(Demo2, _Component);

    function Demo2(props) {
        _classCallCheck(this, Demo2);

        var _this = _possibleConstructorReturn(this, (Demo2.__proto__ || Object.getPrototypeOf(Demo2)).call(this, props));

        _this.onSave = function (key, localeList) {
            _this.setState(_defineProperty({}, key, localeList));
        };

        _this.state = {
            locale: [{
                locale: "zh-cn", label: "中文", value: ""
            }, {
                locale: "zh-en", label: "英文", value: "aaa"
            }, {
                locale: "zh-tw", label: "台湾", value: ""
            }],
            locale2: [{
                locale: "zh-cn", label: "中文", value: ""
            }, {
                locale: "zh-en", label: "英文", value: "123"
            }, {
                locale: "zh-tw", label: "台湾", value: "456"
            }]
        };
        return _this;
    }

    _createClass(Demo2, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                locale = _state.locale,
                locale2 = _state.locale2;

            return _react2.default.createElement(
                'div',
                { className: 'demoPadding' },
                _react2.default.createElement(_index2.default, { className: 'input1', locale: 'zh-en', localeList: locale, onSave: function onSave(data) {
                        _this2.onSave("locale", data);
                    } }),
                _react2.default.createElement(_index2.default, { className: 'input2', locale: 'zh-tw', localeList: locale2, onSave: function onSave(data) {
                        _this2.onSave("locale1", data);
                    } })
            );
        }
    }]);

    return Demo2;
}(_react.Component);

exports.default = Demo2;