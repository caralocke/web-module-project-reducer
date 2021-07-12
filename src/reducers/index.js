import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, ADD_MEMORY, GET_MEMORY, CLEAR_MEMORY } from './../actions'; //Import ADD_MEMORY, GET_MEMORY, CLEAR_MEMORY

//Make sure to import `CLEAR_DISPLAY` constant into your reducer file.
import { CLEAR_DISPLAY } from './../actions';

// Test that you are connected to state by changing the initialState value in your reducer to:

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

// export const initialState = {
//     total: 100,
//     operation: "*",
//     memory: 100
// }

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        //  Within `./reducers/index,` add in a case for `CLEAR_DISPLAY`. Clear display should set the total value in state to 0.
        case(CLEAR_DISPLAY):
            return({
                ...state,
                total: 0
            })
        //Add in a case for ADD_MEMORY. It should set the memory value in state to state.total.    
        case(ADD_MEMORY):
        return({
            ...state,
            memory: state.total
        })        
        //Add in a case for GET_MEMORY. It should set the total value in state to state.memory.
        case(GET_MEMORY):
            return({
                ...state,
                total: state.memory
            })
        //Add in a case for CLEAR_MEMORY. It should set the memory value in state to 0
        case(CLEAR_MEMORY):
            return({
                ...state,
                memory: 0
            })
        default:
            return state;
    }
}

export default reducer;