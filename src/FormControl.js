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
        let classes = 'u-form-control';
        if(this.props.className){
            classes = 'u-form-control '+this.props.className;
        }
        return (
            <input {...this.props} className={classes} onChange={this.onChange} />
        )
    }
}

export default FormControl;
