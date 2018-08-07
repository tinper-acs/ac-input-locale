'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBee = require('tinper-bee');

var _beeForm = require('bee-form');

var _beeForm2 = _interopRequireDefault(_beeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormItem = _beeForm2.default.FormItem;


var propTypes = {
    className: _propTypes2.default.string,
    onSave: _propTypes2.default.func,
    onCancel: _propTypes2.default.func,

    locale: _propTypes2.default.string,
    localeList: _propTypes2.default.array
};

var defaultProps = {
    classnames: ''
};

var AcInputLocale = function (_Component) {
    _inherits(AcInputLocale, _Component);

    function AcInputLocale(props) {
        _classCallCheck(this, AcInputLocale);

        var _this = _possibleConstructorReturn(this, (AcInputLocale.__proto__ || Object.getPrototypeOf(AcInputLocale)).call(this, props));

        _initialiseProps.call(_this);

        var locale = props.locale,
            localeList = props.localeList;

        var obj = localeList.find(function (da) {
            return da.locale == locale;
        });
        _this.state = {
            value: _this.getListToMap(localeList),
            localeValue: obj.value ? obj.value : ""
        };
        return _this;
    }

    _createClass(AcInputLocale, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.localeList != this.props.localeList) {
                this.setState({
                    value: this.getListToMap(nextProps.localeList)
                });
            }
            if (nextProps.locale != this.props.locale) {
                this.setState({
                    localeValue: this.state.value[nextProps.locale].value
                });
            }
        }
    }, {
        key: 'getListToMap',
        value: function getListToMap(localeList) {
            var value = {};
            localeList.forEach(function (da) {
                value[da.locale] = da;
            });
            return JSON.parse(JSON.stringify(value));
        }
    }, {
        key: 'getPopContent',
        value: function getPopContent() {
            var _this2 = this;

            var localeList = this.props.localeList;
            var _value = this.state.value;

            if (!localeList) return null;
            return _react2.default.createElement(
                'div',
                { className: 'popconfirm-content' },
                _react2.default.createElement(
                    _beeForm2.default,
                    { className: 'form' },
                    localeList.map(function (da, i) {
                        return _react2.default.createElement(
                            FormItem,
                            { key: "form_item_" + i },
                            _react2.default.createElement(
                                _tinperBee.Label,
                                null,
                                da.label
                            ),
                            _react2.default.createElement(_tinperBee.FormControl, { placeholder: '\u8BF7\u8F93\u5165...', onChange: function onChange(v) {
                                    var _state = _this2.state,
                                        value = _state.value,
                                        locale = _state.locale;

                                    var newData = JSON.parse(JSON.stringify(da));
                                    newData.value = v;
                                    value[da.locale] = newData;
                                    _this2.setState({
                                        value: value
                                    });
                                },
                                value: _value[da.locale] && _value[da.locale].value
                            })
                        );
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var localeValue = this.state.localeValue;
            var className = this.props.className;

            return _react2.default.createElement(
                'div',
                { className: 'ac-input-locale ' + (className ? className : "") },
                _react2.default.createElement(_tinperBee.FormControl, {
                    className: 'input',
                    value: localeValue,
                    ref: function ref(input) {
                        _this3.textInput = input;
                    }
                }),
                _react2.default.createElement(
                    _tinperBee.Popconfirm,
                    { className: 'popconfirm', trigger: 'click', placement: 'right',
                        onCancel: this.onCancel, onClose: this.onClose,
                        content: this.getPopContent() },
                    _react2.default.createElement('div', { className: 'input-icon' })
                )
            );
        }
    }]);

    return AcInputLocale;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
    var _this4 = this;

    this.onCancel = function () {
        _this4.props.onCancel && _this4.props.onCancel();
    };

    this.onClose = function () {
        var _props = _this4.props,
            locale = _props.locale,
            localeList = _props.localeList;
        var value = _this4.state.value;

        _this4.setState({
            localeValue: value[locale].value
        });
        localeList.forEach(function (da) {
            da.value = value[da.locale].value;
        });
        _this4.props.onSave && _this4.props.onSave(value);
    };
};

AcInputLocale.propTypes = propTypes;
AcInputLocale.defaultProps = defaultProps;

exports.default = AcInputLocale;