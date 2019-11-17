import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Drawer from 'bee-drawer';
import Clipboard from 'bee-clipboard'; 



var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var Demo6 = require("./demolist/Demo6");var DemoArray = [{"example":<Demo1 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 包含预览状态和编辑状态切换.当前语种对应的字段内容为空时，显示默认语种内容。\n//  *\n//  */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\nimport AcInputLocale from 'ac-input-locale-msg/index.js';\n\n class Demo1 extends Component {\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"en_US\",     //当前语种\n            status:\"preview\",\n            localeListAll: {\n              \"zh_CN\":{\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\"},\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\"}\n              },\n              \"en_US\":{\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\"},\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\"}\n              },\n              \"zh_TW\":{\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\"},\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\"}\n              },\n              \"fr_FR\":{\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\"},\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\"}\n              }\n\n          },\n          localeList:{},\n          localeJson:{\n            \"zh_CN\":\"简体中文\",\n            \"en_US\":\"英文\",\n            \"zh_TW\":\"繁体中文\",\n            \"fr_FR\":\"法语\"\n          }\n        }\n    }\n\n    componentDidMount() {\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n\n        this.setState({\n          locale:\"zh_CN\",\n          localeList:{\n            \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\"},\n            \"en_US\":{\"label\":\"英文\",\"value\":\"\"},\n            \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n            \"fr_FR\":{\"label\":\"法语\",\"value\":\"\"}\n          }\n        })\n    }\n\n    onOk=(localeList)=>{\n      // this.setState({\n      //   localeList\n      // })\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key,\n          localeList:this.state.localeListAll[key]\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;\n        // console.log(localeList,sysLocale,locale,status,localeJson)\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                  <span>\n                    <div className=\"btn\">\n                      <span style={{width: '100px',lineHeight: '45px'}}>\n                      当前状态</span>\n                      <Button onClick={()=>{this.changeStatus(\"preview\")}} colors={status=='preview'?'success':null}>[预览]</Button>\n                      <Button onClick={()=>{this.changeStatus(\"editor\")}} colors={status=='editor'?'success':null}>[编辑]</Button>\n                    </div>\n\n                  </span>\n                </div>\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange}  ></AcInputLocale>\n            </div>\n        )\n    }\n}\n\nexport default Demo1;\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 包含预览状态和编辑状态切换.当前语种对应的字段内容为空时，显示默认语种内容。"},{"example":<Demo2 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\n//  * 绿色代表 当前语种\n//  * 预览状态\n//  */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\nimport AcInputLocale from 'ac-input-locale-msg/index.js';\n\n class Demo2 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"en_US\",     //当前语种\n            status:\"preview\",\n            localeList: {\n              \"zh_CN\":{label:\"简体中文\",value:\"苹果\"},\n              \"en_US\":{label:\"英文\",value:\"apple\"},\n              \"zh_TW\":{label:\"繁体中文\",value:\"蘋果\"},\n              \"fr_FR\":{label:\"法语\",value:\"frenchapple\"}\n            },\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            }\n        }\n    }\n\n    componentDidMount() {\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n        // debugger\n        this.setState({\n          locale:\"zh_CN\"\n        })\n    }\n\n    onOk=(localeList)=>{\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson} = this.state;\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                    当前语种：{locale}\n                  </span>\n                  <br/>\n                </div>\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange}></AcInputLocale>\n            </div>\n        )\n    }\n}\n\nexport default Demo2;\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态"},{"example":<Demo3 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 编辑状态\n//  * 绿色代表 当前语种\n//  * 编辑状态\n//  */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\nimport AcInputLocale from 'ac-input-locale-msg/index.js';\n\n class Demo3 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"en_US\",     //当前语种\n            status:\"editor\",\n            localeList: {\n              \"zh_CN\":{label:\"简体中文\",value:\"苹果\"},\n              \"en_US\":{label:\"英文\",value:\"apple\"},\n              \"zh_TW\":{label:\"繁体中文\",value:\"蘋果\"},\n              \"fr_FR\":{label:\"法语\",value:\"frenchapple\"}\n            },\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            },\n            backdrop: false\n        }\n\n    }\n\n    componentDidMount() {\n\n        setTimeout(() => {\n          this.setState({\n            locale:\"zh_CN\"\n          })\n        }, 100)\n    }\n\n    onOk=(localeList)=>{\n      // this.setState({\n      //   localeList\n      // })\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson,backdrop} = this.state;\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n\n                  <br/>\n                  当前语种：{locale}\n                </div>\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} backdrop={backdrop} onChange={this.onChange}></AcInputLocale>\n            </div>\n        )\n    }\n}\n\nexport default Demo3;\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 编辑状态"},{"example":<Demo4 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 改变默认模态框中文字说明\n//  * 绿色代表 当前语种\n//  * 编辑状态 改变默认模态框中文字说明\n//  */\n\nimport React, { Component } from 'react';\nimport { Button } from 'tinper-bee';\nimport AcInputLocale from 'ac-input-locale-msg/index.js';\n\n class Demo4 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"en_US\",     //当前语种\n            status:\"editor\",\n            localeList: {\n              \"zh_CN\":{label:\"简体中文\",value:\"苹果\"},\n              \"en_US\":{label:\"英文\",value:\"apple\"},\n              \"zh_TW\":{label:\"繁体中文\",value:\"蘋果\"},\n              \"fr_FR\":{label:\"法语\",value:\"frenchapple\"}\n            },\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            }\n        }\n    }\n\n    componentDidMount() {\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n    }\n\n    onOk=(localeList)=>{\n      // this.setState({\n      //   localeList\n      // })\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson} = this.state;\n        let modalLocale = {\n          'fr_FR':{\n            'title':'Multilingual établir12',\n            'okName':'conservation12',\n            'cancelName':'supprimer12',\n            'localeFlag':'1fasf'\n          }\n        }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                </div>\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange} modalLocale={modalLocale}></AcInputLocale>\n            </div>\n        )\n    }\n}\n\nexport default Demo4;\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 改变默认模态框中文字说明"},{"example":<Demo5 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\n//  * 绿色代表 当前语种\n//  * 预览状态\n//  */\n\nimport React, { Component } from 'react';\nimport { Form, Button } from 'tinper-bee';\nimport AcInputLocale from 'ac-input-locale-msg/index.js';\n class Demo5 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"zh_CN\",     //当前语种\n            status:\"\",\n            required:true,\n            localeListAll: {\n              \"zh_CN\":{\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\" }\n              },\n              \"en_US\":{\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\" }\n              },\n              \"zh_TW\":{\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\",}\n              },\n              \"fr_FR\":{\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\" }\n              }\n              \n          },\n            localeList: {},\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            }\n        }\n        this.save = this.save.bind(this)\n    }\n\n    componentDidMount() {\n      this.setState({\n        localeList:{\n          \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n          \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n          \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n        }\n        //   {\n        //     \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"en_US\":{\"label\":\"英文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"fr_FR\":{\"label\":\"法语\",\"value\":\"\",\"errorMsg\":\"不能为空\"}\n        // }\n        \n      }\n      );\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n    }\n\n    onOk=(localeList)=>{\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key,\n          localeList:this.state.localeListAll[key]\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    save(e) {\n      e.preventDefault();\n      this.props.form.validateFields((err, values) => {\n          if (err) {\n              console.log('校验失败', values);\n          } else {\n              console.log('提交成功', values)\n\n          }\n      });\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                </div>\n                名称：\n                <AcInputLocale\n                  inputId={'username'}\n                  form={this.props.form}\n                  localeList={localeList}\n                  sysLocale={sysLocale}\n                  onOk={this.onOk}\n                  locale={locale}\n                  status={status}\n                  onChange={this.onChange}\n                  required={required}\n                  modalLocale={{\n                    'zh_CN':{\n                      title:'哈哈哈'\n                    }\n                  }}\n                >\n                </AcInputLocale>\n                <Button onClick={this.save}>保存</Button>\n            </div>\n        )\n    }\n}\n\nexport default Form.createForm()(Demo5)\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态"},{"example":<Demo6 />,"title":" 多语言 Input 组件 录入时是popconfirm 形","code":"/**\n *\n * @title 多语言 Input 组件 录入时是popconfirm 形式\n * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\n * 绿色代表 当前语种\n * 预览状态\n */\nimport React, { Component } from 'react';\nimport { Form, Button } from 'tinper-bee';\nimport AcInputLocale from 'ac-input-locale-msg/index.js';\nclass Demo6 extends Component {\n    constructor(props){\n        super(props)\n        console.log('+++++++++++++++++++++=')\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"zh_CN\",     //当前语种\n            status:\"\",\n            required:true,\n            localeListAll: {\n              \"zh_CN\":{\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\" }\n              },\n              \"en_US\":{\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\" }\n              },\n              \"zh_TW\":{\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\",}\n              },\n              \"fr_FR\":{\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\" }\n              }\n\n          },\n            localeList: {},\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            }\n        }\n        this.save = this.save.bind(this)\n    }\n\n    componentDidMount() {\n      this.setState({\n        localeList:{\n          \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n          \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n          \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n        }\n        //   {\n        //     \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"en_US\":{\"label\":\"英文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"fr_FR\":{\"label\":\"法语\",\"value\":\"\",\"errorMsg\":\"不能为空\"}\n        // }\n\n      }\n      );\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n    }\n\n\n    onOk=(localeList)=>{\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key,\n          localeList:this.state.localeListAll[key]\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    save(e) {\n      e.preventDefault();\n      this.props.form.validateFields((err, values) => {\n          if (err) {\n              console.log('校验失败', values);\n          } else {\n              console.log('提交成功', values)\n          }\n      });\n    }\n\n    render () {\n        let {localeList, sysLocale, locale, status, localeJson, required} = this.state;\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                  <span style={{fontFize:18}}>\n                    当前语种：{localeJson[locale]}\n                  </span>\n                  <br/>\n                </div>\n                名称：\n                <AcInputLocale\n                  isTextear={true}\n                  inputId={'username'}\n                  form={this.props.form}\n                  localeList={localeList}\n                  sysLocale={sysLocale}\n                  onOk={this.onOk}\n                  locale={locale}\n                  status={status}\n                  onChange={this.onChange}\n                  required={required}\n                  isPopConfirm={true}\n                  isShowNoneLeftLable={true}\n                >\n                </AcInputLocale>\n                <Button onClick={this.save}>保存</Button>\n            </div>\n        )\n    }\n}\n\nexport default Form.createForm()(Demo6)\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
    }
    handleClick=()=> {
        this.setState({ open: !this.state.open })
    }
    fCloseDrawer=()=>{
        this.setState({
            open: false
        })
    }

    render () {
        const { title, example, code, desc, scss_code  } = this.props;

        const header = (
            <div>
                <p className='component-title'>{ title }</p>
                <p>{ desc }</p>
                <span className='component-code' onClick={this.handleClick}> 查看源码 <i className='uf uf-arrow-right'/> </span>
            </div>
        );
        return (
            <Col md={12} id={title.trim()} className='component-demo'>
            <Panel header={header}>
                {example}
            </Panel>
           
            <Drawer className='component-drawerc' title={title} show={this.state.open} placement='right' onClose={this.fCloseDrawer}>
            <div className='component-code-copy'> JS代码 
                <Clipboard action="copy" text={code}/>
            </div>
            <pre className="pre-js">
                <code className="hljs javascript">{ code }</code>
            </pre >
            {!!scss_code ?<div className='component-code-copy copy-css'> SCSS代码 
                <Clipboard action="copy" text={scss_code}/>
            </div>:null }
                { !!scss_code ? <pre className="pre-css">
                 <code className="hljs css">{ scss_code }</code>
                 </pre> : null }
            </Drawer>
        </Col>
    )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
            <Row>
            {DemoArray.map((child,index) => {

                return (
            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
    )

    })}
    </Row>
    )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
