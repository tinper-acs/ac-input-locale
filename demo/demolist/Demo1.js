// /**
//  *
//  * @title 多语言 Input 组件
//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 包含预览状态和编辑状态切换.当前语种对应的字段内容为空时，显示默认语种内容。
//  *
//  */

import React, { Component } from 'react';
import AcInputLocale from '../../src/index.js';
import Button from 'bee-button';

 class Demo1 extends Component {
    constructor(props){
        super(props)
        this.state={
            sysLocale:"en_US",  //默认语种
            locale:"en_US",     //当前语种
            status:"preview",
            localeListAll: {
              "zh_CN":{
                  "zh_CN":{"label":"简体中文","value":""},
                  "en_US":{"label":"英文","value":""},
                  "zh_TW":{"label":"繁体中文","value":""},
                  "fr_FR":{"label":"法语","value":""}
              },
              "en_US":{
                  "zh_CN":{"label":"Simplified Chinese","value":""},
                  "en_US":{"label":"English","value":""},
                  "zh_TW":{"label":"traditional Chinese","value":""},
                  "fr_FR":{"label":"French","value":""}
              },
              "zh_TW":{
                  "zh_CN":{"label":"簡體中文","value":""},
                  "en_US":{"label":"英文","value":""},
                  "zh_TW":{"label":"繁體中文","value":""},
                  "fr_FR":{"label":"法語","value":""}
              },
              "fr_FR":{
                  "zh_CN":{"label":"Chinois simplifié","value":""},
                  "en_US":{"label":"Anglais","value":""},
                  "zh_TW":{"label":"Chinois traditionnel","value":""},
                  "fr_FR":{"label":"Français","value":""}
              }

          },
          localeList:{},
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

        this.setState({
          locale:"zh_CN",
          localeList:{
            "zh_CN":{"label":"简体中文","value":""},
            "en_US":{"label":"英文","value":""},
            "zh_TW":{"label":"繁体中文","value":""},
            "fr_FR":{"label":"法语","value":""}
          }
        })
    }

    onOk=(localeList)=>{
      // this.setState({
      //   localeList
      // })
      console.log(localeList)
    }

    onClick = (key)=>{
        this.setState({
          locale:key,
          localeList:this.state.localeListAll[key]
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
        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;
        console.log(localeList,sysLocale,locale,status,localeJson)
        // let modalLocale = {
        //   'fr_FR':{
        //     'title':'Multilingual établir12',
        //     'okName':'conservation12',
        //     'cancelName':'supprimer12',
        //     'localeFlag':'1fasf'
        //   }
        // }
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
                  <span>
                    <div className="btn">
                      <span style={{width: '100px',lineHeight: '45px'}}>
                      当前状态</span>
                      <Button onClick={()=>{this.changeStatus("preview")}} colors={status=='preview'?'success':null}>[预览]</Button>
                      <Button onClick={()=>{this.changeStatus("editor")}} colors={status=='editor'?'success':null}>[编辑]</Button>
                    </div>

                  </span>
                </div>
                名称：<AcInputLocale localeList={localeList} sysLocale={sysLocale} onOk={this.onOk} locale={locale} status={status} onChange={this.onChange}  ></AcInputLocale>
            </div>
        )
    }
}

export default Demo1;
