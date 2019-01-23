
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
import '../static/demo/atom-one-dark.css'

const pkg = require('../package.json')
console.log('pkg.name', pkg.name)

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态\n//  * 绿色代表 当前语种\n//  * 预览状态\n//  */\nimport React, { Component } from 'react';\nimport AcInputLocale from '../../src/index.js';\nimport Button from 'bee-button';\nimport Form from 'bee-form';\nclass Demo1 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"en_US\",  //默认语种\n            locale:\"zh_CN\",     //当前语种\n            status:\"\",\n            required:true,\n            localeListAll: {\n              \"zh_CN\":{\n                  \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n                  \"fr_FR\":{\"label\":\"法语\",\"value\":\"\" }\n              },\n              \"en_US\":{\n                  \"zh_CN\":{\"label\":\"Simplified Chinese\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"English\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"traditional Chinese\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"French\",\"value\":\"\" }\n              },\n              \"zh_TW\":{\n                  \"zh_CN\":{\"label\":\"簡體中文\",\"value\":\"\"},\n                  \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"繁體中文\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"法語\",\"value\":\"\",}\n              },\n              \"fr_FR\":{\n                  \"zh_CN\":{\"label\":\"Chinois simplifié\",\"value\":\"\" },\n                  \"en_US\":{\"label\":\"Anglais\",\"value\":\"\" },\n                  \"zh_TW\":{\"label\":\"Chinois traditionnel\",\"value\":\"\" },\n                  \"fr_FR\":{\"label\":\"Français\",\"value\":\"\" }\n              }\n\n          },\n            localeList: {},\n            localeJson:{\n              \"zh_CN\":\"简体中文\",\n              \"en_US\":\"英文\",\n              \"zh_TW\":\"繁体中文\",\n              \"fr_FR\":\"法语\"\n            }\n        }\n        this.save = this.save.bind(this)\n    }\n\n    componentDidMount() {\n      this.setState({\n        localeList:{\n          \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\" },\n          \"en_US\":{\"label\":\"英文\",\"value\":\"\" },\n          \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\"},\n        }\n        //   {\n        //     \"zh_CN\":{\"label\":\"简体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"en_US\":{\"label\":\"英文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"zh_TW\":{\"label\":\"繁体中文\",\"value\":\"\",\"errorMsg\":\"不能为空\"},\n        //     \"fr_FR\":{\"label\":\"法语\",\"value\":\"\",\"errorMsg\":\"不能为空\"}\n        // }\n\n      }\n      );\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh_CN\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"en_US\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh_TW\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n    }\n\n    onOk=(localeList)=>{\n      console.log(localeList)\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key,\n          localeList:this.state.localeListAll[key]\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    onChange = (localeList,localeValue) => {\n      console.log(localeList)\n      console.log(localeValue)\n    }\n\n    save(e) {\n      e.preventDefault();\n      this.props.form.validateFields((err, values) => {\n          if (err) {\n              console.log('校验失败', values);\n          } else {\n              console.log('提交成功', values)\n\n          }\n      });\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;\n        // let modalLocale = {\n        //   'fr_FR':{\n        //     'title':'Multilingual établir12',\n        //     'okName':'conservation12',\n        //     'cancelName':'supprimer12',\n        //     'localeFlag':'1fasf'\n        //   }\n        // }\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh_CN\")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"en_US\")}} colors={locale=='en_US'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh_TW\")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"fr_FR\")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                </div>\n                名称：\n                <AcInputLocale\n                  inputId={'username'}\n                  form={this.props.form}\n                  localeList={localeList}\n                  sysLocale={sysLocale}\n                  onOk={this.onOk}\n                  locale={locale}\n                  status={status}\n                  onChange={this.onChange}\n                  required={required}\n                >\n                </AcInputLocale>\n                <Button onClick={this.save}>保存</Button>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";
        console.log('process.env.NODE_ENV===', process.env.NODE_ENV==='development')
        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ process.env.NODE_ENV==='development'?code:code.replace('../../src/index.js',pkg.name) }</code></pre>
                </Panel>
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('root'));
