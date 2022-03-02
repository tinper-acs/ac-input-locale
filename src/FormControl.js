/**
 *
 * @title 默认的模态框
 * @description
 *
 */

import React, { Component } from 'react';

class FormControl extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onChange = (e) => {
        this.props.onChange(e.target.value)
    }
    render () {
        const { required, ...other} = this.props;
        let classes = 'wui-input';
        if(this.props.className){
            classes = 'wui-input '+this.props.className;
        }
        return (
            <input {...other} className={classes} onChange={this.onChange} />
        )
    }
}

export default FormControl;
