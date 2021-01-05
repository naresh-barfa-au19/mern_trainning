import BUY_CAKE from "./actionType"


const initialSate = {
    numOfCake: 20,
}

const cakeReducer = (state = initialSate, action) => {
    switch (action.type) {
        case BUY_CAKE: {
            return {
                ...state,
                numOfCake: state.numOfCake - 1,
            }
        }
        default: return state

    }
}

export default cakeReducer 