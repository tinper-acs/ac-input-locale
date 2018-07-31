/**
 *
 * @title 多语言 Input 组件
 * @description 多语言 Input 组件 简单应用
 *
 */

import React, { Component } from 'react';
import AcInputLocale from '../../src/index';

 class Demo1 extends Component {

    constructor(props){
        super(props)
        this.state={
            locale:[
                    {
                        locale:"zh-cn",label:"中文",value:""
                    },
                    {
                        locale:"zh-en",label:"英文",value:"aaa"
                    },
                    {
                        locale:"zh-tw",label:"台湾",value:""
                    }
                ]
        }
    }
 
    onSave=(localeList)=>{
        this.setState({
            localeList
        })
    }

    render () {
        let {locale} = this.state;
        return (
            <div className="demoPadding">
                <AcInputLocale colors="brand" locale="zh-en"  localeList={locale}  onSave={this.onSave}></AcInputLocale> 
            </div>
        )
    }
}

export default Demo1;
