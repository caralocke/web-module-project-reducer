export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
// Within `./actions/index,` add in an action string constant to for `CLEAR_DISPLAY`. Make sure to import that constant into your reducer file.
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'
//Add an action string constant to add to the memory
export const ADD_MEMORY = 'ADD_MEMORY'
//Add an action string constant to apply the memory
export const GET_MEMORY = 'GET_MEMORY'
//Add an action string constant to clear the memory
export const CLEAR_MEMORY = 'CLEAR_MEMORY'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// Create an action creator (in `./actions/index.js`) that takes in an operator as an argument and creates an action object with the type `CHANGE_OPERATION.
export const changeOperation = (operator) => {
    return ({type:CHANGE_OPERATION, payload:operator})
}

// Within `./actions/index,` add in an action creator for `CLEAR_DISPLAY`.
export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}

//Add an action creator for ADD_MEMORY
export const addMemory = () => {
    return({type:ADD_MEMORY})
}

//Add an action creator for GET_MEMORY
export const getMemory = () => {
    return({type:GET_MEMORY})
}

//Add an action creator for CLEAR_MEMORY
export const clearMemory = () => {
    return({type: CLEAR_MEMORY})
}