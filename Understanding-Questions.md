# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick event listener recognizes the click and calls the handleAddOne function.
* The handleAddOne function calls the dispatch function with a parameter of our addOne function that we imported from actions.
* The reducer is called and returns the updated state.
* The dispatch function sets the updated state object to the current state.
* The current state now renders and is updated from 0 to 1.
* Each time the 1 button is pressed, it adds 1 to the current state.
...

* TotalDisplay shows the total plus 1.
