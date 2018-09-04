
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
var DemoArray = [{"example":<Demo1 />,"title":" 多语言 Input 组件","code":"/**\n *\n * @title 多语言 Input 组件\n * @description 多语言 Input 组件 简单应用\n *\n */\n\nimport React, { Component } from 'react';\nimport AcInputLocale from '../../src/index.js';\nimport Button from 'bee-button';\n\n class Demo1 extends Component {\n\n    constructor(props){\n        super(props)\n        this.state={\n            sysLocale:\"zh-en\",\n            locale:[\n                    {\n                        locale:\"zh-cn\",label:\"中文\",value:\"\"\n                    },\n                    {\n                        locale:\"zh-en\",label:\"英文\",value:\"english\"\n                    },\n                    {\n                        locale:\"zh-tw\",label:\"台湾\",value:\"\"\n                    }\n                ]\n        }\n    }\n\n    componentDidMount() {\n        this.setState({\n            locale: [\n                {\n                    locale:\"zh-cn\",label:\"中文\",value:\"英语\"\n                },\n                {\n                    locale:\"zh-en\",label:\"英文\",value:\"english2\"\n                },\n                {\n                    locale:\"zh-tw\",label:\"台湾\",value:\"yingyu\"\n                }\n            ]\n        })\n    }\n \n    onSave=(localeList)=>{\n        this.setState({\n            localeList\n        })\n    }\n\n    onClick = (key)=>{\n        this.setState({\n            sysLocale:key\n        })\n    }\n\n    render () {\n        let {locale,sysLocale} = this.state;\n        return (\n            <div className=\"demoPadding\">\n                <div className=\"btn\">\n                    <Button onClick={()=>{this.onClick(\"zh-tw\")}}>[台湾]</Button>\n                    <Button onClick={()=>{this.onClick(\"zh-en\")}}>[英语]</Button>\n                    <Button onClick={()=>{this.onClick(\"zh-cn\")}}>[中文]</Button>\n                </div>\n                <AcInputLocale colors=\"brand\" locale={sysLocale}  localeList={locale}  onSave={this.onSave}></AcInputLocale> \n            </div>\n        )\n    }\n}\n\n\n","desc":" 多语言 Input 组件 简单应用"}]


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

export default class DemoGroup extends Component {
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

