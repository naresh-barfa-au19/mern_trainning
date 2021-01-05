import SUBMIT_TODO from "./todoAction"
import { v4 as uuid } from "uuid"
const initialState = {
    id: "",
    todoItem: '',

}

const submitReducer = (state = initialState, action) => {
    console.log("action ", action)
    switch (action.type) {
        case SUBMIT_TODO:

            return {
                id: uuid(),
                todoItem: action.payload

            }
        default: return state
    }
}


export default submitReducer 
