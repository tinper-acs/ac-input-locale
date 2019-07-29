'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tinperBee = require('tinper-bee');

var _FormControl = require('./FormControl.js');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _modal = require('./modal.js');

var _modal2 = _interopRequireDefault(_modal);

var _beeForm = require('bee-form');

var _beeForm2 = _interopRequireDefault(_beeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FormItem = _beeForm2["default"].FormItem;

var propTypes = {
  className: _propTypes2["default"].string,
  status: _propTypes2["default"].string,
  onOk: _propTypes2["default"].func, //确定按钮钩子函数
  onCancel: _propTypes2["default"].func, //取消按钮钩子函数
  locale: _propTypes2["default"].string.isRequired, //当前语种
  localeList: _propTypes2["default"].object.isRequired, //语种数组
  onChange: _propTypes2["default"].func, //文本框改变回掉
  isTextarea: _propTypes2["default"].bool, // 是否textarea 默认false
  modalLocale: _propTypes2["default"].object,
  backdrop: _propTypes2["default"].bool, //是否弹出遮罩层/遮罩层点击是否触发关闭
  required: _propTypes2["default"].bool, // 是否要求当前语种和系统语种必填
  isPopConfirm: _propTypes2["default"].bool, // 录入时是否是popconfirm,还是modal的样式
  showIcon: _propTypes2["default"].bool
};

var defaultProps = {
  classnames: '',
  status: 'preview',
  isTextarea: false,
  backdrop: true,
  required: false,
  isPopConfirm: false,
  showIcon: true
};

var getContent = function getContent(localeList) {
  return Object.keys(localeList).map(function (localeKey) {
    return _react2["default"].createElement(
      _tinperBee.Row,
      { key: 'preview' + localeKey, className: 'input-locale-text' },
      _react2["default"].createElement(
        'div',
        { className: 'input-locale-text-r' },
        localeList[localeKey].label,
        ':'
      ),
      _react2["default"].createElement(
        'div',
        { className: 'input-locale-text-l' },
        localeList[localeKey].value
      )
    );
  });
};

var AcInputLocale = function (_Component) {
  _inherits(AcInputLocale, _Component);

  function AcInputLocale(props) {
    _classCallCheck(this, AcInputLocale);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _initialiseProps.call(_this);

    var locale = props.locale,
        localeList = props.localeList,
        status = props.status,
        modalLocale = props.modalLocale,
        sysLocale = props.sysLocale,
        required = props.required,
        isPopConfirm = props.isPopConfirm;

    var localeValue = '';
    if (!locale) {
      locale = sysLocale || 'zh_CN';
    }
    Object.keys(localeList).forEach(function (localeKey) {
      if (localeKey === locale) {
        localeValue = localeList[localeKey].value;
      }
    });
    var modalLocaleTmp = _extends({}, {
      'zh_CN': {
        'title': '多语言设置',
        'okName': '保存',
        'cancelName': '取消',
        'localeFlag': '当前',
        'defaultFlag': '默认',
        'placeholder': '请输入...',
        'errorMsg': '不能为空',
        'currentLang': '当前语种',
        'defaultLang': '默认语种'
      },
      'en_US': {
        'title': 'Language Setting',
        'okName': 'save',
        'cancelName': 'cancel',
        'localeFlag': 'current',
        'defaultFlag': 'default',
        'placeholder': 'please input...',
        'errorMsg': 'Required',
        'currentLang': 'Current language',
        'defaultLang': 'Default language'
      },
      'zh_TW': {
        'title': '多語言設置',
        'okName': '保存',
        'cancelName': '取消',
        'localeFlag': '當前',
        'defaultFlag': '默認',
        'placeholder': '請輸入...',
        'errorMsg': '不能為空',
        'currentLang': '當前語種',
        'defaultLang': '默認語種'
      },
      'fr_FR': {
        'title': 'Programmation Multilingue',
        'okName': 'conservation',
        'cancelName': 'supprimer',
        'localeFlag': 'actuellement',
        'defaultFlag': 'Par défaut',
        'placeholder': 'S’il vous plaît, entrez....',
        'errorMsg': 'Champs obligatoires',
        'currentLang': 'Langue actuelle',
        'defaultLang': 'Langue par défaut'
      }
    }, modalLocale);
    _this.state = {
      localeList: localeList,
      localeValue: localeValue,
      sysLocale: sysLocale,
      locale: locale,
      status: status,
      required: required,
      showModal: false,
      showPop: false,
      isPopConfirm: isPopConfirm,
      modalLocale: modalLocaleTmp
    };
    _this.close = _this.close.bind(_this);
    _this.open = _this.open.bind(_this);
    _this.onOk = _this.onOk.bind(_this);
    _this.onCancel = _this.onCancel.bind(_this);
    return _this;
  }

  AcInputLocale.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // 语种列表改变，localeValue也要改变
    // 这里的判断是 对象，判断的是对象引用地址是否一样
    if (this.props.localeList !== nextProps.localeList) {
      var localeValue = '';
      var locale = nextProps.locale,
          localeList = nextProps.localeList;

      Object.keys(localeList).forEach(function (localeKey) {
        if (localeKey === locale) {
          localeValue = localeList[localeKey].value;
        }
      });
      this.setState({
        localeList: localeList,
        localeValue: localeValue,
        locale: locale
      });
    }

    // 只改变语种，不改变语种列表
    if (nextProps.locale !== this.props.locale && nextProps.localeList === this.props.localeList) {
      var _locale = nextProps.locale,
          sysLocale = nextProps.sysLocale;


      if (!_locale) {
        _locale = sysLocale || 'zh_CN';
      }

      var _localeValue = '';
      Object.keys(nextProps.localeList).forEach(function (localeKey) {
        if (localeKey === _locale) {
          _localeValue = nextProps.localeList[localeKey].value;
        }
      });
      this.setState({
        locale: _locale,
        localeValue: _localeValue
      });
    }
    // 改变状态
    if (nextProps.status !== this.props.status) {
      this.setState({
        status: nextProps.status
      });
    }
  };

  //校验处理


  //label左侧的渲染


  AcInputLocale.prototype.getPreviewElement = function getPreviewElement(localeValue, defaultValue, localeList) {
    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(
        'span',
        { className: 'view-title-content' },
        localeValue || defaultValue
      ),
      this.props.showIcon ? _react2["default"].createElement(
        _tinperBee.Popover,
        {
          placement: 'right',
          content: getContent(localeList),
          trigger: 'hover',
          id: 'right'
        },
        _react2["default"].createElement('i', { className: 'uf uf-globe' })
      ) : ''
    );
  };

  AcInputLocale.prototype.getLocaleNoFormElement = function getLocaleNoFormElement(localeList, modalLocale, locale) {
    var _this2 = this;

    return Object.keys(localeList).map(function (localeKey) {
      return _react2["default"].createElement(
        'div',
        { className: 'edit-panel edit-panel-all', key: localeKey },
        _react2["default"].createElement(
          FormItem,
          null,
          _react2["default"].createElement(
            'div',
            { className: 'u-form-item-label' },
            _react2["default"].createElement(
              _tinperBee.Label,
              { title: localeList[localeKey].label },
              _this2.isShowNoneLeftLable ? _this2.renderLabelLeft(localeKey) : null,
              localeList[localeKey].label,
              _this2.renderLabelright(localeKey)
            )
          ),
          _react2["default"].createElement(
            'div',
            { style: { 'display': 'inline-block', 'width': 'calc(100% - 130px)' } },
            _react2["default"].createElement(_FormControl2["default"], {
              placeholder: modalLocale[locale].placeholder,
              onChange: function onChange(v) {
                localeList = JSON.parse(JSON.stringify(localeList));
                localeList[localeKey].value = v;
                _this2.setState({
                  localeList: localeList
                });
              },
              value: localeList[localeKey].value
            })
          )
        )
      );
    });
  };

  AcInputLocale.prototype.getLocaleFormElement = function getLocaleFormElement(localeList, modalLocale, locale, getFieldProps, getFieldError) {
    var _this3 = this;

    return Object.keys(localeList).map(function (localeKey) {
      return _react2["default"].createElement(
        'div',
        { className: 'edit-panel edit-panel-all', key: localeKey },
        _react2["default"].createElement(
          FormItem,
          null,
          _react2["default"].createElement(
            'div',
            { className: 'u-form-item-label' },
            _react2["default"].createElement(
              _tinperBee.Label,
              { title: localeList[localeKey].label },
              _this3.isShowNoneLeftLable ? _this3.renderLabelLeft(localeKey) : null,
              localeList[localeKey].label,
              _this3.renderLabelright(localeKey)
            )
          ),
          _react2["default"].createElement(
            'div',
            { style: { 'display': 'inline-block', 'width': 'calc(100% - 130px)' } },
            _react2["default"].createElement(
              'div',
              null,
              _react2["default"].createElement(_FormControl2["default"], _extends({
                placeholder: modalLocale[locale].placeholder
              }, getFieldProps(_this3.props.inputId + "_" + localeKey, {
                validateTrigger: 'onBlur',
                initialValue: localeList[localeKey].value,
                rules: [{
                  required: localeList[localeKey].required, message: localeList[localeKey].errorMessage
                }],
                onChange: function onChange(v) {
                  localeList = JSON.parse(JSON.stringify(localeList));
                  localeList[localeKey].value = v;
                  _this3.setState({
                    localeList: localeList
                  });
                } }), {
                onClick: function onClick(e) {
                  e.stopPropagation();
                }
              })),
              _this3.props.showIcon ? _react2["default"].createElement('div', { className: 'input-icon', onClick: _this3.open }) : '',
              getFieldError(_this3.props.inputId + "_" + localeKey) ? _react2["default"].createElement(
                'span',
                { className: 'error uf uf-exc-t' },
                getFieldError(_this3.props.inputId + "_" + localeKey)
              ) : ''
            )
          )
        )
      );
    });
  };

  AcInputLocale.prototype.render = function render() {
    var _this4 = this;

    var self = this;
    var _props = this.props,
        className = _props.className,
        _onChange = _props.onChange,
        isTextarea = _props.isTextarea,
        backdrop = _props.backdrop,
        disabled = _props.disabled,
        forceSync = _props.forceSync;
    var _state = this.state,
        localeValue = _state.localeValue,
        locale = _state.locale,
        localeList = _state.localeList,
        status = _state.status,
        modalLocale = _state.modalLocale,
        sysLocale = _state.sysLocale,
        required = _state.required,
        isPopConfirm = _state.isPopConfirm;

    var defaultValue = void 0;
    if (localeList && localeList[sysLocale] && localeList[sysLocale].value) {
      defaultValue = localeList[sysLocale].value;
    }
    var formControlTypeOption = {};
    isTextarea ? formControlTypeOption = { componentClass: 'textarea' } : null;
    var getFieldProps = void 0,
        getFieldError = void 0;

    if (this.props.form) {
      // model弹窗校验数据加工
      var errMessage = modalLocale[locale] ? modalLocale[locale].errorMsg : "不能为空";
      for (var item in localeList) {
        if (item == locale || item == sysLocale) {
          localeList[item]["required"] = required === true;
          localeList[item]["errorMessage"] = localeList[item]["label"] + " " + errMessage;
        } else {
          localeList[item]["required"] = false;
          localeList[item]["errorMessage"] = localeList[item]["label"] + " " + errMessage;
        }
      }
      getFieldProps = this.props.form.getFieldProps;
      getFieldError = this.props.form.getFieldError;

      if (isPopConfirm) {
        return _react2["default"].createElement(
          'div',
          { className: 'ac-input-locale ' + (className ? className : null) },
          status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_FormControl2["default"], _extends({
              className: 'input-text',
              disabled: disabled
            }, formControlTypeOption, getFieldProps(this.props.inputId, {
              validateTrigger: 'onBlur',
              rules: [{
                validator: this.checkValidValue
              }],
              getValueProps: function getValueProps(value) {
                return {
                  value: localeValue
                };
              },
              initialValue: localeValue,
              onChange: function onChange(v) {
                Object.keys(localeList).forEach(function (localeKey) {
                  if (localeKey === locale) {
                    localeList[localeKey].value = v;
                  }
                });
                if (forceSync) localeList = self.forceSyncChange(localeList, v);
                _onChange && _onChange(localeList, v);
                _this4.setState({
                  localeValue: v,
                  localeList: localeList
                });
              } }), {
              onClick: function onClick(e) {
                e.stopPropagation();
              },
              ref: function ref(input) {
                _this4.textInput = input;
              }
            })),
            _react2["default"].createElement(
              _tinperBee.Popconfirm,
              {
                onClick: disabled ? function () {} : this.open,
                trigger: 'click',
                rootClose: true,
                placement: 'right',
                secondPlacement: 'bottom',
                className: 'ac-input-locale-popconfirm',
                onClose: this.onOk,
                onCancel: this.close,
                show: this.state.showPop
                // onClick={this.open}
                , onRootClose: this.close,
                content: this.getLocaleFormElement(localeList, modalLocale, locale, getFieldProps, getFieldError)
              },
              this.props.showIcon ? _react2["default"].createElement('div', { className: 'input-pop-icon uf uf-globe' }) : _react2["default"].createElement('span', null)
            ),
            getFieldError(this.props.inputId) ? _react2["default"].createElement(
              'span',
              { className: 'error uf uf-exc-t' },
              getFieldError(this.props.inputId)
            ) : ''
          )
        );
      }
      return _react2["default"].createElement(
        'div',
        { className: 'ac-input-locale ' + (className ? className : null) },
        status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(_FormControl2["default"], _extends({
            className: 'input-text',
            disabled: disabled
          }, formControlTypeOption, getFieldProps(this.props.inputId, {
            validateTrigger: 'onBlur',
            rules: [{
              validator: this.checkValidValue
            }],
            getValueProps: function getValueProps(value) {
              return {
                value: localeValue
              };
            },
            initialValue: localeValue,
            onChange: function onChange(v) {
              Object.keys(localeList).forEach(function (localeKey) {
                if (localeKey === locale) {
                  localeList[localeKey].value = v;
                }
              });
              if (forceSync) localeList = self.forceSyncChange(localeList, v);
              _onChange && _onChange(localeList, v);
              _this4.setState({
                localeValue: v,
                localeList: localeList
              });
            } }), {
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            ref: function ref(input) {
              _this4.textInput = input;
            }
          })),
          this.props.showIcon ? _react2["default"].createElement('div', { className: 'uf uf-globe input-icon', onClick: disabled ? function () {} : this.open }) : '',
          getFieldError(this.props.inputId) ? _react2["default"].createElement(
            'span',
            { className: 'error uf uf-exc-t' },
            getFieldError(this.props.inputId)
          ) : ''
        ),
        _react2["default"].createElement(
          _modal2["default"],
          {
            title: modalLocale[locale].title,
            showModal: this.state.showModal,
            backdrop: backdrop,
            onOk: this.onOk,
            onCancel: this.onCancel,
            okName: modalLocale[locale].okName,
            cancelName: modalLocale[locale].cancelName,
            close: this.close
          },
          this.getLocaleFormElement(localeList, modalLocale, locale, getFieldProps, getFieldError)
        )
      );
    } else {
      if (isPopConfirm) {
        return _react2["default"].createElement(
          'div',
          { className: 'ac-input-locale ' + (className ? className : null) },
          status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2["default"].createElement(
            'div',
            null,
            _react2["default"].createElement(_FormControl2["default"], _extends({
              className: 'input-text',
              value: localeValue
            }, formControlTypeOption, {
              onChange: function onChange(v) {
                Object.keys(localeList).forEach(function (localeKey) {
                  if (localeKey === locale) {
                    localeList[localeKey].value = v;
                  }
                });
                _onChange && _onChange(localeList, v);
                if (forceSync) localeList = self.forceSyncChange(localeList, v);
                _this4.setState({
                  localeValue: v,
                  localeList: localeList
                });
              },
              onClick: function onClick(e) {
                e.stopPropagation();
              },
              ref: function ref(input) {
                _this4.textInput = input;
              }
            })),
            _react2["default"].createElement(
              _tinperBee.Popconfirm,
              {
                trigger: 'click',
                rootClose: true,
                placement: 'right',
                defaultOverlayShown: false,
                secondPlacement: 'bottom',
                className: 'ac-input-locale-popconfirm',
                onClose: this.onOk,
                onCancel: this.close,
                show: this.state.showPop,
                onClick: this.open,
                onRootClose: this.close,
                content: this.getLocaleNoFormElement(localeList, modalLocale, locale)
              },
              _react2["default"].createElement('div', { className: 'input-pop-icon' })
            )
          )
        );
      }
      return _react2["default"].createElement(
        'div',
        { className: 'ac-input-locale ' + (className ? className : null) },
        status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2["default"].createElement(
          'div',
          null,
          _react2["default"].createElement(_FormControl2["default"], _extends({
            className: 'input-text',
            value: localeValue
          }, formControlTypeOption, {
            onChange: function onChange(v) {
              Object.keys(localeList).forEach(function (localeKey) {
                if (localeKey === locale) {
                  localeList[localeKey].value = v;
                }
              });
              _onChange && _onChange(localeList, v);
              if (forceSync) localeList = self.forceSyncChange(localeList, v);
              _this4.setState({
                localeValue: v,
                localeList: localeList
              });
            },
            onClick: function onClick(e) {
              e.stopPropagation();
            },
            ref: function ref(input) {
              _this4.textInput = input;
            }
          })),
          this.props.showIcon ? _react2["default"].createElement('div', { className: 'uf uf-globe input-icon', onClick: this.open }) : ''
        ),
        _react2["default"].createElement(
          _modal2["default"],
          {
            title: modalLocale[locale].title,
            showModal: this.state.showModal,
            backdrop: backdrop,
            onOk: this.onOk,
            onCancel: this.onCancel,
            okName: modalLocale[locale].okName,
            cancelName: modalLocale[locale].cancelName,
            close: this.close
          },
          this.getLocaleNoFormElement(localeList, modalLocale, locale)
        )
      );
    }
  };

  return AcInputLocale;
}(_react.Component);

