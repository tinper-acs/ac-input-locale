
import  React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Col , Row } from 'tinper-bee';
import { FormControl, Button,Label,Col , Row } from 'tinper-bee';

// import FormControl from 'bee-form-control'
// import Button from 'bee-button'
// import Label from 'bee-label'
import Popover from 'bee-popover'

import Modal from 'bee-modal'
import Form from 'bee-form';


import 'bee-form-control/build/FormControl.css'
import 'bee-button/build/Button.css'
import 'bee-label/build/Label.css'
import 'bee-layout/build/Layout.css';
import 'bee-popover/build/Popover.css';
import 'bee-modal/build/Modal.css';
import 'bee-form/build/Form.css';
import languagePic from './assets/images/language.png'

const FormItem = Form.FormItem;
import './index.less';

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
}

const defaultProps = {
    classnames:'',
    status:'preview',
    isTextarea:false,
    backdrop: true
}

const getContent = (localeList) => {
  let content = Object.keys(localeList).map(localeKey=>(
    <Row key={'preview'+localeKey} style={{padding:'4px 0'}}>
      <Col md={5} xs={5} sm={5}>
          <div className='input-locale-text-r'>
            {
              localeList[localeKey].label
            }:
          </div>
      </Col>
      <Col md={7} xs={7} sm={7}>
        <div className="input-locale-text-l">
            {
              localeList[localeKey].value
            }
        </div>
      </Col>
    </Row>
  ))
  return content
}

