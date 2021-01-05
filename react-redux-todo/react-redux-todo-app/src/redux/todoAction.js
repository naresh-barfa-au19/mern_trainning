import SUBMIT_TODO from "./actionType"


const submitTodo = (formTodo) => {
    return {
        type: SUBMIT_TODO,
        payload: formTodo,
    }
}

export default submitTodo 