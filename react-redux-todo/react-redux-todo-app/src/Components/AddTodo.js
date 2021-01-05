import React, { useState } from 'react'
import TodoList from './TodoList'
import submitTodo from "./../redux/todoAction"
import { connect } from "react-redux"

import { v4 as uuid } from 'uuid';

function AddTodo(props) {
    const [formTodo, setTodo] = useState("phla nasha")
    return (
        <div>
            <span>Todo Name</span>
            <input type="text" name="formTodo" value={formTodo} onChange={(e) => setTodo(e.target.value)} />
            <button onClick={() => props.submitTodo(formTodo)} >Add Todo</button>
            <h3> all todo : {props.todoItem} </h3>
        </div>
    )


}
const mapStateToProps = state => {
    return {
        todoItem: state.todoItem
    }
}
const mapDispatchToProps = dispatch => {
    return {
        submitTodo: (formTodo) => dispatch(submitTodo(formTodo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)