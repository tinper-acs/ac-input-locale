'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _beeLayout = require('bee-layout');

var _beePanel = require('bee-panel');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

require('./demo.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CARET = _react2.default.createElement('i', { className: 'uf uf-arrow-down' });

var CARETUP = _react2.default.createElement('i', { className: 'uf uf-arrow-up' });

{
    demolist;
}

var Demo = function (_Component) {
    _inherits(Demo, _Component);

    function Demo(props) {
        _classCallCheck(this, Demo);

        var _this = _possibleConstructorReturn(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).call(this, props));

        _this.state = {
            open: false
        };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    _createClass(Demo, [{
        key: 'handleClick',
        value: function handleClick() {
            this.setState({ open: !this.state.open });
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                example = _props.example,
                code = _props.code,
                desc = _props.desc;

            var caret = this.state.open ? CARETUP : CARET;
            var text = this.state.open ? "隐藏代码" : "查看代码";

            var footer = _react2.default.createElement(
                _beeButton2.default,
                { shape: 'block', onClick: this.handleClick },
                caret,
                text
            );
            return _react2.default.createElement(
                _beeLayout.Col,
                { md: 12 },
                _react2.default.createElement(
                    'h3',
                    null,
                    title
                ),
                _react2.default.createElement(
                    'p',
                    null,
                    desc
                ),
                _react2.default.createElement(
                    _beePanel.Panel,
                    { collapsible: true, expanded: this.state.open, colors: 'bordered', header: example, footer: footer, footerStyle: { padding: 0 } },
                    _react2.default.createElement(
                        'pre',
                        null,
                        _react2.default.createElement(
                            'code',
                            { className: 'hljs javascript' },
                            code
                        )
                    )
                )
            );
        }
    }]);

    return Demo;
}(_react.Component);

var DemoGroup = function (_Component2) {
    _inherits(DemoGroup, _Component2);

    function DemoGroup(props) {
        _classCallCheck(this, DemoGroup);

        return _possibleConstructorReturn(this, (DemoGroup.__proto__ || Object.getPrototypeOf(DemoGroup)).call(this, props));
    }

    _createClass(DemoGroup, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                _beeLayout.Row,
                null,
                DemoArray.map(function (child, index) {

                    return _react2.default.createElement(Demo, { example: child.example, title: child.title, code: child.code, desc: child.desc, key: index });
                })
            );
        }
    }]);

    return DemoGroup;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(DemoGroup, null), document.getElementById('root'));