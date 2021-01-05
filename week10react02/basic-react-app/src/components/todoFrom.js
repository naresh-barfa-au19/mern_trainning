import React, { Component } from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todos:
                [
                    {
                        "todo": "drinking tea"
                    },
                    {
                        "todo": "now lunch time"
                    },
                    {
                        todo: "New ToDo"
                    }
                ],
            myName: '',
            todoItem: ''
        }
        this.updateTodo = this.updateTodo.bind(this);
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    updateTodo(e) {
        e.preventDefault()
        let allTodos = this.state.todos
        allTodos.push({ todo: this.state.todoItem })
        this.setState({ todos: allTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div>
                <h1>your todo's </h1>
                <form >

                    <label >todo</label>
                    <input type="text" name="myName" value={this.state.myName} onChange={this.changeHandler} />
                    <input type="text" name="todoItem" value={this.state.todoItem} onChange={this.changeHandler} />

                    <button type="submit" onClick={this.updateTodo}>submit</button>
                </form>
                <h4>
                    {this.state.myName ? this.state.myName : "Dinesh Seervi"}
                </h4>
                <ul> {todos.map((todo) => {
                    return (
                        <li>  {todo.todo} </li>
                    )
                })} </ul>

            </div>
        )
    }

}

export default TodoForm

