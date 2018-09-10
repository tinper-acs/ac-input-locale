
import  React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Button,Label,Col , Row,Popover } from 'tinper-bee';
import Modal from 'bee-modal'
import Form from 'bee-form';

import 'bee-form-control/build/FormControl.css'
import 'bee-button/build/Button.css'
import 'bee-label/build/Label.css'
import 'bee-layout/build/Layout.css';
import 'bee-popover/build/Popover.css';
import 'bee-modal/build/Modal.css';
import 'bee-form/build/Form.css';


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
    modalLocale:PropTypes.object
}

const defaultProps = {
    classnames:'',
    status:'preview',
    isTextarea:false,

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
        let {locale,localeList,status,modalLocale} = props;
        let localeValue = ''
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
            'localeFlag':'当前'
          },
          'en_US':{
            'title':'language settings',
            'okName':'save',
            'cancelName':'cancel',
            'localeFlag':'current'
          },
          'zh_TW':{
            'title':'多語言設置',
            'okName':'保存',
            'cancelName':'取消',
            'localeFlag':'當前'
          },
          'fr_FR':{
            'title':'Programmation multilingue',
            'okName':'conservation',
            'cancelName':'supprimer',
            'localeFlag':'actuellement'
          }
        }, modalLocale)
        console.log(modalLocaleTmp)
        this.state={
          localeList,
          localeValue,
          locale,
          status,
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
          localeValue
        })
      }
      // debugger
      // // 只改变语种，不改变语种列表
      if(nextProps.locale != this.props.locale && nextProps.localeList == this.props.localeList){
        let {locale} = nextProps;
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

    close() {
      this.setState({ showModal: false });
    }

    open() {
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

    onOk() {
      const { localeList,locale } = this.state
      let localeListProp = this.props.localeList
      let localeValue
      Object.keys(localeList).forEach((localeKey)=>{
        if(localeKey === locale) {
          localeValue = localeList[localeKey].value
        }
        localeListProp[localeKey] = localeList[localeKey]
      })

      this.setState({
        localeValue
      });
      this.props.onOk && this.props.onOk(localeList);
      this.close()
    }
    onCancel() {
      this.close()
    }

    render() {
      const { className, placeholder, placement, onChange,isTextarea } = this.props
      let { localeValue, locale, localeList, status, modalLocale } = this.state
      let formControlTypeOption={}
      isTextarea?formControlTypeOption={componentClass:'textarea'}:null
      return (
        <div className={`ac-input-locale ${className ? className : null}`} >

          {
            status==='preview'?(
              <div>
                {localeValue}
                <Popover
                  placement="right"
                  content={getContent(localeList)}
                  trigger="hover"
                  id="right"
                >
                  <div className="input-icon" />
                </Popover>
              </div>
            ):(
              <div>
                <FormControl
                  className="input"
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
                  ref={(input) => {this.textInput = input}}
                />
                <div className="input-icon" onClick = { this.open } />
              </div>
            )
          }

          <Modal show = {
            this.state.showModal
          }
          onHide = {
              this.close
          }
          >
            <Modal.Header closeButton={true}>
              <Modal.Title className="modal-title">{modalLocale[locale].title}</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              {
                Object.keys(localeList).map((localeKey)=> {
                  return (<Row className='edit-panel edit-panel-all' key={localeKey}>
                    <FormItem>
                      <Col md={3} className="padding-right-0">
                        <Label>
                          {
                            localeKey===locale?<span className="label-default">({modalLocale[locale].localeFlag})</span>:null
                          }
                          {localeList[localeKey].label}
                        </Label>
                      </Col>
                      <Col md={9}>
                        <FormControl
                          placeholder="请输入..."
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

AcInputLocale.propTypes = propTypes;
AcInputLocale.defaultProps = defaultProps;

export default AcInputLocale;
