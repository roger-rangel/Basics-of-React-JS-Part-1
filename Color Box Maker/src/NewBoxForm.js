/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { color: '', height: '', width: '' };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state)
        this.setState({
            color: '',
            height: '',
            width: ''
        })
    }
    
    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value})
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                <label htmlFor="color">Color:</label>
                    <input
                    type="text"
                    id="color"
                    name="color"
                    value={this.state.color}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="height">Height:</label>
                    <input
                    type="text"
                    id="height"
                    name="height"
                    value={this.state.height}
                    onChange={this.handleChange}
                ></input>
                <label htmlFor="width">Width:</label>
                    <input
                    type="text"
                    id="width"
                    name="width"
                    value={this.state.width}
                    onChange={this.handleChange}
                ></input>
                <button>Add New Box</button>
                </div>  
            </form>
        )
    }
}

export default NewBoxForm;