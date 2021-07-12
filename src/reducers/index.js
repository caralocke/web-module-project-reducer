import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';

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
            
        default:
            return state;
    }
}

export default reducer;