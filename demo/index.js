
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from 'bee-button';
import './demo.scss';
import '../static/demo/atom-one-dark.css'
const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


import Demo1 from "./demolist/Demo1";
var DemoArray = [{"example":<Demo1 />,"title":" 多语言 Input 组件","code":"// /**\n//  *\n//  * @title 多语言 Input 组件\n//  * @description 多语言 Input 组件 简单应用\n//  * 绿色代表 当前语种\n//  *\n//  */\n\nimport React, { Component } from 'react';\nimport AcInputLocale from '../../src/index.js';\nimport Button from 'bee-button';\n\n class Demo1 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"zh-en\",  //默认语种\n            locale:\"zh-en\",     //当前语种\n            status:\"preview\",\n            localeList: [\n              {\n                locale:\"zh-cn\",label:\"简体中文\",value:\"苹果\"\n              },\n              {\n                locale:\"zh-en\",label:\"英文\",value:\"apple\"\n              },\n              {\n                locale:\"zh-tw\",label:\"繁体中文\",value:\"平锅\"\n              },\n              {\n                locale:\"zh-fa\",label:\"法语\",value:\"frenchapple\"\n              }\n            ],\n            localeJson:{\n              \"zh-cn\":\"简体中文\",\n              \"zh-en\":\"英文\",\n              \"zh-tw\":\"繁体中文\",\n              \"zh-fa\":\"法语\"\n            }\n        }\n    }\n\n    componentDidMount() {\n        // this.setState({\n        //     locale: [\n        //         {\n        //             locale:\"zh-cn\",label:\"中文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh-en\",label:\"英文\",value:\"\"\n        //         },\n        //         {\n        //             locale:\"zh-tw\",label:\"台湾\",value:\"\"\n        //         }\n        //     ]\n        // })\n    }\n\n    onSave=(localeList)=>{\n      console.log('localeList',localeList)\n        this.setState({\n            localeList\n        })\n    }\n\n    onClick = (key)=>{\n        this.setState({\n          locale:key\n        })\n    }\n    changeStatus=(key)=>{\n      this.setState({\n        status:key\n      })\n    }\n\n    render () {\n        let {localeList,sysLocale,locale,status,localeJson} = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                  <Button onClick={()=>{this.onClick(\"zh-cn\")}} colors={locale=='zh-cn'?'success':null}>[简体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh-en\")}} colors={locale=='zh-en'?'success':null}>[英文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh-tw\")}} colors={locale=='zh-tw'?'success':null}>[繁体中文]</Button>\n                  <Button onClick={()=>{this.onClick(\"zh-fa\")}} colors={locale=='zh-fa'?'success':null}>[法语]</Button>\n                </div>\n                <div>\n                  <span style={{fontFize:18}}>\n                    系统语种：{localeJson[sysLocale]}\n                  </span>\n                  <br/>\n                  <span>\n\n                    <div className=\"btn\">\n                      <span style={{width: '100px',lineHeight: '45px'}}>\n                      当前状态</span>\n                      <Button onClick={()=>{this.changeStatus(\"preview\")}} colors={status=='preview'?'success':null}>[预览]</Button>\n                      <Button onClick={()=>{this.changeStatus(\"editor\")}} colors={status=='editor'?'success':null}>[编辑]</Button>\n                    </div>\n\n                  </span>\n                </div>\n                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onSave={this.onSave} locale={locale} status={status}></AcInputLocale>\n            </div>\n        )\n    }\n}\n\n\n","desc":" 多语言 Input 组件 简单应用"}]


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
                    <pre><code className="hljs javascript">{ code }</code></pre>
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