var _initialiseProps = function _initialiseProps() {
  var _this5 = this;

  this.close = function () {
    var isPopConfirm = _this5.state.isPopConfirm;

    isPopConfirm ? _this5.setState({ showPop: false }) : _this5.setState({ showModal: false });
  };

  this.open = function (event) {
    event.stopPropagation();
    var _props2 = _this5.props,
        status = _props2.status,
        localeList = _props2.localeList;

    if (status === 'preview') {
      return;
    }
    _this5.setState({
      localeList: localeList
    });

    var isPopConfirm = _this5.state.isPopConfirm;

    isPopConfirm ? _this5.setState({ showPop: true }) : _this5.setState({ showModal: true });
  };

  this.onOk = function () {
    var _state2 = _this5.state,
        localeList = _state2.localeList,
        locale = _state2.locale;

    var localeListProp = _this5.props.localeList;
    var inputId = _this5.props.inputId;

    var localeValue = void 0;
    var validatedArray = [];
    Object.keys(localeList).forEach(function (localeKey) {
      validatedArray.push(inputId + "_" + localeKey);
      if (localeKey === locale) {
        localeValue = localeList[localeKey].value;
      }
      localeListProp[localeKey] = localeList[localeKey];
    });

    _this5.setState({
      localeValue: localeValue
    });

    // 如果有form表单，就校验，否则就不校验
    if (_this5.props.form) {
      var obj = {};
      obj[_this5.props.inputId] = localeValue;
      _this5.props.form.validateFields(validatedArray, function (err, values) {
        if (err) {
          console.log('validate failed', values);
          return;
        } else {
          _this5.props.form.setFieldsValue(obj);
          _this5.props.onOk && _this5.props.onOk(localeList);
          _this5.close();
        }
      });
    } else {
      _this5.props.onOk && _this5.props.onOk(localeList);
      _this5.close();
    }
  };

  this.onCancel = function () {
    _this5.close();
  };

  this.stringTrim = function (str) {
    return str.replace(/^\s+|\s+$/gm, '');
  };

  this.checkValidValue = function (rule, value, callback) {
    var self = _this5;
    var _self$state = self.state,
        required = _self$state.required,
        localeList = _self$state.localeList,
        locale = _self$state.locale,
        sysLocale = _self$state.sysLocale;

    var currentLanguage = self.state.modalLocale[locale] ? self.state.modalLocale[locale].currentLang : "当前语种";
    var defaultLanguage = self.state.modalLocale[locale] ? self.state.modalLocale[locale].defaultLang : "默认语种";
    var errMessage = self.state.modalLocale[locale] ? self.state.modalLocale[locale].errorMsg : "不能为空";
    if (required) {
      if (!self.stringTrim(localeList[locale].value)) {
        localeList[locale].errorMsg ? callback(localeList[locale].errorMsg) : callback(currentLanguage + " " + errMessage);
      }
      if (!self.stringTrim(localeList[sysLocale].value)) {
        localeList[sysLocale].errorMsg ? callback(localeList[sysLocale].errorMsg) : callback(defaultLanguage + " " + errMessage);
      }
    }
    callback();
  };

  this.renderLabelLeft = function (localeKey) {
    var _state3 = _this5.state,
        localeValue = _state3.localeValue,
        locale = _state3.locale,
        localeList = _state3.localeList,
        status = _state3.status,
        modalLocale = _state3.modalLocale,
        sysLocale = _state3.sysLocale;

    if (locale === sysLocale) {
      if (localeKey === locale) {
        return _react2["default"].createElement(
          'span',
          { className: 'label-default' },
          '(',
          modalLocale[locale].localeFlag + "/" + modalLocale[locale].defaultFlag,
          ')'
        );
      }
    } else {
      if (localeKey === locale) {
        return _react2["default"].createElement(
          'span',
          { className: 'label-default' },
          '(',
          modalLocale[locale].localeFlag,
          ')'
        );
      }
      if (localeKey === sysLocale) {
        return _react2["default"].createElement(
          'span',
          { className: 'label-default' },
          '(',
          modalLocale[locale].defaultFlag,
          ')'
        );
      }
    }
  };

  this.renderLabelright = function (localeKey) {
    var _state4 = _this5.state,
        localeValue = _state4.localeValue,
        locale = _state4.locale,
        localeList = _state4.localeList,
        status = _state4.status,
        modalLocale = _state4.modalLocale,
        sysLocale = _state4.sysLocale,
        required = _state4.required;

    if (required) {
      if (locale == sysLocale) {
        if (localeKey == locale) {
          return _react2["default"].createElement(
            'span',
            { className: 'require-star uf uf-mi' },
            ' '
          );
        }
      } else {
        if (localeKey == locale || localeKey == sysLocale) {
          return _react2["default"].createElement(
            'span',
            { className: 'require-star uf uf-mi' },
            ' '
          );
        }
      }
    }

    return _react2["default"].createElement('span', { className: 'require-star' });
  };

  this.forceSyncChange = function (localeList, value) {
    var _props3 = _this5.props,
        inputId = _props3.inputId,
        form = _props3.form;

    Object.keys(localeList).map(function (item) {
      localeList[item].value = value;
      if (form) {
        var setFieldsValue = form.setFieldsValue;

        var key = inputId + '_' + item;
        var obj = {};
        obj[key] = value;
        setFieldsValue(obj);
      }
    });
    return localeList;
  };
};

AcInputLocale.propTypes = propTypes;
AcInputLocale.defaultProps = defaultProps;

exports["default"] = AcInputLocale;
module.exports = exports['default'];