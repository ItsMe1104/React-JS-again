//EXTRA INFORMATION ON LIFECYCLES (to strengthen this concept but not needed nowadays):-


// ==> Never compare React's Lifecycle methods to Functional Components
// ==> For e.g :- useEffect() is not equivalent to componentDidMount() behind the scenes




// Case 1 :-
// --> useEffect() without any dependency array is called after every render()

useEffect(() => {
  //...
})

// --> In class-based components, after first render, componentDidMount() is called and after every subsequent render the component is updated, hence componentDidUpdate() is called.







// Case 2 :-
// --> useEffect() with an empty dependency array will be called only after first render()

useEffect(() => {
  //...
}, [])

// --> In class-based components, componentDidMount() is called after first render() of the Mounting cycle, after that the lifecycle moves onto the Update cycle.







// Case 3 :-
// --> useEffect() with one variable inside the dependency array will be called every time when the count changes

useEffect(() => {
  //...
}, [count])



// How to do this in class-based component?
// --> One lifecycle method is called after every update
// --> That is componentDidMount()


// STEPS :-
// We used two parameters in componentDidUpdate()
// --> prevProps and prevState
// --> Use an "if" statement saying

if (this.state.count !== prevState.count) {
  // ... do some task
}



// e.g :-
componentDidUpdate(prevProps, prevState)
{
  if (this.state.count !== prevState.count) {
    // ... do some task
  }
}






// Case 4 :-
// --> useEffect() with more than one variable inside the dependency array will be called every time when the count changes

useEffect(() => {
  //...
}, [count, count2])



//Steps in class based components
// Just like previous case, either write a separate 'if' statement for every variable, or integrate the conditions for every variable inside a single 'if' statement using the '||' operator


componentDidUpdate(prevProps, prevState)
{
  if (this.state.count !== prevState.count || this.state.count2 !== prevState.count2) {
    // ... do some task
  }
}

