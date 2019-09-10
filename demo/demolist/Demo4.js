// /**
//  *
//  * @title 多语言 Input 组件
//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 改变默认模态框中文字说明
//  * 绿色代表 当前语种
//  * 编辑状态 改变默认模态框中文字说明
//  */

import React, { Component } from 'react';
import AcInputLocale from '../../src/index.js';
import Button from 'bee-button';

 class Demo4 extends Component {

    constructor(props){
        super(props)
        this.state={
            sysLocale:"en_US",  //默认语种
            locale:"en_US",     //当前语种
            status:"editor",
            localeList: {
              "zh_CN":{label:"简体中文",value:"苹果"},
              "en_US":{label:"英文",value:"apple"},
              "zh_TW":{label:"繁体中文",value:"蘋果"},
              "fr_FR":{label:"法语",value:"frenchapple"}
            },
            localeJson:{
              "zh_CN":"简体中文",
              "en_US":"英文",
              "zh_TW":"繁体中文",
              "fr_FR":"法语"
            }
        }
    }

    componentDidMount() {
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
    }

    onOk=(localeList)=>{
      // this.setState({
      //   localeList
      // })
      console.log(localeList)
    }

    onClick = (key)=>{
        this.setState({
          locale:key
        })
    }
    changeStatus=(key)=>{
      this.setState({
        status:key
      })
    }

    onChange = (localeList,localeValue) => {
      console.log(localeList)
      console.log(localeValue)
    }

    render () {
        let {localeList,sysLocale,locale,status,localeJson} = this.state;
        let modalLocale = {
          'fr_FR':{
            'title':'Multilingual établir12',
            'okName':'conservation12',
            'cancelName':'supprimer12',
            'localeFlag':'1fasf'
          }
        }
        return (
            <div className="demoPadding">
                <div className="btn">
                  <Button onClick={()=>{this.onClick("zh_CN")}} colors={locale=='zh_CN'?'success':null}>[简体中文]</Button>
                  <Button onClick={()=>{this.onClick("en_US")}} colors={locale=='en_US'?'success':null}>[英文]</Button>
                  <Button onClick={()=>{this.onClick("zh_TW")}} colors={locale=='zh_TW'?'success':null}>[繁体中文]</Button>
                  <Button onClick={()=>{this.onClick("fr_FR")}} colors={locale=='fr_FR'?'success':null}>[法语]</Button>
                </div>
                <div>
                  <span style={{fontFize:18}}>
                    系统语种：{localeJson[sysLocale]}
                  </span>
                  <br/>
                </div>
                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange} modalLocale={modalLocale}></AcInputLocale>
            </div>
        )
    }
}

export default Demo4;
