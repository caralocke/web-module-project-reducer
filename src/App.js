import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
// Within App.js, import the useReducer hook, our application's reducer and initialState object.
import { useReducer } from 'react'; 
import reducer, { initialState } from './reducers'
// Import the `addOne` action creator into App.js.
import { addOne, changeOperation } from './actions' // Import in your new action creator into `App.js.`
// Import the `applyNumber` action creator into `App.js.`
// Within `App.js,` import in your clearDisplay action creator.
import { applyNumber, clearDisplay, addMemory, getMemory, clearMemory } from './actions'; //Import addMemory, getMemory, clearMemory

function App() {
  // Use useReducer hook to get access to the application state and the dispatch function.
  const [state, dispatch] = useReducer(reducer, initialState)

  // Within `App.js`, create an event handler connected to the 1 button's `onClick` method.
  const handleAddOne = () => {
    dispatch(addOne()) //Within your event handler, dispatch the `addOne` action creator.
  }
  // Create an eventhandler that takes in a number as an argument and dispatches `applyNumber` with it.
  const handleApplyNumber = (number) => {
    dispatch(applyNumber(number))
  }

  // Create and attach event handlers to the `+`, `-` and `*` buttons that dispatch your new action creator. Make sure you pass in the appropriate operator string in each case.
  const handeChangeOperation = (operator) => {
    dispatch(changeOperation(operator))
  }

  // Create and connect an event handler to the "CE" button that dispatches your clearDisplay action creator.
  const handleClearDisplay = () => {
    dispatch(clearDisplay())
  }

  //Create an event handler to handle the dispatch of addMemory
  const handleAddMemory = () => {
    dispatch(addMemory())
  }

  //Create an event handler to handle the dispatch of getMemory
  const handleGetMemory = () => {
    dispatch(getMemory())
  }

  //Create an event handler to handle the dispatch of clearMemory
  const handleClearMemory = () => {
    dispatch(clearMemory())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/> {/*Replace "0" with a reference to `state.total` when passing a value to our TotalDisplay component. */}
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span> {/*Replace "X" with a reference to `state.operation` within the operation element. */}
              <span id="memory"><b>Memory:</b> {state.memory}</span> {/*Replace "0" with a reference to `state.memory` within the memory element. */}
            </div>
            
            <div className="row">
              {/* Attach the handleAddMemory event handler to the onClick of the `M+` button. */}
              <CalcButton onClick={() => {handleAddMemory()}} value={"M+"}/>
              {/* Attach the handleGetMemory event handler to the onClick of the `MR` button. */}
              <CalcButton onClick={() => {handleGetMemory()}} value={"MR"}/>
              {/* Attach the handleClearMemory event handler to the onClick of the `MC` button. */}
              <CalcButton onClick={() => {handleClearMemory()}} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleApplyNumber(1)}} value={1}/> {/* Within `App.js`, create an event handler connected to the 1 button's `onClick` method. */}
              {/* 2nd comment: Remove or comment out the `addOne` event handler from the 1 button. */}
              {/*3rd comment: Attach that eventhandler to the 1 button's `onClick` method, passing in a 1 as an argument. */}

              {/*  Connect all other number buttons to your new event handler, passing in their respective values. */}
              <CalcButton onClick={() => {handleApplyNumber(2)}} value={2}/>
              <CalcButton onClick={() => {handleApplyNumber(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleApplyNumber(4)}} value={4}/>
              <CalcButton onClick={() => {handleApplyNumber(5)}} value={5}/>
              <CalcButton onClick={() => {handleApplyNumber(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleApplyNumber(7)}} value={7}/>
              <CalcButton onClick={() => {handleApplyNumber(8)}} value={8}/>
              <CalcButton onClick={() => {handleApplyNumber(9)}} value={9}/>
            </div>

            <div className="row">
              {/* Create and attach event handlers to the `+`, `-` and `*` buttons that dispatch your new action creator. Make sure you pass in the appropriate operator string in each case. */}
              <CalcButton onClick={() => {handeChangeOperation('+')}} value={"+"}/>
              <CalcButton onClick={() => {handeChangeOperation('*')}}  value={"*"}/>
              <CalcButton onClick={() => {handeChangeOperation('-')}}  value={"-"}/>
            </div>

            <div className="row ce_button">
              {/*  Create and connect an event handler to the "CE" button that dispatches your clearDisplay action creator. */}
              <CalcButton onClick={() => {handleClearDisplay()}} value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
