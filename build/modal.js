'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBee = require('tinper-bee');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  onOk: _propTypes2["default"].func, //确定按钮钩子函数
  onCancel: _propTypes2["default"].func, //取消按钮钩子函数
  backdrop: _propTypes2["default"].bool, //是否弹出遮罩层/遮罩层点击是否触发关闭
  title: _propTypes2["default"].string, // modal标题
  okName: _propTypes2["default"].string, // modal确认按钮中文字内容
  cancelName: _propTypes2["default"].string, // modal取消按钮中文字内容
  showModal: _propTypes2["default"].bool, // 遮罩层显示
  close: _propTypes2["default"].func // 关闭弹框钩子函数
};

var defaultProps = {
  classnames: '',
  backdrop: true
};

var ModalWrap = function (_Component) {
  _inherits(ModalWrap, _Component);

  function ModalWrap(props) {
    _classCallCheck(this, ModalWrap);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      showModal: props.showModal,
      title: props.title,
      okName: props.okName,
      cancelName: props.cancelName,
      backdrop: props.backdrop,
      onOk: props.onOk,
      onCancel: props.onCancel
    };
    return _this;
  }

  ModalWrap.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var title = nextProps.title,
        okName = nextProps.okName,
        cancelName = nextProps.cancelName,
        backdrop = nextProps.backdrop,
        onOk = nextProps.onOk,
        onCancel = nextProps.onCancel,
        showModal = nextProps.showModal,
        close = nextProps.close;
    var _props = this.props,
        title1 = _props.title1,
        okName1 = _props.okName1,
        cancelName1 = _props.cancelName1,
        backdrop1 = _props.backdrop1,
        onOk1 = _props.onOk1,
        onCancel1 = _props.onCancel1,
        showModal1 = _props.showModal1,
        close1 = _props.close1;


    if (title !== title1 || okName !== okName1 || cancelName !== cancelName1 || backdrop !== backdrop1 || onOk !== onOk1 || onCancel !== onCancel1 || showModal !== showModal1 || close !== close1) {
      this.setState({
        title: title,
        okName: okName,
        cancelName: cancelName,
        backdrop: backdrop,
        onOk: onOk,
        onCancel: onCancel,
        showModal: showModal,
        close: close
      });
    }
  };

  ModalWrap.prototype.render = function render() {
    var _state = this.state,
        title = _state.title,
        okName = _state.okName,
        cancelName = _state.cancelName,
        backdrop = _state.backdrop,
        onOk = _state.onOk,
        onCancel = _state.onCancel,
        showModal = _state.showModal,
        close = _state.close;

    return _react2["default"].createElement(
      _tinperBee.Modal,
      {
        show: showModal,
        width: '600',
        backdrop: backdrop,
        className: 'ac-input-locale-modal',
        onHide: close,
        enforceFocus: false
      },
      _react2["default"].createElement(
        _tinperBee.Modal.Header,
        { closeButton: true },
        _react2["default"].createElement(
          _tinperBee.Modal.Title,
          { className: 'modal-title' },
          title
        )
      ),
      _react2["default"].createElement(
        _tinperBee.Modal.Body,
        null,
        this.props.children
      ),
      _react2["default"].createElement(
        _tinperBee.Modal.Footer,
        null,
        _react2["default"].createElement(
          _tinperBee.Button,
          { bordered: true, className: 'cancel-qx', onClick: onCancel },
          cancelName
        ),
        _react2["default"].createElement(
          _tinperBee.Button,
          { colors: 'primary', onClick: onOk },
          okName
        )
      )
    );
  };

  return ModalWrap;
}(_react.Component);

ModalWrap.propTypes = propTypes;
ModalWrap.defaultProps = defaultProps;

exports["default"] = ModalWrap;
module.exports = exports['default'];