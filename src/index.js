
import  React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { FormControl, Button ,Popconfirm,Label} from 'tinper-bee';
import Form from 'bee-form';
import 'bee-form-control/build/FormControl.css'
import 'bee-button/build/Button.css'
import 'bee-popconfirm/build/Popconfirm.css'
import 'bee-label/build/Label.css'
const FormItem = Form.FormItem;
import './index.less';

const propTypes = {
    className: PropTypes.string,
    onSave:PropTypes.func,//确定按钮钩子函数
    onCancel:PropTypes.func,//取消按钮钩子函数
    locale:PropTypes.string,
    localeList:PropTypes.array,
}

const defaultProps = {
    classnames:''
}

class AcInputLocale extends Component {

    constructor(props) {
        super(props);
        let {locale,localeList} = props;
        let obj = localeList.find(da=>da.locale == locale);
        this.state = {
            value:this.getListToMap(localeList),
            localeValue:obj.value?obj.value:""
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.localeList != this.props.localeList){
            this.setState({
                value:this.getListToMap(nextProps.localeList),
                localeValue:this.getListToMap(nextProps.localeList)[nextProps.locale].value
            })
        }
        if(nextProps.locale != this.props.locale && nextProps.localeList == this.props.localeList){
            this.setState({
                localeValue:this.state.value[nextProps.locale].value
            })
        }
    }

    getListToMap(localeList){
        let value = {};
        localeList.forEach(da=>{
            value[da.locale] = da;
        });
        return JSON.parse(JSON.stringify(value));
    }

    getPopContent(){
        let {localeList} = this.props;
        let {value:_value} = this.state;
        if(!localeList) return null;
        return (<div className="popconfirm-content">
            <Form className="form">
            {
                localeList.map((da,i)=>{
                    return (<FormItem key={"form_item_"+i}>
                        <Label>{da.label}</Label>
                        <FormControl placeholder="请输入..." onChange={(v)=>{
                            let {value,locale} = this.state;
                            let newData = JSON.parse(JSON.stringify(da));
                            newData.value = v;
                            value[da.locale] = newData;
                            this.setState({
                                value
                            })
                        }}
                        value={_value[da.locale] && _value[da.locale].value}
                        />
                    </FormItem>)
                })
            }
            </Form>
        </div>)
    }

    //取消事件
    onCancel=()=>{
        this.props.onCancel && this.props.onCancel();
    }

    //确定回调函数
    onClose=()=>{
        let {locale,localeList} = this.props;
        let {value} = this.state;
        this.setState({
            localeValue:value[locale].value
        });
        localeList.forEach(da=>{
            da.value = value[da.locale].value;
        });
        this.props.onSave && this.props.onSave(value);
    }

    render() {
        let {localeValue} = this.state;
        let {className} = this.props;
        return (
        <div className={`ac-input-locale ${className?className:""}`} >
            <FormControl
                className="input"
                value={localeValue}
                ref={(input) => {this.textInput = input}}
            />
            <Popconfirm className="popconfirm" trigger="click" placement="right"
            onCancel={this.onCancel} onClose={this.onClose}
            content={this.getPopContent()}>
                <div className="input-icon" />
            </Popconfirm>
        </div>
    )}
}

AcInputLocale.propTypes = propTypes;
AcInputLocale.defaultProps = defaultProps;

export default AcInputLocale;
