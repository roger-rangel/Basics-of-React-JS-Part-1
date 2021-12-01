/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import './TodoList.css'
import NewTodoForm from './NewTodoForm'
import Todo from './Todo'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { todos: [] }
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
    }
    
    remove(id) {
        this.setState({
            todos: [...this.state.todos.filter(t => t.id !== id)]
        })
    }
    
    create(todo) {
        
        this.setState({
            todos: [...this.state.todos, todo]
        })
    }
    
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask }
            }
            return todo;
        });
        this.setState({todos: updatedTodos})
    }
    
    render() {
        const todos = this.state.todos.map(todo => {
            return <Todo
                key={todo.id}
                id={todo.id}
                task={todo.task}
                removeTodo={this.remove}
                updateTodo={this.update}
                />
                    })
        return (
            <div className="TodoList">
                <h1>Todo List</h1>
                <NewTodoForm
                    createTodo={this.create}
                     />
                <ul>
                 {todos}   
                </ul>
            </div>
        )
    }
}

export default TodoList;