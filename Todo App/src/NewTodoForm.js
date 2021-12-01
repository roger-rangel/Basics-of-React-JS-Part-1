/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
// import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';


class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = { task: '' }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.createTodo({...this.state, id: uuidv4()});
        this.setState({task: ''})
    }
    
    handleChange(evt) {
        this.setState({[evt.target.name] : evt.target.value})
    }
    
    render() {
        return (
            <form
                onSubmit={this.handleSubmit} className='NewTodoForm'>
                <label htmlFor = 'task'>New Todo</label>
                <input
                      placeholder='New Todo'
                      name='task'
                      id='task'
                      type='text'
                      value={this.state.task}
                      onChange = {this.handleChange}>
                   </input>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm;