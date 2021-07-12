import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
// Within App.js, import the useReducer hook, our application's reducer and initialState object.
import { useReducer } from 'react'; 
import reducer, { initialState } from './reducers'
// Import the `addOne` action creator into App.js.
import { addOne } from './actions'
// Import the `applyNumber` action creator into `App.js.`
import { applyNumber } from './actions';

function App() {
  // Use useReducer hook to get access to the application state and the dispatch function.
  const [state, dispatch] = useReducer(reducer, initialState)

  // Within `App.js`, create an event handler connected to the 1 button's `onClick` method.
  const handleAddOne = () => {
    dispatch(addOne()) //Within your event handler, dispatch the `addOne` action creator.
  }
  // Create an eventhandler that takes in a number as an argument and dispatches `applyNumber` with it.
  const handleChange = (number) => {
    dispatch(applyNumber(number))
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
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleChange(1)}} value={1}/> {/* Within `App.js`, create an event handler connected to the 1 button's `onClick` method. */}
              {/* 2nd comment: Remove or comment out the `addOne` event handler from the 1 button. */}
              {/*3rd comment: Attach that eventhandler to the 1 button's `onClick` method, passing in a 1 as an argument. */}

              {/*  Connect all other number buttons to your new event handler, passing in their respective values. */}
              <CalcButton onClick={() => {handleChange(2)}} value={2}/>
              <CalcButton onClick={() => {handleChange(3)}} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleChange(4)}} value={4}/>
              <CalcButton onClick={() => {handleChange(5)}} value={5}/>
              <CalcButton onClick={() => {handleChange(6)}} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => {handleChange(7)}} value={7}/>
              <CalcButton onClick={() => {handleChange(8)}} value={8}/>
              <CalcButton onClick={() => {handleChange(9)}} value={9}/>
            </div>

            <div className="row">
              <CalcButton value={"+"}/>
              <CalcButton value={"*"}/>
              <CalcButton value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
