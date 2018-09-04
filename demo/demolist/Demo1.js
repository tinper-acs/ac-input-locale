/**
 *
 * @title 多语言 Input 组件
 * @description 多语言 Input 组件 简单应用
 *
 */

import React, { Component } from 'react';
import AcInputLocale from '../../src/index.js';
import Button from 'bee-button';

 class Demo1 extends Component {

    constructor(props){
        super(props)
        this.state={
            sysLocale:"zh-en",
            locale:[
                    {
                        locale:"zh-cn",label:"中文",value:""
                    },
                    {
                        locale:"zh-en",label:"英文",value:"english"
                    },
                    {
                        locale:"zh-tw",label:"台湾",value:""
                    }
                ]
        }
    }

    componentDidMount() {
        this.setState({
            locale: [
                {
                    locale:"zh-cn",label:"中文",value:""
                },
                {
                    locale:"zh-en",label:"英文",value:""
                },
                {
                    locale:"zh-tw",label:"台湾",value:""
                }
            ]
        })
    }
 
    onSave=(localeList)=>{
        this.setState({
            localeList
        })
    }

    onClick = (key)=>{
        this.setState({
            sysLocale:key
        })
    }

    render () {
        let {locale,sysLocale} = this.state;
        return (
            <div className="demoPadding">
                <div className="btn">
                    <Button onClick={()=>{this.onClick("zh-tw")}}>[台湾]</Button>
                    <Button onClick={()=>{this.onClick("zh-en")}}>[英语]</Button>
                    <Button onClick={()=>{this.onClick("zh-cn")}}>[中文]</Button>
                </div>
                <AcInputLocale colors="brand" placeholder="aa" locale={sysLocale} localeList={locale}  onSave={this.onSave}></AcInputLocale> 
            </div>
        )
    }
}

export default Demo1;
