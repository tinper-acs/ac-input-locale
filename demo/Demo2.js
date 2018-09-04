/**
 *
 * @title 多语言 Input 组件
 * @description 多语言 Input 组件 一个页面多个input
 *
 */

import React, { Component } from 'react';
import AcInputLocale from '../src';

 class Demo2 extends Component {

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
                ],
                locale2:[
                    {
                        locale:"zh-cn",label:"中文",value:""
                    },
                    {
                        locale:"zh-en",label:"英文",value:"123"
                    },
                    {
                        locale:"zh-tw",label:"台湾",value:"456"
                    }
                ]
        }
    }
 
    onSave=(key,localeList)=>{
        this.setState({
            [key]:localeList
        })
    }

    render () {
        let {locale,locale2} = this.state;
        return (
            <div className="demoPadding">
                <AcInputLocale className="input1" locale="zh-en"  localeList={locale}  onSave={(data)=>{this.onSave("locale",data)}}></AcInputLocale> 

                <AcInputLocale className="input2" locale="zh-tw"  localeList={locale2}  onSave={(data)=>{this.onSave("locale1",data)}} ></AcInputLocale> 
            </div>
        )
    }
}

export default Demo2;
