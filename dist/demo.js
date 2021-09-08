/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeLayout = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bee-layout\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _beePanel = __webpack_require__(3);
	
	var _beeDrawer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bee-drawer\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _beeDrawer2 = _interopRequireDefault(_beeDrawer);
	
	var _beeClipboard = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bee-clipboard\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _beeClipboard2 = _interopRequireDefault(_beeClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var Demo1 = __webpack_require__(68);var Demo2 = __webpack_require__(74);var Demo3 = __webpack_require__(75);var Demo4 = __webpack_require__(76);var Demo5 = __webpack_require__(77);var Demo6 = __webpack_require__(78);var DemoArray = [{ "example": _react2['default'].createElement(Demo1, null), "title": " 多语言 Input 组件", "code": "// /**\r\n//  *\r\n//  * @title 多语言 Input 组件\r\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 包含预览状态和编辑状态切换.当前语种对应的字段内容为空时，显示默认语种内容。\r\n//  *\r\n//  */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\nimport AcInputLocale from 'ac-input-locale/index.js';\r\n\n\r\n class Demo1 extends Component {\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n            sysLocale:\"en_US\",  //默认语种\r\n            locale:\"en_US\",     //当前语种\r\n            status:\"preview\",\r\n            localeListAll: {\r\n              \"zh_CN\":{\r\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\"},\r\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\"},\r\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\r\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\"}\r\n              },\r\n              \"en_US\":{\r\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\"},\r\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\"},\r\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\"},\r\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\"}\r\n              },\r\n              \"zh_TW\":{\r\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\r\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\"},\r\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\"},\r\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\"}\r\n              },\r\n              \"fr_FR\":{\r\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\"},\r\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\"},\r\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\"},\r\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\"}\r\n              }\r\n\r\n          },\r\n          localeList:{},\r\n          localeJson:{\r\n            \"zh_CN\":\"简体中文\",\r\n            \"en_US\":\"英文\",\r\n            \"zh_TW\":\"繁体中文\",\r\n            \"fr_FR\":\"法语\"\r\n          }\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        // this.setState({\r\n        //     locale: [\r\n        //         {\r\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\r\n        //         }\r\n        //     ]\r\n        // })\r\n\r\n        this.setState({\r\n          locale:\"zh_CN\",\r\n          localeList:{\r\n            \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\"},\r\n            \"en_US\":{\"label\":\"英文\",\"value\":\"\"},\r\n            \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\r\n            \"fr_FR\":{\"label\":\"法语\",\"value\":\"\"}\r\n          }\r\n        })\r\n    }\r\n\r\n    onOk=(localeList)=>{\r\n      // this.setState({\r\n      //   localeList\r\n      // })\r\n      console.log(localeList)\r\n    }\r\n\r\n    onClick = (key)=>{\r\n        this.setState({\r\n          locale:key,\r\n          localeList:this.state.localeListAll[key]\r\n        })\r\n    }\r\n    changeStatus=(key)=>{\r\n      this.setState({\r\n        status:key\r\n      })\r\n    }\r\n\r\n    onChange = (localeList,localeValue) => {\r\n      console.log(localeList)\r\n      console.log(localeValue)\r\n    }\r\n\r\n    render () {\r\n        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;\r\n        console.log(localeList,sysLocale,locale,status,localeJson)\r\n        // let modalLocale = {\r\n        //   'fr_FR':{\r\n        //     'title':'Multilingual établir12',\r\n        //     'okName':'conservation12',\r\n        //     'cancelName':'supprimer12',\r\n        //     'localeFlag':'1fasf'\r\n        //   }\r\n        // }\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"btn\">\r\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\r\n                </div>\r\n                <div>\r\n                  <span style={{fontFize:18}}>\r\n                    系统语种：{localeJson[sysLocale]}\r\n                  </span>\r\n                  <br/>\r\n                  <span>\r\n                    <div className=\"btn\">\r\n                      <span style={{width: '100px',lineHeight: '45px'}}>\r\n                      当前状态</span>\r\n                      <Button onClick={()=>{this.changeStatus(\"preview\")}} colors={status=='preview'?'success':null}>[预览]</Button>\r\n                      <Button onClick={()=>{this.changeStatus(\"editor\")}} colors={status=='editor'?'success':null}>[编辑]</Button>\r\n                    </div>\r\n\r\n                  </span>\r\n                </div>\r\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange}  ></AcInputLocale>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo1;\r\n", "desc": " 多语言 Input 组件 简单应用 绿色代表 当前选中 包含预览状态和编辑状态切换.当前语种对应的字段内容为空时，显示默认语种内容。" }, { "example": _react2['default'].createElement(Demo2, null), "title": " 多语言 Input 组件", "code": "// /**\r\n//  *\r\n//  * @title 多语言 Input 组件\r\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\r\n//  * 绿色代表 当前语种\r\n//  * 预览状态\r\n//  */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\nimport AcInputLocale from 'ac-input-locale/index.js';\r\n\n\r\n class Demo2 extends Component {\r\n\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n            sysLocale:\"en_US\",  //默认语种\r\n            locale:\"en_US\",     //当前语种\r\n            status:\"preview\",\r\n            localeList: {\r\n              \"zh_CN\":{label:\"简体中文\",value:\"苹果\"},\r\n              \"en_US\":{label:\"英文\",value:\"apple\"},\r\n              \"zh_TW\":{label:\"繁体中文\",value:\"蘋果\"},\r\n              \"fr_FR\":{label:\"法语\",value:\"frenchapple\"}\r\n            },\r\n            localeJson:{\r\n              \"zh_CN\":\"简体中文\",\r\n              \"en_US\":\"英文\",\r\n              \"zh_TW\":\"繁体中文\",\r\n              \"fr_FR\":\"法语\"\r\n            }\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        // this.setState({\r\n        //     locale: [\r\n        //         {\r\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\r\n        //         }\r\n        //     ]\r\n        // })\r\n        // debugger\r\n        this.setState({\r\n          locale:\"zh_CN\"\r\n        })\r\n    }\r\n\r\n    onOk=(localeList)=>{\r\n      console.log(localeList)\r\n    }\r\n\r\n    onClick = (key)=>{\r\n        this.setState({\r\n          locale:key\r\n        })\r\n    }\r\n    changeStatus=(key)=>{\r\n      this.setState({\r\n        status:key\r\n      })\r\n    }\r\n\r\n    onChange = (localeList,localeValue) => {\r\n      console.log(localeList)\r\n      console.log(localeValue)\r\n    }\r\n\r\n    render () {\r\n        let {localeList,sysLocale,locale,status,localeJson} = this.state;\r\n        // let modalLocale = {\r\n        //   'fr_FR':{\r\n        //     'title':'Multilingual établir12',\r\n        //     'okName':'conservation12',\r\n        //     'cancelName':'supprimer12',\r\n        //     'localeFlag':'1fasf'\r\n        //   }\r\n        // }\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"btn\">\r\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\r\n                </div>\r\n                <div>\r\n                  <span style={{fontFize:18}}>\r\n                    系统语种：{localeJson[sysLocale]}\r\n                    当前语种：{locale}\r\n                  </span>\r\n                  <br/>\r\n                </div>\r\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange}></AcInputLocale>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo2;\r\n", "desc": " 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态" }, { "example": _react2['default'].createElement(Demo3, null), "title": " 多语言 Input 组件", "code": "// /**\r\n//  *\r\n//  * @title 多语言 Input 组件\r\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 编辑状态\r\n//  * 绿色代表 当前语种\r\n//  * 编辑状态\r\n//  */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\nimport AcInputLocale from 'ac-input-locale/index.js';\r\n\n\r\n class Demo3 extends Component {\r\n\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n            sysLocale:\"en_US\",  //默认语种\r\n            locale:\"en_US\",     //当前语种\r\n            status:\"editor\",\r\n            localeList: {\r\n              \"zh_CN\":{label:\"简体中文\",value:\"苹果\"},\r\n              \"en_US\":{label:\"英文\",value:\"apple\"},\r\n              \"zh_TW\":{label:\"繁体中文\",value:\"蘋果\"},\r\n              \"fr_FR\":{label:\"法语\",value:\"frenchapple\"}\r\n            },\r\n            localeJson:{\r\n              \"zh_CN\":\"简体中文\",\r\n              \"en_US\":\"英文\",\r\n              \"zh_TW\":\"繁体中文\",\r\n              \"fr_FR\":\"法语\"\r\n            },\r\n            backdrop: false\r\n        }\r\n\r\n    }\r\n\r\n    componentDidMount() {\r\n\r\n        setTimeout(() => {\r\n          this.setState({\r\n            locale:\"zh_CN\"\r\n          })\r\n        }, 100)\r\n    }\r\n\r\n    onOk=(localeList)=>{\r\n      // this.setState({\r\n      //   localeList\r\n      // })\r\n      console.log(localeList)\r\n    }\r\n\r\n    onClick = (key)=>{\r\n        this.setState({\r\n          locale:key\r\n        })\r\n    }\r\n    changeStatus=(key)=>{\r\n      this.setState({\r\n        status:key\r\n      })\r\n    }\r\n\r\n    onChange = (localeList,localeValue) => {\r\n      console.log(localeList)\r\n      console.log(localeValue)\r\n    }\r\n\r\n    render () {\r\n        let {localeList,sysLocale,locale,status,localeJson,backdrop} = this.state;\r\n        // let modalLocale = {\r\n        //   'fr_FR':{\r\n        //     'title':'Multilingual établir12',\r\n        //     'okName':'conservation12',\r\n        //     'cancelName':'supprimer12',\r\n        //     'localeFlag':'1fasf'\r\n        //   }\r\n        // }\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"btn\">\r\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\r\n                </div>\r\n                <div>\r\n                  <span style={{fontFize:18}}>\r\n                    系统语种：{localeJson[sysLocale]}\r\n                  </span>\r\n\r\n                  <br/>\r\n                  当前语种：{locale}\r\n                </div>\r\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} backdrop={backdrop} onChange={this.onChange}></AcInputLocale>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo3;\r\n", "desc": " 多语言 Input 组件 简单应用 绿色代表 当前选中 编辑状态" }, { "example": _react2['default'].createElement(Demo4, null), "title": " 多语言 Input 组件", "code": "// /**\r\n//  *\r\n//  * @title 多语言 Input 组件\r\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 改变默认模态框中文字说明\r\n//  * 绿色代表 当前语种\r\n//  * 编辑状态 改变默认模态框中文字说明\r\n//  */\r\n\r\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\r\nimport AcInputLocale from 'ac-input-locale/index.js';\r\n\n\r\n class Demo4 extends Component {\r\n\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n            sysLocale:\"en_US\",  //默认语种\r\n            locale:\"en_US\",     //当前语种\r\n            status:\"editor\",\r\n            localeList: {\r\n              \"zh_CN\":{label:\"简体中文\",value:\"苹果\"},\r\n              \"en_US\":{label:\"英文\",value:\"apple\"},\r\n              \"zh_TW\":{label:\"繁体中文\",value:\"蘋果\"},\r\n              \"fr_FR\":{label:\"法语\",value:\"frenchapple\"}\r\n            },\r\n            localeJson:{\r\n              \"zh_CN\":\"简体中文\",\r\n              \"en_US\":\"英文\",\r\n              \"zh_TW\":\"繁体中文\",\r\n              \"fr_FR\":\"法语\"\r\n            }\r\n        }\r\n    }\r\n\r\n    componentDidMount() {\r\n        // this.setState({\r\n        //     locale: [\r\n        //         {\r\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\r\n        //         }\r\n        //     ]\r\n        // })\r\n    }\r\n\r\n    onOk=(localeList)=>{\r\n      // this.setState({\r\n      //   localeList\r\n      // })\r\n      console.log(localeList)\r\n    }\r\n\r\n    onClick = (key)=>{\r\n        this.setState({\r\n          locale:key\r\n        })\r\n    }\r\n    changeStatus=(key)=>{\r\n      this.setState({\r\n        status:key\r\n      })\r\n    }\r\n\r\n    onChange = (localeList,localeValue) => {\r\n      console.log(localeList)\r\n      console.log(localeValue)\r\n    }\r\n\r\n    render () {\r\n        let {localeList,sysLocale,locale,status,localeJson} = this.state;\r\n        let modalLocale = {\r\n          'fr_FR':{\r\n            'title':'Multilingual établir12',\r\n            'okName':'conservation12',\r\n            'cancelName':'supprimer12',\r\n            'localeFlag':'1fasf'\r\n          }\r\n        }\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"btn\">\r\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\r\n                </div>\r\n                <div>\r\n                  <span style={{fontFize:18}}>\r\n                    系统语种：{localeJson[sysLocale]}\r\n                  </span>\r\n                  <br/>\r\n                </div>\r\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange} modalLocale={modalLocale}></AcInputLocale>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Demo4;\r\n", "desc": " 多语言 Input 组件 简单应用 绿色代表 当前选中 改变默认模态框中文字说明" }, { "example": _react2['default'].createElement(Demo5, null), "title": " 多语言 Input 组件", "code": "// /**\r\n//  *\r\n//  * @title 多语言 Input 组件\r\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\r\n//  * 绿色代表 当前语种\r\n//  * 预览状态\r\n//  */\r\n\r\nimport React, { Component } from 'react';\nimport { Form, Button } from 'tinper-bee';\r\nimport AcInputLocale from 'ac-input-locale/index.js';\r\n\n\n class Demo5 extends Component {\r\n\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n            sysLocale:\"en_US\",  //默认语种\r\n            locale:\"zh_CN\",     //当前语种\r\n            status:\"\",\r\n            required:true,\r\n            localeListAll: {\r\n              \"zh_CN\":{\r\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\r\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\r\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\" }\r\n              },\r\n              \"en_US\":{\r\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\" },\r\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\" },\r\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\" }\r\n              },\r\n              \"zh_TW\":{\r\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\r\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\" },\r\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\",}\r\n              },\r\n              \"fr_FR\":{\r\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\" },\r\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\" },\r\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\" }\r\n              }\r\n              \r\n          },\r\n            localeList: {},\r\n            localeJson:{\r\n              \"zh_CN\":\"简体中文\",\r\n              \"en_US\":\"英文\",\r\n              \"zh_TW\":\"繁体中文\",\r\n              \"fr_FR\":\"法语\"\r\n            }\r\n        }\r\n        this.save = this.save.bind(this)\r\n    }\r\n\r\n    componentDidMount() {\r\n      this.setState({\r\n        localeList:{\r\n          \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\r\n          \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\r\n          \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\r\n        }\r\n        //   {\r\n        //     \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\r\n        //     \"en_US\":{\"label\":\"英文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\r\n        //     \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\r\n        //     \"fr_FR\":{\"label\":\"法语\",\"value\":\"\",\"errorMsg\":\"不能为空\"}\r\n        // }\r\n        \r\n      }\r\n      );\r\n        // this.setState({\r\n        //     locale: [\r\n        //         {\r\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\r\n        //         }\r\n        //     ]\r\n        // })\r\n    }\r\n\r\n    onOk=(localeList)=>{\r\n      console.log(localeList)\r\n    }\r\n\r\n    onClick = (key)=>{\r\n        this.setState({\r\n          locale:key,\r\n          localeList:this.state.localeListAll[key]\r\n        })\r\n    }\r\n    changeStatus=(key)=>{\r\n      this.setState({\r\n        status:key\r\n      })\r\n    }\r\n\r\n    onChange = (localeList,localeValue) => {\r\n      console.log(localeList)\r\n      console.log(localeValue)\r\n    }\r\n\r\n    save(e) {\r\n      e.preventDefault();\r\n      this.props.form.validateFields((err, values) => {\r\n          if (err) {\r\n              console.log('校验失败', values);\r\n          } else {\r\n              console.log('提交成功', values)\r\n\r\n          }\r\n      });\r\n    }\r\n\r\n    render () {\r\n        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;\r\n        // let modalLocale = {\r\n        //   'fr_FR':{\r\n        //     'title':'Multilingual établir12',\r\n        //     'okName':'conservation12',\r\n        //     'cancelName':'supprimer12',\r\n        //     'localeFlag':'1fasf'\r\n        //   }\r\n        // }\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"btn\">\r\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\r\n                </div>\r\n                <div>\r\n                  <span style={{fontFize:18}}>\r\n                    系统语种：{localeJson[sysLocale]}\r\n                  </span>\r\n                  <br/>\r\n                </div>\r\n                名称：\r\n                <AcInputLocale\r\n                  inputId={'username'}\r\n                  form={this.props.form}\r\n                  localeList={localeList}\r\n                  sysLocale={sysLocale}\r\n                  onOk={this.onOk}\r\n                  locale={locale}\r\n                  status={status}\r\n                  onChange={this.onChange}\r\n                  required={required}\r\n                >\r\n                </AcInputLocale>\r\n                <Button onClick={this.save}>保存</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Form.createForm()(Demo5)\r\n", "desc": " 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态" }, { "example": _react2['default'].createElement(Demo6, null), "title": " 多语言 Input 组件 录入时是popconfirm 形", "code": "/**\r\n *\r\n * @title 多语言 Input 组件 录入时是popconfirm 形式\r\n * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\r\n * 绿色代表 当前语种\r\n * 预览状态\r\n */\r\nimport React, { Component } from 'react';\nimport { Form, Button } from 'tinper-bee';\r\nimport AcInputLocale from 'ac-input-locale/index.js';\r\n\n\nclass Demo6 extends Component {\r\n    constructor(props){\r\n        super(props)\r\n        this.state={\r\n            sysLocale:\"en_US\",  //默认语种\r\n            locale:\"zh_CN\",     //当前语种\r\n            status:\"\",\r\n            required:true,\r\n            localeListAll: {\r\n              \"zh_CN\":{\r\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\r\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\r\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\" }\r\n              },\r\n              \"en_US\":{\r\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\" },\r\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\" },\r\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\" }\r\n              },\r\n              \"zh_TW\":{\r\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\r\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\" },\r\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\",}\r\n              },\r\n              \"fr_FR\":{\r\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\" },\r\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\" },\r\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\" },\r\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\" }\r\n              }\r\n\r\n          },\r\n            localeList: {},\r\n            localeJson:{\r\n              \"zh_CN\":\"简体中文\",\r\n              \"en_US\":\"英文\",\r\n              \"zh_TW\":\"繁体中文\",\r\n              \"fr_FR\":\"法语\"\r\n            }\r\n        }\r\n        this.save = this.save.bind(this)\r\n    }\r\n\r\n    componentDidMount() {\r\n      this.setState({\r\n        localeList:{\r\n          \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\r\n          \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\r\n          \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\r\n        }\r\n        //   {\r\n        //     \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\r\n        //     \"en_US\":{\"label\":\"英文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\r\n        //     \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\r\n        //     \"fr_FR\":{\"label\":\"法语\",\"value\":\"\",\"errorMsg\":\"不能为空\"}\r\n        // }\r\n\r\n      }\r\n      );\r\n        // this.setState({\r\n        //     locale: [\r\n        //         {\r\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\r\n        //         },\r\n        //         {\r\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\r\n        //         }\r\n        //     ]\r\n        // })\r\n    }\r\n\r\n\r\n    onOk=(localeList)=>{\r\n      console.log(localeList)\r\n    }\r\n\r\n    onClick = (key)=>{\r\n        this.setState({\r\n          locale:key,\r\n          localeList:this.state.localeListAll[key]\r\n        })\r\n    }\r\n    changeStatus=(key)=>{\r\n      this.setState({\r\n        status:key\r\n      })\r\n    }\r\n\r\n    onChange = (localeList,localeValue) => {\r\n      console.log(localeList)\r\n      console.log(localeValue)\r\n    }\r\n\r\n    save(e) {\r\n      e.preventDefault();\r\n      this.props.form.validateFields((err, values) => {\r\n          if (err) {\r\n              console.log('校验失败', values);\r\n          } else {\r\n              console.log('提交成功', values)\r\n          }\r\n      });\r\n    }\r\n\r\n    render () {\r\n        let {localeList, sysLocale, locale, status, localeJson, required} = this.state;\r\n        // let modalLocale = {\r\n        //   'fr_FR':{\r\n        //     'title':'Multilingual établir12',\r\n        //     'okName':'conservation12',\r\n        //     'cancelName':'supprimer12',\r\n        //     'localeFlag':'1fasf'\r\n        //   }\r\n        // }\r\n        return (\r\n            <div className=\"demoPadding\">\r\n                <div className=\"btn\">\r\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\r\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\r\n                </div>\r\n                <div>\r\n                  <span style={{fontFize:18}}>\r\n                    系统语种：{localeJson[sysLocale]}\r\n                  </span>\r\n                  <br/>\r\n                  <span style={{fontFize:18}}>\r\n                    当前语种：{localeJson[locale]}\r\n                  </span>\r\n                  <br/>\r\n                </div>\r\n                名称：\r\n                <AcInputLocale\r\n                  inputId={'username'}\r\n                  form={this.props.form}\r\n                  localeList={localeList}\r\n                  sysLocale={sysLocale}\r\n                  onOk={this.onOk}\r\n                  locale={locale}\r\n                  status={status}\r\n                  onChange={this.onChange}\r\n                  required={required}\r\n                  isPopConfirm={true}\r\n                  isShowNoneLeftLable={true}\r\n                >\r\n                </AcInputLocale>\r\n                <Button onClick={this.save}>保存</Button>\r\n            </div>\r\n        )\r\n    }\r\n}\r\n\r\nexport default Form.createForm()(Demo6)\r\n", "desc": " 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态" }];
	
	var Demo = function (_Component) {
	    _inherits(Demo, _Component);
	
	    function Demo(props) {
	        _classCallCheck(this, Demo);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.handleClick = function () {
	            _this.setState({ open: !_this.state.open });
	        };
	
	        _this.fCloseDrawer = function () {
	            _this.setState({
	                open: false
	            });
	        };
	
	        _this.state = {
	            open: false
	        };
	        return _this;
	    }
	
	    Demo.prototype.render = function render() {
	        var _props = this.props,
	            title = _props.title,
	            example = _props.example,
	            code = _props.code,
	            desc = _props.desc,
	            scss_code = _props.scss_code;
	
	
	        var header = _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(
	                'p',
	                { className: 'component-title' },
	                title
	            ),
	            _react2['default'].createElement(
	                'p',
	                null,
	                desc
	            ),
	            _react2['default'].createElement(
	                'span',
	                { className: 'component-code', onClick: this.handleClick },
	                ' \u67E5\u770B\u6E90\u7801 ',
	                _react2['default'].createElement('i', { className: 'uf uf-arrow-right' }),
	                ' '
	            )
	        );
	        return _react2['default'].createElement(
	            _beeLayout.Col,
	            { md: 12, id: title.trim(), className: 'component-demo' },
	            _react2['default'].createElement(
	                _beePanel.Panel,
	                { header: header },
	                example
	            ),
	            _react2['default'].createElement(
	                _beeDrawer2['default'],
	                { className: 'component-drawerc', title: title, show: this.state.open, placement: 'right', onClose: this.fCloseDrawer },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'component-code-copy' },
	                    ' JS\u4EE3\u7801',
	                    _react2['default'].createElement(_beeClipboard2['default'], { action: 'copy', text: code })
	                ),
	                _react2['default'].createElement(
	                    'pre',
	                    { className: 'pre-js' },
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs javascript' },
	                        code
	                    )
	                ),
	                !!scss_code ? _react2['default'].createElement(
	                    'div',
	                    { className: 'component-code-copy copy-css' },
	                    ' SCSS\u4EE3\u7801',
	                    _react2['default'].createElement(_beeClipboard2['default'], { action: 'copy', text: scss_code })
	                ) : null,
	                !!scss_code ? _react2['default'].createElement(
	                    'pre',
	                    { className: 'pre-css' },
	                    _react2['default'].createElement(
	                        'code',
	                        { className: 'hljs css' },
	                        scss_code
	                    )
	                ) : null
	            )
	        );
	    };
	
	    return Demo;
	}(_react.Component);
	
	var DemoGroup = function (_Component2) {
	    _inherits(DemoGroup, _Component2);
	
	    function DemoGroup(props) {
	        _classCallCheck(this, DemoGroup);
	
	        return _possibleConstructorReturn(this, _Component2.call(this, props));
	    }
	
	    DemoGroup.prototype.render = function render() {
	        return _react2['default'].createElement(
	            _beeLayout.Row,
	            null,
	            DemoArray.map(function (child, index) {
	
	                return _react2['default'].createElement(Demo, { example: child.example, title: child.title, code: child.code, scss_code: child.scss_code, desc: child.desc, key: index });
	            })
	        );
	    };
	
	    return DemoGroup;
	}(_react.Component);
	
	_reactDom2['default'].render(_react2['default'].createElement(DemoGroup, null), document.getElementById('tinperBeeDemo'));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PanelGroup = exports.Panel = undefined;
	
	var _Panel2 = __webpack_require__(4);
	
	var _Panel3 = _interopRequireDefault(_Panel2);
	
	var _PanelGroup2 = __webpack_require__(67);
	
	var _PanelGroup3 = _interopRequireDefault(_PanelGroup2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Panel = _Panel3["default"];
	exports.PanelGroup = _PanelGroup3["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeTransition = __webpack_require__(6);
	
	var _beeMessage = __webpack_require__(49);
	
	var _beeMessage2 = _interopRequireDefault(_beeMessage);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _copyToClipboard = __webpack_require__(65);
	
	var _copyToClipboard2 = _interopRequireDefault(_copyToClipboard);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否添加折叠
	  collapsible: _propTypes2["default"].bool,
	  onSelect: _propTypes2["default"].func,
	  //头部组件
	  header: _propTypes2["default"].node,
	  headerStyle: _propTypes2["default"].object,
	  id: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),
	  headerContent: _propTypes2["default"].bool,
	  //footer组件
	  footer: _propTypes2["default"].node,
	  footerStyle: _propTypes2["default"].object,
	  //默认是否打开
	  defaultExpanded: _propTypes2["default"].bool,
	  //是否打开
	  expanded: _propTypes2["default"].bool,
	  //每个panel的标记
	  eventKey: _propTypes2["default"].any,
	  headerRole: _propTypes2["default"].string,
	  panelRole: _propTypes2["default"].string,
	  //颜色
	  colors: _propTypes2["default"].oneOf(['primary', 'accent', 'success', 'info', 'warning', 'danger', 'default', 'bordered']),
	
	  // From Collapse.的扩展动画
	  onEnter: _propTypes2["default"].func,
	  onEntering: _propTypes2["default"].func,
	  onEntered: _propTypes2["default"].func,
	  onExit: _propTypes2["default"].func,
	  onExiting: _propTypes2["default"].func,
	  onExited: _propTypes2["default"].func,
	  //是否可复制内容
	  copyable: _propTypes2["default"].bool
	};
	
	var defaultProps = {
	  defaultExpanded: false,
	  clsPrefix: "u-panel",
	  colors: "default"
	};
	
	var Panel = function (_React$Component) {
	  _inherits(Panel, _React$Component);
	
	  function Panel(props, context) {
	    _classCallCheck(this, Panel);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleClickTitle = _this.handleClickTitle.bind(_this);
	
	    _this.state = {
	      expanded: _this.props.defaultExpanded
	    };
	    return _this;
	  }
	
	  //头部点击事件
	
	
	  Panel.prototype.handleClickTitle = function handleClickTitle(e) {
	    // 不让事件进入事件池
	    e.persist();
	    e.selected = true;
	
	    if (this.props.onSelect) {
	      this.props.onSelect(this.props.eventKey, e);
	    } else {
	      e.preventDefault();
	    }
	
	    if (e.selected) {
	      this.setState({ expanded: !this.state.expanded });
	    }
	  };
	
	  //渲染panelheader
	
	
	  Panel.prototype.renderHeader = function renderHeader(collapsible, header, id, role, expanded, clsPrefix) {
	    var titleClassName = clsPrefix + '-title';
	
	    if (!collapsible) {
	      if (!_react2["default"].isValidElement(header)) {
	        return header;
	      }
	
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    if (!_react2["default"].isValidElement(header)) {
	      return _react2["default"].createElement(
	        'h4',
	        { role: 'presentation', className: titleClassName },
	        this.renderAnchor(header, id, role, expanded)
	      );
	    }
	    if (this.props.headerContent) {
	      return (0, _react.cloneElement)(header, {
	        className: (0, _classnames2["default"])(header.props.className, titleClassName)
	      });
	    }
	
	    return (0, _react.cloneElement)(header, {
	      className: (0, _classnames2["default"])(header.props.className, titleClassName),
	      children: this.renderAnchor(header.props.children, id, role, expanded)
	    });
	  };
	
	  //如果使用链接，渲染为a标签
	
	
	  Panel.prototype.renderAnchor = function renderAnchor(header, id, role, expanded) {
	    return _react2["default"].createElement(
	      'a',
	      {
	        role: role,
	        href: id && '#' + id,
	        'aria-controls': id,
	        'aria-expanded': expanded,
	        'aria-selected': expanded,
	        className: expanded ? null : 'collapsed'
	      },
	      header
	    );
	  };
	
	  //复制代码，弹出提示信息
	
	
	  Panel.prototype.copyDemo = function copyDemo(e) {
	    var panelTarget = e.target.parentNode;
	    var clipBoardContent = panelTarget.firstChild.innerText;
	    (0, _copyToClipboard2["default"])(clipBoardContent);
	    _beeMessage2["default"].create({ content: '复制成功！', color: 'success', duration: 2 });
	  };
	
	  //如果有折叠动画，渲染折叠动画
	
	
	  Panel.prototype.renderCollapsibleBody = function renderCollapsibleBody(id, expanded, role, children, clsPrefix, copyable, animationHooks) {
	    return _react2["default"].createElement(
	      _beeTransition.Collapse,
	      _extends({ 'in': expanded }, animationHooks),
	      _react2["default"].createElement(
	        'div',
	        {
	          id: id,
	          role: role,
	          className: clsPrefix + '-collapse',
	          'aria-hidden': !expanded
	        },
	        this.renderBody(children, clsPrefix, copyable)
	      )
	    );
	  };
	
	  //渲染panelbody
	
	
	  Panel.prototype.renderBody = function renderBody(rawChildren, clsPrefix, copyable) {
	    var self = this;
	    var children = [];
	    var bodyChildren = [];
	
	    var bodyClassName = clsPrefix + '-body';
	    //添加到body的children中
	    function maybeAddBody(self) {
	      if (!bodyChildren.length) {
	        return;
	      }
	      // 给子组件添加key，为了之后触发事件时使用
	      children.push(_react2["default"].createElement(
	        'div',
	        { key: children.length, className: bodyClassName },
	        bodyChildren,
	        copyable && _react2["default"].createElement('i', { className: clsPrefix + '-copy uf uf-files-o', onClick: self.copyDemo })
	      ));
	      bodyChildren = [];
	    }
	
	    //转换为数组，方便复用
	    _react2["default"].Children.toArray(rawChildren).forEach(function (child) {
	      if (_react2["default"].isValidElement(child) && child.props.fill) {
	        maybeAddBody(self);
	
	        //将标示fill设置为undefined
	        children.push((0, _react.cloneElement)(child, { fill: undefined }));
	
	        return;
	      }
	      bodyChildren.push(child);
	    });
	
	    maybeAddBody(self);
	
	    return children;
	  };
	
	  Panel.prototype.render = function render() {
	    var _props = this.props,
	        collapsible = _props.collapsible,
	        header = _props.header,
	        id = _props.id,
	        footer = _props.footer,
	        propsExpanded = _props.expanded,
	        footerStyle = _props.footerStyle,
	        headerStyle = _props.headerStyle,
	        headerRole = _props.headerRole,
	        panelRole = _props.panelRole,
	        className = _props.className,
	        colors = _props.colors,
	        children = _props.children,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        clsPrefix = _props.clsPrefix,
	        onExit = _props.onExit,
	        headerContent = _props.headerContent,
	        onExiting = _props.onExiting,
	        onExited = _props.onExited,
	        defaultExpanded = _props.defaultExpanded,
	        eventKey = _props.eventKey,
	        onSelect = _props.onSelect,
	        copyable = _props.copyable,
	        props = _objectWithoutProperties(_props, ['collapsible', 'header', 'id', 'footer', 'expanded', 'footerStyle', 'headerStyle', 'headerRole', 'panelRole', 'className', 'colors', 'children', 'onEnter', 'onEntering', 'onEntered', 'clsPrefix', 'onExit', 'headerContent', 'onExiting', 'onExited', 'defaultExpanded', 'eventKey', 'onSelect', 'copyable']);
	
	    var expanded = propsExpanded != null ? propsExpanded : this.state.expanded;
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	    classes[clsPrefix + '-' + colors] = true;
	
	    var headerClass = _defineProperty({}, clsPrefix + '-heading', true);
	
	    copyable === false ? false : true;
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, props, {
	        className: (0, _classnames2["default"])(className, classes),
	        id: collapsible ? null : id
	      }),
	      header && _react2["default"].createElement(
	        'div',
	        { className: (0, _classnames2["default"])(headerClass), style: headerStyle, onClick: this.handleClickTitle },
	        this.renderHeader(collapsible, header, id, headerRole, expanded, clsPrefix)
	      ),
	      collapsible ? this.renderCollapsibleBody(id, expanded, panelRole, children, clsPrefix, copyable, { onEnter: onEnter, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }) : this.renderBody(children, clsPrefix, copyable),
	      footer && _react2["default"].createElement(
	        'div',
	        { className: clsPrefix + '-footer', style: footerStyle },
	        footer
	      )
	    );
	  };
	
	  return Panel;
	}(_react2["default"].Component);
	
	Panel.propTypes = propTypes;
	Panel.defaultProps = defaultProps;
	
	exports["default"] = Panel;
	module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2018 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames() {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString === Object.prototype.toString) {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					} else {
						classes.push(arg.toString());
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Fade = exports.Collapse = exports.Transition = undefined;
	
	var _Transition2 = __webpack_require__(7);
	
	var _Transition3 = _interopRequireDefault(_Transition2);
	
	var _Collapse2 = __webpack_require__(13);
	
	var _Collapse3 = _interopRequireDefault(_Collapse2);
	
	var _Fade2 = __webpack_require__(48);
	
	var _Fade3 = _interopRequireDefault(_Fade2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports.Transition = _Transition3["default"];
	exports.Collapse = _Collapse3["default"];
	exports.Fade = _Fade3["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _properties = __webpack_require__(8);
	
	var _properties2 = _interopRequireDefault(_properties);
	
	var _on = __webpack_require__(11);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionEndEvent = _properties2["default"].end;
	
	//设置状态码
	var UNMOUNTED = exports.UNMOUNTED = 0;
	var EXITED = exports.EXITED = 1;
	var ENTERING = exports.ENTERING = 2;
	var ENTERED = exports.ENTERED = 3;
	var EXITING = exports.EXITING = 4;
	
	var propTypes = {
	  /**
	   * 是否触发动画
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * 不显示的时候是否移除组件
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * 如果设置为默认显示，挂载时显示动画
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * 设置超时时间，防止出现问题，可设置为>=动画时间
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * 退出组件时添加的class
	   */
	  exitedClassName: _propTypes2["default"].string,
	  /**
	   * 退出组件中添加的class
	   */
	  exitingClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画后添加的class
	   */
	  enteredClassName: _propTypes2["default"].string,
	  /**
	   * 进入动画时添加的class
	   */
	  enteringClassName: _propTypes2["default"].string,
	
	  /**
	   * 进入动画开始时的钩子函数
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * 进入动画中的钩子函数
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * 进入动画后的钩子函数
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * 退出动画开始时的钩子函数
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * 退出动画中的钩子函数
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * 退出动画后的钩子函数
	   */
	  onExited: _propTypes2["default"].func
	};
	
	function noop() {}
	
	var defaultProps = {
	  "in": false,
	  unmountOnExit: false,
	  transitionAppear: false,
	  timeout: 5000,
	  onEnter: noop,
	  onEntering: noop,
	  onEntered: noop,
	  onExit: noop,
	  onExiting: noop,
	  onExited: noop
	};
	
	/**
	 * 动画组件
	 */
	
	var Transition = function (_Component) {
	  _inherits(Transition, _Component);
	
	  function Transition(props, context) {
	    _classCallCheck(this, Transition);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
	
	    var initialStatus = void 0;
	    if (props["in"]) {
	      // 在componentdidmount时开始执行动画
	      initialStatus = props.transitionAppear ? EXITED : ENTERED;
	    } else {
	      initialStatus = props.unmountOnExit ? UNMOUNTED : EXITED;
	    }
	    _this.state = { status: initialStatus };
	
	    _this.nextCallback = null;
	
	    _this.timer = null;
	    return _this;
	  }
	
	  Transition.prototype.componentDidMount = function componentDidMount() {
	    if (this.props.transitionAppear && this.props["in"]) {
	      this.performEnter(this.props);
	    }
	  };
	
	  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    if (nextProps["in"] && this.props.unmountOnExit) {
	      if (this.state.status === UNMOUNTED) {
	        // 在componentDidUpdate执行动画.
	        this.setState({ status: EXITED });
	      }
	    } else {
	      this._needsUpdate = true;
	    }
	  };
	
	  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	    var status = this.state.status;
	
	    if (this.props.unmountOnExit && status === EXITED) {
	      // 当使用unmountOnExit时，exited为exiting和unmont的过渡状态
	      if (this.props["in"]) {
	        this.performEnter(this.props);
	      } else {
	        this.setState({ status: UNMOUNTED });
	      }
	
	      return;
	    }
	
	    // 确保只响应prop变化
	    if (this._needsUpdate) {
	      this._needsUpdate = false;
	
	      if (this.props["in"]) {
	        if (status === EXITING) {
	          this.performEnter(this.props);
	        } else if (status === EXITED) {
	          this.performEnter(this.props);
	        }
	        // 其他，当我们已经输入或输出
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.performExit(this.props);
	        }
	        // 我们已经输入或输出完成
	      }
	    }
	  };
	
	  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	    clearTimeout(this.timer);
	    this.timer = null;
	    this.cancelNextCallback();
	  };
	
	  Transition.prototype.performEnter = function performEnter(props) {
	    var _this2 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    // 这里接收新props
	    props.onEnter(node);
	
	    this.safeSetState({ status: ENTERING }, function () {
	      _this2.props.onEntering(node);
	
	      _this2.onTransitionEnd(node, function () {
	        _this2.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.performExit = function performExit(props) {
	    var _this3 = this;
	
	    this.cancelNextCallback();
	    var node = _reactDom2["default"].findDOMNode(this);
	
	    props.onExit(node);
	
	    this.safeSetState({ status: EXITING }, function () {
	      _this3.props.onExiting(node);
	
	      _this3.onTransitionEnd(node, function () {
	        _this3.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	      });
	    });
	  };
	
	  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	    if (this.nextCallback !== null) {
	      this.nextCallback.cancel();
	      this.nextCallback = null;
	    }
	  };
	
	  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	    // 确保在组件销毁后挂起的setState被消除
	    this.setState(nextState, this.setNextCallback(callback));
	  };
	
	  Transition.prototype.setNextCallback = function setNextCallback(callback) {
	    var _this4 = this;
	
	    var active = true;
	
	    this.nextCallback = function (event) {
	      if (active) {
	        active = false;
	        _this4.nextCallback = null;
	
	        callback(event);
	      }
	    };
	
	    this.nextCallback.cancel = function () {
	      active = false;
	    };
	
	    return this.nextCallback;
	  };
	
	  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, handler) {
	    this.setNextCallback(handler);
	
	    if (node) {
	      if (transitionEndEvent == undefined) {
	        this.nextCallback();
	      } else {
	        (0, _on2["default"])(node, transitionEndEvent, this.nextCallback);
	      }
	      clearTimeout(this.timer);
	      this.timer = setTimeout(this.nextCallback, this.props.timeout);
	    } else {
	      clearTimeout(this.timer);
	      this.timer = setTimeout(this.nextCallback, 0);
	    }
	  };
	
	  Transition.prototype.render = function render() {
	    var status = this.state.status;
	    if (status === UNMOUNTED) {
	      return null;
	    }
	
	    var _props = this.props,
	        children = _props.children,
	        className = _props.className,
	        childProps = _objectWithoutProperties(_props, ['children', 'className']);
	
	    Object.keys(Transition.propTypes).forEach(function (key) {
	      return delete childProps[key];
	    });
	
	    var transitionClassName = void 0;
	    if (status === EXITED) {
	      transitionClassName = this.props.exitedClassName;
	    } else if (status === ENTERING) {
	      transitionClassName = this.props.enteringClassName;
	    } else if (status === ENTERED) {
	      transitionClassName = this.props.enteredClassName;
	    } else if (status === EXITING) {
	      transitionClassName = this.props.exitingClassName;
	    }
	
	    var child = _react2["default"].Children.only(children);
	    return _react2["default"].cloneElement(child, _extends({}, childProps, {
	      className: (0, _classnames2["default"])(child.props.className, className, transitionClassName)
	    }));
	  };
	
	  return Transition;
	}(_react.Component);
	
	Transition.propTypes = propTypes;
	
	Transition.defaultProps = defaultProps;
	
	exports["default"] = Transition;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(10));
	
	var transform = 'transform';
	exports.transform = transform;
	var prefix, transitionEnd, animationEnd;
	exports.animationEnd = animationEnd;
	exports.transitionEnd = transitionEnd;
	var transitionProperty, transitionDuration, transitionTiming, transitionDelay;
	exports.transitionDelay = transitionDelay;
	exports.transitionTiming = transitionTiming;
	exports.transitionDuration = transitionDuration;
	exports.transitionProperty = transitionProperty;
	var animationName, animationDuration, animationTiming, animationDelay;
	exports.animationDelay = animationDelay;
	exports.animationTiming = animationTiming;
	exports.animationDuration = animationDuration;
	exports.animationName = animationName;
	
	if (_inDOM.default) {
	  var _getTransitionPropert = getTransitionProperties();
	
	  prefix = _getTransitionPropert.prefix;
	  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
	  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;
	  exports.transform = transform = prefix + "-" + transform;
	  exports.transitionProperty = transitionProperty = prefix + "-transition-property";
	  exports.transitionDuration = transitionDuration = prefix + "-transition-duration";
	  exports.transitionDelay = transitionDelay = prefix + "-transition-delay";
	  exports.transitionTiming = transitionTiming = prefix + "-transition-timing-function";
	  exports.animationName = animationName = prefix + "-animation-name";
	  exports.animationDuration = animationDuration = prefix + "-animation-duration";
	  exports.animationTiming = animationTiming = prefix + "-animation-delay";
	  exports.animationDelay = animationDelay = prefix + "-animation-timing-function";
	}
	
	var _default = {
	  transform: transform,
	  end: transitionEnd,
	  property: transitionProperty,
	  timing: transitionTiming,
	  delay: transitionDelay,
	  duration: transitionDuration
	};
	exports.default = _default;
	
	function getTransitionProperties() {
	  var style = document.createElement('div').style;
	  var vendorMap = {
	    O: function O(e) {
	      return "o" + e.toLowerCase();
	    },
	    Moz: function Moz(e) {
	      return e.toLowerCase();
	    },
	    Webkit: function Webkit(e) {
	      return "webkit" + e;
	    },
	    ms: function ms(e) {
	      return "MS" + e;
	    }
	  };
	  var vendors = Object.keys(vendorMap);
	  var transitionEnd, animationEnd;
	  var prefix = '';
	
	  for (var i = 0; i < vendors.length; i++) {
	    var vendor = vendors[i];
	
	    if (vendor + "TransitionProperty" in style) {
	      prefix = "-" + vendor.toLowerCase();
	      transitionEnd = vendorMap[vendor]('TransitionEnd');
	      animationEnd = vendorMap[vendor]('AnimationEnd');
	      break;
	    }
	  }
	
	  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';
	  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';
	  style = null;
	  return {
	    animationEnd: animationEnd,
	    transitionEnd: transitionEnd,
	    prefix: prefix
	  };
	}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	}
	
	module.exports = _interopRequireDefault;
	module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
	
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(10));
	
	var on = function on() {};
	
	if (_inDOM.default) {
	  on = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.addEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.attachEvent('on' + eventName, function (e) {
	        e = e || window.event;
	        e.target = e.target || e.srcElement;
	        e.currentTarget = node;
	        handler.call(node, e);
	      });
	    };
	  }();
	}
	
	var _default = on;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = PropTypes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _style = __webpack_require__(14);
	
	var _style2 = _interopRequireDefault(_style);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(7);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	var _capitalize = __webpack_require__(22);
	
	var _capitalize2 = _interopRequireDefault(_capitalize);
	
	var _tinperBeeCore = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var MARGINS = {
	  height: ['marginTop', 'marginBottom'],
	  width: ['marginLeft', 'marginRight']
	};
	
	// reading a dimension prop will cause the browser to recalculate,
	// which will let our animations work
	function triggerBrowserReflow(node) {
	  node.offsetHeight; // eslint-disable-line no-unused-expressions
	}
	
	function getDimensionValue(dimension, elem) {
	  var value = elem['offset' + (0, _capitalize2["default"])(dimension)];
	  var margins = MARGINS[dimension];
	
	  return value + parseInt((0, _style2["default"])(elem, margins[0]), 10) + parseInt((0, _style2["default"])(elem, margins[1]), 10);
	}
	
	var propTypes = {
	  /**
	   * Show the component; triggers the expand or collapse animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is collapsed
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the expand animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the collapse animation in milliseconds, to ensure that
	   * finishing callbacks are fired even if the original browser transition end
	   * events are canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component expands
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to expand
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has expanded
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component collapses
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to collapse
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has collapsed
	   */
	  onExited: _propTypes2["default"].func,
	
	  /**
	   * The dimension used when collapsing, or a function that returns the
	   * dimension
	   *
	   * _Note: Bootstrap only partially supports 'width'!
	   * You will need to supply your own CSS animation for the `.width` CSS class._
	   */
	  dimension: _propTypes2["default"].oneOfType([_propTypes2["default"].oneOf(['height', 'width']), _propTypes2["default"].func]),
	
	  /**
	   * Function that returns the height or width of the animating DOM node
	   *
	   * Allows for providing some custom logic for how much the Collapse component
	   * should animate in its specified dimension. Called with the current
	   * dimension prop value and the DOM node.
	   */
	  getDimensionValue: _propTypes2["default"].func,
	
	  /**
	   * ARIA role of collapsible element
	   */
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false,
	
	  dimension: 'height',
	  getDimensionValue: getDimensionValue
	};
	
	var Collapse = function (_React$Component) {
	  _inherits(Collapse, _React$Component);
	
	  function Collapse(props, context) {
	    _classCallCheck(this, Collapse);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleEnter = _this.handleEnter.bind(_this);
	    _this.handleEntering = _this.handleEntering.bind(_this);
	    _this.handleEntered = _this.handleEntered.bind(_this);
	    _this.handleExit = _this.handleExit.bind(_this);
	    _this.handleExiting = _this.handleExiting.bind(_this);
	    return _this;
	  }
	
	  /* -- Expanding -- */
	
	
	  Collapse.prototype.handleEnter = function handleEnter(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype.handleEntering = function handleEntering(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this._getScrollDimensionValue(elem, dimension);
	  };
	
	  Collapse.prototype.handleEntered = function handleEntered(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = null;
	  };
	
	  /* -- Collapsing -- */
	
	
	  Collapse.prototype.handleExit = function handleExit(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = this.props.getDimensionValue(dimension, elem) + 'px';
	    triggerBrowserReflow(elem);
	  };
	
	  Collapse.prototype.handleExiting = function handleExiting(elem) {
	    var dimension = this._dimension();
	    elem.style[dimension] = '0';
	  };
	
	  Collapse.prototype._dimension = function _dimension() {
	    return typeof this.props.dimension === 'function' ? this.props.dimension() : this.props.dimension;
	  };
	
	  // for testing
	
	
	  Collapse.prototype._getScrollDimensionValue = function _getScrollDimensionValue(elem, dimension) {
	    return elem['scroll' + (0, _capitalize2["default"])(dimension)] + 'px';
	  };
	
	  Collapse.prototype.render = function render() {
	    var _props = this.props,
	        onEnter = _props.onEnter,
	        onEntering = _props.onEntering,
	        onEntered = _props.onEntered,
	        onExit = _props.onExit,
	        onExiting = _props.onExiting,
	        className = _props.className,
	        props = _objectWithoutProperties(_props, ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'className']);
	
	    delete props.dimension;
	    delete props.getDimensionValue;
	
	    var handleEnter = (0, _tinperBeeCore.createChainedFunction)(this.handleEnter, onEnter);
	    var handleEntering = (0, _tinperBeeCore.createChainedFunction)(this.handleEntering, onEntering);
	    var handleEntered = (0, _tinperBeeCore.createChainedFunction)(this.handleEntered, onEntered);
	    var handleExit = (0, _tinperBeeCore.createChainedFunction)(this.handleExit, onExit);
	    var handleExiting = (0, _tinperBeeCore.createChainedFunction)(this.handleExiting, onExiting);
	
	    var classes = {
	      width: this._dimension() === 'width'
	    };
	
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, props, {
	      'aria-expanded': props.role ? props["in"] : null,
	      className: (0, _classnames2["default"])(className, classes),
	      exitedClassName: 'collapse',
	      exitingClassName: 'collapsing',
	      enteredClassName: 'collapse in',
	      enteringClassName: 'collapsing',
	      onEnter: handleEnter,
	      onEntering: handleEntering,
	      onEntered: handleEntered,
	      onExit: handleExit,
	      onExiting: handleExiting
	    }));
	  };
	
	  return Collapse;
	}(_react2["default"].Component);
	
	Collapse.propTypes = propTypes;
	Collapse.defaultProps = defaultProps;
	
	exports["default"] = Collapse;
	module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = style;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(15));
	
	var _hyphenateStyle = _interopRequireDefault(__webpack_require__(17));
	
	var _getComputedStyle2 = _interopRequireDefault(__webpack_require__(19));
	
	var _removeStyle = _interopRequireDefault(__webpack_require__(20));
	
	var _properties = __webpack_require__(8);
	
	var _isTransform = _interopRequireDefault(__webpack_require__(21));
	
	function style(node, property, value) {
	  var css = '';
	  var transforms = '';
	  var props = property;
	
	  if (typeof property === 'string') {
	    if (value === undefined) {
	      return node.style[(0, _camelizeStyle.default)(property)] || (0, _getComputedStyle2.default)(node).getPropertyValue((0, _hyphenateStyle.default)(property));
	    } else {
	      (props = {})[property] = value;
	    }
	  }
	
	  Object.keys(props).forEach(function (key) {
	    var value = props[key];
	
	    if (!value && value !== 0) {
	      (0, _removeStyle.default)(node, (0, _hyphenateStyle.default)(key));
	    } else if ((0, _isTransform.default)(key)) {
	      transforms += key + "(" + value + ") ";
	    } else {
	      css += (0, _hyphenateStyle.default)(key) + ": " + value + ";";
	    }
	  });
	
	  if (transforms) {
	    css += _properties.transform + ": " + transforms + ";";
	  }
	
	  node.style.cssText += ';' + css;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = camelizeStyleName;
	
	var _camelize = _interopRequireDefault(__webpack_require__(16));
	
	/**
	 * Copyright 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
	 */
	var msPattern = /^-ms-/;
	
	function camelizeStyleName(string) {
	  return (0, _camelize.default)(string.replace(msPattern, 'ms-'));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = camelize;
	var rHyphen = /-(.)/g;
	
	function camelize(string) {
	  return string.replace(rHyphen, function (_, chr) {
	    return chr.toUpperCase();
	  });
	}
	
	module.exports = exports["default"];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = hyphenateStyleName;
	
	var _hyphenate = _interopRequireDefault(__webpack_require__(18));
	
	/**
	 * Copyright 2013-2014, Facebook, Inc.
	 * All rights reserved.
	 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
	 */
	var msPattern = /^ms-/;
	
	function hyphenateStyleName(string) {
	  return (0, _hyphenate.default)(string).replace(msPattern, '-ms-');
	}
	
	module.exports = exports["default"];

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = hyphenate;
	var rUpper = /([A-Z])/g;
	
	function hyphenate(string) {
	  return string.replace(rUpper, '-$1').toLowerCase();
	}
	
	module.exports = exports["default"];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = _getComputedStyle;
	
	var _camelizeStyle = _interopRequireDefault(__webpack_require__(15));
	
	var rposition = /^(top|right|bottom|left)$/;
	var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;
	
	function _getComputedStyle(node) {
	  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
	  var doc = node.ownerDocument;
	  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
	    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
	    getPropertyValue: function getPropertyValue(prop) {
	      var style = node.style;
	      prop = (0, _camelizeStyle.default)(prop);
	      if (prop == 'float') prop = 'styleFloat';
	      var current = node.currentStyle[prop] || null;
	      if (current == null && style && style[prop]) current = style[prop];
	
	      if (rnumnonpx.test(current) && !rposition.test(prop)) {
	        // Remember the original values
	        var left = style.left;
	        var runStyle = node.runtimeStyle;
	        var rsLeft = runStyle && runStyle.left; // Put in the new values to get a computed value out
	
	        if (rsLeft) runStyle.left = node.currentStyle.left;
	        style.left = prop === 'fontSize' ? '1em' : current;
	        current = style.pixelLeft + 'px'; // Revert the changed values
	
	        style.left = left;
	        if (rsLeft) runStyle.left = rsLeft;
	      }
	
	      return current;
	    }
	  };
	}
	
	module.exports = exports["default"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = removeStyle;
	
	function removeStyle(node, key) {
	  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
	}
	
	module.exports = exports["default"];

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = isTransform;
	var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
	
	function isTransform(property) {
	  return !!(property && supportedTransforms.test(property));
	}
	
	module.exports = exports["default"];

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = capitalize;
	function capitalize(string) {
	  return "" + string.charAt(0).toUpperCase() + string.slice(1);
	}
	module.exports = exports["default"];

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.Align = exports.toArray = exports.cssAnimation = exports.addEventListener = exports.contains = exports.KeyCode = exports.createChainedFunction = exports.splitComponent = exports.isRequiredForA11y = exports.elementType = exports.deprecated = exports.componentOrElement = exports.all = undefined;
	
	var _all2 = __webpack_require__(24);
	
	var _all3 = _interopRequireDefault(_all2);
	
	var _componentOrElement2 = __webpack_require__(26);
	
	var _componentOrElement3 = _interopRequireDefault(_componentOrElement2);
	
	var _deprecated2 = __webpack_require__(27);
	
	var _deprecated3 = _interopRequireDefault(_deprecated2);
	
	var _elementType2 = __webpack_require__(30);
	
	var _elementType3 = _interopRequireDefault(_elementType2);
	
	var _isRequiredForA11y2 = __webpack_require__(31);
	
	var _isRequiredForA11y3 = _interopRequireDefault(_isRequiredForA11y2);
	
	var _splitComponent2 = __webpack_require__(32);
	
	var _splitComponent3 = _interopRequireDefault(_splitComponent2);
	
	var _createChainedFunction2 = __webpack_require__(33);
	
	var _createChainedFunction3 = _interopRequireDefault(_createChainedFunction2);
	
	var _keyCode = __webpack_require__(34);
	
	var _keyCode2 = _interopRequireDefault(_keyCode);
	
	var _contains2 = __webpack_require__(35);
	
	var _contains3 = _interopRequireDefault(_contains2);
	
	var _addEventListener2 = __webpack_require__(36);
	
	var _addEventListener3 = _interopRequireDefault(_addEventListener2);
	
	var _cssAnimation2 = __webpack_require__(41);
	
	var _cssAnimation3 = _interopRequireDefault(_cssAnimation2);
	
	var _toArray2 = __webpack_require__(45);
	
	var _toArray3 = _interopRequireDefault(_toArray2);
	
	var _Align2 = __webpack_require__(46);
	
	var _Align3 = _interopRequireDefault(_Align2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.all = _all3.default;
	exports.componentOrElement = _componentOrElement3.default;
	exports.deprecated = _deprecated3.default;
	exports.elementType = _elementType3.default;
	exports.isRequiredForA11y = _isRequiredForA11y3.default;
	exports.splitComponent = _splitComponent3.default;
	exports.createChainedFunction = _createChainedFunction3.default;
	exports.KeyCode = _keyCode2.default;
	exports.contains = _contains3.default;
	exports.addEventListener = _addEventListener3.default;
	exports.cssAnimation = _cssAnimation3.default;
	exports.toArray = _toArray3.default;
	//export getContainerRenderMixin from './getContainerRenderMixin';
	
	exports.Align = _Align3.default;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = all;
	
	var _createChainableTypeChecker = __webpack_require__(25);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function all() {
	  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
	    validators[_key] = arguments[_key];
	  }
	
	  function allPropTypes() {
	    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	      args[_key2] = arguments[_key2];
	    }
	
	    var error = null;
	
	    validators.forEach(function (validator) {
	      if (error != null) {
	        return;
	      }
	
	      var result = validator.apply(undefined, args);
	      if (result != null) {
	        error = result;
	      }
	    });
	
	    return error;
	  }
	
	  return (0, _createChainableTypeChecker2.default)(allPropTypes);
	} /**
	   * This source code is quoted from rc-util.
	   * homepage: https://github.com/react-component/util
	   */

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = createChainableTypeChecker;
	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	// Mostly taken from ReactPropTypes.
	
	/* This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	
	function createChainableTypeChecker(validate) {
	  function checkType(isRequired, props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      if (isRequired) {
	        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
	      }
	
	      return null;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
	      args[_key - 6] = arguments[_key];
	    }
	
	    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
	  }
	
	  var chainedCheckType = checkType.bind(null, false);
	  chainedCheckType.isRequired = checkType.bind(null, true);
	
	  return chainedCheckType;
	}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(25);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function validate(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement. You can usually obtain a ReactComponent or DOMElement ' + 'from a ReactElement by attaching a ref to it.');
	  }
	
	  if ((propType !== 'object' || typeof propValue.render !== 'function') && propValue.nodeType !== 1) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected a ReactComponent or a ') + 'DOMElement.');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(validate);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = deprecated;
	
	var _warning = __webpack_require__(28);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var warned = {}; /**
	                  * This source code is quoted from rc-util.
	                  * homepage: https://github.com/react-component/util
	                  */
	function deprecated(validator, reason) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] != null) {
	      var messageKey = componentName + '.' + propName;
	
	      (0, _warning2.default)(warned[messageKey], 'The ' + location + ' `' + propFullNameSafe + '` of ' + ('`' + componentNameSafe + '` is deprecated. ' + reason + '.'));
	
	      warned[messageKey] = true;
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}
	
	/* eslint-disable no-underscore-dangle */
	function _resetWarned() {
	  warned = {};
	}
	
	deprecated._resetWarned = _resetWarned;
	/* eslint-enable no-underscore-dangle */

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */
	
	'use strict';
	
	/**
	 * Similar to invariant but only logs a warning if the condition is not met.
	 * This can be used to log issues in development environments in critical
	 * paths. Removing the logging code for production environments will keep the
	 * same logic and follow the same code paths.
	 */
	
	var __DEV__ = process.env.NODE_ENV !== 'production';
	
	var warning = function() {};
	
	if (__DEV__) {
	  var printWarning = function printWarning(format, args) {
	    var len = arguments.length;
	    args = new Array(len > 1 ? len - 1 : 0);
	    for (var key = 1; key < len; key++) {
	      args[key - 1] = arguments[key];
	    }
	    var argIndex = 0;
	    var message = 'Warning: ' +
	      format.replace(/%s/g, function() {
	        return args[argIndex++];
	      });
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  }
	
	  warning = function(condition, format, args) {
	    var len = arguments.length;
	    args = new Array(len > 2 ? len - 2 : 0);
	    for (var key = 2; key < len; key++) {
	      args[key - 2] = arguments[key];
	    }
	    if (format === undefined) {
	      throw new Error(
	          '`warning(condition, format, ...args)` requires a warning ' +
	          'message argument'
	      );
	    }
	    if (!condition) {
	      printWarning.apply(null, [format].concat(args));
	    }
	  };
	}
	
	module.exports = warning;
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _createChainableTypeChecker = __webpack_require__(25);
	
	var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function elementType(props, propName, componentName, location, propFullName) {
	  var propValue = props[propName];
	  var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof(propValue);
	
	  if (_react2.default.isValidElement(propValue)) {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of type ReactElement ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  if (propType !== 'function' && propType !== 'string') {
	    return new Error('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected an element type (a string ') + 'or a ReactClass).');
	  }
	
	  return null;
	}
	
	exports.default = (0, _createChainableTypeChecker2.default)(elementType);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = isRequiredForA11y;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function isRequiredForA11y(validator) {
	  return function validate(props, propName, componentName, location, propFullName) {
	    var componentNameSafe = componentName || '<<anonymous>>';
	    var propFullNameSafe = propFullName || propName;
	
	    if (props[propName] == null) {
	      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
	    }
	
	    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
	      args[_key - 5] = arguments[_key];
	    }
	
	    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
	  };
	}

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = splitComponentProps;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function _objectEntries(obj) {
	  var entries = [];
	  var keys = Object.keys(obj);
	
	  for (var k = 0; k < keys.length; ++k) {
	    entries.push([keys[k], obj[keys[k]]]);
	  }return entries;
	}
	
	/**
	 * 分割要传入父元素和子元素的props
	 * @param  {[object]} props     传入的属性
	 * @param  {[reactElement]} Component 组件
	 * @return {[array]}           返回数组，第一个元素为父元素props对象，第二个子元素props对象
	 */
	function splitComponentProps(props, Component) {
	  var componentPropTypes = Component.propTypes;
	
	  var parentProps = {};
	  var childProps = {};
	
	  _objectEntries(props).forEach(function (_ref) {
	    var propName = _ref[0],
	        propValue = _ref[1];
	
	    if (componentPropTypes[propName]) {
	      parentProps[propName] = propValue;
	    } else {
	      childProps[propName] = propValue;
	    }
	  });
	
	  return [parentProps, childProps];
	}

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function createChainedFunction() {
	  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
	    funcs[_key] = arguments[_key];
	  }
	
	  return funcs.filter(function (f) {
	    return f != null;
	  }).reduce(function (acc, f) {
	    if (typeof f !== 'function') {
	      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
	    }
	
	    if (acc === null) {
	      return f;
	    }
	
	    return function chainedFunction() {
	      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        args[_key2] = arguments[_key2];
	      }
	
	      acc.apply(this, args);
	      f.apply(this, args);
	    };
	  }, null);
	}
	exports.default = createChainedFunction;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	'use strict';
	
	/**
	 * @ignore
	 * some key-codes definition and utils from closure-library
	 * @author yiminghe@gmail.com
	 */
	
	var KeyCode = {
	  /**
	   * MAC_ENTER
	   */
	  MAC_ENTER: 3,
	  /**
	   * BACKSPACE
	   */
	  BACKSPACE: 8,
	  /**
	   * TAB
	   */
	  TAB: 9,
	  /**
	   * NUMLOCK on FF/Safari Mac
	   */
	  NUM_CENTER: 12, // NUMLOCK on FF/Safari Mac
	  /**
	   * ENTER
	   */
	  ENTER: 13,
	  /**
	   * SHIFT
	   */
	  SHIFT: 16,
	  /**
	   * CTRL
	   */
	  CTRL: 17,
	  /**
	   * ALT
	   */
	  ALT: 18,
	  /**
	   * PAUSE
	   */
	  PAUSE: 19,
	  /**
	   * CAPS_LOCK
	   */
	  CAPS_LOCK: 20,
	  /**
	   * ESC
	   */
	  ESC: 27,
	  /**
	   * SPACE
	   */
	  SPACE: 32,
	  /**
	   * PAGE_UP
	   */
	  PAGE_UP: 33, // also NUM_NORTH_EAST
	  /**
	   * PAGE_DOWN
	   */
	  PAGE_DOWN: 34, // also NUM_SOUTH_EAST
	  /**
	   * END
	   */
	  END: 35, // also NUM_SOUTH_WEST
	  /**
	   * HOME
	   */
	  HOME: 36, // also NUM_NORTH_WEST
	  /**
	   * LEFT
	   */
	  LEFT: 37, // also NUM_WEST
	  /**
	   * UP
	   */
	  UP: 38, // also NUM_NORTH
	  /**
	   * RIGHT
	   */
	  RIGHT: 39, // also NUM_EAST
	  /**
	   * DOWN
	   */
	  DOWN: 40, // also NUM_SOUTH
	  /**
	   * PRINT_SCREEN
	   */
	  PRINT_SCREEN: 44,
	  /**
	   * INSERT
	   */
	  INSERT: 45, // also NUM_INSERT
	  /**
	   * DELETE
	   */
	  DELETE: 46, // also NUM_DELETE
	  /**
	   * ZERO
	   */
	  ZERO: 48,
	  /**
	   * ONE
	   */
	  ONE: 49,
	  /**
	   * TWO
	   */
	  TWO: 50,
	  /**
	   * THREE
	   */
	  THREE: 51,
	  /**
	   * FOUR
	   */
	  FOUR: 52,
	  /**
	   * FIVE
	   */
	  FIVE: 53,
	  /**
	   * SIX
	   */
	  SIX: 54,
	  /**
	   * SEVEN
	   */
	  SEVEN: 55,
	  /**
	   * EIGHT
	   */
	  EIGHT: 56,
	  /**
	   * NINE
	   */
	  NINE: 57,
	  /**
	   * QUESTION_MARK
	   */
	  QUESTION_MARK: 63, // needs localization
	  /**
	   * A
	   */
	  A: 65,
	  /**
	   * B
	   */
	  B: 66,
	  /**
	   * C
	   */
	  C: 67,
	  /**
	   * D
	   */
	  D: 68,
	  /**
	   * E
	   */
	  E: 69,
	  /**
	   * F
	   */
	  F: 70,
	  /**
	   * G
	   */
	  G: 71,
	  /**
	   * H
	   */
	  H: 72,
	  /**
	   * I
	   */
	  I: 73,
	  /**
	   * J
	   */
	  J: 74,
	  /**
	   * K
	   */
	  K: 75,
	  /**
	   * L
	   */
	  L: 76,
	  /**
	   * M
	   */
	  M: 77,
	  /**
	   * N
	   */
	  N: 78,
	  /**
	   * O
	   */
	  O: 79,
	  /**
	   * P
	   */
	  P: 80,
	  /**
	   * Q
	   */
	  Q: 81,
	  /**
	   * R
	   */
	  R: 82,
	  /**
	   * S
	   */
	  S: 83,
	  /**
	   * T
	   */
	  T: 84,
	  /**
	   * U
	   */
	  U: 85,
	  /**
	   * V
	   */
	  V: 86,
	  /**
	   * W
	   */
	  W: 87,
	  /**
	   * X
	   */
	  X: 88,
	  /**
	   * Y
	   */
	  Y: 89,
	  /**
	   * Z
	   */
	  Z: 90,
	  /**
	   * META
	   */
	  META: 91, // WIN_KEY_LEFT
	  /**
	   * WIN_KEY_RIGHT
	   */
	  WIN_KEY_RIGHT: 92,
	  /**
	   * CONTEXT_MENU
	   */
	  CONTEXT_MENU: 93,
	  /**
	   * NUM_ZERO
	   */
	  NUM_ZERO: 96,
	  /**
	   * NUM_ONE
	   */
	  NUM_ONE: 97,
	  /**
	   * NUM_TWO
	   */
	  NUM_TWO: 98,
	  /**
	   * NUM_THREE
	   */
	  NUM_THREE: 99,
	  /**
	   * NUM_FOUR
	   */
	  NUM_FOUR: 100,
	  /**
	   * NUM_FIVE
	   */
	  NUM_FIVE: 101,
	  /**
	   * NUM_SIX
	   */
	  NUM_SIX: 102,
	  /**
	   * NUM_SEVEN
	   */
	  NUM_SEVEN: 103,
	  /**
	   * NUM_EIGHT
	   */
	  NUM_EIGHT: 104,
	  /**
	   * NUM_NINE
	   */
	  NUM_NINE: 105,
	  /**
	   * NUM_MULTIPLY
	   */
	  NUM_MULTIPLY: 106,
	  /**
	   * NUM_PLUS
	   */
	  NUM_PLUS: 107,
	  /**
	   * NUM_MINUS
	   */
	  NUM_MINUS: 109,
	  /**
	   * NUM_PERIOD
	   */
	  NUM_PERIOD: 110,
	  /**
	   * NUM_DIVISION
	   */
	  NUM_DIVISION: 111,
	  /**
	   * F1
	   */
	  F1: 112,
	  /**
	   * F2
	   */
	  F2: 113,
	  /**
	   * F3
	   */
	  F3: 114,
	  /**
	   * F4
	   */
	  F4: 115,
	  /**
	   * F5
	   */
	  F5: 116,
	  /**
	   * F6
	   */
	  F6: 117,
	  /**
	   * F7
	   */
	  F7: 118,
	  /**
	   * F8
	   */
	  F8: 119,
	  /**
	   * F9
	   */
	  F9: 120,
	  /**
	   * F10
	   */
	  F10: 121,
	  /**
	   * F11
	   */
	  F11: 122,
	  /**
	   * F12
	   */
	  F12: 123,
	  /**
	   * NUMLOCK
	   */
	  NUMLOCK: 144,
	  /**
	   * SEMICOLON
	   */
	  SEMICOLON: 186, // needs localization
	  /**
	   * DASH
	   */
	  DASH: 189, // needs localization
	  /**
	   * EQUALS
	   */
	  EQUALS: 187, // needs localization
	  /**
	   * COMMA
	   */
	  COMMA: 188, // needs localization
	  /**
	   * PERIOD
	   */
	  PERIOD: 190, // needs localization
	  /**
	   * SLASH
	   */
	  SLASH: 191, // needs localization
	  /**
	   * APOSTROPHE
	   */
	  APOSTROPHE: 192, // needs localization
	  /**
	   * SINGLE_QUOTE
	   */
	  SINGLE_QUOTE: 222, // needs localization
	  /**
	   * OPEN_SQUARE_BRACKET
	   */
	  OPEN_SQUARE_BRACKET: 219, // needs localization
	  /**
	   * BACKSLASH
	   */
	  BACKSLASH: 220, // needs localization
	  /**
	   * CLOSE_SQUARE_BRACKET
	   */
	  CLOSE_SQUARE_BRACKET: 221, // needs localization
	  /**
	   * WIN_KEY
	   */
	  WIN_KEY: 224,
	  /**
	   * MAC_FF_META
	   */
	  MAC_FF_META: 224, // Firefox (Gecko) fires this for the meta key instead of 91
	  /**
	   * WIN_IME
	   */
	  WIN_IME: 229
	};
	
	/*
	 whether text and modified key is entered at the same time.
	 */
	KeyCode.isTextModifyingKeyEvent = function isTextModifyingKeyEvent(e) {
	  var keyCode = e.keyCode;
	  if (e.altKey && !e.ctrlKey || e.metaKey ||
	  // Function keys don't generate text
	  keyCode >= KeyCode.F1 && keyCode <= KeyCode.F12) {
	    return false;
	  }
	
	  // The following keys are quite harmless, even in combination with
	  // CTRL, ALT or SHIFT.
	  switch (keyCode) {
	    case KeyCode.ALT:
	    case KeyCode.CAPS_LOCK:
	    case KeyCode.CONTEXT_MENU:
	    case KeyCode.CTRL:
	    case KeyCode.DOWN:
	    case KeyCode.END:
	    case KeyCode.ESC:
	    case KeyCode.HOME:
	    case KeyCode.INSERT:
	    case KeyCode.LEFT:
	    case KeyCode.MAC_FF_META:
	    case KeyCode.META:
	    case KeyCode.NUMLOCK:
	    case KeyCode.NUM_CENTER:
	    case KeyCode.PAGE_DOWN:
	    case KeyCode.PAGE_UP:
	    case KeyCode.PAUSE:
	    case KeyCode.PRINT_SCREEN:
	    case KeyCode.RIGHT:
	    case KeyCode.SHIFT:
	    case KeyCode.UP:
	    case KeyCode.WIN_KEY:
	    case KeyCode.WIN_KEY_RIGHT:
	      return false;
	    default:
	      return true;
	  }
	};
	
	/*
	 whether character is entered.
	 */
	KeyCode.isCharacterKey = function isCharacterKey(keyCode) {
	  if (keyCode >= KeyCode.ZERO && keyCode <= KeyCode.NINE) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.NUM_ZERO && keyCode <= KeyCode.NUM_MULTIPLY) {
	    return true;
	  }
	
	  if (keyCode >= KeyCode.A && keyCode <= KeyCode.Z) {
	    return true;
	  }
	
	  // Safari sends zero key code for non-latin characters.
	  if (window.navigation.userAgent.indexOf('WebKit') !== -1 && keyCode === 0) {
	    return true;
	  }
	
	  switch (keyCode) {
	    case KeyCode.SPACE:
	    case KeyCode.QUESTION_MARK:
	    case KeyCode.NUM_PLUS:
	    case KeyCode.NUM_MINUS:
	    case KeyCode.NUM_PERIOD:
	    case KeyCode.NUM_DIVISION:
	    case KeyCode.SEMICOLON:
	    case KeyCode.DASH:
	    case KeyCode.EQUALS:
	    case KeyCode.COMMA:
	    case KeyCode.PERIOD:
	    case KeyCode.SLASH:
	    case KeyCode.APOSTROPHE:
	    case KeyCode.SINGLE_QUOTE:
	    case KeyCode.OPEN_SQUARE_BRACKET:
	    case KeyCode.BACKSLASH:
	    case KeyCode.CLOSE_SQUARE_BRACKET:
	      return true;
	    default:
	      return false;
	  }
	};
	
	module.exports = KeyCode;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = contains;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function contains(root, n) {
	  var node = n;
	  while (node) {
	    if (node === root) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	
	  return false;
	}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = addEventListenerWrap;
	
	var _addDomEventListener = __webpack_require__(37);
	
	var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	function addEventListenerWrap(target, eventType, cb) {
	  /* eslint camelcase: 2 */
	  var callback = _reactDom2.default.unstable_batchedUpdates ? function run(e) {
	    _reactDom2.default.unstable_batchedUpdates(cb, e);
	  } : cb;
	  return (0, _addDomEventListener2.default)(target, eventType, callback);
	}

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = addEventListener;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventObject = __webpack_require__(38);
	
	var _EventObject2 = _interopRequireDefault(_EventObject);
	
	function addEventListener(target, eventType, callback, option) {
	  function wrapCallback(e) {
	    var ne = new _EventObject2['default'](e);
	    callback.call(target, ne);
	  }
	
	  if (target.addEventListener) {
	    var _ret = (function () {
	      var useCapture = false;
	      if (typeof option === 'object') {
	        useCapture = option.capture || false;
	      } else if (typeof option === 'boolean') {
	        useCapture = option;
	      }
	
	      target.addEventListener(eventType, wrapCallback, option || false);
	
	      return {
	        v: {
	          remove: function remove() {
	            target.removeEventListener(eventType, wrapCallback, useCapture);
	          }
	        }
	      };
	    })();
	
	    if (typeof _ret === 'object') return _ret.v;
	  } else if (target.attachEvent) {
	    target.attachEvent('on' + eventType, wrapCallback);
	    return {
	      remove: function remove() {
	        target.detachEvent('on' + eventType, wrapCallback);
	      }
	    };
	  }
	}
	
	module.exports = exports['default'];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * event object for dom
	 * @author yiminghe@gmail.com
	 */
	
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _EventBaseObject = __webpack_require__(39);
	
	var _EventBaseObject2 = _interopRequireDefault(_EventBaseObject);
	
	var _objectAssign = __webpack_require__(40);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	var TRUE = true;
	var FALSE = false;
	var commonProps = ['altKey', 'bubbles', 'cancelable', 'ctrlKey', 'currentTarget', 'eventPhase', 'metaKey', 'shiftKey', 'target', 'timeStamp', 'view', 'type'];
	
	function isNullOrUndefined(w) {
	  return w === null || w === undefined;
	}
	
	var eventNormalizers = [{
	  reg: /^key/,
	  props: ['char', 'charCode', 'key', 'keyCode', 'which'],
	  fix: function fix(event, nativeEvent) {
	    if (isNullOrUndefined(event.which)) {
	      event.which = !isNullOrUndefined(nativeEvent.charCode) ? nativeEvent.charCode : nativeEvent.keyCode;
	    }
	
	    // add metaKey to non-Mac browsers (use ctrl for PC 's and Meta for Macs)
	    if (event.metaKey === undefined) {
	      event.metaKey = event.ctrlKey;
	    }
	  }
	}, {
	  reg: /^touch/,
	  props: ['touches', 'changedTouches', 'targetTouches']
	}, {
	  reg: /^hashchange$/,
	  props: ['newURL', 'oldURL']
	}, {
	  reg: /^gesturechange$/i,
	  props: ['rotation', 'scale']
	}, {
	  reg: /^(mousewheel|DOMMouseScroll)$/,
	  props: [],
	  fix: function fix(event, nativeEvent) {
	    var deltaX = undefined;
	    var deltaY = undefined;
	    var delta = undefined;
	    var wheelDelta = nativeEvent.wheelDelta;
	    var axis = nativeEvent.axis;
	    var wheelDeltaY = nativeEvent.wheelDeltaY;
	    var wheelDeltaX = nativeEvent.wheelDeltaX;
	    var detail = nativeEvent.detail;
	
	    // ie/webkit
	    if (wheelDelta) {
	      delta = wheelDelta / 120;
	    }
	
	    // gecko
	    if (detail) {
	      // press control e.detail == 1 else e.detail == 3
	      delta = 0 - (detail % 3 === 0 ? detail / 3 : detail);
	    }
	
	    // Gecko
	    if (axis !== undefined) {
	      if (axis === event.HORIZONTAL_AXIS) {
	        deltaY = 0;
	        deltaX = 0 - delta;
	      } else if (axis === event.VERTICAL_AXIS) {
	        deltaX = 0;
	        deltaY = delta;
	      }
	    }
	
	    // Webkit
	    if (wheelDeltaY !== undefined) {
	      deltaY = wheelDeltaY / 120;
	    }
	    if (wheelDeltaX !== undefined) {
	      deltaX = -1 * wheelDeltaX / 120;
	    }
	
	    // 默认 deltaY (ie)
	    if (!deltaX && !deltaY) {
	      deltaY = delta;
	    }
	
	    if (deltaX !== undefined) {
	      /**
	       * deltaX of mousewheel event
	       * @property deltaX
	       * @member Event.DomEvent.Object
	       */
	      event.deltaX = deltaX;
	    }
	
	    if (deltaY !== undefined) {
	      /**
	       * deltaY of mousewheel event
	       * @property deltaY
	       * @member Event.DomEvent.Object
	       */
	      event.deltaY = deltaY;
	    }
	
	    if (delta !== undefined) {
	      /**
	       * delta of mousewheel event
	       * @property delta
	       * @member Event.DomEvent.Object
	       */
	      event.delta = delta;
	    }
	  }
	}, {
	  reg: /^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,
	  props: ['buttons', 'clientX', 'clientY', 'button', 'offsetX', 'relatedTarget', 'which', 'fromElement', 'toElement', 'offsetY', 'pageX', 'pageY', 'screenX', 'screenY'],
	  fix: function fix(event, nativeEvent) {
	    var eventDoc = undefined;
	    var doc = undefined;
	    var body = undefined;
	    var target = event.target;
	    var button = nativeEvent.button;
	
	    // Calculate pageX/Y if missing and clientX/Y available
	    if (target && isNullOrUndefined(event.pageX) && !isNullOrUndefined(nativeEvent.clientX)) {
	      eventDoc = target.ownerDocument || document;
	      doc = eventDoc.documentElement;
	      body = eventDoc.body;
	      event.pageX = nativeEvent.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
	      event.pageY = nativeEvent.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
	    }
	
	    // which for click: 1 === left; 2 === middle; 3 === right
	    // do not use button
	    if (!event.which && button !== undefined) {
	      if (button & 1) {
	        event.which = 1;
	      } else if (button & 2) {
	        event.which = 3;
	      } else if (button & 4) {
	        event.which = 2;
	      } else {
	        event.which = 0;
	      }
	    }
	
	    // add relatedTarget, if necessary
	    if (!event.relatedTarget && event.fromElement) {
	      event.relatedTarget = event.fromElement === target ? event.toElement : event.fromElement;
	    }
	
	    return event;
	  }
	}];
	
	function retTrue() {
	  return TRUE;
	}
	
	function retFalse() {
	  return FALSE;
	}
	
	function DomEventObject(nativeEvent) {
	  var type = nativeEvent.type;
	
	  var isNative = typeof nativeEvent.stopPropagation === 'function' || typeof nativeEvent.cancelBubble === 'boolean';
	
	  _EventBaseObject2['default'].call(this);
	
	  this.nativeEvent = nativeEvent;
	
	  // in case dom event has been mark as default prevented by lower dom node
	  var isDefaultPrevented = retFalse;
	  if ('defaultPrevented' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.defaultPrevented ? retTrue : retFalse;
	  } else if ('getPreventDefault' in nativeEvent) {
	    // https://bugzilla.mozilla.org/show_bug.cgi?id=691151
	    isDefaultPrevented = nativeEvent.getPreventDefault() ? retTrue : retFalse;
	  } else if ('returnValue' in nativeEvent) {
	    isDefaultPrevented = nativeEvent.returnValue === FALSE ? retTrue : retFalse;
	  }
	
	  this.isDefaultPrevented = isDefaultPrevented;
	
	  var fixFns = [];
	  var fixFn = undefined;
	  var l = undefined;
	  var prop = undefined;
	  var props = commonProps.concat();
	
	  eventNormalizers.forEach(function (normalizer) {
	    if (type.match(normalizer.reg)) {
	      props = props.concat(normalizer.props);
	      if (normalizer.fix) {
	        fixFns.push(normalizer.fix);
	      }
	    }
	  });
	
	  l = props.length;
	
	  // clone properties of the original event object
	  while (l) {
	    prop = props[--l];
	    this[prop] = nativeEvent[prop];
	  }
	
	  // fix target property, if necessary
	  if (!this.target && isNative) {
	    this.target = nativeEvent.srcElement || document; // srcElement might not be defined either
	  }
	
	  // check if target is a text node (safari)
	  if (this.target && this.target.nodeType === 3) {
	    this.target = this.target.parentNode;
	  }
	
	  l = fixFns.length;
	
	  while (l) {
	    fixFn = fixFns[--l];
	    fixFn(this, nativeEvent);
	  }
	
	  this.timeStamp = nativeEvent.timeStamp || Date.now();
	}
	
	var EventBaseObjectProto = _EventBaseObject2['default'].prototype;
	
	(0, _objectAssign2['default'])(DomEventObject.prototype, EventBaseObjectProto, {
	  constructor: DomEventObject,
	
	  preventDefault: function preventDefault() {
	    var e = this.nativeEvent;
	
	    // if preventDefault exists run it on the original event
	    if (e.preventDefault) {
	      e.preventDefault();
	    } else {
	      // otherwise set the returnValue property of the original event to FALSE (IE)
	      e.returnValue = FALSE;
	    }
	
	    EventBaseObjectProto.preventDefault.call(this);
	  },
	
	  stopPropagation: function stopPropagation() {
	    var e = this.nativeEvent;
	
	    // if stopPropagation exists run it on the original event
	    if (e.stopPropagation) {
	      e.stopPropagation();
	    } else {
	      // otherwise set the cancelBubble property of the original event to TRUE (IE)
	      e.cancelBubble = TRUE;
	    }
	
	    EventBaseObjectProto.stopPropagation.call(this);
	  }
	});
	
	exports['default'] = DomEventObject;
	module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	/**
	 * @ignore
	 * base event object for custom and dom event.
	 * @author yiminghe@gmail.com
	 */
	
	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function returnFalse() {
	  return false;
	}
	
	function returnTrue() {
	  return true;
	}
	
	function EventBaseObject() {
	  this.timeStamp = Date.now();
	  this.target = undefined;
	  this.currentTarget = undefined;
	}
	
	EventBaseObject.prototype = {
	  isEventObject: 1,
	
	  constructor: EventBaseObject,
	
	  isDefaultPrevented: returnFalse,
	
	  isPropagationStopped: returnFalse,
	
	  isImmediatePropagationStopped: returnFalse,
	
	  preventDefault: function preventDefault() {
	    this.isDefaultPrevented = returnTrue;
	  },
	
	  stopPropagation: function stopPropagation() {
	    this.isPropagationStopped = returnTrue;
	  },
	
	  stopImmediatePropagation: function stopImmediatePropagation() {
	    this.isImmediatePropagationStopped = returnTrue;
	    // fixed 1.2
	    // call stopPropagation implicitly
	    this.stopPropagation();
	  },
	
	  halt: function halt(immediate) {
	    if (immediate) {
	      this.stopImmediatePropagation();
	    } else {
	      this.stopPropagation();
	    }
	    this.preventDefault();
	  }
	};
	
	exports["default"] = EventBaseObject;
	module.exports = exports["default"];

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	/*
	object-assign
	(c) Sindre Sorhus
	@license MIT
	*/
	
	'use strict';
	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (err) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /**
	                                                                                                                                                                                                                                                                               * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                               * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                               */
	
	
	var _Event = __webpack_require__(42);
	
	var _Event2 = _interopRequireDefault(_Event);
	
	var _componentClasses = __webpack_require__(43);
	
	var _componentClasses2 = _interopRequireDefault(_componentClasses);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var isCssAnimationSupported = _Event2.default.endEvents.length !== 0;
	
	
	var capitalPrefixes = ['Webkit', 'Moz', 'O',
	// ms is special .... !
	'ms'];
	var prefixes = ['-webkit-', '-moz-', '-o-', 'ms-', ''];
	
	function getStyleProperty(node, name) {
	  var style = window.getComputedStyle(node);
	
	  var ret = '';
	  for (var i = 0; i < prefixes.length; i++) {
	    ret = style.getPropertyValue(prefixes[i] + name);
	    if (ret) {
	      break;
	    }
	  }
	  return ret;
	}
	
	function fixBrowserByTimeout(node) {
	  if (isCssAnimationSupported) {
	    var transitionDelay = parseFloat(getStyleProperty(node, 'transition-delay')) || 0;
	    var transitionDuration = parseFloat(getStyleProperty(node, 'transition-duration')) || 0;
	    var animationDelay = parseFloat(getStyleProperty(node, 'animation-delay')) || 0;
	    var animationDuration = parseFloat(getStyleProperty(node, 'animation-duration')) || 0;
	    var time = Math.max(transitionDuration + transitionDelay, animationDuration + animationDelay);
	    // sometimes, browser bug
	    node.rcEndAnimTimeout = setTimeout(function () {
	      node.rcEndAnimTimeout = null;
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }, time * 1000 + 200);
	  }
	}
	
	function clearBrowserBugTimeout(node) {
	  if (node.rcEndAnimTimeout) {
	    clearTimeout(node.rcEndAnimTimeout);
	    node.rcEndAnimTimeout = null;
	  }
	}
	
	var cssAnimation = function cssAnimation(node, transitionName, endCallback) {
	  var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	  var className = nameIsObj ? transitionName.name : transitionName;
	  var activeClassName = nameIsObj ? transitionName.active : transitionName + '-active';
	  var end = endCallback;
	  var start = void 0;
	  var active = void 0;
	  var nodeClasses = (0, _componentClasses2.default)(node);
	
	  if (endCallback && Object.prototype.toString.call(endCallback) === '[object Object]') {
	    end = endCallback.end;
	    start = endCallback.start;
	    active = endCallback.active;
	  }
	
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    nodeClasses.remove(className);
	    nodeClasses.remove(activeClassName);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional end is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (end) {
	      end();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  if (start) {
	    start();
	  }
	  nodeClasses.add(className);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    node.rcAnimTimeout = null;
	    nodeClasses.add(activeClassName);
	    if (active) {
	      setTimeout(active, 0);
	    }
	    fixBrowserByTimeout(node);
	    // 30ms for firefox
	  }, 30);
	
	  return {
	    stop: function stop() {
	      if (node.rcEndListener) {
	        node.rcEndListener();
	      }
	    }
	  };
	};
	
	cssAnimation.style = function (node, style, callback) {
	  if (node.rcEndListener) {
	    node.rcEndListener();
	  }
	
	  node.rcEndListener = function (e) {
	    if (e && e.target !== node) {
	      return;
	    }
	
	    if (node.rcAnimTimeout) {
	      clearTimeout(node.rcAnimTimeout);
	      node.rcAnimTimeout = null;
	    }
	
	    clearBrowserBugTimeout(node);
	
	    _Event2.default.removeEndEventListener(node, node.rcEndListener);
	    node.rcEndListener = null;
	
	    // Usually this optional callback is used for informing an owner of
	    // a leave animation and telling it to remove the child.
	    if (callback) {
	      callback();
	    }
	  };
	
	  _Event2.default.addEndEventListener(node, node.rcEndListener);
	
	  node.rcAnimTimeout = setTimeout(function () {
	    for (var s in style) {
	      if (style.hasOwnProperty(s)) {
	        node.style[s] = style[s];
	      }
	    }
	    node.rcAnimTimeout = null;
	    fixBrowserByTimeout(node);
	  }, 0);
	};
	
	cssAnimation.setTransition = function (node, p, value) {
	  var property = p;
	  var v = value;
	  if (value === undefined) {
	    v = property;
	    property = '';
	  }
	  property = property || '';
	  capitalPrefixes.forEach(function (prefix) {
	    node.style[prefix + 'Transition' + property] = v;
	  });
	};
	
	cssAnimation.isCssAnimationSupported = isCssAnimationSupported;
	
	exports.default = cssAnimation;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	/**
	 * This source code is quoted from rc-util.
	 * homepage: https://github.com/react-component/util
	 */
	var EVENT_NAME_MAP = {
	  transitionend: {
	    transition: 'transitionend',
	    WebkitTransition: 'webkitTransitionEnd',
	    MozTransition: 'mozTransitionEnd',
	    OTransition: 'oTransitionEnd',
	    msTransition: 'MSTransitionEnd'
	  },
	
	  animationend: {
	    animation: 'animationend',
	    WebkitAnimation: 'webkitAnimationEnd',
	    MozAnimation: 'mozAnimationEnd',
	    OAnimation: 'oAnimationEnd',
	    msAnimation: 'MSAnimationEnd'
	  }
	};
	
	var endEvents = [];
	
	function detectEvents() {
	  var testEl = document.createElement('div');
	  var style = testEl.style;
	
	  if (!('AnimationEvent' in window)) {
	    delete EVENT_NAME_MAP.animationend.animation;
	  }
	
	  if (!('TransitionEvent' in window)) {
	    delete EVENT_NAME_MAP.transitionend.transition;
	  }
	
	  for (var baseEventName in EVENT_NAME_MAP) {
	    if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
	      var baseEvents = EVENT_NAME_MAP[baseEventName];
	      for (var styleName in baseEvents) {
	        if (styleName in style) {
	          endEvents.push(baseEvents[styleName]);
	          break;
	        }
	      }
	    }
	  }
	}
	
	if (typeof window !== 'undefined' && typeof document !== 'undefined') {
	  detectEvents();
	}
	
	function addEventListener(node, eventName, eventListener) {
	  node.addEventListener(eventName, eventListener, false);
	}
	
	function removeEventListener(node, eventName, eventListener) {
	  node.removeEventListener(eventName, eventListener, false);
	}
	
	var TransitionEvents = {
	  addEndEventListener: function addEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      window.setTimeout(eventListener, 0);
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      addEventListener(node, endEvent, eventListener);
	    });
	  },
	
	
	  endEvents: endEvents,
	
	  removeEndEventListener: function removeEndEventListener(node, eventListener) {
	    if (endEvents.length === 0) {
	      return;
	    }
	    endEvents.forEach(function (endEvent) {
	      removeEventListener(node, endEvent, eventListener);
	    });
	  }
	};
	
	exports.default = TransitionEvents;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Module dependencies.
	 */
	
	try {
	  var index = __webpack_require__(44);
	} catch (err) {
	  var index = __webpack_require__(44);
	}
	
	/**
	 * Whitespace regexp.
	 */
	
	var re = /\s+/;
	
	/**
	 * toString reference.
	 */
	
	var toString = Object.prototype.toString;
	
	/**
	 * Wrap `el` in a `ClassList`.
	 *
	 * @param {Element} el
	 * @return {ClassList}
	 * @api public
	 */
	
	module.exports = function(el){
	  return new ClassList(el);
	};
	
	/**
	 * Initialize a new ClassList for `el`.
	 *
	 * @param {Element} el
	 * @api private
	 */
	
	function ClassList(el) {
	  if (!el || !el.nodeType) {
	    throw new Error('A DOM element reference is required');
	  }
	  this.el = el;
	  this.list = el.classList;
	}
	
	/**
	 * Add class `name` if not already present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.add = function(name){
	  // classList
	  if (this.list) {
	    this.list.add(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (!~i) arr.push(name);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove class `name` when present, or
	 * pass a regular expression to remove
	 * any which match.
	 *
	 * @param {String|RegExp} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.remove = function(name){
	  if ('[object RegExp]' == toString.call(name)) {
	    return this.removeMatching(name);
	  }
	
	  // classList
	  if (this.list) {
	    this.list.remove(name);
	    return this;
	  }
	
	  // fallback
	  var arr = this.array();
	  var i = index(arr, name);
	  if (~i) arr.splice(i, 1);
	  this.el.className = arr.join(' ');
	  return this;
	};
	
	/**
	 * Remove all classes matching `re`.
	 *
	 * @param {RegExp} re
	 * @return {ClassList}
	 * @api private
	 */
	
	ClassList.prototype.removeMatching = function(re){
	  var arr = this.array();
	  for (var i = 0; i < arr.length; i++) {
	    if (re.test(arr[i])) {
	      this.remove(arr[i]);
	    }
	  }
	  return this;
	};
	
	/**
	 * Toggle class `name`, can force state via `force`.
	 *
	 * For browsers that support classList, but do not support `force` yet,
	 * the mistake will be detected and corrected.
	 *
	 * @param {String} name
	 * @param {Boolean} force
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.toggle = function(name, force){
	  // classList
	  if (this.list) {
	    if ("undefined" !== typeof force) {
	      if (force !== this.list.toggle(name, force)) {
	        this.list.toggle(name); // toggle again to correct
	      }
	    } else {
	      this.list.toggle(name);
	    }
	    return this;
	  }
	
	  // fallback
	  if ("undefined" !== typeof force) {
	    if (!force) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  } else {
	    if (this.has(name)) {
	      this.remove(name);
	    } else {
	      this.add(name);
	    }
	  }
	
	  return this;
	};
	
	/**
	 * Return an array of classes.
	 *
	 * @return {Array}
	 * @api public
	 */
	
	ClassList.prototype.array = function(){
	  var className = this.el.getAttribute('class') || '';
	  var str = className.replace(/^\s+|\s+$/g, '');
	  var arr = str.split(re);
	  if ('' === arr[0]) arr.shift();
	  return arr;
	};
	
	/**
	 * Check if class `name` is present.
	 *
	 * @param {String} name
	 * @return {ClassList}
	 * @api public
	 */
	
	ClassList.prototype.has =
	ClassList.prototype.contains = function(name){
	  return this.list
	    ? this.list.contains(name)
	    : !! ~index(this.array(), name);
	};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = function(arr, obj){
	  if (arr.indexOf) return arr.indexOf(obj);
	  for (var i = 0; i < arr.length; ++i) {
	    if (arr[i] === obj) return i;
	  }
	  return -1;
	};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.default = toArray;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function toArray(children) {
	  var ret = [];
	  _react2.default.Children.forEach(children, function (c) {
	    ret.push(c);
	  });
	  return ret;
	} /**
	   * This source code is quoted from rc-util.
	   * homepage: https://github.com/react-component/util
	   */

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _domAlign = __webpack_require__(47);
	
	var _domAlign2 = _interopRequireDefault(_domAlign);
	
	var _addEventListener = __webpack_require__(36);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This source code is quoted from rc-util.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * homepage: https://github.com/react-component/util
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	//import isWindow from './isWindow';
	
	function isWindow(obj) {
	  /* eslint no-eq-null: 0 */
	  /* eslint eqeqeq: 0 */
	  return obj != null && obj == obj.window;
	}
	
	function buffer(fn, ms) {
	  var timer = void 0;
	
	  function clear() {
	    if (timer) {
	      clearTimeout(timer);
	      timer = null;
	    }
	  }
	
	  function bufferFn() {
	    clear();
	    timer = setTimeout(fn, ms);
	  }
	
	  bufferFn.clear = clear;
	
	  return bufferFn;
	}
	
	var propTypes = {
	  childrenProps: _propTypes2.default.object,
	  align: _propTypes2.default.object.isRequired,
	  target: _propTypes2.default.func,
	  onAlign: _propTypes2.default.func,
	  monitorBufferTime: _propTypes2.default.number,
	  monitorWindowResize: _propTypes2.default.bool,
	  disabled: _propTypes2.default.bool,
	  children: _propTypes2.default.any
	};
	
	var defaultProps = {
	  target: function target() {
	    return window;
	  },
	  onAlign: function onAlign() {},
	
	  monitorBufferTime: 50,
	  monitorWindowResize: false,
	  disabled: false
	};
	
	var Align = function (_React$Component) {
	  _inherits(Align, _React$Component);
	
	  function Align(props) {
	    _classCallCheck(this, Align);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _initialiseProps.call(_this);
	
	    return _this;
	  }
	
	  Align.prototype.componentDidMount = function componentDidMount() {
	    var props = this.props;
	    // if parent ref not attached .... use document.getElementById
	    this.forceAlign();
	    if (!props.disabled && props.monitorWindowResize) {
	      this.startMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
	    var reAlign = false;
	    var props = this.props;
	
	    if (!props.disabled) {
	      if (prevProps.disabled || prevProps.align !== props.align) {
	        reAlign = true;
	      } else {
	        var lastTarget = prevProps.target();
	        var currentTarget = props.target();
	        if (isWindow(lastTarget) && isWindow(currentTarget)) {
	          reAlign = false;
	        } else if (lastTarget !== currentTarget) {
	          reAlign = true;
	        }
	      }
	    }
	
	    if (reAlign) {
	      this.forceAlign();
	    }
	
	    if (props.monitorWindowResize && !props.disabled) {
	      this.startMonitorWindowResize();
	    } else {
	      this.stopMonitorWindowResize();
	    }
	  };
	
	  Align.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stopMonitorWindowResize();
	  };
	
	  Align.prototype.render = function render() {
	    var _props = this.props,
	        childrenProps = _props.childrenProps,
	        children = _props.children;
	
	    var child = _react2.default.Children.only(children);
	    if (childrenProps) {
	      var newProps = {};
	      for (var prop in childrenProps) {
	        if (childrenProps.hasOwnProperty(prop)) {
	          newProps[prop] = this.props[childrenProps[prop]];
	        }
	      }
	      return _react2.default.cloneElement(child, newProps);
	    }
	    return child;
	  };
	
	  return Align;
	}(_react2.default.Component);
	
	var _initialiseProps = function _initialiseProps() {
	  var _this2 = this;
	
	  this.startMonitorWindowResize = function () {
	    if (!_this2.resizeHandler) {
	      _this2.bufferMonitor = buffer(_this2.forceAlign, _this2.props.monitorBufferTime);
	      _this2.resizeHandler = (0, _addEventListener2.default)(window, 'resize', _this2.bufferMonitor);
	    }
	  };
	
	  this.stopMonitorWindowResize = function () {
	    if (_this2.resizeHandler) {
	      _this2.bufferMonitor.clear();
	      _this2.resizeHandler.remove();
	      _this2.resizeHandler = null;
	    }
	  };
	
	  this.forceAlign = function () {
	    var props = _this2.props;
	    if (!props.disabled) {
	      var source = _reactDom2.default.findDOMNode(_this2);
	      props.onAlign(source, (0, _domAlign2.default)(source, props.target(), props.align));
	    }
	  };
	};
	
	;
	
	Align.defaultProps = defaultProps;
	Align.propTypes = propTypes;
	
	exports.default = Align;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	var vendorPrefix;
	var jsCssMap = {
	  Webkit: '-webkit-',
	  Moz: '-moz-',
	  // IE did it wrong again ...
	  ms: '-ms-',
	  O: '-o-'
	};
	
	function getVendorPrefix() {
	  if (vendorPrefix !== undefined) {
	    return vendorPrefix;
	  }
	
	  vendorPrefix = '';
	  var style = document.createElement('p').style;
	  var testProp = 'Transform';
	
	  for (var key in jsCssMap) {
	    if (key + testProp in style) {
	      vendorPrefix = key;
	    }
	  }
	
	  return vendorPrefix;
	}
	
	function getTransitionName() {
	  return getVendorPrefix() ? "".concat(getVendorPrefix(), "TransitionProperty") : 'transitionProperty';
	}
	
	function getTransformName() {
	  return getVendorPrefix() ? "".concat(getVendorPrefix(), "Transform") : 'transform';
	}
	function setTransitionProperty(node, value) {
	  var name = getTransitionName();
	
	  if (name) {
	    node.style[name] = value;
	
	    if (name !== 'transitionProperty') {
	      node.style.transitionProperty = value;
	    }
	  }
	}
	
	function setTransform(node, value) {
	  var name = getTransformName();
	
	  if (name) {
	    node.style[name] = value;
	
	    if (name !== 'transform') {
	      node.style.transform = value;
	    }
	  }
	}
	
	function getTransitionProperty(node) {
	  return node.style.transitionProperty || node.style[getTransitionName()];
	}
	function getTransformXY(node) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	
	  if (transform && transform !== 'none') {
	    var matrix = transform.replace(/[^0-9\-.,]/g, '').split(',');
	    return {
	      x: parseFloat(matrix[12] || matrix[4], 0),
	      y: parseFloat(matrix[13] || matrix[5], 0)
	    };
	  }
	
	  return {
	    x: 0,
	    y: 0
	  };
	}
	var matrix2d = /matrix\((.*)\)/;
	var matrix3d = /matrix3d\((.*)\)/;
	function setTransformXY(node, xy) {
	  var style = window.getComputedStyle(node, null);
	  var transform = style.getPropertyValue('transform') || style.getPropertyValue(getTransformName());
	
	  if (transform && transform !== 'none') {
	    var arr;
	    var match2d = transform.match(matrix2d);
	
	    if (match2d) {
	      match2d = match2d[1];
	      arr = match2d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[4] = xy.x;
	      arr[5] = xy.y;
	      setTransform(node, "matrix(".concat(arr.join(','), ")"));
	    } else {
	      var match3d = transform.match(matrix3d)[1];
	      arr = match3d.split(',').map(function (item) {
	        return parseFloat(item, 10);
	      });
	      arr[12] = xy.x;
	      arr[13] = xy.y;
	      setTransform(node, "matrix3d(".concat(arr.join(','), ")"));
	    }
	  } else {
	    setTransform(node, "translateX(".concat(xy.x, "px) translateY(").concat(xy.y, "px) translateZ(0)"));
	  }
	}
	
	function _typeof(obj) {
	  "@babel/helpers - typeof";
	
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function _typeof(obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }
	
	  return _typeof(obj);
	}
	var RE_NUM = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
	var getComputedStyleX; // https://stackoverflow.com/a/3485654/3040605
	
	function forceRelayout(elem) {
	  var originalStyle = elem.style.display;
	  elem.style.display = 'none';
	  elem.offsetHeight; // eslint-disable-line
	
	  elem.style.display = originalStyle;
	}
	
	function css(el, name, v) {
	  var value = v;
	
	  if (_typeof(name) === 'object') {
	    for (var i in name) {
	      if (name.hasOwnProperty(i)) {
	        css(el, i, name[i]);
	      }
	    }
	
	    return undefined;
	  }
	
	  if (typeof value !== 'undefined') {
	    if (typeof value === 'number') {
	      value = "".concat(value, "px");
	    }
	
	    el.style[name] = value;
	    return undefined;
	  }
	
	  return getComputedStyleX(el, name);
	}
	
	function getClientPosition(elem) {
	  var box;
	  var x;
	  var y;
	  var doc = elem.ownerDocument;
	  var body = doc.body;
	  var docElem = doc && doc.documentElement; // 根据 GBS 最新数据，A-Grade Browsers 都已支持 getBoundingClientRect 方法，不用再考虑传统的实现方式
	
	  box = elem.getBoundingClientRect(); // 注：jQuery 还考虑减去 docElem.clientLeft/clientTop
	  // 但测试发现，这样反而会导致当 html 和 body 有边距/边框样式时，获取的值不正确
	  // 此外，ie6 会忽略 html 的 margin 值，幸运地是没有谁会去设置 html 的 margin
	
	  x = box.left;
	  y = box.top; // In IE, most of the time, 2 extra pixels are added to the top and left
	  // due to the implicit 2-pixel inset border.  In IE6/7 quirks mode and
	  // IE6 standards mode, this border can be overridden by setting the
	  // document element's border to zero -- thus, we cannot rely on the
	  // offset always being 2 pixels.
	  // In quirks mode, the offset can be determined by querying the body's
	  // clientLeft/clientTop, but in standards mode, it is found by querying
	  // the document element's clientLeft/clientTop.  Since we already called
	  // getClientBoundingRect we have already forced a reflow, so it is not
	  // too expensive just to query them all.
	  // ie 下应该减去窗口的边框吧，毕竟默认 absolute 都是相对窗口定位的
	  // 窗口边框标准是设 documentElement ,quirks 时设置 body
	  // 最好禁止在 body 和 html 上边框 ，但 ie < 9 html 默认有 2px ，减去
	  // 但是非 ie 不可能设置窗口边框，body html 也不是窗口 ,ie 可以通过 html,body 设置
	  // 标准 ie 下 docElem.clientTop 就是 border-top
	  // ie7 html 即窗口边框改变不了。永远为 2
	  // 但标准 firefox/chrome/ie9 下 docElem.clientTop 是窗口边框，即使设了 border-top 也为 0
	
	  x -= docElem.clientLeft || body.clientLeft || 0;
	  y -= docElem.clientTop || body.clientTop || 0;
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getScroll(w, top) {
	  var ret = w["page".concat(top ? 'Y' : 'X', "Offset")];
	  var method = "scroll".concat(top ? 'Top' : 'Left');
	
	  if (typeof ret !== 'number') {
	    var d = w.document; // ie6,7,8 standard mode
	
	    ret = d.documentElement[method];
	
	    if (typeof ret !== 'number') {
	      // quirks mode
	      ret = d.body[method];
	    }
	  }
	
	  return ret;
	}
	
	function getScrollLeft(w) {
	  return getScroll(w);
	}
	
	function getScrollTop(w) {
	  return getScroll(w, true);
	}
	
	function getOffset(el) {
	  var pos = getClientPosition(el);
	  var doc = el.ownerDocument;
	  var w = doc.defaultView || doc.parentWindow;
	  pos.left += getScrollLeft(w);
	  pos.top += getScrollTop(w);
	  return pos;
	}
	/**
	 * A crude way of determining if an object is a window
	 * @member util
	 */
	
	
	function isWindow(obj) {
	  // must use == for ie8
	
	  /* eslint eqeqeq:0 */
	  return obj !== null && obj !== undefined && obj == obj.window;
	}
	
	function getDocument(node) {
	  if (isWindow(node)) {
	    return node.document;
	  }
	
	  if (node.nodeType === 9) {
	    return node;
	  }
	
	  return node.ownerDocument;
	}
	
	function _getComputedStyle(elem, name, cs) {
	  var computedStyle = cs;
	  var val = '';
	  var d = getDocument(elem);
	  computedStyle = computedStyle || d.defaultView.getComputedStyle(elem, null); // https://github.com/kissyteam/kissy/issues/61
	
	  if (computedStyle) {
	    val = computedStyle.getPropertyValue(name) || computedStyle[name];
	  }
	
	  return val;
	}
	
	var _RE_NUM_NO_PX = new RegExp("^(".concat(RE_NUM, ")(?!px)[a-z%]+$"), 'i');
	
	var RE_POS = /^(top|right|bottom|left)$/;
	var CURRENT_STYLE = 'currentStyle';
	var RUNTIME_STYLE = 'runtimeStyle';
	var LEFT = 'left';
	var PX = 'px';
	
	function _getComputedStyleIE(elem, name) {
	  // currentStyle maybe null
	  // http://msdn.microsoft.com/en-us/library/ms535231.aspx
	  var ret = elem[CURRENT_STYLE] && elem[CURRENT_STYLE][name]; // 当 width/height 设置为百分比时，通过 pixelLeft 方式转换的 width/height 值
	  // 一开始就处理了! CUSTOM_STYLE.height,CUSTOM_STYLE.width ,cssHook 解决@2011-08-19
	  // 在 ie 下不对，需要直接用 offset 方式
	  // borderWidth 等值也有问题，但考虑到 borderWidth 设为百分比的概率很小，这里就不考虑了
	  // From the awesome hack by Dean Edwards
	  // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	  // If we're not dealing with a regular pixel number
	  // but a number that has a weird ending, we need to convert it to pixels
	  // exclude left right for relativity
	
	  if (_RE_NUM_NO_PX.test(ret) && !RE_POS.test(name)) {
	    // Remember the original values
	    var style = elem.style;
	    var left = style[LEFT];
	    var rsLeft = elem[RUNTIME_STYLE][LEFT]; // prevent flashing of content
	
	    elem[RUNTIME_STYLE][LEFT] = elem[CURRENT_STYLE][LEFT]; // Put in the new values to get a computed value out
	
	    style[LEFT] = name === 'fontSize' ? '1em' : ret || 0;
	    ret = style.pixelLeft + PX; // Revert the changed values
	
	    style[LEFT] = left;
	    elem[RUNTIME_STYLE][LEFT] = rsLeft;
	  }
	
	  return ret === '' ? 'auto' : ret;
	}
	
	if (typeof window !== 'undefined') {
	  getComputedStyleX = window.getComputedStyle ? _getComputedStyle : _getComputedStyleIE;
	}
	
	function getOffsetDirection(dir, option) {
	  if (dir === 'left') {
	    return option.useCssRight ? 'right' : dir;
	  }
	
	  return option.useCssBottom ? 'bottom' : dir;
	}
	
	function oppositeOffsetDirection(dir) {
	  if (dir === 'left') {
	    return 'right';
	  } else if (dir === 'right') {
	    return 'left';
	  } else if (dir === 'top') {
	    return 'bottom';
	  } else if (dir === 'bottom') {
	    return 'top';
	  }
	} // 设置 elem 相对 elem.ownerDocument 的坐标
	
	
	function setLeftTop(elem, offset, option) {
	  // set position first, in-case top/left are set even on static elem
	  if (css(elem, 'position') === 'static') {
	    elem.style.position = 'relative';
	  }
	
	  var presetH = -999;
	  var presetV = -999;
	  var horizontalProperty = getOffsetDirection('left', option);
	  var verticalProperty = getOffsetDirection('top', option);
	  var oppositeHorizontalProperty = oppositeOffsetDirection(horizontalProperty);
	  var oppositeVerticalProperty = oppositeOffsetDirection(verticalProperty);
	
	  if (horizontalProperty !== 'left') {
	    presetH = 999;
	  }
	
	  if (verticalProperty !== 'top') {
	    presetV = 999;
	  }
	
	  var originalTransition = '';
	  var originalOffset = getOffset(elem);
	
	  if ('left' in offset || 'top' in offset) {
	    originalTransition = getTransitionProperty(elem) || '';
	    setTransitionProperty(elem, 'none');
	  }
	
	  if ('left' in offset) {
	    elem.style[oppositeHorizontalProperty] = '';
	    elem.style[horizontalProperty] = "".concat(presetH, "px");
	  }
	
	  if ('top' in offset) {
	    elem.style[oppositeVerticalProperty] = '';
	    elem.style[verticalProperty] = "".concat(presetV, "px");
	  } // force relayout
	
	
	  forceRelayout(elem);
	  var old = getOffset(elem);
	  var originalStyle = {};
	
	  for (var key in offset) {
	    if (offset.hasOwnProperty(key)) {
	      var dir = getOffsetDirection(key, option);
	      var preset = key === 'left' ? presetH : presetV;
	      var off = originalOffset[key] - old[key];
	
	      if (dir === key) {
	        originalStyle[dir] = preset + off;
	      } else {
	        originalStyle[dir] = preset - off;
	      }
	    }
	  }
	
	  css(elem, originalStyle); // force relayout
	
	  forceRelayout(elem);
	
	  if ('left' in offset || 'top' in offset) {
	    setTransitionProperty(elem, originalTransition);
	  }
	
	  var ret = {};
	
	  for (var _key in offset) {
	    if (offset.hasOwnProperty(_key)) {
	      var _dir = getOffsetDirection(_key, option);
	
	      var _off = offset[_key] - originalOffset[_key];
	
	      if (_key === _dir) {
	        ret[_dir] = originalStyle[_dir] + _off;
	      } else {
	        ret[_dir] = originalStyle[_dir] - _off;
	      }
	    }
	  }
	
	  css(elem, ret);
	}
	
	function setTransform$1(elem, offset) {
	  var originalOffset = getOffset(elem);
	  var originalXY = getTransformXY(elem);
	  var resultXY = {
	    x: originalXY.x,
	    y: originalXY.y
	  };
	
	  if ('left' in offset) {
	    resultXY.x = originalXY.x + offset.left - originalOffset.left;
	  }
	
	  if ('top' in offset) {
	    resultXY.y = originalXY.y + offset.top - originalOffset.top;
	  }
	
	  setTransformXY(elem, resultXY);
	}
	
	function setOffset(elem, offset, option) {
	  if (option.ignoreShake) {
	    var oriOffset = getOffset(elem);
	    var oLeft = oriOffset.left.toFixed(0);
	    var oTop = oriOffset.top.toFixed(0);
	    var tLeft = offset.left.toFixed(0);
	    var tTop = offset.top.toFixed(0);
	
	    if (oLeft === tLeft && oTop === tTop) {
	      return;
	    }
	  }
	
	  if (option.useCssRight || option.useCssBottom) {
	    setLeftTop(elem, offset, option);
	  } else if (option.useCssTransform && getTransformName() in document.body.style) {
	    setTransform$1(elem, offset);
	  } else {
	    setLeftTop(elem, offset, option);
	  }
	}
	
	function each(arr, fn) {
	  for (var i = 0; i < arr.length; i++) {
	    fn(arr[i]);
	  }
	}
	
	function isBorderBoxFn(elem) {
	  return getComputedStyleX(elem, 'boxSizing') === 'border-box';
	}
	
	var BOX_MODELS = ['margin', 'border', 'padding'];
	var CONTENT_INDEX = -1;
	var PADDING_INDEX = 2;
	var BORDER_INDEX = 1;
	var MARGIN_INDEX = 0;
	
	function swap(elem, options, callback) {
	  var old = {};
	  var style = elem.style;
	  var name; // Remember the old values, and insert the new ones
	
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      old[name] = style[name];
	      style[name] = options[name];
	    }
	  }
	
	  callback.call(elem); // Revert the old values
	
	  for (name in options) {
	    if (options.hasOwnProperty(name)) {
	      style[name] = old[name];
	    }
	  }
	}
	
	function getPBMWidth(elem, props, which) {
	  var value = 0;
	  var prop;
	  var j;
	  var i;
	
	  for (j = 0; j < props.length; j++) {
	    prop = props[j];
	
	    if (prop) {
	      for (i = 0; i < which.length; i++) {
	        var cssProp = void 0;
	
	        if (prop === 'border') {
	          cssProp = "".concat(prop).concat(which[i], "Width");
	        } else {
	          cssProp = prop + which[i];
	        }
	
	        value += parseFloat(getComputedStyleX(elem, cssProp)) || 0;
	      }
	    }
	  }
	
	  return value;
	}
	
	var domUtils = {
	  getParent: function getParent(element) {
	    var parent = element;
	
	    do {
	      if (parent.nodeType === 11 && parent.host) {
	        parent = parent.host;
	      } else {
	        parent = parent.parentNode;
	      }
	    } while (parent && parent.nodeType !== 1 && parent.nodeType !== 9);
	
	    return parent;
	  }
	};
	each(['Width', 'Height'], function (name) {
	  domUtils["doc".concat(name)] = function (refWin) {
	    var d = refWin.document;
	    return Math.max( // firefox chrome documentElement.scrollHeight< body.scrollHeight
	    // ie standard mode : documentElement.scrollHeight> body.scrollHeight
	    d.documentElement["scroll".concat(name)], // quirks : documentElement.scrollHeight 最大等于可视窗口多一点？
	    d.body["scroll".concat(name)], domUtils["viewport".concat(name)](d));
	  };
	
	  domUtils["viewport".concat(name)] = function (win) {
	    // pc browser includes scrollbar in window.innerWidth
	    var prop = "client".concat(name);
	    var doc = win.document;
	    var body = doc.body;
	    var documentElement = doc.documentElement;
	    var documentElementProp = documentElement[prop]; // 标准模式取 documentElement
	    // backcompat 取 body
	
	    return doc.compatMode === 'CSS1Compat' && documentElementProp || body && body[prop] || documentElementProp;
	  };
	});
	/*
	 得到元素的大小信息
	 @param elem
	 @param name
	 @param {String} [extra]  'padding' : (css width) + padding
	 'border' : (css width) + padding + border
	 'margin' : (css width) + padding + border + margin
	 */
	
	function getWH(elem, name, ex) {
	  var extra = ex;
	
	  if (isWindow(elem)) {
	    return name === 'width' ? domUtils.viewportWidth(elem) : domUtils.viewportHeight(elem);
	  } else if (elem.nodeType === 9) {
	    return name === 'width' ? domUtils.docWidth(elem) : domUtils.docHeight(elem);
	  }
	
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	  var borderBoxValue = name === 'width' ? elem.getBoundingClientRect().width : elem.getBoundingClientRect().height;
	  var isBorderBox = isBorderBoxFn(elem);
	  var cssBoxValue = 0;
	
	  if (borderBoxValue === null || borderBoxValue === undefined || borderBoxValue <= 0) {
	    borderBoxValue = undefined; // Fall back to computed then un computed css if necessary
	
	    cssBoxValue = getComputedStyleX(elem, name);
	
	    if (cssBoxValue === null || cssBoxValue === undefined || Number(cssBoxValue) < 0) {
	      cssBoxValue = elem.style[name] || 0;
	    } // Normalize '', auto, and prepare for extra
	
	
	    cssBoxValue = parseFloat(cssBoxValue) || 0;
	  }
	
	  if (extra === undefined) {
	    extra = isBorderBox ? BORDER_INDEX : CONTENT_INDEX;
	  }
	
	  var borderBoxValueOrIsBorderBox = borderBoxValue !== undefined || isBorderBox;
	  var val = borderBoxValue || cssBoxValue;
	
	  if (extra === CONTENT_INDEX) {
	    if (borderBoxValueOrIsBorderBox) {
	      return val - getPBMWidth(elem, ['border', 'padding'], which);
	    }
	
	    return cssBoxValue;
	  } else if (borderBoxValueOrIsBorderBox) {
	    if (extra === BORDER_INDEX) {
	      return val;
	    }
	
	    return val + (extra === PADDING_INDEX ? -getPBMWidth(elem, ['border'], which) : getPBMWidth(elem, ['margin'], which));
	  }
	
	  return cssBoxValue + getPBMWidth(elem, BOX_MODELS.slice(extra), which);
	}
	
	var cssShow = {
	  position: 'absolute',
	  visibility: 'hidden',
	  display: 'block'
	}; // fix #119 : https://github.com/kissyteam/kissy/issues/119
	
	function getWHIgnoreDisplay() {
	  for (var _len = arguments.length, args = new Array(_len), _key2 = 0; _key2 < _len; _key2++) {
	    args[_key2] = arguments[_key2];
	  }
	
	  var val;
	  var elem = args[0]; // in case elem is window
	  // elem.offsetWidth === undefined
	
	  if (elem.offsetWidth !== 0) {
	    val = getWH.apply(undefined, args);
	  } else {
	    swap(elem, cssShow, function () {
	      val = getWH.apply(undefined, args);
	    });
	  }
	
	  return val;
	}
	
	each(['width', 'height'], function (name) {
	  var first = name.charAt(0).toUpperCase() + name.slice(1);
	
	  domUtils["outer".concat(first)] = function (el, includeMargin) {
	    return el && getWHIgnoreDisplay(el, name, includeMargin ? MARGIN_INDEX : BORDER_INDEX);
	  };
	
	  var which = name === 'width' ? ['Left', 'Right'] : ['Top', 'Bottom'];
	
	  domUtils[name] = function (elem, v) {
	    var val = v;
	
	    if (val !== undefined) {
	      if (elem) {
	        var isBorderBox = isBorderBoxFn(elem);
	
	        if (isBorderBox) {
	          val += getPBMWidth(elem, ['padding', 'border'], which);
	        }
	
	        return css(elem, name, val);
	      }
	
	      return undefined;
	    }
	
	    return elem && getWHIgnoreDisplay(elem, name, CONTENT_INDEX);
	  };
	});
	
	function mix(to, from) {
	  for (var i in from) {
	    if (from.hasOwnProperty(i)) {
	      to[i] = from[i];
	    }
	  }
	
	  return to;
	}
	
	var utils = {
	  getWindow: function getWindow(node) {
	    if (node && node.document && node.setTimeout) {
	      return node;
	    }
	
	    var doc = node.ownerDocument || node;
	    return doc.defaultView || doc.parentWindow;
	  },
	  getDocument: getDocument,
	  offset: function offset(el, value, option) {
	    if (typeof value !== 'undefined') {
	      setOffset(el, value, option || {});
	    } else {
	      return getOffset(el);
	    }
	  },
	  isWindow: isWindow,
	  each: each,
	  css: css,
	  clone: function clone(obj) {
	    var i;
	    var ret = {};
	
	    for (i in obj) {
	      if (obj.hasOwnProperty(i)) {
	        ret[i] = obj[i];
	      }
	    }
	
	    var overflow = obj.overflow;
	
	    if (overflow) {
	      for (i in obj) {
	        if (obj.hasOwnProperty(i)) {
	          ret.overflow[i] = obj.overflow[i];
	        }
	      }
	    }
	
	    return ret;
	  },
	  mix: mix,
	  getWindowScrollLeft: function getWindowScrollLeft(w) {
	    return getScrollLeft(w);
	  },
	  getWindowScrollTop: function getWindowScrollTop(w) {
	    return getScrollTop(w);
	  },
	  merge: function merge() {
	    var ret = {};
	
	    for (var i = 0; i < arguments.length; i++) {
	      utils.mix(ret, i < 0 || arguments.length <= i ? undefined : arguments[i]);
	    }
	
	    return ret;
	  },
	  viewportWidth: 0,
	  viewportHeight: 0
	};
	mix(utils, domUtils);
	
	/**
	 * 得到会导致元素显示不全的祖先元素
	 */
	
	var getParent = utils.getParent;
	
	function getOffsetParent(element) {
	  if (utils.isWindow(element) || element.nodeType === 9) {
	    return null;
	  } // ie 这个也不是完全可行
	
	  /*
	   <div style="width: 50px;height: 100px;overflow: hidden">
	   <div style="width: 50px;height: 100px;position: relative;" id="d6">
	   元素 6 高 100px 宽 50px<br/>
	   </div>
	   </div>
	   */
	  // element.offsetParent does the right thing in ie7 and below. Return parent with layout!
	  //  In other browsers it only includes elements with position absolute, relative or
	  // fixed, not elements with overflow set to auto or scroll.
	  //        if (UA.ie && ieMode < 8) {
	  //            return element.offsetParent;
	  //        }
	  // 统一的 offsetParent 方法
	
	
	  var doc = utils.getDocument(element);
	  var body = doc.body;
	  var parent;
	  var positionStyle = utils.css(element, 'position');
	  var skipStatic = positionStyle === 'fixed' || positionStyle === 'absolute';
	
	  if (!skipStatic) {
	    return element.nodeName.toLowerCase() === 'html' ? null : getParent(element);
	  }
	
	  for (parent = getParent(element); parent && parent !== body && parent.nodeType !== 9; parent = getParent(parent)) {
	    positionStyle = utils.css(parent, 'position');
	
	    if (positionStyle !== 'static') {
	      return parent;
	    }
	  }
	
	  return null;
	}
	
	var getParent$1 = utils.getParent;
	function isAncestorFixed(element) {
	  if (utils.isWindow(element) || element.nodeType === 9) {
	    return false;
	  }
	
	  var doc = utils.getDocument(element);
	  var body = doc.body;
	  var parent = null;
	
	  for (parent = getParent$1(element); // 修复元素位于 document.documentElement 下导致崩溃问题
	  parent && parent !== body && parent !== doc; parent = getParent$1(parent)) {
	    var positionStyle = utils.css(parent, 'position');
	
	    if (positionStyle === 'fixed') {
	      return true;
	    }
	  }
	
	  return false;
	}
	
	/**
	 * 获得元素的显示部分的区域
	 */
	
	function getVisibleRectForElement(element, alwaysByViewport) {
	  var visibleRect = {
	    left: 0,
	    right: Infinity,
	    top: 0,
	    bottom: Infinity
	  };
	  var el = getOffsetParent(element);
	  var doc = utils.getDocument(element);
	  var win = doc.defaultView || doc.parentWindow;
	  var body = doc.body;
	  var documentElement = doc.documentElement; // Determine the size of the visible rect by climbing the dom accounting for
	  // all scrollable containers.
	
	  while (el) {
	    // clientWidth is zero for inline block elements in ie.
	    if ((navigator.userAgent.indexOf('MSIE') === -1 || el.clientWidth !== 0) && // body may have overflow set on it, yet we still get the entire
	    // viewport. In some browsers, el.offsetParent may be
	    // document.documentElement, so check for that too.
	    el !== body && el !== documentElement && utils.css(el, 'overflow') !== 'visible') {
	      var pos = utils.offset(el); // add border
	
	      pos.left += el.clientLeft;
	      pos.top += el.clientTop;
	      visibleRect.top = Math.max(visibleRect.top, pos.top);
	      visibleRect.right = Math.min(visibleRect.right, // consider area without scrollBar
	      pos.left + el.clientWidth);
	      visibleRect.bottom = Math.min(visibleRect.bottom, pos.top + el.clientHeight);
	      visibleRect.left = Math.max(visibleRect.left, pos.left);
	    } else if (el === body || el === documentElement) {
	      break;
	    }
	
	    el = getOffsetParent(el);
	  } // Set element position to fixed
	  // make sure absolute element itself don't affect it's visible area
	  // https://github.com/ant-design/ant-design/issues/7601
	
	
	  var originalPosition = null;
	
	  if (!utils.isWindow(element) && element.nodeType !== 9) {
	    originalPosition = element.style.position;
	    var position = utils.css(element, 'position');
	
	    if (position === 'absolute') {
	      element.style.position = 'fixed';
	    }
	  }
	
	  var scrollX = utils.getWindowScrollLeft(win);
	  var scrollY = utils.getWindowScrollTop(win);
	  var viewportWidth = utils.viewportWidth(win);
	  var viewportHeight = utils.viewportHeight(win);
	  var documentWidth = documentElement.scrollWidth;
	  var documentHeight = documentElement.scrollHeight; // scrollXXX on html is sync with body which means overflow: hidden on body gets wrong scrollXXX.
	  // We should cut this ourself.
	
	  var bodyStyle = window.getComputedStyle(body);
	
	  if (bodyStyle.overflowX === 'hidden') {
	    documentWidth = win.innerWidth;
	  }
	
	  if (bodyStyle.overflowY === 'hidden') {
	    documentHeight = win.innerHeight;
	  } // Reset element position after calculate the visible area
	
	
	  if (element.style) {
	    element.style.position = originalPosition;
	  }
	
	  if (alwaysByViewport || isAncestorFixed(element)) {
	    // Clip by viewport's size.
	    visibleRect.left = Math.max(visibleRect.left, scrollX);
	    visibleRect.top = Math.max(visibleRect.top, scrollY);
	    visibleRect.right = Math.min(visibleRect.right, scrollX + viewportWidth);
	    visibleRect.bottom = Math.min(visibleRect.bottom, scrollY + viewportHeight);
	  } else {
	    // Clip by document's size.
	    var maxVisibleWidth = Math.max(documentWidth, scrollX + viewportWidth);
	    visibleRect.right = Math.min(visibleRect.right, maxVisibleWidth);
	    var maxVisibleHeight = Math.max(documentHeight, scrollY + viewportHeight);
	    visibleRect.bottom = Math.min(visibleRect.bottom, maxVisibleHeight);
	  }
	
	  return visibleRect.top >= 0 && visibleRect.left >= 0 && visibleRect.bottom > visibleRect.top && visibleRect.right > visibleRect.left ? visibleRect : null;
	}
	
	function adjustForViewport(elFuturePos, elRegion, visibleRect, overflow) {
	  var pos = utils.clone(elFuturePos);
	  var size = {
	    width: elRegion.width,
	    height: elRegion.height
	  };
	
	  if (overflow.adjustX && pos.left < visibleRect.left) {
	    pos.left = visibleRect.left;
	  } // Left edge inside and right edge outside viewport, try to resize it.
	
	
	  if (overflow.resizeWidth && pos.left >= visibleRect.left && pos.left + size.width > visibleRect.right) {
	    size.width -= pos.left + size.width - visibleRect.right;
	  } // Right edge outside viewport, try to move it.
	
	
	  if (overflow.adjustX && pos.left + size.width > visibleRect.right) {
	    // 保证左边界和可视区域左边界对齐
	    pos.left = Math.max(visibleRect.right - size.width, visibleRect.left);
	  } // Top edge outside viewport, try to move it.
	
	
	  if (overflow.adjustY && pos.top < visibleRect.top) {
	    pos.top = visibleRect.top;
	  } // Top edge inside and bottom edge outside viewport, try to resize it.
	
	
	  if (overflow.resizeHeight && pos.top >= visibleRect.top && pos.top + size.height > visibleRect.bottom) {
	    size.height -= pos.top + size.height - visibleRect.bottom;
	  } // Bottom edge outside viewport, try to move it.
	
	
	  if (overflow.adjustY && pos.top + size.height > visibleRect.bottom) {
	    // 保证上边界和可视区域上边界对齐
	    pos.top = Math.max(visibleRect.bottom - size.height, visibleRect.top);
	  }
	
	  return utils.mix(pos, size);
	}
	
	function getRegion(node) {
	  var offset;
	  var w;
	  var h;
	
	  if (!utils.isWindow(node) && node.nodeType !== 9) {
	    offset = utils.offset(node);
	    w = utils.outerWidth(node);
	    h = utils.outerHeight(node);
	  } else {
	    var win = utils.getWindow(node);
	    offset = {
	      left: utils.getWindowScrollLeft(win),
	      top: utils.getWindowScrollTop(win)
	    };
	    w = utils.viewportWidth(win);
	    h = utils.viewportHeight(win);
	  }
	
	  offset.width = w;
	  offset.height = h;
	  return offset;
	}
	
	/**
	 * 获取 node 上的 align 对齐点 相对于页面的坐标
	 */
	function getAlignOffset(region, align) {
	  var V = align.charAt(0);
	  var H = align.charAt(1);
	  var w = region.width;
	  var h = region.height;
	  var x = region.left;
	  var y = region.top;
	
	  if (V === 'c') {
	    y += h / 2;
	  } else if (V === 'b') {
	    y += h;
	  }
	
	  if (H === 'c') {
	    x += w / 2;
	  } else if (H === 'r') {
	    x += w;
	  }
	
	  return {
	    left: x,
	    top: y
	  };
	}
	
	function getElFuturePos(elRegion, refNodeRegion, points, offset, targetOffset) {
	  var p1 = getAlignOffset(refNodeRegion, points[1]);
	  var p2 = getAlignOffset(elRegion, points[0]);
	  var diff = [p2.left - p1.left, p2.top - p1.top];
	  return {
	    left: Math.round(elRegion.left - diff[0] + offset[0] - targetOffset[0]),
	    top: Math.round(elRegion.top - diff[1] + offset[1] - targetOffset[1])
	  };
	}
	
	/**
	 * align dom node flexibly
	 * @author yiminghe@gmail.com
	 */
	
	function isFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left < visibleRect.left || elFuturePos.left + elRegion.width > visibleRect.right;
	}
	
	function isFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top < visibleRect.top || elFuturePos.top + elRegion.height > visibleRect.bottom;
	}
	
	function isCompleteFailX(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.left > visibleRect.right || elFuturePos.left + elRegion.width < visibleRect.left;
	}
	
	function isCompleteFailY(elFuturePos, elRegion, visibleRect) {
	  return elFuturePos.top > visibleRect.bottom || elFuturePos.top + elRegion.height < visibleRect.top;
	}
	
	function flip(points, reg, map) {
	  var ret = [];
	  utils.each(points, function (p) {
	    ret.push(p.replace(reg, function (m) {
	      return map[m];
	    }));
	  });
	  return ret;
	}
	
	function flipOffset(offset, index) {
	  offset[index] = -offset[index];
	  return offset;
	}
	
	function convertOffset(str, offsetLen) {
	  var n;
	
	  if (/%$/.test(str)) {
	    n = parseInt(str.substring(0, str.length - 1), 10) / 100 * offsetLen;
	  } else {
	    n = parseInt(str, 10);
	  }
	
	  return n || 0;
	}
	
	function normalizeOffset(offset, el) {
	  offset[0] = convertOffset(offset[0], el.width);
	  offset[1] = convertOffset(offset[1], el.height);
	}
	/**
	 * @param el
	 * @param tgtRegion 参照节点所占的区域: { left, top, width, height }
	 * @param align
	 */
	
	
	function doAlign(el, tgtRegion, align, isTgtRegionVisible) {
	  var points = align.points;
	  var offset = align.offset || [0, 0];
	  var targetOffset = align.targetOffset || [0, 0];
	  var overflow = align.overflow;
	  var source = align.source || el;
	  offset = [].concat(offset);
	  targetOffset = [].concat(targetOffset);
	  overflow = overflow || {};
	  var newOverflowCfg = {};
	  var fail = 0;
	  var alwaysByViewport = !!(overflow && overflow.alwaysByViewport); // 当前节点可以被放置的显示区域
	
	  var visibleRect = getVisibleRectForElement(source, alwaysByViewport); // 当前节点所占的区域, left/top/width/height
	
	  var elRegion = getRegion(source); // 将 offset 转换成数值，支持百分比
	
	  normalizeOffset(offset, elRegion);
	  normalizeOffset(targetOffset, tgtRegion); // 当前节点将要被放置的位置
	
	  var elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset); // 当前节点将要所处的区域
	
	  var newElRegion = utils.merge(elRegion, elFuturePos); // 如果可视区域不能完全放置当前节点时允许调整
	
	  if (visibleRect && (overflow.adjustX || overflow.adjustY) && isTgtRegionVisible) {
	    if (overflow.adjustX) {
	      // 如果横向不能放下
	      if (isFailX(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var newPoints = flip(points, /[lr]/gi, {
	          l: 'r',
	          r: 'l'
	        }); // 偏移量也反下
	
	        var newOffset = flipOffset(offset, 0);
	        var newTargetOffset = flipOffset(targetOffset, 0);
	        var newElFuturePos = getElFuturePos(elRegion, tgtRegion, newPoints, newOffset, newTargetOffset);
	
	        if (!isCompleteFailX(newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = newPoints;
	          offset = newOffset;
	          targetOffset = newTargetOffset;
	        }
	      }
	    }
	
	    if (overflow.adjustY) {
	      // 如果纵向不能放下
	      if (isFailY(elFuturePos, elRegion, visibleRect)) {
	        // 对齐位置反下
	        var _newPoints = flip(points, /[tb]/gi, {
	          t: 'b',
	          b: 't'
	        }); // 偏移量也反下
	
	
	        var _newOffset = flipOffset(offset, 1);
	
	        var _newTargetOffset = flipOffset(targetOffset, 1);
	
	        var _newElFuturePos = getElFuturePos(elRegion, tgtRegion, _newPoints, _newOffset, _newTargetOffset);
	
	        if (!isCompleteFailY(_newElFuturePos, elRegion, visibleRect)) {
	          fail = 1;
	          points = _newPoints;
	          offset = _newOffset;
	          targetOffset = _newTargetOffset;
	        }
	      }
	    } // 如果失败，重新计算当前节点将要被放置的位置
	
	
	    if (fail) {
	      elFuturePos = getElFuturePos(elRegion, tgtRegion, points, offset, targetOffset);
	      utils.mix(newElRegion, elFuturePos);
	    }
	
	    var isStillFailX = isFailX(elFuturePos, elRegion, visibleRect);
	    var isStillFailY = isFailY(elFuturePos, elRegion, visibleRect); // 检查反下后的位置是否可以放下了，如果仍然放不下：
	    // 1. 复原修改过的定位参数
	
	    if (isStillFailX || isStillFailY) {
	      var _newPoints2 = points; // 重置对应部分的翻转逻辑
	
	      if (isStillFailX) {
	        _newPoints2 = flip(points, /[lr]/gi, {
	          l: 'r',
	          r: 'l'
	        });
	      }
	
	      if (isStillFailY) {
	        _newPoints2 = flip(points, /[tb]/gi, {
	          t: 'b',
	          b: 't'
	        });
	      }
	
	      points = _newPoints2;
	      offset = align.offset || [0, 0];
	      targetOffset = align.targetOffset || [0, 0];
	    } // 2. 只有指定了可以调整当前方向才调整
	
	
	    newOverflowCfg.adjustX = overflow.adjustX && isStillFailX;
	    newOverflowCfg.adjustY = overflow.adjustY && isStillFailY; // 确实要调整，甚至可能会调整高度宽度
	
	    if (newOverflowCfg.adjustX || newOverflowCfg.adjustY) {
	      newElRegion = adjustForViewport(elFuturePos, elRegion, visibleRect, newOverflowCfg);
	    }
	  } // need judge to in case set fixed with in css on height auto element
	
	
	  if (newElRegion.width !== elRegion.width) {
	    utils.css(source, 'width', utils.width(source) + newElRegion.width - elRegion.width);
	  }
	
	  if (newElRegion.height !== elRegion.height) {
	    utils.css(source, 'height', utils.height(source) + newElRegion.height - elRegion.height);
	  } // https://github.com/kissyteam/kissy/issues/190
	  // 相对于屏幕位置没变，而 left/top 变了
	  // 例如 <div 'relative'><el absolute></div>
	
	
	  utils.offset(source, {
	    left: newElRegion.left,
	    top: newElRegion.top
	  }, {
	    useCssRight: align.useCssRight,
	    useCssBottom: align.useCssBottom,
	    useCssTransform: align.useCssTransform,
	    ignoreShake: align.ignoreShake
	  });
	  return {
	    points: points,
	    offset: offset,
	    targetOffset: targetOffset,
	    overflow: newOverflowCfg
	  };
	}
	/**
	 *  2012-04-26 yiminghe@gmail.com
	 *   - 优化智能对齐算法
	 *   - 慎用 resizeXX
	 *
	 *  2011-07-13 yiminghe@gmail.com note:
	 *   - 增加智能对齐，以及大小调整选项
	 **/
	
	function isOutOfVisibleRect(target, alwaysByViewport) {
	  var visibleRect = getVisibleRectForElement(target, alwaysByViewport);
	  var targetRegion = getRegion(target);
	  return !visibleRect || targetRegion.left + targetRegion.width <= visibleRect.left || targetRegion.top + targetRegion.height <= visibleRect.top || targetRegion.left >= visibleRect.right || targetRegion.top >= visibleRect.bottom;
	}
	
	function alignElement(el, refNode, align) {
	  var target = align.target || refNode;
	  var refNodeRegion = getRegion(target);
	  var isTargetNotOutOfVisible = !isOutOfVisibleRect(target, align.overflow && align.overflow.alwaysByViewport);
	  return doAlign(el, refNodeRegion, align, isTargetNotOutOfVisible);
	}
	
	alignElement.__getOffsetParent = getOffsetParent;
	alignElement.__getVisibleRectForElement = getVisibleRectForElement;
	
	function ownKeys(object, enumerableOnly) {
	  var keys = Object.keys(object);
	
	  if (Object.getOwnPropertySymbols) {
	    var symbols = Object.getOwnPropertySymbols(object);
	
	    if (enumerableOnly) {
	      symbols = symbols.filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
	      });
	    }
	
	    keys.push.apply(keys, symbols);
	  }
	
	  return keys;
	}
	
	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	
	    if (i % 2) {
	      ownKeys(Object(source), true).forEach(function (key) {
	        _defineProperty(target, key, source[key]);
	      });
	    } else if (Object.getOwnPropertyDescriptors) {
	      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
	    } else {
	      ownKeys(Object(source)).forEach(function (key) {
	        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
	      });
	    }
	  }
	
	  return target;
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }
	
	  return obj;
	}
	/**
	 * `tgtPoint`: { pageX, pageY } or { clientX, clientY }.
	 * If client position provided, will internal convert to page position.
	 */
	
	function alignPoint(el, tgtPoint, align) {
	  var pageX;
	  var pageY;
	  var doc = utils.getDocument(el);
	  var win = doc.defaultView || doc.parentWindow;
	  var scrollX = utils.getWindowScrollLeft(win);
	  var scrollY = utils.getWindowScrollTop(win);
	  var viewportWidth = utils.viewportWidth(win);
	  var viewportHeight = utils.viewportHeight(win);
	
	  if ('pageX' in tgtPoint) {
	    pageX = tgtPoint.pageX;
	  } else {
	    pageX = scrollX + tgtPoint.clientX;
	  }
	
	  if ('pageY' in tgtPoint) {
	    pageY = tgtPoint.pageY;
	  } else {
	    pageY = scrollY + tgtPoint.clientY;
	  }
	
	  var tgtRegion = {
	    left: pageX,
	    top: pageY,
	    width: 0,
	    height: 0
	  };
	  var pointInView = pageX >= 0 && pageX <= scrollX + viewportWidth && pageY >= 0 && pageY <= scrollY + viewportHeight; // Provide default target point
	
	  var points = [align.points[0], 'cc'];
	  return doAlign(el, tgtRegion, _objectSpread(_objectSpread({}, align), {}, {
	    points: points
	  }), pointInView);
	}
	
	exports.alignElement = alignElement;
	exports.alignPoint = alignPoint;
	exports.default = alignElement;
	//# sourceMappingURL=index.js.map


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _Transition = __webpack_require__(7);
	
	var _Transition2 = _interopRequireDefault(_Transition);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  /**
	   * Show the component; triggers the fade in or fade out animation
	   */
	  "in": _propTypes2["default"].bool,
	
	  /**
	   * Unmount the component (remove it from the DOM) when it is faded out
	   */
	  unmountOnExit: _propTypes2["default"].bool,
	
	  /**
	   * Run the fade in animation when the component mounts, if it is initially
	   * shown
	   */
	  transitionAppear: _propTypes2["default"].bool,
	
	  /**
	   * Duration of the fade animation in milliseconds, to ensure that finishing
	   * callbacks are fired even if the original browser transition end events are
	   * canceled
	   */
	  timeout: _propTypes2["default"].number,
	
	  /**
	   * Callback fired before the component fades in
	   */
	  onEnter: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade in
	   */
	  onEntering: _propTypes2["default"].func,
	  /**
	   * Callback fired after the has component faded in
	   */
	  onEntered: _propTypes2["default"].func,
	  /**
	   * Callback fired before the component fades out
	   */
	  onExit: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component starts to fade out
	   */
	  onExiting: _propTypes2["default"].func,
	  /**
	   * Callback fired after the component has faded out
	   */
	  onExited: _propTypes2["default"].func
	};
	
	var defaultProps = {
	  "in": false,
	  timeout: 300,
	  unmountOnExit: false,
	  transitionAppear: false
	};
	
	var Fade = function (_React$Component) {
	  _inherits(Fade, _React$Component);
	
	  function Fade() {
	    _classCallCheck(this, Fade);
	
	    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
	  }
	
	  Fade.prototype.render = function render() {
	    return _react2["default"].createElement(_Transition2["default"], _extends({}, this.props, {
	      className: (0, _classnames2["default"])(this.props.className, 'fade'),
	      enteredClassName: 'in',
	      enteringClassName: 'in'
	    }));
	  };
	
	  return Fade;
	}(_react2["default"].Component);
	
	Fade.propTypes = propTypes;
	Fade.defaultProps = defaultProps;
	
	exports["default"] = Fade;
	module.exports = exports['default'];

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Message = __webpack_require__(50);
	
	var _Message2 = _interopRequireDefault(_Message);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Message2["default"];
	module.exports = exports['default'];

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _beeNotification = __webpack_require__(51);
	
	var _beeNotification2 = _interopRequireDefault(_beeNotification);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _warning = __webpack_require__(28);
	
	var _warning2 = _interopRequireDefault(_warning);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var defaultDuration = 1.5;
	var newDuration = void 0;
	var defaultTop = 24;
	var defaultBottom = 48;
	var bottom = 90;
	var padding = 30;
	var width = 240;
	var messageInstance = void 0;
	var key = 1;
	var clsPrefix = 'u-message';
	var noop = function noop() {};
	var notificationStyle_copy = {};
	var messageStyle_copy = {};
	var positionType = ['topRight', 'bottomRight', 'top', 'bottom', 'topLeft', 'bottomLeft', ''];
	var defaultStyle = {};
	
	var positionObj = {
	    "top": {
	        messageStyle: {},
	        notificationStyle: {
	            top: defaultTop,
	            left: '50%',
	            transform: 'translateX( -50%)'
	        },
	        transitionName: 'top'
	    },
	    "bottom": {
	        messageStyle: {},
	        notificationStyle: {
	            bottom: defaultBottom,
	            left: '50%',
	            transform: 'translateX( -50%)'
	        },
	        transitionName: 'bottom'
	    },
	    "topRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "bottomRight": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            right: padding,
	            width: width
	        },
	        transitionName: 'right'
	    },
	    "topLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            top: padding,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    },
	    "bottomLeft": {
	        messageStyle: {
	            width: width
	        },
	        notificationStyle: {
	            bottom: bottom,
	            left: padding,
	            width: width
	        },
	        transitionName: 'left'
	    }
	};
	
	function getMessageInstance() {
	    var position = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'top';
	    var callback = arguments[1];
	    var keyboard = arguments[2];
	    var onEscapeKeyUp = arguments[3];
	
	    if (messageInstance) {
	        callback(messageInstance);
	        return;
	    }
	    switch (position) {
	        case 'top':
	            notificationStyle_copy.top = defaultTop;
	            break;
	        case 'bottom':
	            notificationStyle_copy.bottom = defaultBottom;
	            break;
	        case 'bottomRight':
	            notificationStyle_copy.bottom = bottom;
	            break;
	        case 'bottomLeft':
	            notificationStyle_copy.bottom = bottom;
	            break;
	        default:
	            break;
	    }
	    if (position !== 'top' && position !== 'bottom') {
	        messageStyle_copy.width = width;
	    }
	    var style = JSON.stringify(notificationStyle_copy) == "{}" ? positionObj[position].notificationStyle : notificationStyle_copy;
	    var instanceObj = {
	        clsPrefix: clsPrefix,
	        transitionName: clsPrefix + '-' + positionObj[position].transitionName,
	        style: _extends({}, style, defaultStyle), // 覆盖原来的样式
	        position: position
	    };
	    if (typeof keyboard === 'boolean') {
	        instanceObj.keyboard = keyboard;
	    }
	    if (typeof onEscapeKeyUp === 'function') {
	        instanceObj.onEscapeKeyUp = onEscapeKeyUp;
	    }
	    _beeNotification2["default"].newInstance(instanceObj, function (instance) {
	        messageInstance = instance;
	        callback(instance);
	    });
	}
	
	function notice(content, duration_arg, type, onClose, position, style, keyboard, onEscapeKeyUp, showIcon, icon, props) {
	    if (positionType.findIndex(function (item) {
	        return item === position;
	    }) < 0) {
	        (0, _warning2["default"])(false, 'Failed prop type: Invalid prop `position` supplied to `Message`, expected one of ["top","bottom","topRight","topLeft","bottomRight","bottomLeft"].');
	        return;
	    }
	    var duration = duration_arg !== undefined ? duration_arg : defaultDuration;
	    notificationStyle_copy = _extends({}, positionObj[position].notificationStyle);
	    messageStyle_copy = _extends({}, positionObj[position].messageStyle);
	
	    var iconType = {
	        info: 'uf uf-i-c-2',
	        success: 'uf uf-correct',
	        danger: 'uf uf-exc-c',
	        warning: 'uf uf-exc-t',
	        light: 'uf uf-notification',
	        dark: 'uf uf-notification',
	        news: 'uf uf-bell',
	        infolight: 'uf uf-i-c-2',
	        successlight: 'uf uf-correct',
	        dangerlight: 'uf uf-exc-c',
	        warninglight: 'uf uf-exc-t'
	    }[type];
	
	    var positionStyle = JSON.stringify(messageStyle_copy) == "{}" ? positionObj[position].messageStyle : messageStyle_copy;
	    defaultStyle = _extends({}, positionStyle, style);
	    getMessageInstance(position, function (instance) {
	        instance.notice(_extends({}, props, {
	            key: key,
	            duration: duration,
	            color: type,
	            style: _extends({}, positionStyle, style),
	            content: _react2["default"].createElement(
	                'div',
	                null,
	                showIcon ? _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-icon' },
	                    icon ? _react2["default"].createElement('i', { className: (0, _classnames2["default"])('' + icon) }) : _react2["default"].createElement('i', { className: (0, _classnames2["default"])(iconType) })
	                ) : null,
	                _react2["default"].createElement(
	                    'div',
	                    { className: clsPrefix + '-notice-description-content' },
	                    content
	                )
	            ),
	            onClose: onClose
	        }));
	    }, keyboard, onEscapeKeyUp);
	    return function () {
	        var target = key++;
	        return function () {
	            if (messageInstance) {
	                messageInstance.removeNotice(target);
	            }
	        };
	    }();
	}
	
	exports["default"] = {
	    create: function create(obj) {
	        if (newDuration) {
	            //如果在config方法里设置了duration
	            obj.duration = newDuration;
	        }
	        var content = obj.content || '';
	        var duration = typeof obj.duration == 'undefined' ? defaultDuration : obj.duration;
	        var color = obj.color || 'light';
	        var onClose = obj.onClose || noop;
	        var position = obj.position || "top";
	        var style = obj.style || {};
	        var showIcon = obj.hasOwnProperty('showIcon') ? obj.showIcon : true;
	        var icon = obj.hasOwnProperty('icon') ? obj.icon : false;
	        return notice(content, duration, color, onClose, position, style, obj.keyboard, obj.onEscapeKeyUp, showIcon, icon, obj);
	    },
	    config: function config(options) {
	        if (options.top !== undefined) {
	            defaultTop = options.top;
	        }
	        if (options.duration !== undefined) {
	            defaultDuration = options.duration;
	            newDuration = defaultDuration;
	        }
	        if (options.clsPrefix !== undefined) {
	            clsPrefix = options.clsPrefix;
	        }
	        if (options.defaultBottom !== undefined) {
	            defaultBottom = options.defaultBottom;
	        }
	        if (options.bottom !== undefined) {
	            bottom = options.bottom;
	        }
	        if (options.width !== undefined) {
	            width = options.width;
	        }
	    },
	    destroy: function destroy() {
	        if (messageInstance) {
	            messageInstance.destroy();
	            messageInstance = null;
	            defaultDuration = 1.5;
	            newDuration = undefined;
	            defaultTop = 24;
	            defaultBottom = 48;
	            bottom = 90;
	            padding = 30;
	            width = 240;
	            notificationStyle_copy = null;
	            messageStyle_copy = null;
	            defaultStyle = null;
	        }
	    }
	};
	module.exports = exports['default'];

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Notification = __webpack_require__(52);
	
	var _Notification2 = _interopRequireDefault(_Notification);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Notification2["default"];
	module.exports = exports['default'];

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _beeAnimate = __webpack_require__(53);
	
	var _beeAnimate2 = _interopRequireDefault(_beeAnimate);
	
	var _createChainedFunction = __webpack_require__(33);
	
	var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);
	
	var _ownerDocument = __webpack_require__(58);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	var _addEventListener = __webpack_require__(60);
	
	var _addEventListener2 = _interopRequireDefault(_addEventListener);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _Notice = __webpack_require__(62);
	
	var _Notice2 = _interopRequireDefault(_Notice);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var seed = 0;
	var now = Date.now();
	
	function getUuid() {
	  return 'uNotification_' + now + '_' + seed++;
	}
	
	var propTypes = {
	  show: _propTypes2["default"].bool,
	  clsPrefix: _propTypes2["default"].string,
	  style: _propTypes2["default"].object,
	  position: _propTypes2["default"].oneOf(['topRight', 'bottomRight', 'top', 'bottom', 'topLeft', 'bottomLeft', '']),
	  transitionName: _propTypes2["default"].string,
	  keyboard: _propTypes2["default"].bool, // 按esc键是否关闭notice
	  onEscapeKeyUp: _propTypes2["default"].func, // 设置esc键特殊钩子函数
	  animation: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object])
	};
	
	var defaultProps = {
	  clsPrefix: 'u-notification',
	  animation: 'fade',
	  keyboard: true,
	  position: 'topRight'
	};
	
	var Notification = function (_Component) {
	  _inherits(Notification, _Component);
	
	  function Notification(props) {
	    _classCallCheck(this, Notification);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.handleDocumentKeyUp = function (e) {
	      if (_this.props.keyboard && e.keyCode === 27 && _this.state.notices.length) {
	        _this.setState(function (previousState) {
	          previousState.notices.shift();
	          return {
	            notices: previousState.notices
	          };
	        });
	        if (_this.props.onEscapeKeyUp) {
	          _this.props.onEscapeKeyUp(e);
	        }
	      }
	    };
	
	    _this.state = {
	      notices: []
	    };
	    _this.add = _this.add.bind(_this);
	    _this.remove = _this.remove.bind(_this);
	
	    return _this;
	  }
	
	  Notification.prototype.componentDidMount = function componentDidMount() {
	    // 给document绑定keyup事件
	    var doc = (0, _ownerDocument2["default"])(this);
	    this._onDocumentKeyupListener = (0, _addEventListener2["default"])(doc, 'keyup', this.handleDocumentKeyUp);
	  };
	
	  Notification.prototype.componentWillUnmount = function componentWillUnmount() {
	    this._onDocumentKeyupListener.remove();
	  };
	
	  Notification.prototype.getTransitionName = function getTransitionName() {
	    var props = this.props;
	    var transitionName = props.transitionName;
	    if (!transitionName && props.animation) {
	      transitionName = props.clsPrefix + '-' + props.animation;
	    }
	    return transitionName;
	  };
	
	  Notification.prototype.add = function add(notice) {
	    var key = notice.key = notice.key || getUuid();
	    this.setState(function (previousState) {
	      var notices = previousState.notices;
	      if (!notices.filter(function (v) {
	        return v.key === key;
	      }).length) {
	        return {
	          notices: notices.concat(notice)
	        };
	      }
	    });
	  };
	
	  Notification.prototype.remove = function remove(key) {
	    this.setState(function (previousState) {
	      return {
	        notices: previousState.notices.filter(function (notice) {
	          return notice.key !== key;
	        })
	      };
	    });
	  };
	
	  /**
	   * 处理绑定在document上的keyup事件
	   */
	
	
	  Notification.prototype.render = function render() {
	    var _this2 = this,
	        _classes;
	
	    var _props = this.props,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        position = _props.position,
	        style = _props.style;
	
	    var noticeNodes = this.state.notices.map(function (notice) {
	      var onClose = (0, _createChainedFunction2["default"])(_this2.remove.bind(_this2, notice.key), notice.onClose);
	      return _react2["default"].createElement(
	        _Notice2["default"],
	        _extends({
	          clsPrefix: clsPrefix
	        }, notice, {
	          onClose: onClose
	        }),
	        notice.content
	      );
	    });
	    var classes = (_classes = {}, _defineProperty(_classes, clsPrefix, 1), _defineProperty(_classes, className, !!className), _classes);
	    if (position) {
	      classes[clsPrefix + '-' + position] = !!position;
	    }
	
	    return _react2["default"].createElement(
	      'div',
	      { className: (0, _classnames2["default"])(className, classes), style: style },
	      _react2["default"].createElement(
	        _beeAnimate2["default"],
	        { transitionName: this.getTransitionName() },
	        noticeNodes
	      )
	    );
	  };
	
	  return Notification;
	}(_react.Component);
	
	;
	
	Notification.propTypes = propTypes;
	Notification.defaultProps = defaultProps;
	
	Notification.newInstance = function newNotificationInstance(properties, callback) {
	
	  if (typeof callback !== 'function') {
	    console.error('You must introduce callback as the second parameter of Notification.newInstance().');
	    return;
	  }
	  var props = properties || {};
	  var container = props.container || document.body;
	  if (typeof container == 'function') {
	    container = container();
	  }
	
	  var div = document.createElement('div');
	  container.appendChild(div);
	
	  var called = false;
	  function ref(notification) {
	    if (called) {
	      return;
	    }
	    called = true;
	    callback({
	      notice: function notice(noticeProps) {
	        notification.add(noticeProps);
	      },
	      removeNotice: function removeNotice(key) {
	        notification.remove(key);
	      },
	
	      component: notification,
	      destroy: function destroy() {
	        _reactDom2["default"].unmountComponentAtNode(div);
	        container.removeChild(div);
	      }
	    });
	  }
	  _reactDom2["default"].render(_react2["default"].createElement(Notification, _extends({}, props, { ref: ref })), div);
	};
	
	exports["default"] = Notification;
	module.exports = exports['default'];

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Animate = __webpack_require__(54);
	
	var _Animate2 = _interopRequireDefault(_Animate);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Animate2["default"];
	module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _ChildrenUtils = __webpack_require__(55);
	
	var _AnimateChild = __webpack_require__(56);
	
	var _AnimateChild2 = _interopRequireDefault(_AnimateChild);
	
	var _util = __webpack_require__(57);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var defaultKey = 'u_animate_' + Date.now();
	
	
	function getChildrenFromProps(props) {
	  var children = props.children;
	  if (_react2["default"].isValidElement(children)) {
	    if (!children.key) {
	      return _react2["default"].cloneElement(children, {
	        key: defaultKey
	      });
	    }
	  }
	  return children;
	}
	
	function noop() {}
	
	var propTypes = {
	  component: _propTypes2["default"].any,
	  animation: _propTypes2["default"].object,
	  transitionName: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].object]),
	  transitionEnter: _propTypes2["default"].bool,
	  transitionAppear: _propTypes2["default"].bool,
	  exclusive: _propTypes2["default"].bool,
	  transitionLeave: _propTypes2["default"].bool,
	  onEnd: _propTypes2["default"].func,
	  onEnter: _propTypes2["default"].func,
	  onLeave: _propTypes2["default"].func,
	  onAppear: _propTypes2["default"].func,
	  showProp: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  animation: {},
	  component: 'span',
	  transitionEnter: true,
	  transitionLeave: true,
	  transitionAppear: false,
	  onEnd: noop,
	  onEnter: noop,
	  onLeave: noop,
	  onAppear: noop
	};
	
	var Animate = function (_Component) {
	  _inherits(Animate, _Component);
	
	  function Animate(props) {
	    _classCallCheck(this, Animate);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.currentlyAnimatingKeys = {};
	    _this.keysToEnter = [];
	    _this.keysToLeave = [];
	    _this.state = {
	      children: (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(_this.props))
	    };
	
	    _this.performEnter = _this.performEnter.bind(_this);
	    _this.performAppear = _this.performAppear.bind(_this);
	    _this.handleDoneAdding = _this.handleDoneAdding.bind(_this);
	    _this.performLeave = _this.performLeave.bind(_this);
	
	    _this.performLeave = _this.performLeave.bind(_this);
	    _this.handleDoneLeaving = _this.handleDoneLeaving.bind(_this);
	    _this.isValidChildByKey = _this.isValidChildByKey.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  Animate.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    this.mounted = true;
	    var showProp = this.props.showProp;
	    var children = this.state.children;
	    if (showProp) {
	      children = children.filter(function (child) {
	        return !!child.props[showProp];
	      });
	    }
	    children.forEach(function (child) {
	      if (child) {
	        _this2.performAppear(child.key);
	      }
	    });
	  };
	
	  Animate.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.mounted = false;
	  };
	
	  Animate.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	    var _this3 = this;
	
	    this.nextProps = nextProps;
	    var nextChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(nextProps));
	    var props = this.props;
	    // exclusive needs immediate response
	    if (props.exclusive) {
	      Object.keys(this.currentlyAnimatingKeys).forEach(function (key) {
	        _this3.stop(key);
	      });
	    }
	    var showProp = props.showProp;
	    var currentlyAnimatingKeys = this.currentlyAnimatingKeys;
	    // last props children if exclusive
	    var currentChildren = props.exclusive ? (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props)) : this.state.children;
	    // in case destroy in showProp mode
	    var newChildren = [];
	    if (showProp) {
	      currentChildren.forEach(function (currentChild) {
	        var nextChild = currentChild && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, currentChild.key);
	        var newChild = void 0;
	        if ((!nextChild || !nextChild.props[showProp]) && currentChild.props[showProp]) {
	          newChild = _react2["default"].cloneElement(nextChild || currentChild, _defineProperty({}, showProp, true));
	        } else {
	          newChild = nextChild;
	        }
	        if (newChild) {
	          newChildren.push(newChild);
	        }
	      });
	      nextChildren.forEach(function (nextChild) {
	        if (!nextChild || !(0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, nextChild.key)) {
	          newChildren.push(nextChild);
	        }
	      });
	    } else {
	      newChildren = (0, _ChildrenUtils.mergeChildren)(currentChildren, nextChildren);
	    }
	
	    // need render to avoid update
	    this.setState({
	      children: newChildren
	    });
	
	    nextChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasPrev = child && (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	      if (showProp) {
	        var showInNext = child.props[showProp];
	        if (hasPrev) {
	          var showInNow = (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	          if (!showInNow && showInNext) {
	            _this3.keysToEnter.push(key);
	          }
	        } else if (showInNext) {
	          _this3.keysToEnter.push(key);
	        }
	      } else if (!hasPrev) {
	        _this3.keysToEnter.push(key);
	      }
	    });
	
	    currentChildren.forEach(function (child) {
	      var key = child && child.key;
	      if (child && currentlyAnimatingKeys[key]) {
	        return;
	      }
	      var hasNext = child && (0, _ChildrenUtils.findChildInChildrenByKey)(nextChildren, key);
	      if (showProp) {
	        var showInNow = child.props[showProp];
	        if (hasNext) {
	          var showInNext = (0, _ChildrenUtils.findShownChildInChildrenByKey)(nextChildren, key, showProp);
	          if (!showInNext && showInNow) {
	            _this3.keysToLeave.push(key);
	          }
	        } else if (showInNow) {
	          _this3.keysToLeave.push(key);
	        }
	      } else if (!hasNext) {
	        _this3.keysToLeave.push(key);
	      }
	    });
	  };
	
	  Animate.prototype.componentDidUpdate = function componentDidUpdate() {
	    var keysToEnter = this.keysToEnter;
	    this.keysToEnter = [];
	    keysToEnter.forEach(this.performEnter);
	    var keysToLeave = this.keysToLeave;
	    this.keysToLeave = [];
	    keysToLeave.forEach(this.performLeave);
	  };
	
	  Animate.prototype.performEnter = function performEnter(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillEnter(this.handleDoneAdding.bind(this, key, 'enter'));
	    }
	  };
	
	  Animate.prototype.performAppear = function performAppear(key) {
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillAppear(this.handleDoneAdding.bind(this, key, 'appear'));
	    }
	  };
	
	  Animate.prototype.handleDoneAdding = function handleDoneAdding(key, type) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    if (!this.isValidChildByKey(currentChildren, key)) {
	      // exclusive will not need this
	      this.performLeave(key);
	    } else {
	      if (type === 'appear') {
	        if (_util2["default"].allowAppearCallback(props)) {
	          props.onAppear(key);
	          props.onEnd(key, true);
	        }
	      } else {
	        if (_util2["default"].allowEnterCallback(props)) {
	          props.onEnter(key);
	          props.onEnd(key, true);
	        }
	      }
	    }
	  };
	
	  Animate.prototype.performLeave = function performLeave(key) {
	    // may already remove by exclusive
	    if (this.refs[key]) {
	      this.currentlyAnimatingKeys[key] = true;
	      this.refs[key].componentWillLeave(this.handleDoneLeaving.bind(this, key));
	    }
	  };
	
	  Animate.prototype.handleDoneLeaving = function handleDoneLeaving(key) {
	    var props = this.props;
	    delete this.currentlyAnimatingKeys[key];
	    // if update on exclusive mode, skip check
	    if (props.exclusive && props !== this.nextProps) {
	      return;
	    }
	    var currentChildren = (0, _ChildrenUtils.toArrayChildren)(getChildrenFromProps(props));
	    // in case state change is too fast
	    if (this.isValidChildByKey(currentChildren, key)) {
	      this.performEnter(key);
	    } else {
	      var end = function end() {
	        if (_util2["default"].allowLeaveCallback(props)) {
	          props.onLeave(key);
	          props.onEnd(key, false);
	        }
	      };
	      /* eslint react/no-is-mounted:0 */
	      if (this.mounted && !(0, _ChildrenUtils.isSameChildren)(this.state.children, currentChildren, props.showProp)) {
	        this.setState({
	          children: currentChildren
	        }, end);
	      } else {
	        end();
	      }
	    }
	  };
	
	  Animate.prototype.isValidChildByKey = function isValidChildByKey(currentChildren, key) {
	    var showProp = this.props.showProp;
	    if (showProp) {
	      return (0, _ChildrenUtils.findShownChildInChildrenByKey)(currentChildren, key, showProp);
	    }
	    return (0, _ChildrenUtils.findChildInChildrenByKey)(currentChildren, key);
	  };
	
	  Animate.prototype.stop = function stop(key) {
	    delete this.currentlyAnimatingKeys[key];
	    var component = this.refs[key];
	    if (component) {
	      component.stop();
	    }
	  };
	
	  Animate.prototype.render = function render() {
	    var props = this.props;
	    this.nextProps = props;
	    var stateChildren = this.state.children;
	    var children = null;
	    if (stateChildren) {
	      children = stateChildren.map(function (child) {
	        if (child === null || child === undefined) {
	          return child;
	        }
	        if (!child.key) {
	          throw new Error('must set key for <rc-animate> children');
	        }
	        return _react2["default"].createElement(
	          _AnimateChild2["default"],
	          {
	            key: child.key,
	            ref: child.key,
	            animation: props.animation,
	            transitionName: props.transitionName,
	            transitionEnter: props.transitionEnter,
	            transitionAppear: props.transitionAppear,
	            transitionLeave: props.transitionLeave
	          },
	          child
	        );
	      });
	    }
	    var Component = props.component;
	    if (Component) {
	      var passedProps = props;
	      if (typeof Component === 'string') {
	        passedProps = {
	          className: props.className,
	          style: props.style
	        };
	      }
	      return _react2["default"].createElement(
	        Component,
	        passedProps,
	        children
	      );
	    }
	    return children[0] || null;
	  };
	
	  return Animate;
	}(_react.Component);
	
	;
	Animate.defaultProps = defaultProps;
	Animate.propTypes = Animate.propTypes;
	
	exports["default"] = Animate;
	module.exports = exports['default'];

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.toArrayChildren = toArrayChildren;
	exports.findChildInChildrenByKey = findChildInChildrenByKey;
	exports.findShownChildInChildrenByKey = findShownChildInChildrenByKey;
	exports.findHiddenChildInChildrenByKey = findHiddenChildInChildrenByKey;
	exports.isSameChildren = isSameChildren;
	exports.mergeChildren = mergeChildren;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function toArrayChildren(children) {
	  var ret = [];
	  _react2["default"].Children.forEach(children, function (child) {
	    ret.push(child);
	  });
	  return ret;
	}
	
	function findChildInChildrenByKey(children, key) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (ret) {
	        return;
	      }
	      if (child && child.key === key) {
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findShownChildInChildrenByKey(children, key, showProp) {
	  var ret = null;
	  if (children) {
	    children.forEach(function (child) {
	      if (child && child.key === key && child.props[showProp]) {
	        if (ret) {
	          throw new Error('two child with same key for <rc-animate> children');
	        }
	        ret = child;
	      }
	    });
	  }
	  return ret;
	}
	
	function findHiddenChildInChildrenByKey(children, key, showProp) {
	  var found = 0;
	  if (children) {
	    children.forEach(function (child) {
	      if (found) {
	        return;
	      }
	      found = child && child.key === key && !child.props[showProp];
	    });
	  }
	  return found;
	}
	
	function isSameChildren(c1, c2, showProp) {
	  var same = c1.length === c2.length;
	  if (same) {
	    c1.forEach(function (child, index) {
	      var child2 = c2[index];
	      if (child && child2) {
	        if (child && !child2 || !child && child2) {
	          same = false;
	        } else if (child.key !== child2.key) {
	          same = false;
	        } else if (showProp && child.props[showProp] !== child2.props[showProp]) {
	          same = false;
	        }
	      }
	    });
	  }
	  return same;
	}
	
	function mergeChildren(prev, next) {
	  var ret = [];
	
	  // For each key of `next`, the list of keys to insert before that key in
	  // the combined list
	  var nextChildrenPending = {};
	  var pendingChildren = [];
	  prev.forEach(function (child) {
	    if (child && findChildInChildrenByKey(next, child.key)) {
	      if (pendingChildren.length) {
	        nextChildrenPending[child.key] = pendingChildren;
	        pendingChildren = [];
	      }
	    } else {
	      pendingChildren.push(child);
	    }
	  });
	
	  next.forEach(function (child) {
	    if (child && nextChildrenPending.hasOwnProperty(child.key)) {
	      ret = ret.concat(nextChildrenPending[child.key]);
	    }
	    ret.push(child);
	  });
	
	  ret = ret.concat(pendingChildren);
	
	  return ret;
	}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _tinperBeeCore = __webpack_require__(23);
	
	var _util = __webpack_require__(57);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var transitionMap = {
	  enter: 'transitionEnter',
	  appear: 'transitionAppear',
	  leave: 'transitionLeave'
	};
	
	var propTypes = {
	  children: _propTypes2["default"].any
	};
	
	var AnimateChild = function (_Component) {
	  _inherits(AnimateChild, _Component);
	
	  function AnimateChild(props) {
	    _classCallCheck(this, AnimateChild);
	
	    var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	    _this.transition = _this.transition.bind(_this);
	    _this.stop = _this.stop.bind(_this);
	    return _this;
	  }
	
	  AnimateChild.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.stop();
	  };
	
	  AnimateChild.prototype.componentWillEnter = function componentWillEnter(done) {
	    if (_util2["default"].isEnterSupported(this.props)) {
	      this.transition('enter', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillAppear = function componentWillAppear(done) {
	    if (_util2["default"].isAppearSupported(this.props)) {
	      this.transition('appear', done);
	    } else {
	      done();
	    }
	  };
	
	  AnimateChild.prototype.componentWillLeave = function componentWillLeave(done) {
	    if (_util2["default"].isLeaveSupported(this.props)) {
	      this.transition('leave', done);
	    } else {
	      // always sync, do not interupt with react component life cycle
	      // update hidden -> animate hidden ->
	      // didUpdate -> animate leave -> unmount (if animate is none)
	      done();
	    }
	  };
	
	  AnimateChild.prototype.transition = function transition(animationType, finishCallback) {
	    var _this2 = this;
	
	    var node = _reactDom2["default"].findDOMNode(this);
	    var props = this.props;
	    var transitionName = props.transitionName;
	    var nameIsObj = (typeof transitionName === 'undefined' ? 'undefined' : _typeof(transitionName)) === 'object';
	    this.stop();
	    var end = function end() {
	      _this2.stopper = null;
	      finishCallback();
	    };
	    if ((_tinperBeeCore.cssAnimation.isCssAnimationSupported || !props.animation[animationType]) && transitionName && props[transitionMap[animationType]]) {
	      var name = nameIsObj ? transitionName[animationType] : transitionName + '-' + animationType;
	      var activeName = name + '-active';
	      if (nameIsObj && transitionName[animationType + 'Active']) {
	        activeName = transitionName[animationType + 'Active'];
	      }
	      this.stopper = (0, _tinperBeeCore.cssAnimation)(node, {
	        name: name,
	        active: activeName
	      }, end);
	    } else {
	      this.stopper = props.animation[animationType](node, end);
	    }
	  };
	
	  AnimateChild.prototype.stop = function stop() {
	    var stopper = this.stopper;
	    if (stopper) {
	      this.stopper = null;
	      stopper.stop();
	    }
	  };
	
	  AnimateChild.prototype.render = function render() {
	    return this.props.children;
	  };
	
	  return AnimateChild;
	}(_react.Component);
	
	;
	
	AnimateChild.propTypes = propTypes;
	
	exports["default"] = AnimateChild;
	module.exports = exports['default'];

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var util = {
	  isAppearSupported: function isAppearSupported(props) {
	    return props.transitionName && props.transitionAppear || props.animation.appear;
	  },
	  isEnterSupported: function isEnterSupported(props) {
	    return props.transitionName && props.transitionEnter || props.animation.enter;
	  },
	  isLeaveSupported: function isLeaveSupported(props) {
	    return props.transitionName && props.transitionLeave || props.animation.leave;
	  },
	  allowAppearCallback: function allowAppearCallback(props) {
	    return props.transitionAppear || props.animation.appear;
	  },
	  allowEnterCallback: function allowEnterCallback(props) {
	    return props.transitionEnter || props.animation.enter;
	  },
	  allowLeaveCallback: function allowLeaveCallback(props) {
	    return props.transitionLeave || props.animation.leave;
	  }
	};
	exports["default"] = util;
	module.exports = exports["default"];

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (componentOrElement) {
	  return (0, _ownerDocument2["default"])(_reactDom2["default"].findDOMNode(componentOrElement));
	};
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _ownerDocument = __webpack_require__(59);
	
	var _ownerDocument2 = _interopRequireDefault(_ownerDocument);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 59 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	exports.default = ownerDocument;
	
	function ownerDocument(node) {
	  return node && node.ownerDocument || document;
	}
	
	module.exports = exports["default"];

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	exports["default"] = function (node, event, handler, capture) {
	  (0, _on2["default"])(node, event, handler, capture);
	
	  return {
	    remove: function remove() {
	      (0, _off2["default"])(node, event, handler, capture);
	    }
	  };
	};
	
	var _on = __webpack_require__(11);
	
	var _on2 = _interopRequireDefault(_on);
	
	var _off = __webpack_require__(61);
	
	var _off2 = _interopRequireDefault(_off);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	module.exports = exports['default'];

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(9);
	
	exports.__esModule = true;
	exports.default = void 0;
	
	var _inDOM = _interopRequireDefault(__webpack_require__(10));
	
	var off = function off() {};
	
	if (_inDOM.default) {
	  off = function () {
	    if (document.addEventListener) return function (node, eventName, handler, capture) {
	      return node.removeEventListener(eventName, handler, capture || false);
	    };else if (document.attachEvent) return function (node, eventName, handler) {
	      return node.detachEvent('on' + eventName, handler);
	    };
	  }();
	}
	
	var _default = off;
	exports.default = _default;
	module.exports = exports["default"];

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _beeIcon = __webpack_require__(63);
	
	var _beeIcon2 = _interopRequireDefault(_beeIcon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  duration: _propTypes2["default"].number,
	  onClose: _propTypes2["default"].func,
	  children: _propTypes2["default"].any,
	  color: _propTypes2["default"].oneOf(['info', 'success', 'danger', 'warning', 'light', 'dark', 'news', 'infolight', 'successlight', 'dangerlight', 'warninglight']),
	  title: _propTypes2["default"].any
	};
	
	function noop() {}
	
	var defaultProps = {
	  onEnd: noop,
	  onClose: noop,
	  duration: 4.5,
	  closable: true
	};
	
	var Notice = function (_React$Component) {
	  _inherits(Notice, _React$Component);
	
	  function Notice(props) {
	    _classCallCheck(this, Notice);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));
	
	    _this.clearCloseTimer = _this.clearCloseTimer.bind(_this);
	    _this.close = _this.close.bind(_this);
	    return _this;
	  }
	
	  Notice.prototype.componentDidMount = function componentDidMount() {
	    var _this2 = this;
	
	    if (this.props.duration) {
	      this.closeTimer = setTimeout(function () {
	        _this2.close();
	      }, this.props.duration * 1000);
	    }
	  };
	
	  Notice.prototype.componentWillUnmount = function componentWillUnmount() {
	    this.clearCloseTimer();
	  };
	
	  Notice.prototype.clearCloseTimer = function clearCloseTimer() {
	    if (this.closeTimer) {
	      clearTimeout(this.closeTimer);
	      this.closeTimer = null;
	    }
	  };
	
	  Notice.prototype.close = function close() {
	    this.clearCloseTimer();
	    this.props.onClose();
	  };
	
	  Notice.prototype.render = function render() {
	    var _classes;
	
	    var _props = this.props,
	        closable = _props.closable,
	        clsPrefix = _props.clsPrefix,
	        className = _props.className,
	        style = _props.style,
	        children = _props.children,
	        color = _props.color,
	        title = _props.title,
	        content = _props.content,
	        onEnd = _props.onEnd,
	        onClose = _props.onClose,
	        duration = _props.duration,
	        others = _objectWithoutProperties(_props, ['closable', 'clsPrefix', 'className', 'style', 'children', 'color', 'title', 'content', 'onEnd', 'onClose', 'duration']);
	
	    var componentClass = clsPrefix + '-notice';
	    var classes = (_classes = {}, _defineProperty(_classes, '' + componentClass, 1), _defineProperty(_classes, componentClass + '-closable', closable), _defineProperty(_classes, className, !!className), _classes);
	    if (color) {
	      classes[componentClass + '-' + color] = true;
	    }
	    return _react2["default"].createElement(
	      'div',
	      _extends({ className: (0, _classnames2["default"])(classes), style: style, onClick: this.close }, others),
	      _react2["default"].createElement(
	        'div',
	        { className: componentClass + '-content' },
	        title && _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-title' },
	          title
	        ),
	        _react2["default"].createElement(
	          'div',
	          { className: componentClass + '-description' },
	          children
	        )
	      ),
	      closable ? _react2["default"].createElement(
	        'a',
	        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
	        _react2["default"].createElement(
	          'span',
	          { className: componentClass + '-close-x' },
	          _react2["default"].createElement(_beeIcon2["default"], { type: 'uf-close' })
	        )
	      ) : null
	    );
	  };
	
	  return Notice;
	}(_react2["default"].Component);
	
	;
	
	Notice.propTypes = propTypes;
	Notice.defaultProps = defaultProps;
	
	exports["default"] = Notice;
	module.exports = exports['default'];

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Icon = __webpack_require__(64);
	
	var _Icon2 = _interopRequireDefault(_Icon);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Icon2["default"];
	module.exports = exports['default'];

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
		type: _propTypes2["default"].string
	
	};
	/**
	 *  badge 默认显示内容1
	 */
	var defaultProps = {
		clsPrefix: 'uf'
	};
	
	var Icon = function (_Component) {
		_inherits(Icon, _Component);
	
		function Icon(props) {
			_classCallCheck(this, Icon);
	
			return _possibleConstructorReturn(this, _Component.call(this, props));
		}
	
		Icon.prototype.render = function render() {
			var _props = this.props,
			    type = _props.type,
			    className = _props.className,
			    clsPrefix = _props.clsPrefix,
			    others = _objectWithoutProperties(_props, ['type', 'className', 'clsPrefix']);
	
			var clsObj = {};
	
			var classNames = (0, _classnames2["default"])(clsPrefix, type);
	
			return _react2["default"].createElement('i', _extends({}, others, { className: (0, _classnames2["default"])(classNames, className) }));
		};
	
		return Icon;
	}(_react.Component);
	
	Icon.defaultProps = defaultProps;
	Icon.propTypes = propTypes;
	
	exports["default"] = Icon;
	module.exports = exports['default'];

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var deselectCurrent = __webpack_require__(66);
	
	var clipboardToIE11Formatting = {
	  "text/plain": "Text",
	  "text/html": "Url",
	  "default": "Text"
	}
	
	var defaultMessage = "Copy to clipboard: #{key}, Enter";
	
	function format(message) {
	  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
	  return message.replace(/#{\s*key\s*}/g, copyKey);
	}
	
	function copy(text, options) {
	  var debug,
	    message,
	    reselectPrevious,
	    range,
	    selection,
	    mark,
	    success = false;
	  if (!options) {
	    options = {};
	  }
	  debug = options.debug || false;
	  try {
	    reselectPrevious = deselectCurrent();
	
	    range = document.createRange();
	    selection = document.getSelection();
	
	    mark = document.createElement("span");
	    mark.textContent = text;
	    // reset user styles for span element
	    mark.style.all = "unset";
	    // prevents scrolling to the end of the page
	    mark.style.position = "fixed";
	    mark.style.top = 0;
	    mark.style.clip = "rect(0, 0, 0, 0)";
	    // used to preserve spaces and line breaks
	    mark.style.whiteSpace = "pre";
	    // do not inherit user-select (it may be `none`)
	    mark.style.webkitUserSelect = "text";
	    mark.style.MozUserSelect = "text";
	    mark.style.msUserSelect = "text";
	    mark.style.userSelect = "text";
	    mark.addEventListener("copy", function(e) {
	      e.stopPropagation();
	      if (options.format) {
	        e.preventDefault();
	        if (typeof e.clipboardData === "undefined") { // IE 11
	          debug && console.warn("unable to use e.clipboardData");
	          debug && console.warn("trying IE specific stuff");
	          window.clipboardData.clearData();
	          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
	          window.clipboardData.setData(format, text);
	        } else { // all other browsers
	          e.clipboardData.clearData();
	          e.clipboardData.setData(options.format, text);
	        }
	      }
	      if (options.onCopy) {
	        e.preventDefault();
	        options.onCopy(e.clipboardData);
	      }
	    });
	
	    document.body.appendChild(mark);
	
	    range.selectNodeContents(mark);
	    selection.addRange(range);
	
	    var successful = document.execCommand("copy");
	    if (!successful) {
	      throw new Error("copy command was unsuccessful");
	    }
	    success = true;
	  } catch (err) {
	    debug && console.error("unable to copy using execCommand: ", err);
	    debug && console.warn("trying IE specific stuff");
	    try {
	      window.clipboardData.setData(options.format || "text", text);
	      options.onCopy && options.onCopy(window.clipboardData);
	      success = true;
	    } catch (err) {
	      debug && console.error("unable to copy using clipboardData: ", err);
	      debug && console.error("falling back to prompt");
	      message = format("message" in options ? options.message : defaultMessage);
	      window.prompt(message, text);
	    }
	  } finally {
	    if (selection) {
	      if (typeof selection.removeRange == "function") {
	        selection.removeRange(range);
	      } else {
	        selection.removeAllRanges();
	      }
	    }
	
	    if (mark) {
	      document.body.removeChild(mark);
	    }
	    reselectPrevious();
	  }
	
	  return success;
	}
	
	module.exports = copy;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

	
	module.exports = function () {
	  var selection = document.getSelection();
	  if (!selection.rangeCount) {
	    return function () {};
	  }
	  var active = document.activeElement;
	
	  var ranges = [];
	  for (var i = 0; i < selection.rangeCount; i++) {
	    ranges.push(selection.getRangeAt(i));
	  }
	
	  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
	    case 'INPUT':
	    case 'TEXTAREA':
	      active.blur();
	      break;
	
	    default:
	      active = null;
	      break;
	  }
	
	  selection.removeAllRanges();
	  return function () {
	    selection.type === 'Caret' &&
	    selection.removeAllRanges();
	
	    if (!selection.rangeCount) {
	      ranges.forEach(function(range) {
	        selection.addRange(range);
	      });
	    }
	
	    active &&
	    active.focus();
	  };
	};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBeeCore = __webpack_require__(23);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  //是否是手风琴效果
	  accordion: _propTypes2["default"].bool,
	  //激活的项
	  activeKey: _propTypes2["default"].any,
	  //默认的激活的项
	  defaultActiveKey: _propTypes2["default"].any,
	  //选中函数
	  onSelect: _propTypes2["default"].func,
	  role: _propTypes2["default"].string
	};
	
	var defaultProps = {
	  accordion: false,
	  clsPrefix: 'u-panel-group'
	};
	
	// TODO: Use uncontrollable.
	
	var PanelGroup = function (_React$Component) {
	  _inherits(PanelGroup, _React$Component);
	
	  function PanelGroup(props, context) {
	    _classCallCheck(this, PanelGroup);
	
	    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	    _this.handleSelect = _this.handleSelect.bind(_this);
	
	    _this.state = {
	      activeKey: props.defaultActiveKey
	    };
	    return _this;
	  }
	
	  PanelGroup.prototype.handleSelect = function handleSelect(key, e) {
	    e.preventDefault();
	
	    if (this.props.onSelect) {
	      this.props.onSelect(key, e);
	    }
	
	    if (this.state.activeKey === key) {
	      key = null;
	    }
	
	    this.setState({ activeKey: key });
	  };
	
	  PanelGroup.prototype.render = function render() {
	    var _this2 = this;
	
	    var _props = this.props,
	        accordion = _props.accordion,
	        propsActiveKey = _props.activeKey,
	        className = _props.className,
	        children = _props.children,
	        defaultActiveKey = _props.defaultActiveKey,
	        onSelect = _props.onSelect,
	        style = _props.style,
	        clsPrefix = _props.clsPrefix,
	        others = _objectWithoutProperties(_props, ['accordion', 'activeKey', 'className', 'children', 'defaultActiveKey', 'onSelect', 'style', 'clsPrefix']);
	
	    var activeKey = void 0;
	    if (accordion) {
	      activeKey = propsActiveKey != null ? propsActiveKey : this.state.activeKey;
	      others.role = others.role || 'tablist';
	    }
	
	    var classes = {};
	    classes['' + clsPrefix] = true;
	
	    return _react2["default"].createElement(
	      'div',
	      _extends({}, others, {
	        className: (0, _classnames2["default"])(className, classes)
	      }),
	      _react2["default"].Children.map(children, function (child) {
	        if (!_react2["default"].isValidElement(child)) {
	          return child;
	        }
	        var childProps = {
	          style: child.props.style
	        };
	
	        if (accordion) {
	          _extends(childProps, {
	            headerRole: 'tab',
	            panelRole: 'tabpanel',
	            collapsible: true,
	            expanded: child.props.eventKey === activeKey,
	            onSelect: (0, _tinperBeeCore.createChainedFunction)(_this2.handleSelect, child.props.onSelect)
	          });
	        }
	
	        return (0, _react.cloneElement)(child, childProps);
	      })
	    );
	  };
	
	  return PanelGroup;
	}(_react2["default"].Component);
	
	PanelGroup.propTypes = propTypes;
	PanelGroup.defaultProps = defaultProps;
	
	exports["default"] = PanelGroup;
	module.exports = exports['default'];

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _beeButton = __webpack_require__(72);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // /**
	//  *
	//  * @title 多语言 Input 组件
	//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 包含预览状态和编辑状态切换.当前语种对应的字段内容为空时，显示默认语种内容。
	//  *
	//  */
	
	var Demo1 = function (_Component) {
	    _inherits(Demo1, _Component);
	
	    function Demo1(props) {
	        _classCallCheck(this, Demo1);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onOk = function (localeList) {
	            // this.setState({
	            //   localeList
	            // })
	            console.log(localeList);
	        };
	
	        _this.onClick = function (key) {
	            _this.setState({
	                locale: key,
	                localeList: _this.state.localeListAll[key]
	            });
	        };
	
	        _this.changeStatus = function (key) {
	            _this.setState({
	                status: key
	            });
	        };
	
	        _this.onChange = function (localeList, localeValue) {
	            console.log(localeList);
	            console.log(localeValue);
	        };
	
	        _this.state = {
	            sysLocale: "en_US", //默认语种
	            locale: "en_US", //当前语种
	            status: "preview",
	            localeListAll: {
	                "zh_CN": {
	                    "zh_CN": { "label": "简体中文", "value": "" },
	                    "en_US": { "label": "英文", "value": "" },
	                    "zh_TW": { "label": "繁体中文", "value": "" },
	                    "fr_FR": { "label": "法语", "value": "" }
	                },
	                "en_US": {
	                    "zh_CN": { "label": "Simplified Chinese", "value": "" },
	                    "en_US": { "label": "English", "value": "" },
	                    "zh_TW": { "label": "traditional Chinese", "value": "" },
	                    "fr_FR": { "label": "French", "value": "" }
	                },
	                "zh_TW": {
	                    "zh_CN": { "label": "簡體中文", "value": "" },
	                    "en_US": { "label": "英文", "value": "" },
	                    "zh_TW": { "label": "繁體中文", "value": "" },
	                    "fr_FR": { "label": "法語", "value": "" }
	                },
	                "fr_FR": {
	                    "zh_CN": { "label": "Chinois simplifié", "value": "" },
	                    "en_US": { "label": "Anglais", "value": "" },
	                    "zh_TW": { "label": "Chinois traditionnel", "value": "" },
	                    "fr_FR": { "label": "Français", "value": "" }
	                }
	
	            },
	            localeList: {},
	            localeJson: {
	                "zh_CN": "简体中文",
	                "en_US": "英文",
	                "zh_TW": "繁体中文",
	                "fr_FR": "法语"
	            }
	        };
	        return _this;
	    }
	
	    Demo1.prototype.componentDidMount = function componentDidMount() {
	        // this.setState({
	        //     locale: [
	        //         {
	        //             locale:"zh_CN",label:"中文",value:""
	        //         },
	        //         {
	        //             locale:"en_US",label:"英文",value:""
	        //         },
	        //         {
	        //             locale:"zh_TW",label:"台湾",value:""
	        //         }
	        //     ]
	        // })
	
	        this.setState({
	            locale: "zh_CN",
	            localeList: {
	                "zh_CN": { "label": "简体中文", "value": "" },
	                "en_US": { "label": "英文", "value": "" },
	                "zh_TW": { "label": "繁体中文", "value": "" },
	                "fr_FR": { "label": "法语", "value": "" }
	            }
	        });
	    };
	
	    Demo1.prototype.render = function render() {
	        var _this2 = this;
	
	        var _state = this.state,
	            localeList = _state.localeList,
	            sysLocale = _state.sysLocale,
	            locale = _state.locale,
	            status = _state.status,
	            localeJson = _state.localeJson,
	            required = _state.required;
	
	        console.log(localeList, sysLocale, locale, status, localeJson);
	        // let modalLocale = {
	        //   'fr_FR':{
	        //     'title':'Multilingual établir12',
	        //     'okName':'conservation12',
	        //     'cancelName':'supprimer12',
	        //     'localeFlag':'1fasf'
	        //   }
	        // }
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'btn' },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_CN");
	                        }, colors: locale == 'zh_CN' ? 'success' : null },
	                    '[\u7B80\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("en_US");
	                        }, colors: locale == 'en_US' ? 'success' : null },
	                    '[\u82F1\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_TW");
	                        }, colors: locale == 'zh_TW' ? 'success' : null },
	                    '[\u7E41\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("fr_FR");
	                        }, colors: locale == 'fr_FR' ? 'success' : null },
	                    '[\u6CD5\u8BED]'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u7CFB\u7EDF\u8BED\u79CD\uFF1A',
	                    localeJson[sysLocale]
	                ),
	                _react2['default'].createElement('br', null),
	                _react2['default'].createElement(
	                    'span',
	                    null,
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 'btn' },
	                        _react2['default'].createElement(
	                            'span',
	                            { style: { width: '100px', lineHeight: '45px' } },
	                            '\u5F53\u524D\u72B6\u6001'
	                        ),
	                        _react2['default'].createElement(
	                            _beeButton2['default'],
	                            { onClick: function onClick() {
	                                    _this2.changeStatus("preview");
	                                }, colors: status == 'preview' ? 'success' : null },
	                            '[\u9884\u89C8]'
	                        ),
	                        _react2['default'].createElement(
	                            _beeButton2['default'],
	                            { onClick: function onClick() {
	                                    _this2.changeStatus("editor");
	                                }, colors: status == 'editor' ? 'success' : null },
	                            '[\u7F16\u8F91]'
	                        )
	                    )
	                )
	            ),
	            '\u540D\u79F0\uFF1A',
	            _react2['default'].createElement(_index2['default'], { localeList: localeList, sysLocale: sysLocale, onOk: this.onOk, locale: locale, status: status, onChange: this.onChange })
	        );
	    };
	
	    return Demo1;
	}(_react.Component);
	
	exports['default'] = Demo1;
	module.exports = exports['default'];

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBee = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tinper-bee\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _FormControl = __webpack_require__(70);
	
	var _FormControl2 = _interopRequireDefault(_FormControl);
	
	var _modal = __webpack_require__(71);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _beeForm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bee-form\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _beeForm2 = _interopRequireDefault(_beeForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var FormItem = _beeForm2['default'].FormItem;
	
	var propTypes = {
	  className: _propTypes2['default'].string,
	  status: _propTypes2['default'].string,
	  onOk: _propTypes2['default'].func, //确定按钮钩子函数
	  onCancel: _propTypes2['default'].func, //取消按钮钩子函数
	  locale: _propTypes2['default'].string.isRequired, //当前语种
	  localeList: _propTypes2['default'].object.isRequired, //语种数组
	  onChange: _propTypes2['default'].func, //文本框改变回掉
	  isTextarea: _propTypes2['default'].bool, // 是否textarea 默认false
	  modalLocale: _propTypes2['default'].object,
	  backdrop: _propTypes2['default'].bool, //是否弹出遮罩层/遮罩层点击是否触发关闭
	  required: _propTypes2['default'].bool, // 是否要求当前语种和系统语种必填
	  isPopConfirm: _propTypes2['default'].bool, // 录入时是否是popconfirm,还是modal的样式
	  showIcon: _propTypes2['default'].bool
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
	    return _react2['default'].createElement(
	      _tinperBee.Row,
	      { key: 'preview' + localeKey, className: 'input-locale-text' },
	      _react2['default'].createElement(
	        'div',
	        { className: 'input-locale-text-r' },
	        localeList[localeKey].label,
	        ':'
	      ),
	      _react2['default'].createElement(
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
	    return _react2['default'].createElement(
	      'div',
	      null,
	      _react2['default'].createElement(
	        'span',
	        { className: 'view-title-content' },
	        localeValue || defaultValue
	      ),
	      this.props.showIcon ? _react2['default'].createElement(
	        _tinperBee.Popover,
	        {
	          placement: 'right',
	          content: getContent(localeList),
	          trigger: 'hover',
	          id: 'right'
	        },
	        _react2['default'].createElement('i', { className: 'uf uf-globe' })
	      ) : ''
	    );
	  };
	
	  AcInputLocale.prototype.getLocaleNoFormElement = function getLocaleNoFormElement(localeList, modalLocale, locale) {
	    var _this2 = this;
	
	    return Object.keys(localeList).map(function (localeKey) {
	      return _react2['default'].createElement(
	        'div',
	        { className: 'edit-panel edit-panel-all', key: localeKey },
	        _react2['default'].createElement(
	          FormItem,
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'u-form-item-label' },
	            _react2['default'].createElement(
	              _tinperBee.Label,
	              { title: localeList[localeKey].label },
	              _this2.isShowNoneLeftLable ? _this2.renderLabelLeft(localeKey) : null,
	              localeList[localeKey].label,
	              _this2.renderLabelright(localeKey)
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { style: { 'display': 'inline-block', 'width': 'calc(100% - 130px)' } },
	            _react2['default'].createElement(_FormControl2['default'], {
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
	      return _react2['default'].createElement(
	        'div',
	        { className: 'edit-panel edit-panel-all', key: localeKey },
	        _react2['default'].createElement(
	          FormItem,
	          null,
	          _react2['default'].createElement(
	            'div',
	            { className: 'u-form-item-label' },
	            _react2['default'].createElement(
	              _tinperBee.Label,
	              { title: localeList[localeKey].label },
	              _this3.isShowNoneLeftLable ? _this3.renderLabelLeft(localeKey) : null,
	              localeList[localeKey].label,
	              _this3.renderLabelright(localeKey)
	            )
	          ),
	          _react2['default'].createElement(
	            'div',
	            { style: { 'display': 'inline-block', 'width': 'calc(100% - 130px)' } },
	            _react2['default'].createElement(
	              'div',
	              null,
	              _react2['default'].createElement(_FormControl2['default'], _extends({
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
	              _this3.props.showIcon ? _react2['default'].createElement('div', { className: 'input-icon', onClick: _this3.open }) : '',
	              getFieldError(_this3.props.inputId + "_" + localeKey) ? _react2['default'].createElement(
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
	        return _react2['default'].createElement(
	          'div',
	          { className: 'ac-input-locale ' + (className ? className : null) },
	          status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(_FormControl2['default'], _extends({
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
	            _react2['default'].createElement(
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
	              this.props.showIcon ? _react2['default'].createElement('div', { className: 'input-pop-icon uf uf-globe' }) : _react2['default'].createElement('span', null)
	            ),
	            getFieldError(this.props.inputId) ? _react2['default'].createElement(
	              'span',
	              { className: 'error uf uf-exc-t' },
	              getFieldError(this.props.inputId)
	            ) : ''
	          )
	        );
	      }
	      return _react2['default'].createElement(
	        'div',
	        { className: 'ac-input-locale ' + (className ? className : null) },
	        status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(_FormControl2['default'], _extends({
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
	          this.props.showIcon ? _react2['default'].createElement('div', { className: 'uf uf-globe input-icon', onClick: disabled ? function () {} : this.open }) : '',
	          getFieldError(this.props.inputId) ? _react2['default'].createElement(
	            'span',
	            { className: 'error uf uf-exc-t' },
	            getFieldError(this.props.inputId)
	          ) : ''
	        ),
	        _react2['default'].createElement(
	          _modal2['default'],
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
	        return _react2['default'].createElement(
	          'div',
	          { className: 'ac-input-locale ' + (className ? className : null) },
	          status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2['default'].createElement(
	            'div',
	            null,
	            _react2['default'].createElement(_FormControl2['default'], _extends({
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
	            _react2['default'].createElement(
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
	              _react2['default'].createElement('div', { className: 'input-pop-icon' })
	            )
	          )
	        );
	      }
	      return _react2['default'].createElement(
	        'div',
	        { className: 'ac-input-locale ' + (className ? className : null) },
	        status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : _react2['default'].createElement(
	          'div',
	          null,
	          _react2['default'].createElement(_FormControl2['default'], _extends({
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
	          this.props.showIcon ? _react2['default'].createElement('div', { className: 'uf uf-globe input-icon', onClick: this.open }) : ''
	        ),
	        _react2['default'].createElement(
	          _modal2['default'],
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
	        return _react2['default'].createElement(
	          'span',
	          { className: 'label-default' },
	          '(',
	          modalLocale[locale].localeFlag + "/" + modalLocale[locale].defaultFlag,
	          ')'
	        );
	      }
	    } else {
	      if (localeKey === locale) {
	        return _react2['default'].createElement(
	          'span',
	          { className: 'label-default' },
	          '(',
	          modalLocale[locale].localeFlag,
	          ')'
	        );
	      }
	      if (localeKey === sysLocale) {
	        return _react2['default'].createElement(
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
	          return _react2['default'].createElement(
	            'span',
	            { className: 'require-star uf uf-mi' },
	            ' '
	          );
	        }
	      } else {
	        if (localeKey == locale || localeKey == sysLocale) {
	          return _react2['default'].createElement(
	            'span',
	            { className: 'require-star uf uf-mi' },
	            ' '
	          );
	        }
	      }
	    }
	
	    return _react2['default'].createElement('span', { className: 'require-star' });
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
	
	exports['default'] = AcInputLocale;
	module.exports = exports['default'];

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
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
	        return _react2['default'].createElement('input', _extends({}, this.props, { className: classes, onChange: this.onChange }));
	    };
	
	    return FormControl;
	}(_react.Component);
	
	exports['default'] = FormControl;
	module.exports = exports['default'];

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _tinperBee = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"tinper-bee\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	  onOk: _propTypes2['default'].func, //确定按钮钩子函数
	  onCancel: _propTypes2['default'].func, //取消按钮钩子函数
	  backdrop: _propTypes2['default'].bool, //是否弹出遮罩层/遮罩层点击是否触发关闭
	  title: _propTypes2['default'].string, // modal标题
	  okName: _propTypes2['default'].string, // modal确认按钮中文字内容
	  cancelName: _propTypes2['default'].string, // modal取消按钮中文字内容
	  showModal: _propTypes2['default'].bool, // 遮罩层显示
	  close: _propTypes2['default'].func // 关闭弹框钩子函数
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
	
	    return _react2['default'].createElement(
	      _tinperBee.Modal,
	      {
	        show: showModal,
	        width: '600',
	        backdrop: backdrop,
	        className: 'ac-input-locale-modal',
	        onHide: close,
	        enforceFocus: false
	      },
	      _react2['default'].createElement(
	        _tinperBee.Modal.Header,
	        { closeButton: true },
	        _react2['default'].createElement(
	          _tinperBee.Modal.Title,
	          { className: 'modal-title' },
	          title
	        )
	      ),
	      _react2['default'].createElement(
	        _tinperBee.Modal.Body,
	        null,
	        this.props.children
	      ),
	      _react2['default'].createElement(
	        _tinperBee.Modal.Footer,
	        null,
	        _react2['default'].createElement(
	          _tinperBee.Button,
	          { bordered: true, className: 'cancel-qx', onClick: onCancel },
	          cancelName
	        ),
	        _react2['default'].createElement(
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
	
	exports['default'] = ModalWrap;
	module.exports = exports['default'];

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Button = __webpack_require__(73);
	
	var _Button2 = _interopRequireDefault(_Button);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	exports["default"] = _Button2["default"];
	module.exports = exports['default'];

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(2);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(12);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _classnames = __webpack_require__(5);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }
	
	var propTypes = {
	    /**
	     * @title 尺寸
	     */
	    size: _propTypes2["default"].oneOf(['sm', 'md', 'xg', 'lg']),
	    /**
	     * @title 样式
	     */
	    style: _propTypes2["default"].object,
	    /**
	     * @title 形状
	     */
	    shape: _propTypes2["default"].oneOf(['block', 'round', 'border', 'squared', 'floating', 'pillRight', 'pillLeft', 'icon']),
	
	    bordered: _propTypes2["default"].bool,
	    /**
	    * @title 类型
	    */
	    colors: _propTypes2["default"].oneOf(['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'danger', 'dark', 'light', 'default']),
	    /**
	     * @title 是否禁用
	     * @veIgnore
	     */
	    disabled: _propTypes2["default"].bool,
	    /**
	     * @title 类名
	     * @veIgnore
	     */
	    className: _propTypes2["default"].string,
	
	    /**
	     * @title <button> 的 type
	     * @veIgnore
	     */
	    htmlType: _propTypes2["default"].oneOf(['submit', 'button', 'reset']),
	    isSubmit: _propTypes2["default"].bool //是否作为form的提交按钮
	};
	
	var defaultProps = {
	    disabled: false,
	    htmlType: 'button',
	    clsPrefix: 'u-button',
	    bordered: false,
	    isSubmit: false
	};
	
	var sizeMap = {
	    sm: 'sm',
	    md: 'md',
	    xg: 'xg',
	    lg: 'lg'
	},
	    colorsMap = {
	    primary: 'primary',
	    secondary: 'secondary',
	    accent: 'accent',
	    success: 'success',
	    info: 'info',
	    warning: 'warning',
	    danger: 'danger',
	    dark: 'dark',
	    light: 'light'
	},
	    shapeMap = {
	    block: 'block',
	    round: 'round',
	    border: 'border',
	    squared: 'squared',
	    floating: 'floating',
	    pillRight: 'pill-right',
	    pillLeft: 'pill-left',
	    icon: 'icon'
	};
	
	var Button = function (_Component) {
	    _inherits(Button, _Component);
	
	    function Button(props) {
	        _classCallCheck(this, Button);
	
	        return _possibleConstructorReturn(this, _Component.call(this, props));
	    }
	
	    Button.prototype.render = function render() {
	        var _props = this.props,
	            colors = _props.colors,
	            shape = _props.shape,
	            disabled = _props.disabled,
	            className = _props.className,
	            size = _props.size,
	            bordered = _props.bordered,
	            children = _props.children,
	            htmlType = _props.htmlType,
	            clsPrefix = _props.clsPrefix,
	            isSubmit = _props.isSubmit,
	            others = _objectWithoutProperties(_props, ['colors', 'shape', 'disabled', 'className', 'size', 'bordered', 'children', 'htmlType', 'clsPrefix', 'isSubmit']);
	
	        var clsObj = {};
	        if (className) {
	            clsObj[className] = true;
	        }
	        if (sizeMap[size]) {
	            clsObj[clsPrefix + '-' + sizeMap[size]] = true;
	        }
	
	        if (shapeMap[shape]) {
	            clsObj[clsPrefix + '-' + shapeMap[shape]] = true;
	        }
	        if (colorsMap[colors]) {
	            clsObj[clsPrefix + '-' + colorsMap[colors]] = true;
	        }
	        if (bordered) {
	            clsObj[clsPrefix + '-border'] = bordered;
	        }
	        var classes = (0, _classnames2["default"])(clsPrefix, clsObj);
	        return _react2["default"].createElement(
	            'button',
	            _extends({
	                type: htmlType,
	                className: classes,
	                disabled: disabled
	            }, others),
	            this.props.children
	        );
	    };
	
	    return Button;
	}(_react.Component);
	
	Button.propTypes = propTypes;
	Button.defaultProps = defaultProps;
	
	exports["default"] = Button;
	module.exports = exports['default'];

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _beeButton = __webpack_require__(72);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // /**
	//  *
	//  * @title 多语言 Input 组件
	//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态
	//  * 绿色代表 当前语种
	//  * 预览状态
	//  */
	
	var Demo2 = function (_Component) {
	    _inherits(Demo2, _Component);
	
	    function Demo2(props) {
	        _classCallCheck(this, Demo2);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onOk = function (localeList) {
	            console.log(localeList);
	        };
	
	        _this.onClick = function (key) {
	            _this.setState({
	                locale: key
	            });
	        };
	
	        _this.changeStatus = function (key) {
	            _this.setState({
	                status: key
	            });
	        };
	
	        _this.onChange = function (localeList, localeValue) {
	            console.log(localeList);
	            console.log(localeValue);
	        };
	
	        _this.state = {
	            sysLocale: "en_US", //默认语种
	            locale: "en_US", //当前语种
	            status: "preview",
	            localeList: {
	                "zh_CN": { label: "简体中文", value: "苹果" },
	                "en_US": { label: "英文", value: "apple" },
	                "zh_TW": { label: "繁体中文", value: "蘋果" },
	                "fr_FR": { label: "法语", value: "frenchapple" }
	            },
	            localeJson: {
	                "zh_CN": "简体中文",
	                "en_US": "英文",
	                "zh_TW": "繁体中文",
	                "fr_FR": "法语"
	            }
	        };
	        return _this;
	    }
	
	    Demo2.prototype.componentDidMount = function componentDidMount() {
	        // this.setState({
	        //     locale: [
	        //         {
	        //             locale:"zh_CN",label:"中文",value:""
	        //         },
	        //         {
	        //             locale:"en_US",label:"英文",value:""
	        //         },
	        //         {
	        //             locale:"zh_TW",label:"台湾",value:""
	        //         }
	        //     ]
	        // })
	        // debugger
	        this.setState({
	            locale: "zh_CN"
	        });
	    };
	
	    Demo2.prototype.render = function render() {
	        var _this2 = this;
	
	        var _state = this.state,
	            localeList = _state.localeList,
	            sysLocale = _state.sysLocale,
	            locale = _state.locale,
	            status = _state.status,
	            localeJson = _state.localeJson;
	        // let modalLocale = {
	        //   'fr_FR':{
	        //     'title':'Multilingual établir12',
	        //     'okName':'conservation12',
	        //     'cancelName':'supprimer12',
	        //     'localeFlag':'1fasf'
	        //   }
	        // }
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'btn' },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_CN");
	                        }, colors: locale == 'zh_CN' ? 'success' : null },
	                    '[\u7B80\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("en_US");
	                        }, colors: locale == 'en_US' ? 'success' : null },
	                    '[\u82F1\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_TW");
	                        }, colors: locale == 'zh_TW' ? 'success' : null },
	                    '[\u7E41\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("fr_FR");
	                        }, colors: locale == 'fr_FR' ? 'success' : null },
	                    '[\u6CD5\u8BED]'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u7CFB\u7EDF\u8BED\u79CD\uFF1A',
	                    localeJson[sysLocale],
	                    '\u5F53\u524D\u8BED\u79CD\uFF1A',
	                    locale
	                ),
	                _react2['default'].createElement('br', null)
	            ),
	            '\u540D\u79F0\uFF1A',
	            _react2['default'].createElement(_index2['default'], { localeList: localeList, sysLocale: sysLocale, onOk: this.onOk, locale: locale, status: status, onChange: this.onChange })
	        );
	    };
	
	    return Demo2;
	}(_react.Component);
	
	exports['default'] = Demo2;
	module.exports = exports['default'];

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _beeButton = __webpack_require__(72);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // /**
	//  *
	//  * @title 多语言 Input 组件
	//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 编辑状态
	//  * 绿色代表 当前语种
	//  * 编辑状态
	//  */
	
	var Demo3 = function (_Component) {
	    _inherits(Demo3, _Component);
	
	    function Demo3(props) {
	        _classCallCheck(this, Demo3);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onOk = function (localeList) {
	            // this.setState({
	            //   localeList
	            // })
	            console.log(localeList);
	        };
	
	        _this.onClick = function (key) {
	            _this.setState({
	                locale: key
	            });
	        };
	
	        _this.changeStatus = function (key) {
	            _this.setState({
	                status: key
	            });
	        };
	
	        _this.onChange = function (localeList, localeValue) {
	            console.log(localeList);
	            console.log(localeValue);
	        };
	
	        _this.state = {
	            sysLocale: "en_US", //默认语种
	            locale: "en_US", //当前语种
	            status: "editor",
	            localeList: {
	                "zh_CN": { label: "简体中文", value: "苹果" },
	                "en_US": { label: "英文", value: "apple" },
	                "zh_TW": { label: "繁体中文", value: "蘋果" },
	                "fr_FR": { label: "法语", value: "frenchapple" }
	            },
	            localeJson: {
	                "zh_CN": "简体中文",
	                "en_US": "英文",
	                "zh_TW": "繁体中文",
	                "fr_FR": "法语"
	            },
	            backdrop: false
	        };
	
	        return _this;
	    }
	
	    Demo3.prototype.componentDidMount = function componentDidMount() {
	        var _this2 = this;
	
	        setTimeout(function () {
	            _this2.setState({
	                locale: "zh_CN"
	            });
	        }, 100);
	    };
	
	    Demo3.prototype.render = function render() {
	        var _this3 = this;
	
	        var _state = this.state,
	            localeList = _state.localeList,
	            sysLocale = _state.sysLocale,
	            locale = _state.locale,
	            status = _state.status,
	            localeJson = _state.localeJson,
	            backdrop = _state.backdrop;
	        // let modalLocale = {
	        //   'fr_FR':{
	        //     'title':'Multilingual établir12',
	        //     'okName':'conservation12',
	        //     'cancelName':'supprimer12',
	        //     'localeFlag':'1fasf'
	        //   }
	        // }
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'btn' },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this3.onClick("zh_CN");
	                        }, colors: locale == 'zh_CN' ? 'success' : null },
	                    '[\u7B80\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this3.onClick("en_US");
	                        }, colors: locale == 'en_US' ? 'success' : null },
	                    '[\u82F1\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this3.onClick("zh_TW");
	                        }, colors: locale == 'zh_TW' ? 'success' : null },
	                    '[\u7E41\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this3.onClick("fr_FR");
	                        }, colors: locale == 'fr_FR' ? 'success' : null },
	                    '[\u6CD5\u8BED]'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u7CFB\u7EDF\u8BED\u79CD\uFF1A',
	                    localeJson[sysLocale]
	                ),
	                _react2['default'].createElement('br', null),
	                '\u5F53\u524D\u8BED\u79CD\uFF1A',
	                locale
	            ),
	            '\u540D\u79F0\uFF1A',
	            _react2['default'].createElement(_index2['default'], { localeList: localeList, sysLocale: sysLocale, onOk: this.onOk, locale: locale, status: status, backdrop: backdrop, onChange: this.onChange })
	        );
	    };
	
	    return Demo3;
	}(_react.Component);
	
	exports['default'] = Demo3;
	module.exports = exports['default'];

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _beeButton = __webpack_require__(72);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // /**
	//  *
	//  * @title 多语言 Input 组件
	//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 改变默认模态框中文字说明
	//  * 绿色代表 当前语种
	//  * 编辑状态 改变默认模态框中文字说明
	//  */
	
	var Demo4 = function (_Component) {
	    _inherits(Demo4, _Component);
	
	    function Demo4(props) {
	        _classCallCheck(this, Demo4);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onOk = function (localeList) {
	            // this.setState({
	            //   localeList
	            // })
	            console.log(localeList);
	        };
	
	        _this.onClick = function (key) {
	            _this.setState({
	                locale: key
	            });
	        };
	
	        _this.changeStatus = function (key) {
	            _this.setState({
	                status: key
	            });
	        };
	
	        _this.onChange = function (localeList, localeValue) {
	            console.log(localeList);
	            console.log(localeValue);
	        };
	
	        _this.state = {
	            sysLocale: "en_US", //默认语种
	            locale: "en_US", //当前语种
	            status: "editor",
	            localeList: {
	                "zh_CN": { label: "简体中文", value: "苹果" },
	                "en_US": { label: "英文", value: "apple" },
	                "zh_TW": { label: "繁体中文", value: "蘋果" },
	                "fr_FR": { label: "法语", value: "frenchapple" }
	            },
	            localeJson: {
	                "zh_CN": "简体中文",
	                "en_US": "英文",
	                "zh_TW": "繁体中文",
	                "fr_FR": "法语"
	            }
	        };
	        return _this;
	    }
	
	    Demo4.prototype.componentDidMount = function componentDidMount() {
	        // this.setState({
	        //     locale: [
	        //         {
	        //             locale:"zh_CN",label:"中文",value:""
	        //         },
	        //         {
	        //             locale:"en_US",label:"英文",value:""
	        //         },
	        //         {
	        //             locale:"zh_TW",label:"台湾",value:""
	        //         }
	        //     ]
	        // })
	    };
	
	    Demo4.prototype.render = function render() {
	        var _this2 = this;
	
	        var _state = this.state,
	            localeList = _state.localeList,
	            sysLocale = _state.sysLocale,
	            locale = _state.locale,
	            status = _state.status,
	            localeJson = _state.localeJson;
	
	        var modalLocale = {
	            'fr_FR': {
	                'title': 'Multilingual établir12',
	                'okName': 'conservation12',
	                'cancelName': 'supprimer12',
	                'localeFlag': '1fasf'
	            }
	        };
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'btn' },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_CN");
	                        }, colors: locale == 'zh_CN' ? 'success' : null },
	                    '[\u7B80\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("en_US");
	                        }, colors: locale == 'en_US' ? 'success' : null },
	                    '[\u82F1\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_TW");
	                        }, colors: locale == 'zh_TW' ? 'success' : null },
	                    '[\u7E41\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("fr_FR");
	                        }, colors: locale == 'fr_FR' ? 'success' : null },
	                    '[\u6CD5\u8BED]'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u7CFB\u7EDF\u8BED\u79CD\uFF1A',
	                    localeJson[sysLocale]
	                ),
	                _react2['default'].createElement('br', null)
	            ),
	            '\u540D\u79F0\uFF1A',
	            _react2['default'].createElement(_index2['default'], { localeList: localeList, sysLocale: sysLocale, onOk: this.onOk, locale: locale, status: status, onChange: this.onChange, modalLocale: modalLocale })
	        );
	    };
	
	    return Demo4;
	}(_react.Component);
	
	exports['default'] = Demo4;
	module.exports = exports['default'];

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _beeButton = __webpack_require__(72);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeForm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bee-form\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _beeForm2 = _interopRequireDefault(_beeForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } // /**
	//  *
	//  * @title 多语言 Input 组件
	//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态
	//  * 绿色代表 当前语种
	//  * 预览状态
	//  */
	
	var Demo5 = function (_Component) {
	    _inherits(Demo5, _Component);
	
	    function Demo5(props) {
	        _classCallCheck(this, Demo5);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onOk = function (localeList) {
	            console.log(localeList);
	        };
	
	        _this.onClick = function (key) {
	            _this.setState({
	                locale: key,
	                localeList: _this.state.localeListAll[key]
	            });
	        };
	
	        _this.changeStatus = function (key) {
	            _this.setState({
	                status: key
	            });
	        };
	
	        _this.onChange = function (localeList, localeValue) {
	            console.log(localeList);
	            console.log(localeValue);
	        };
	
	        _this.state = {
	            sysLocale: "en_US", //默认语种
	            locale: "zh_CN", //当前语种
	            status: "",
	            required: true,
	            localeListAll: {
	                "zh_CN": {
	                    "zh_CN": { "label": "简体中文", "value": "" },
	                    "en_US": { "label": "英文", "value": "" },
	                    "zh_TW": { "label": "繁体中文", "value": "" },
	                    "fr_FR": { "label": "法语", "value": "" }
	                },
	                "en_US": {
	                    "zh_CN": { "label": "Simplified Chinese", "value": "" },
	                    "en_US": { "label": "English", "value": "" },
	                    "zh_TW": { "label": "traditional Chinese", "value": "" },
	                    "fr_FR": { "label": "French", "value": "" }
	                },
	                "zh_TW": {
	                    "zh_CN": { "label": "簡體中文", "value": "" },
	                    "en_US": { "label": "英文", "value": "" },
	                    "zh_TW": { "label": "繁體中文", "value": "" },
	                    "fr_FR": { "label": "法語", "value": "" }
	                },
	                "fr_FR": {
	                    "zh_CN": { "label": "Chinois simplifié", "value": "" },
	                    "en_US": { "label": "Anglais", "value": "" },
	                    "zh_TW": { "label": "Chinois traditionnel", "value": "" },
	                    "fr_FR": { "label": "Français", "value": "" }
	                }
	
	            },
	            localeList: {},
	            localeJson: {
	                "zh_CN": "简体中文",
	                "en_US": "英文",
	                "zh_TW": "繁体中文",
	                "fr_FR": "法语"
	            }
	        };
	        _this.save = _this.save.bind(_this);
	        return _this;
	    }
	
	    Demo5.prototype.componentDidMount = function componentDidMount() {
	        this.setState({
	            localeList: {
	                "zh_CN": { "label": "简体中文", "value": "" },
	                "en_US": { "label": "英文", "value": "" },
	                "zh_TW": { "label": "繁体中文", "value": "" }
	                //   {
	                //     "zh_CN":{"label":"简体中文","value":"","errorMsg":"不能为空"},
	                //     "en_US":{"label":"英文","value":"","errorMsg":"不能为空"},
	                //     "zh_TW":{"label":"繁体中文","value":"","errorMsg":"不能为空"},
	                //     "fr_FR":{"label":"法语","value":"","errorMsg":"不能为空"}
	                // }
	
	            } });
	        // this.setState({
	        //     locale: [
	        //         {
	        //             locale:"zh_CN",label:"中文",value:""
	        //         },
	        //         {
	        //             locale:"en_US",label:"英文",value:""
	        //         },
	        //         {
	        //             locale:"zh_TW",label:"台湾",value:""
	        //         }
	        //     ]
	        // })
	    };
	
	    Demo5.prototype.save = function save(e) {
	        e.preventDefault();
	        this.props.form.validateFields(function (err, values) {
	            if (err) {
	                console.log('校验失败', values);
	            } else {
	                console.log('提交成功', values);
	            }
	        });
	    };
	
	    Demo5.prototype.render = function render() {
	        var _this2 = this;
	
	        var _state = this.state,
	            localeList = _state.localeList,
	            sysLocale = _state.sysLocale,
	            locale = _state.locale,
	            status = _state.status,
	            localeJson = _state.localeJson,
	            required = _state.required;
	        // let modalLocale = {
	        //   'fr_FR':{
	        //     'title':'Multilingual établir12',
	        //     'okName':'conservation12',
	        //     'cancelName':'supprimer12',
	        //     'localeFlag':'1fasf'
	        //   }
	        // }
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'btn' },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_CN");
	                        }, colors: locale == 'zh_CN' ? 'success' : null },
	                    '[\u7B80\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("en_US");
	                        }, colors: locale == 'en_US' ? 'success' : null },
	                    '[\u82F1\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_TW");
	                        }, colors: locale == 'zh_TW' ? 'success' : null },
	                    '[\u7E41\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("fr_FR");
	                        }, colors: locale == 'fr_FR' ? 'success' : null },
	                    '[\u6CD5\u8BED]'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u7CFB\u7EDF\u8BED\u79CD\uFF1A',
	                    localeJson[sysLocale]
	                ),
	                _react2['default'].createElement('br', null)
	            ),
	            '\u540D\u79F0\uFF1A',
	            _react2['default'].createElement(_index2['default'], {
	                inputId: 'username',
	                form: this.props.form,
	                localeList: localeList,
	                sysLocale: sysLocale,
	                onOk: this.onOk,
	                locale: locale,
	                status: status,
	                onChange: this.onChange,
	                required: required
	            }),
	            _react2['default'].createElement(
	                _beeButton2['default'],
	                { onClick: this.save },
	                '\u4FDD\u5B58'
	            )
	        );
	    };
	
	    return Demo5;
	}(_react.Component);
	
	exports['default'] = _beeForm2['default'].createForm()(Demo5);
	module.exports = exports['default'];

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(69);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _beeButton = __webpack_require__(72);
	
	var _beeButton2 = _interopRequireDefault(_beeButton);
	
	var _beeForm = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"bee-form\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	
	var _beeForm2 = _interopRequireDefault(_beeForm);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 多语言 Input 组件 录入时是popconfirm 形式
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 绿色代表 当前语种
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * 预览状态
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var Demo6 = function (_Component) {
	    _inherits(Demo6, _Component);
	
	    function Demo6(props) {
	        _classCallCheck(this, Demo6);
	
	        var _this = _possibleConstructorReturn(this, _Component.call(this, props));
	
	        _this.onOk = function (localeList) {
	            console.log(localeList);
	        };
	
	        _this.onClick = function (key) {
	            _this.setState({
	                locale: key,
	                localeList: _this.state.localeListAll[key]
	            });
	        };
	
	        _this.changeStatus = function (key) {
	            _this.setState({
	                status: key
	            });
	        };
	
	        _this.onChange = function (localeList, localeValue) {
	            console.log(localeList);
	            console.log(localeValue);
	        };
	
	        _this.state = {
	            sysLocale: "en_US", //默认语种
	            locale: "zh_CN", //当前语种
	            status: "",
	            required: true,
	            localeListAll: {
	                "zh_CN": {
	                    "zh_CN": { "label": "简体中文", "value": "" },
	                    "en_US": { "label": "英文", "value": "" },
	                    "zh_TW": { "label": "繁体中文", "value": "" },
	                    "fr_FR": { "label": "法语", "value": "" }
	                },
	                "en_US": {
	                    "zh_CN": { "label": "Simplified Chinese", "value": "" },
	                    "en_US": { "label": "English", "value": "" },
	                    "zh_TW": { "label": "traditional Chinese", "value": "" },
	                    "fr_FR": { "label": "French", "value": "" }
	                },
	                "zh_TW": {
	                    "zh_CN": { "label": "簡體中文", "value": "" },
	                    "en_US": { "label": "英文", "value": "" },
	                    "zh_TW": { "label": "繁體中文", "value": "" },
	                    "fr_FR": { "label": "法語", "value": "" }
	                },
	                "fr_FR": {
	                    "zh_CN": { "label": "Chinois simplifié", "value": "" },
	                    "en_US": { "label": "Anglais", "value": "" },
	                    "zh_TW": { "label": "Chinois traditionnel", "value": "" },
	                    "fr_FR": { "label": "Français", "value": "" }
	                }
	
	            },
	            localeList: {},
	            localeJson: {
	                "zh_CN": "简体中文",
	                "en_US": "英文",
	                "zh_TW": "繁体中文",
	                "fr_FR": "法语"
	            }
	        };
	        _this.save = _this.save.bind(_this);
	        return _this;
	    }
	
	    Demo6.prototype.componentDidMount = function componentDidMount() {
	        this.setState({
	            localeList: {
	                "zh_CN": { "label": "简体中文", "value": "" },
	                "en_US": { "label": "英文", "value": "" },
	                "zh_TW": { "label": "繁体中文", "value": "" }
	                //   {
	                //     "zh_CN":{"label":"简体中文","value":"","errorMsg":"不能为空"},
	                //     "en_US":{"label":"英文","value":"","errorMsg":"不能为空"},
	                //     "zh_TW":{"label":"繁体中文","value":"","errorMsg":"不能为空"},
	                //     "fr_FR":{"label":"法语","value":"","errorMsg":"不能为空"}
	                // }
	
	            } });
	        // this.setState({
	        //     locale: [
	        //         {
	        //             locale:"zh_CN",label:"中文",value:""
	        //         },
	        //         {
	        //             locale:"en_US",label:"英文",value:""
	        //         },
	        //         {
	        //             locale:"zh_TW",label:"台湾",value:""
	        //         }
	        //     ]
	        // })
	    };
	
	    Demo6.prototype.save = function save(e) {
	        e.preventDefault();
	        this.props.form.validateFields(function (err, values) {
	            if (err) {
	                console.log('校验失败', values);
	            } else {
	                console.log('提交成功', values);
	            }
	        });
	    };
	
	    Demo6.prototype.render = function render() {
	        var _this2 = this;
	
	        var _state = this.state,
	            localeList = _state.localeList,
	            sysLocale = _state.sysLocale,
	            locale = _state.locale,
	            status = _state.status,
	            localeJson = _state.localeJson,
	            required = _state.required;
	        // let modalLocale = {
	        //   'fr_FR':{
	        //     'title':'Multilingual établir12',
	        //     'okName':'conservation12',
	        //     'cancelName':'supprimer12',
	        //     'localeFlag':'1fasf'
	        //   }
	        // }
	
	        return _react2['default'].createElement(
	            'div',
	            { className: 'demoPadding' },
	            _react2['default'].createElement(
	                'div',
	                { className: 'btn' },
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_CN");
	                        }, colors: locale == 'zh_CN' ? 'success' : null },
	                    '[\u7B80\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("en_US");
	                        }, colors: locale == 'en_US' ? 'success' : null },
	                    '[\u82F1\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("zh_TW");
	                        }, colors: locale == 'zh_TW' ? 'success' : null },
	                    '[\u7E41\u4F53\u4E2D\u6587]'
	                ),
	                _react2['default'].createElement(
	                    _beeButton2['default'],
	                    { onClick: function onClick() {
	                            _this2.onClick("fr_FR");
	                        }, colors: locale == 'fr_FR' ? 'success' : null },
	                    '[\u6CD5\u8BED]'
	                )
	            ),
	            _react2['default'].createElement(
	                'div',
	                null,
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u7CFB\u7EDF\u8BED\u79CD\uFF1A',
	                    localeJson[sysLocale]
	                ),
	                _react2['default'].createElement('br', null),
	                _react2['default'].createElement(
	                    'span',
	                    { style: { fontFize: 18 } },
	                    '\u5F53\u524D\u8BED\u79CD\uFF1A',
	                    localeJson[locale]
	                ),
	                _react2['default'].createElement('br', null)
	            ),
	            '\u540D\u79F0\uFF1A',
	            _react2['default'].createElement(_index2['default'], {
	                inputId: 'username',
	                form: this.props.form,
	                localeList: localeList,
	                sysLocale: sysLocale,
	                onOk: this.onOk,
	                locale: locale,
	                status: status,
	                onChange: this.onChange,
	                required: required,
	                isPopConfirm: true,
	                isShowNoneLeftLable: true
	            }),
	            _react2['default'].createElement(
	                _beeButton2['default'],
	                { onClick: this.save },
	                '\u4FDD\u5B58'
	            )
	        );
	    };
	
	    return Demo6;
	}(_react.Component);
	
	exports['default'] = _beeForm2['default'].createForm()(Demo6);
	module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map