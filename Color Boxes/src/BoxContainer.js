/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import Box from './Box'
import './BoxContainer.css'

class BoxContainer extends Component {
    static defaultProps = {
        nBoxes: 24
    }
    
    render() {
        const boxes = Array.from({length: this.props.nBoxes}).map(() => (<Box />))
        return (   
            <>
                <div className="BoxContainer">{boxes}</div>
            </>
        )
    }
}

export default BoxContainer;