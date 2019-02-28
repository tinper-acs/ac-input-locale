/**
 *
 * @title 默认的模态框
 * @description
 *
 */

import React, { Component } from 'react';

class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onChange = (e) => {
        this.props.onChange(e.target.value)
    }
    render () {
        return (
            <input {...this.props} className='u-form-control' onChange={this.onChange} />
        )
    }
}

export default Demo1;
