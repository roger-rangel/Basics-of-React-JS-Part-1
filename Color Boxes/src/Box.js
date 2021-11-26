/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './Box.css'
import {choice} from './helpers'

class Box extends Component {
    static defaultProps = {
        allColors: ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FAEDCD']
    }
    
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    changeColor() {
        let newColor;
        do {
            newColor = choice(this.props.allColors);
        } while (newColor === this.state.color);
            
        this.setState({color: newColor})
    }
    
    handleClick() {
        this.changeColor()
    }
    
    render() {
        return (
            <div
                className='Box'
                style={{ backgroundColor: this.state.color }}
                onClick = {this.handleClick}
            >
                
            </div>

        )
    }
}

export default Box;