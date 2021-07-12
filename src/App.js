import React from 'react';

import './App.css';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
// Within App.js, import the useReducer hook, our application's reducer and initialState object.
import { useReducer } from 'react'; 
import reducer, { initialState } from './reducers'
// Import the `addOne` action creator into App.js.
import { addOne } from './actions'

function App() {
  // Use useReducer hook to get access to the application state and the dispatch function.
  const [state, dispatch] = useReducer(reducer, initialState)

  // Within `App.js`, create an event handler connected to the 1 button's `onClick` method.
  const handleAddOne = () => {
    dispatch(addOne()) //Within your event handler, dispatch the `addOne` action creator.
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
              <CalcButton onClick={handleAddOne} value={1}/> {/* Within `App.js`, create an event handler connected to the 1 button's `onClick` method. */}
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
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
