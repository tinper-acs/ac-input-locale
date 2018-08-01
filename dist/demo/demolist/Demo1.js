'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../../dist/index');

var _index2 = _interopRequireDefault(_index);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Demo1 = function (_Component) {
    _inherits(Demo1, _Component);

    function Demo1(props) {
        _classCallCheck(this, Demo1);

        var _this = _possibleConstructorReturn(this, (Demo1.__proto__ || Object.getPrototypeOf(Demo1)).call(this, props));

        _this.onSave = function (localeList) {
            _this.setState({
                localeList: localeList
            });
        };

        _this.onClick = function (key) {
            _this.setState({
                sysLocale: key
            });
        };

        _this.state = {
            sysLocale: "zh-en",
            locale: [{
                locale: "zh-cn", label: "中文", value: ""
            }, {
                locale: "zh-en", label: "英文", value: "english"
            }, {
                locale: "zh-tw", label: "台湾", value: ""
            }]
        };
        return _this;
    }

    _createClass(Demo1, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                locale = _state.locale,
                sysLocale = _state.sysLocale;

            return _react2.default.createElement(
                'div',
                { className: 'demoPadding' },
                _react2.default.createElement(
                    'div',
                    { className: 'btn' },
                    _react2.default.createElement(
                        _beeButton2.default,
                        { onClick: function onClick() {
                                _this2.onClick("zh-tw");
                            } },
                        '[\u53F0\u6E7E]'
                    ),
                    _react2.default.createElement(
                        _beeButton2.default,
                        { onClick: function onClick() {
                                _this2.onClick("zh-en");
                            } },
                        '[\u82F1\u8BED]'
                    ),
                    _react2.default.createElement(
                        _beeButton2.default,
                        { onClick: function onClick() {
                                _this2.onClick("zh-cn");
                            } },
                        '[\u4E2D\u6587]'
                    )
                ),
                _react2.default.createElement(_index2.default, { colors: 'brand', locale: sysLocale, localeList: locale, onSave: this.onSave })
            );
        }
    }]);

    return Demo1;
}(_react.Component);

exports.default = Demo1;