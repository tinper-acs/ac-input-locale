
import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button,Label,Col , Row,Popover,Popconfirm } from 'tinper-bee';
import FormControl from './FormControl.js';
import ModalWrap from './modal.js'

import Form from 'bee-form';

const FormItem = Form.FormItem;

const propTypes = {
    className: PropTypes.string,
    status:PropTypes.string,
    onOk:PropTypes.func,//确定按钮钩子函数
    onCancel:PropTypes.func,//取消按钮钩子函数
    locale:PropTypes.string.isRequired, //当前语种
    localeList:PropTypes.object.isRequired, //语种数组
    onChange:PropTypes.func, //文本框改变回掉
    isTextarea:PropTypes.bool, // 是否textarea 默认false
    modalLocale:PropTypes.object,
    backdrop: PropTypes.bool,  //是否弹出遮罩层/遮罩层点击是否触发关闭
    required: PropTypes.bool, // 是否要求当前语种和系统语种必填
    isPopConfirm: PropTypes.bool, // 录入时是否是popconfirm,还是modal的样式
    showIcon:PropTypes.bool
}

const defaultProps = {
    classnames:'',
    status:'preview',
    isTextarea:false,
    backdrop: true,
    required: false,
    isPopConfirm: false,
    showIcon:true
}

const getContent = (localeList) => {
  return Object.keys(localeList).map(localeKey=>(
    <Row key={'preview'+localeKey} className='input-locale-text'>
          <div className='input-locale-text-r'>
            {
              localeList[localeKey].label
            }:
          </div>
        <div className="input-locale-text-l">
            {
              localeList[localeKey].value
            }
        </div>
    </Row>
  ))
}