class AcInputLocale extends Component {
    constructor(props) {
        super(props);
        let {locale,localeList,status,modalLocale,sysLocale,required} = props;
        let localeValue = ''
        if (!locale) {
          locale = sysLocale || 'zh_CN'
        }
        Object.keys(localeList).forEach((localeKey)=>{
          if(localeKey === locale) {
            localeValue = localeList[localeKey].value
          }
        })
        let modalLocaleTmp = Object.assign({},{
          'zh_CN':{
            'title':'多语言设置',
            'okName':'保存',
            'cancelName':'取消',
            'localeFlag':'当前',
            'defaultFlag':'默认',
            'placeholder':'请输入...',
            "errorMsg":"不能为空",
            'currentLang':"当前语种",
            'defaultLang':"默认语种"
          },
          'en_US':{
            'title':'Language Setting',
            'okName':'save',
            'cancelName':'cancel',
            'localeFlag':'current',
            'defaultFlag':'default',
            'placeholder':'please input...',
            "errorMsg":"Required",
            'currentLang':"Current language",
            'defaultLang':"Default language"
          },
          'zh_TW':{
            'title':'多語言設置',
            'okName':'保存',
            'cancelName':'取消',
            'localeFlag':'當前',
            'defaultFlag':'默認',
            'placeholder':'請輸入...',
            "errorMsg":"不能為空",
            'currentLang':"當前語種",
            'defaultLang':"默認語種"
          },
          'fr_FR':{
            'title':'Programmation Multilingue',
            'okName':'conservation',
            'cancelName':'supprimer',
            'localeFlag':'actuellement',
            'defaultFlag':'Par défaut',
            'placeholder':'S’il vous plaît, entrez....',
            "errorMsg":"Champs obligatoires",
            'currentLang':"Langue actuelle",
            'defaultLang':"Langue par défaut"
          }
        }, modalLocale)
        this.state={
          localeList,
          localeValue,
          sysLocale,
          locale,
          status,
          required,
          showModal: false,
          modalLocale:modalLocaleTmp
        }
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentWillReceiveProps(nextProps){
      // 语种列表改变，localeValue也要改变
      // 这里的判断是 对象，判断的是对象引用地址是否一样
      if(this.props.localeList != nextProps.localeList){
        let localeValue='';
        let {locale,localeList} = nextProps
        Object.keys(localeList).forEach((localeKey)=>{
          if(localeKey === locale) {
            localeValue = localeList[localeKey].value
          }
        })
        this.setState({
          localeList:localeList,
          localeValue,
          locale
        })
      }
      // let { locale, sysLocale } = this.props
      // if (!locale) {
      //   locale = sysLocale || ''
      // }

      // // 只改变语种，不改变语种列表
      if(nextProps.locale != this.props.locale && nextProps.localeList == this.props.localeList){
        let { locale, sysLocale } = nextProps;

        if (!locale) {
          locale = sysLocale || 'zh_CN'
        }

        let localeValue='';
        Object.keys(nextProps.localeList).forEach((localeKey)=>{
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
      if(nextProps.status !==this.props.status){
        this.setState({
          status:nextProps.status
        })
      }
    }

    close = () => {
      this.setState({ showModal: false });
    }

    open = (event) => {
      event.stopPropagation();
      let {localeList,status} = this.props;
      if(status==='preview'){
        return
      }
      this.setState({
        localeList
      })
      this.setState({
        showModal: true
      });
    }

    onOk = () => {
      const { localeList,locale } = this.state
      let localeListProp = this.props.localeList;
      let {inputId } = this.props;
      let localeValue;
      let validateArray = [];
      Object.keys(localeList).forEach((localeKey)=>{
        validateArray.push(inputId + "_"+ localeKey);
        if(localeKey === locale) {
          localeValue = localeList[localeKey].value
        }
        localeListProp[localeKey] = localeList[localeKey]
      })

      this.setState({
        localeValue
      });

      if (this.props.form) {
         let obj = {};
        obj[this.props.inputId] = localeValue
        this.props.form.validateFields(validateArray,(err, values) => {
          if (err) {
            return;
              console.log('校验失败', values);
          } else {
            this.props.form.setFieldsValue(obj)
            this.props.onOk && this.props.onOk(localeList);
            this.close()
              console.log('提交成功', values)
          }
      });
      // let obj = {};
      //   obj[this.props.inputId] = localeValue
      //   this.props.form.setFieldsValue(obj)
      //   this.props.onOk && this.props.onOk(localeList);
      //   this.close()
      }
     

     
    }
    onCancel = () => {
      this.close()
    }
    stringTrim = (str) =>{
      return str.replace(/^\s+|\s+$/gm,'');
    }
    // componentDidMount = () =>{
    //   let {locale,localeList,modalLocale,sysLocale,required} =this.props;
    //  // let {required,localeList,locale,sysLocale,modalLocale} = this.state;
        
      
    //     if(required){
          
    //        this.setState({localeList});
    //     }
        
        
      
    // }

    //校验处理
    checkValidValue =(rule, value, callback)=>{
      let self = this;
      let {required,localeList,locale,sysLocale} = self.state;
      let currentLanguage = self.state.modalLocale[locale]?self.state.modalLocale[locale].currentLang:"当前语种" ;
      let defaultLanguage = self.state.modalLocale[locale]?self.state.modalLocale[locale].defaultLang:"默认语种" ;
      let errMessage = self.state.modalLocale[locale]?self.state.modalLocale[locale].errorMsg:"不能为空" ;
      if(required){
        if(!self.stringTrim(localeList[locale].value)){
          if(localeList[locale].errorMsg){
            callback(localeList[locale].errorMsg)
          }else{
            callback(currentLanguage +" "+ errMessage)
          } 
        }
        if(!self.stringTrim(localeList[sysLocale].value)){
          if(localeList[sysLocale].errorMsg){
            callback(localeList[sysLocale].errorMsg)
          }else{
            callback(defaultLanguage +" "+  errMessage);
          }
        }
         callback();
      }else{
        callback();
      }
    }
   
    //label左侧的渲染
    renderLabelLeft = (localeKey) =>{
      
      let { localeValue, locale, localeList, status, modalLocale,sysLocale } = this.state
      if(locale == sysLocale){
        if(localeKey == locale){
          return <span className="label-default">({modalLocale[locale].localeFlag+"/"+modalLocale[locale].defaultFlag})</span>
        } 
      }else{
        if(localeKey == locale){
          return <span className="label-default">({modalLocale[locale].localeFlag})</span>
        }
        if(localeKey == sysLocale){
          return <span className="label-default">({modalLocale[locale].defaultFlag})</span>
        }
      }
    }
    renderLabelright = (localeKey) =>{
      let { localeValue, locale, localeList, status, modalLocale,sysLocale,required} = this.state
      if(required){
        if(locale == sysLocale ){
          if(localeKey == locale){
            return <span className="require-star" > *</span>
          } 
        }else{
          if(localeKey == locale){
            return <span className="require-star"> *</span>
          }
          if(localeKey == sysLocale){
            return <span className="require-star"> *</span>
          }
        }
      }
    
    }
    render() {
      const { className, placeholder, placement, onChange,isTextarea, backdrop } = this.props
      let { localeValue, locale, localeList, status, modalLocale,sysLocale,required} = this.state
      let defaultValue;
      if(localeList && localeList[sysLocale] && localeList[sysLocale].value){
        defaultValue = localeList[sysLocale].value;
      }
      let formControlTypeOption={}
      isTextarea?formControlTypeOption={componentClass:'textarea'}:null
      let getFieldProps, getFieldError

      if (this.props.form) {
        // model弹窗校验数据加工
        let errMessage = modalLocale[locale]?modalLocale[locale].errorMsg:"不能为空" ;
          for(var item in localeList){
            if(item == locale || item == sysLocale){
              if(required){
               localeList[item]["required"] = true;
              }else{
               localeList[item]["required"] = false;
              }
              localeList[item]["errorMessage"] = localeList[item]["label"] + " " +errMessage
            }else{
              localeList[item]["required"] = false;
              localeList[item]["errorMessage"] = localeList[item]["label"] + " " + errMessage
            }
           }
        getFieldProps = this.props.form.getFieldProps
        getFieldError = this.props.form.getFieldError
        return (
          <div className={`ac-input-locale ${className ? className : null}`} >
            {
              status==='preview'?(
                <div>
                  <span className="view-title-content">
                  {localeValue?localeValue:defaultValue}
                  </span>
                  <Popover
                    placement="right"
                    content={getContent(localeList)}
                    trigger="hover"
                    id="right"
                  >
                    <img src={languagePic} alt="preview" style={{paddingLeft:'10px'}}/>
                  </Popover>
                </div>
              ):(
                <div>
                  <FormControl
                    // value={localeValue}
                    className="input-text"
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
                      onChange:(v)=>{
                        Object.keys(localeList).forEach((localeKey)=>{
                          if(localeKey === locale){
                            localeList[localeKey].value=v
                          }
                        })
                        onChange&&onChange(localeList,v)
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
                  <div className="input-icon" onClick = { this.open } />
                  <span className='error'>
                    {getFieldError(this.props.inputId)}
                  </span>
                </div>
              )
            }

            <Modal show = {
              this.state.showModal
            }
             width = '650'
            backdrop={backdrop}
            className="ac-input-locale-modal"
            onHide = {
                this.close
            }
            enforceFocus={ false }
            >
              <Modal.Header closeButton={true}>
                <Modal.Title className="modal-title">{modalLocale[locale].title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {
                  Object.keys(localeList).map((localeKey)=> {
                    return (<Row className='edit-panel edit-panel-all' key={localeKey}>
                      <FormItem>
                        <Col md={4} className="padding-right-0">
                          <Label>
                            {
                              this.renderLabelLeft(localeKey)           
                            }
                            {localeList[localeKey].label}
                            {
                               this.renderLabelright(localeKey) 
                            }
                          </Label>
                        </Col>
                        <Col md={8}>
                            <div>
                              <FormControl
                                // value={localeValue}
                                placeholder={modalLocale[locale].placeholder}
                                // value={
                                //   //localeList[localeKey].value
                                //   1
                                // }
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
                             //   ref={(input) => {this.textInput = input}}
                              />
                              <div className="input-icon" onClick = { this.open } ></div>
                              <span className='error'>
                                {getFieldError(this.props.inputId + "_" +localeKey)}
                              </span>
                              
                            </div>
                          {/* <FormControl
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
                          /> */}
                        </Col>
                      </FormItem>
                    </Row>)
                  })
                }

              </Modal.Body>

              <Modal.Footer>
                <Button style={{ marginRight: 20,background:'rgba(225,76,70,1)',color:'#fff' }} onClick={this.onOk}>{modalLocale[locale].okName}</Button>
                <Button style={{color:'rgba(71,77,84,1)',backgroundColor: '#fff'}} onClick={this.onCancel}>{modalLocale[locale].cancelName}</Button>
              </Modal.Footer>

            </Modal>
          </div>
        )
      } else {
        return (
          <div className={`ac-input-locale ${className ? className : null}`} >
            {
              status==='preview'?(
                <div>
                  <span className="view-title-content">
                    {localeValue}
                  </span>
                  <Popover
                    placement="right"
                    content={getContent(localeList)}
                    trigger="hover"
                    id="right"
                  >
                    <img src={languagePic} alt="preview" style={{paddingLeft:'10px'}}/>
                  </Popover>
                </div>
              ):(
                <div>
                  <FormControl
                    className="input-text"
                    value={localeValue}
                    {...formControlTypeOption}
                    onChange={(v)=>{
                      Object.keys(localeList).forEach((localeKey)=>{
                        if(localeKey === locale){
                          localeList[localeKey].value=v
                        }
                      })
                      onChange&&onChange(localeList,v)
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
                  <div className="input-icon" onClick = { this.open } />
                </div>
              )
            }

            <Modal show = {
              this.state.showModal
            }
             width = '650'
            backdrop={backdrop}
            className="ac-input-locale-modal"
            onHide = {
                this.close
            }
            enforceFocus={ false }
            >
              <Modal.Header closeButton={true}>
                <Modal.Title className="modal-title">{modalLocale[locale].title}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                {
                  Object.keys(localeList).map((localeKey)=> {
                    return (<Row className='edit-panel edit-panel-all' key={localeKey}>
                      <FormItem>
                        <Col md={4} className="padding-right-0">
                          <Label>
                            {
                              this.renderLabelLeft(localeKey)
                            }
                            {localeList[localeKey].label}
                            {
                               this.renderLabelright(localeKey) 
                            }
                          </Label>
                        </Col>
                        <Col md={8}>
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
                        </Col>
                      </FormItem>
                    </Row>)
                  })
                }

              </Modal.Body>

              <Modal.Footer>
                <Button style={{ marginRight: 20,background:'rgba(225,76,70,1)',color:'#fff' }} onClick={this.onOk}>{modalLocale[locale].okName}</Button>
                <Button style={{color:'rgba(71,77,84,1)',backgroundColor: '#fff'}} onClick={this.onCancel}>{modalLocale[locale].cancelName}</Button>
              </Modal.Footer>

            </Modal>
          </div>
        )
      }
    }
}

AcInputLocale.propTypes = propTypes;
AcInputLocale.defaultProps = defaultProps;

export default AcInputLocale;
