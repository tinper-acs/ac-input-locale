// /**
//  *
//  * @title 多语言 Input 组件
//  * @description 多语言 Input 组件 简单应用 绿色代表 当前选中 预览状态
//  * 绿色代表 当前语种
//  * 预览状态
//  */

import React, { Component } from 'react';
import AcInputLocale from '../../src/index.js';
import { Button, Form } from '@tinper/next-ui';
 class Demo5 extends Component {

    constructor(props){
        super(props)
        this.state={
            sysLocale:"en_US",  //默认语种
            locale:"zh_CN",     //当前语种
            status:"",
            required:true,
            localeListAll: {
              "zh_CN":{
                  "zh_CN":{"label":"简体中文","value":"" },
                  "en_US":{"label":"英文","value":"" },
                  "zh_TW":{"label":"繁体中文","value":""},
                  "fr_FR":{"label":"法语","value":"" }
              },
              "en_US":{
                  "zh_CN":{"label":"Simplified Chinese","value":"" },
                  "en_US":{"label":"English","value":"" },
                  "zh_TW":{"label":"traditional Chinese","value":"" },
                  "fr_FR":{"label":"French","value":"" }
              },
              "zh_TW":{
                  "zh_CN":{"label":"簡體中文","value":""},
                  "en_US":{"label":"英文","value":"" },
                  "zh_TW":{"label":"繁體中文","value":"" },
                  "fr_FR":{"label":"法語","value":"",}
              },
              "fr_FR":{
                  "zh_CN":{"label":"Chinois simplifié","value":"" },
                  "en_US":{"label":"Anglais","value":"" },
                  "zh_TW":{"label":"Chinois traditionnel","value":"" },
                  "fr_FR":{"label":"Français","value":"" }
              }
              
          },
            localeList: {},
            localeJson:{
              "zh_CN":"简体中文",
              "en_US":"英文",
              "zh_TW":"繁体中文",
              "fr_FR":"法语"
            }
        }
        this.save = this.save.bind(this)
    }

    componentDidMount() {
      this.setState({
        localeList:{
          "zh_CN":{"label":"简体中文","value":"椰子",props:{maxLength: 10,onBlur: (e,v) => {console.log(e,v)}},rules:[{pattern: /^[\u4e00-\u9fa5]+$/, message: '简体中文格式错误'}, {required: true, message: '请输入内容'}],validateTrigger:'onChange' },
          "en_US":{"label":"英文","value":"",props:{maxLength: 10, onBlur: (e,v) => {console.log(e,v)}},rules:[{pattern: /^[a-zA-Z0-9]+$/, message: '英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误英文格式错误'}] },
          "zh_TW":{"label":"繁体中文","value":"",props:{maxLength: 10,onBlur: (e,v) => {console.log(e,v)}, fieldid: 'ac-input-tw'},rules:[{pattern: /^[\u4e00-\u9fa5]+$/, message: '繁体中文格式错误繁体中文格式错误繁体中文格式错误繁体中文格式错误繁体中文格式错误繁体中文格式错误'}],validateTrigger:'onChange'},
        }
        //   {
        //     "zh_CN":{"label":"简体中文","value":"","errorMsg":"不能为空"},
        //     "en_US":{"label":"英文","value":"","errorMsg":"不能为空"},
        //     "zh_TW":{"label":"繁体中文","value":"","errorMsg":"不能为空"},
        //     "fr_FR":{"label":"法语","value":"","errorMsg":"不能为空"}
        // }
        
      }
      );
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
      const rules = {pattern: /^[a-zA-Z0-9]+$/, message: '用户名格式错误'};
      console.log(rules)
    }

    onOk=(localeList)=>{
      console.log('oK',localeList)
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

    blur = (e,v) => {
      console.log(e)
      console.log(v)
      console.log('blur')
    }

   focus = (e) => {
     console.log(e)
     console.log('focus')
   }

   onPressEnter = e => {
     console.log(e)
     console.log('onPressEnter')
   }

   onKeyDown = e => {
     console.log(e)
     console.log('onKeyDown')
   }

   onCancel = () => {
     console.log('onCancel')
   }

    save(e) {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
          if (err) {
              console.log('校验失败', values);
          } else {
              console.log('提交成功', values)

          }
      });
    }

    render () {
        let {localeList,sysLocale,locale,status,localeJson,required} = this.state;
        // let modalLocale = {
        //   'fr_FR':{
        //     'title':'Multilingual établir12',
        //     'okName':'conservation12',
        //     'cancelName':'supprimer12',
        //     'localeFlag':'1fasf'
        //   }
        // }
        return (
            <div className="demoPadding demo5">
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
                名称：
                <AcInputLocale
                  inputId={'username'}
                  form={this.props.form}
                  localeList={localeList}
                  sysLocale={sysLocale}
                  onOk={this.onOk}
                  locale={locale}
                  status={status}
                  onChange={this.onChange}
                  required={required}
                  onBlur={this.blur}
                  onFocus={this.focus}
                  onPressEnter={this.onPressEnter}
                  onKeyDown={this.onKeyDown}
                  onCancel={this.onCancel}
                  fieldid = {'ac-input'}
                  modalProps={
                      {
                          getPopupContainer: () => { return document.querySelector('.demo5')},
                          fieldid: 'modal_fieldid'
                      }
                  }
                >
                </AcInputLocale>
                <Button onClick={this.save}>保存</Button>
            </div>
        )
    }
}

export default Form.createForm()(Demo5)