class AcInputLocale extends Component {
    constructor(props) {
        super(props);
        let {locale, localeList, status, modalLocale, sysLocale, required, isPopConfirm} = props;
        let localeValue = ''
        if (!locale) {
          locale = sysLocale || 'zh_CN'
        }
        Object.keys(localeList).forEach((localeKey)=>{
          if(localeKey === locale) {
            localeValue = localeList[localeKey].value
          }
        })
        let modalLocaleTmp = Object.assign({}, {
          'zh_CN': {
            'title': '多语言设置',
            'okName': '保存',
            'cancelName': '取消',
            'localeFlag': '当前',
            'defaultFlag': '默认',
            'placeholder': '请输入...',
            'errorMsg': '不能为空',
            'currentLang': '当前语种',
            'defaultLang': '默认语种'
          },
          'en_US': {
            'title': 'Language Setting',
            'okName': 'save',
            'cancelName': 'cancel',
            'localeFlag': 'current',
            'defaultFlag': 'default',
            'placeholder': 'please input...',
            'errorMsg': 'Required',
            'currentLang': 'Current language',
            'defaultLang': 'Default language'
          },
          'zh_TW': {
            'title': '多語言設置',
            'okName': '保存',
            'cancelName': '取消',
            'localeFlag': '當前',
            'defaultFlag': '默認',
            'placeholder': '請輸入...',
            'errorMsg': '不能為空',
            'currentLang': '當前語種',
            'defaultLang': '默認語種'
          },
          'fr_FR': {
            'title': 'Programmation Multilingue',
            'okName': 'conservation',
            'cancelName': 'supprimer',
            'localeFlag': 'actuellement',
            'defaultFlag': 'Par défaut',
            'placeholder': 'S’il vous plaît, entrez....',
            'errorMsg': 'Champs obligatoires',
            'currentLang': 'Langue actuelle',
            'defaultLang': 'Langue par défaut'
          }
        }, modalLocale)
        this.state = {
          localeList,
          localeValue,
          sysLocale,
          locale,
          status,
          required,
          showModal: false,
          showPop: false,
          isPopConfirm,
          modalLocale: modalLocaleTmp
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillReceiveProps(nextProps){
      // 语种列表改变，localeValue也要改变
      // 这里的判断是 对象，判断的是对象引用地址是否一样
      if (this.props.localeList !== nextProps.localeList) {
        let localeValue='';
        let {locale, localeList} = nextProps
        Object.keys(localeList).forEach((localeKey) => {
          if (localeKey === locale) {
            localeValue = localeList[localeKey].value
          }
        })
        this.setState({
          localeList:localeList,
          localeValue,
          locale
        })
      }

      // 只改变语种，不改变语种列表
      if (nextProps.locale !== this.props.locale && nextProps.localeList === this.props.localeList) {
        let { locale, sysLocale } = nextProps;

        if (!locale) {
          locale = sysLocale || 'zh_CN'
        }

        let localeValue='';
        Object.keys(nextProps.localeList).forEach((localeKey) => {
          if(localeKey === locale) {
            localeValue = nextProps.localeList[localeKey].value
          }
        })
        this.setState({
          locale,
          localeValue
        })
      }
      // 改变状态
      if(nextProps.status !== this.props.status){
        this.setState({
          status:nextProps.status
        })
      }
    }

    close = () => {
      const { isPopConfirm } = this.state
      isPopConfirm ? this.setState({ showPop: false }) : this.setState({ showModal: false });
    }

    open = (event) => {
      event.stopPropagation();
      let { status, localeList } = this.props;
      if(status === 'preview'){
        return
      }
      this.setState({
        localeList
      })

      const { isPopConfirm } = this.state
      isPopConfirm ? this.setState({ showPop: true }) : this.setState({ showModal: true });
    }

    onOk = () => {
      const { localeList, locale } = this.state
      let localeListProp = this.props.localeList;
      let { inputId } = this.props;
      let localeValue;
      let validatedArray = [];
      Object.keys(localeList).forEach((localeKey) => {
        validatedArray.push(inputId + "_"+ localeKey);
        if(localeKey === locale) {
          localeValue = localeList[localeKey].value
        }
        localeListProp[localeKey] = localeList[localeKey]
      })

      this.setState({
        localeValue
      });

      // 如果有form表单，就校验，否则就不校验
      if (this.props.form) {
         let obj = {};
        obj[this.props.inputId] = localeValue
        this.props.form.validateFields(validatedArray,(err, values) => {
          if (err) {
            console.log('validate failed', values);
            return;
          } else {
            this.props.form.setFieldsValue(obj)
            this.props.onOk && this.props.onOk(localeList);
            this.close()
          }
        });
      } else {
        this.props.onOk && this.props.onOk(localeList);
        this.close()
      }
    }

    onCancel = () => {
      this.close()
    }

    stringTrim = (str) =>{
      return str.replace(/^\s+|\s+$/gm,'');
    }

    //校验处理
    checkValidValue =(rule, value, callback)=>{
      let self = this;
      let { required, localeList, locale, sysLocale } = self.state;
      let currentLanguage = self.state.modalLocale[locale] ? self.state.modalLocale[locale].currentLang : "当前语种";
      let defaultLanguage = self.state.modalLocale[locale] ? self.state.modalLocale[locale].defaultLang : "默认语种";
      let errMessage = self.state.modalLocale[locale] ? self.state.modalLocale[locale].errorMsg : "不能为空";
      if (required) {
        if (!self.stringTrim(localeList[locale].value)) {
          localeList[locale].errorMsg ? callback(localeList[locale].errorMsg) : callback(currentLanguage +" "+ errMessage)
        }
        if (!self.stringTrim(localeList[sysLocale].value)) {
          localeList[sysLocale].errorMsg ? callback(localeList[sysLocale].errorMsg) : callback(defaultLanguage +" "+  errMessage);
        }
      }
      callback();
    }

    //label左侧的渲染
    renderLabelLeft = (localeKey) =>{
      let { localeValue, locale, localeList, status, modalLocale,sysLocale } = this.state
      if(locale === sysLocale){
        if(localeKey === locale){
          return <span className="label-default">({modalLocale[locale].localeFlag+"/"+modalLocale[locale].defaultFlag})</span>
        }
      }else{
        if(localeKey === locale){
          return <span className="label-default">({modalLocale[locale].localeFlag})</span>
        }
        if(localeKey === sysLocale){
          return <span className="label-default">({modalLocale[locale].defaultFlag})</span>
        }
      }
    }
    renderLabelright = (localeKey) =>{
      let { localeValue, locale, localeList, status, modalLocale, sysLocale, required } = this.state
      if(required) {
        if(locale == sysLocale) {
          if(localeKey == locale){
            return <span className="require-star uf uf-mi" > </span>
          }
        } else {
          if (localeKey == locale || localeKey == sysLocale) {
            return <span className="require-star uf uf-mi"> </span>
          }
        }
      }

      return <span className="require-star" ></span>
      
    }

    getPreviewElement (localeValue, defaultValue, localeList) {
      return (
        <div>
            <span className="view-title-content">
              {localeValue || defaultValue}
            </span>          
          {
            this.props.showIcon?
              <Popover
                placement="right"
                content={getContent(localeList)}
                trigger="hover"
                id="right"
              >
                <i className="uf uf-globe"/>
              </Popover>
            :''
          }
        </div>
      )
    }

    getLocaleNoFormElement(localeList, modalLocale, locale) {
      return Object.keys(localeList).map((localeKey)=> {
        return (<div className='edit-panel edit-panel-all' key={localeKey}>
          <FormItem>
            <div className="u-form-item-label">
              <Label title={localeList[localeKey].label}>
                {
                  this.isShowNoneLeftLable ? this.renderLabelLeft(localeKey) : null
                }
                {localeList[localeKey].label}
                {
                   this.renderLabelright(localeKey)
                }
              </Label>
            </div>
            <div style={{'display':'inline-block','width':'calc(100% - 130px)'}}>
              <FormControl
                placeholder={modalLocale[locale].placeholder}
                onChange={(v)=>{
                  localeList = JSON.parse(JSON.stringify(localeList));
                  localeList[localeKey].value=v
                  this.setState({
                    localeList
                  })
                }}
                value={
                  localeList[localeKey].value
                }
              />
            </div>
          </FormItem>
        </div>)
      })
    }
    forceSyncChange=(localeList,value)=>{
      let { inputId,form } = this.props;
      Object.keys(localeList).map(item=>{
        localeList[item].value=value;
        if(form){
          let {setFieldsValue} = form;
          let key = `${inputId}_${item}`;
          let obj = {};
          obj[key]=value;
          setFieldsValue(obj)
        }
        
      })
      return localeList;
    }
    getLocaleFormElement (localeList, modalLocale, locale, getFieldProps, getFieldError) {
      return Object.keys(localeList).map((localeKey)=> {
        return (<div className='edit-panel edit-panel-all' key={localeKey}>
          <FormItem>
            <div className="u-form-item-label">
              <Label title={localeList[localeKey].label}>
                {
                  this.isShowNoneLeftLable ? this.renderLabelLeft(localeKey) : null
                }
                {localeList[localeKey].label}
                {
                  this.renderLabelright(localeKey)
                }
              </Label>
            </div>
            <div style={{'display':'inline-block','width':'calc(100% - 130px)'}}>
              <div>
                <FormControl
                  placeholder={modalLocale[locale].placeholder}
                  {...getFieldProps(this.props.inputId + "_" +localeKey, {
                    validateTrigger: 'onBlur',
                    initialValue: localeList[localeKey].value,
                    rules: [{
                      required: localeList[localeKey].required, message: localeList[localeKey].errorMessage,
                    }],
                    onChange:(v)=>{
                      localeList = JSON.parse(JSON.stringify(localeList));
                      localeList[localeKey].value=v
                      this.setState({
                        localeList
                      })
                    }}
                  ) }
                  onClick={
                    (e) => {
                      e.stopPropagation()
                    }
                  }
                />
                {
                  this.props.showIcon? <div className="input-icon" onClick = { this.open } ></div>:''
                }
               
                {
                  getFieldError(this.props.inputId + "_" +localeKey)?
                  <span className='error uf uf-exc-t'>
                    {getFieldError(this.props.inputId + "_" +localeKey)}
                  </span>:''
                }
                
              </div>
            </div>
          </FormItem>
        </div>)
      })
    }
    render() {
      const self = this;
      const { className, onChange, isTextarea, backdrop, disabled,forceSync } = this.props
      let { localeValue, locale, localeList, status, modalLocale, sysLocale, required, isPopConfirm } = this.state
      let defaultValue;
      if(localeList && localeList[sysLocale] && localeList[sysLocale].value) {
        defaultValue = localeList[sysLocale].value;
      }
      let formControlTypeOption = {}
      isTextarea ? formControlTypeOption = { componentClass: 'textarea' } : null
      let getFieldProps, getFieldError

      if (this.props.form) {
        // model弹窗校验数据加工
        let errMessage = modalLocale[locale] ? modalLocale[locale].errorMsg : "不能为空";
        for(var item in localeList) {
          if(item == locale || item == sysLocale) {
            localeList[item]["required"] = required === true;
            localeList[item]["errorMessage"] = localeList[item]["label"] + " " + errMessage
          } else {
            localeList[item]["required"] = false;
            localeList[item]["errorMessage"] = localeList[item]["label"] + " " + errMessage
          }
        }
        getFieldProps = this.props.form.getFieldProps
        getFieldError = this.props.form.getFieldError

        if (isPopConfirm) {
          return (
            <div className={`ac-input-locale ${className ? className : null}`} >
              {
                status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : (
                  <div>
                    <FormControl
                      className="input-text"
                      disabled={disabled}
                      {...formControlTypeOption}
                      {...getFieldProps(this.props.inputId, {
                        validateTrigger: 'onBlur',
                        rules: [{
                          validator: this.checkValidValue
                        }],
                        getValueProps: (value) =>{
                          return {
                            value: localeValue
                          }
                        },
                        initialValue: localeValue,
                        onChange: (v) => {
                          Object.keys(localeList).forEach((localeKey)=>{
                            if(localeKey === locale){
                              localeList[localeKey].value = v
                            }
                          })
                          if(forceSync)localeList = self.forceSyncChange(localeList,v);
                          onChange && onChange(localeList, v)
                          this.setState({
                            localeValue: v,
                            localeList
                          })
                        }}
                      ) }
                      onClick={
                        (e) => {
                          e.stopPropagation()
                        }
                      }
                      ref={(input) => {this.textInput = input}}
                    />
                    <Popconfirm
                      onClick = {disabled?()=>{}: this.open } 
                      trigger="click"
                      rootClose
                      placement="right"
                      secondPlacement="bottom"
                      className="ac-input-locale-popconfirm"
                      onClose={this.onOk}
                      onCancel={this.close}
                      show={this.state.showPop}
                      // onClick={this.open}
                      onRootClose={this.close}
                      content={this.getLocaleFormElement(localeList, modalLocale, locale, getFieldProps, getFieldError)}
                    >
                      {
                        this.props.showIcon?<div className="input-pop-icon uf uf-globe"></div>:<span></span>
                      }
                    </Popconfirm>
                    {
                      getFieldError(this.props.inputId)?<span className='error uf uf-exc-t'>
                      {getFieldError(this.props.inputId)}
                    </span>:''
                    }
                  </div>
                )
              }
            </div>
          )
        }
        return (
          <div className={`ac-input-locale ${className ? className : null}`} >
            {
              status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : (
                <div>
                  <FormControl
                    className="input-text"
                    disabled={disabled}
                    {...formControlTypeOption}
                    {...getFieldProps(this.props.inputId, {
                      validateTrigger: 'onBlur',
                      rules: [{
                        validator: this.checkValidValue
                      }],
                      getValueProps: (value) =>{
                        return {
                          value: localeValue
                        }
                      },
                      initialValue: localeValue,
                      onChange: (v) => {
                        Object.keys(localeList).forEach((localeKey)=>{
                          if(localeKey === locale){
                            localeList[localeKey].value=v
                          }
                        })
                        if(forceSync)localeList = self.forceSyncChange(localeList,v);
                        onChange && onChange(localeList,v)
                        this.setState({
                          localeValue:v,
                          localeList
                        })
                      }}
                    ) }
                    onClick={
                      (e) => {
                        e.stopPropagation()
                      }
                    }
                    ref={(input) => {this.textInput = input}}
                  />
                  {
                    this.props.showIcon?<div className="uf uf-globe input-icon" onClick = {disabled?()=>{}: this.open } />:''
                  }
                  
                  {
                    getFieldError(this.props.inputId)?<span className='error uf uf-exc-t'>
                    {getFieldError(this.props.inputId)}
                  </span>:''
                  }
                </div>
              )
            }
            <ModalWrap
              title={modalLocale[locale].title}
              showModal={this.state.showModal}
              backdrop={backdrop}
              onOk={this.onOk}
              onCancel={this.onCancel}
              okName={modalLocale[locale].okName}
              cancelName={modalLocale[locale].cancelName}
              close={this.close}
            >
              {
                this.getLocaleFormElement(localeList, modalLocale, locale, getFieldProps, getFieldError)
              }
            </ModalWrap>
          </div>
        )
      } else {
        if (isPopConfirm) {
          return (
            <div className={`ac-input-locale ${className ? className : null}`} >
              {
                status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : (
                  <div>
                    <FormControl
                      className="input-text"
                      value={localeValue}
                      {...formControlTypeOption}
                      onChange={(v)=>{
                        Object.keys(localeList).forEach((localeKey) => {
                          if(localeKey === locale){
                            localeList[localeKey].value = v
                          }
                        })
                        onChange && onChange(localeList,v)
                        if(forceSync)localeList = self.forceSyncChange(localeList,v);
                        this.setState({
                          localeValue:v,
                          localeList
                        })
                      }}
                      onClick={
                        (e) => {
                          e.stopPropagation()
                        }
                      }
                      ref={(input) => {this.textInput = input}}
                    />
                    <Popconfirm
                      trigger="click"
                      rootClose
                      placement="right"
                      defaultOverlayShown={false}
                      secondPlacement="bottom"
                      className="ac-input-locale-popconfirm"
                      onClose={this.onOk}
                      onCancel={this.close}
                      show={this.state.showPop}
                      onClick={this.open}
                      onRootClose={this.close}
                      content={this.getLocaleNoFormElement(localeList, modalLocale, locale)}
                    >
                      <div className="input-pop-icon">
                      </div>
                    </Popconfirm>
                  </div>
                )
              }
            </div>
          )
        }
        return (
          <div className={`ac-input-locale ${className ? className : null}`} >
            {
              status === 'preview' ? this.getPreviewElement(localeValue, defaultValue, localeList) : (
                <div>
                  <FormControl
                    className="input-text"
                    value={localeValue}
                    {...formControlTypeOption}
                    onChange={(v)=>{
                      Object.keys(localeList).forEach((localeKey) => {
                        if(localeKey === locale){
                          localeList[localeKey].value = v
                        }
                      })
                      onChange && onChange(localeList,v)
                      if(forceSync)localeList = self.forceSyncChange(localeList,v);
                      this.setState({
                        localeValue:v,
                        localeList
                      })
                    }}
                    onClick={
                      (e) => {
                        e.stopPropagation()
                      }
                    }
                    ref={(input) => {this.textInput = input}}
                  />
                  {
                    this.props.showIcon?<div className="uf uf-globe input-icon" onClick = { this.open } />:''
                  }
                </div>
              )
            }
            <ModalWrap
              title={modalLocale[locale].title}
              showModal={this.state.showModal}
              backdrop={backdrop}
              onOk={this.onOk}
              onCancel={this.onCancel}
              okName={modalLocale[locale].okName}
              cancelName={modalLocale[locale].cancelName}
              close={this.close}
            >
              {
                this.getLocaleNoFormElement(localeList, modalLocale, locale)
              }
            </ModalWrap>
          </div>
        )
      }
    }
}

AcInputLocale.propTypes = propTypes;
AcInputLocale.defaultProps = defaultProps;

export default AcInputLocale;
