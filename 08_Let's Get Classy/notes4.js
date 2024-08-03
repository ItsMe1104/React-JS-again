// A) EXTRA INFORMATION ON LIFECYCLES (to strengthen this concept but not needed nowadays):-

const { useEffect } = require("react")


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




// This is the reason we use a dependency array and not a dependency variable in useEffect() as there can be multiple State variables that can be clubbed inside the if-else





//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// B) SOME SCENARIO :-
// --> Lets say if we have to do different tasks on changes in two variables

// In functional Component :-
// --> We need to use two useEffect() hooks for each variable

useEffect(() => {
  // ...func1()
}, [a1])


useEffect(() => {
  // ...func2()
}, [a2])




// In Class-based Component :-
// --> We need to use two if-else Statements

componentDidUpdate(prevProps, prevState)
{
  if (this.state.a1 !== prevState.a1) {
    // ... func1()
  }

  if (this.state.a2 !== prevState.a2) {
    // ... func2()
  }
}







//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// C) Why to use ComponentWillMount() ?

// --> It is called when we clear the component from the page
// --> Our application doesnt have so many pages
// --> React is a single page application (SPA), hence only one html file



// Disadvantages of Single Page Application :-
// --> since we dont reload the page and just clear and change the components

// --> Whenever we are going to some other component, conceptually we are leaving the page, but due to single page application we are just changing the component to be displayed on our page

// --> Hence, whenever we change the component / page (conceptually), we need to clear many things at first


// for e.g :- if there is a setInterval() inside componentDidMount() , hence the setInterval() , will keep on looping, even if we change the component in our page, moreover, it will get triggered twice if we load the actaul component (that triggered the setInterval()) again, and thrice if we try to load the actual component for the third time, and it will go on


componentDidMount()
{
  setInterval(() => {
    console.log("Namaste React OP");
  }, 1000);
}


// Question :- Why did this happen?
// --> Because when we are conceptually changing our pages, it is not reloading our page but just rendering different components due to reconciliation, hence setInterval() will keep on continuing. Moreover everytime my component is rendered again and again, setInterval is called once again because of the Mounting cycle of that component.
// --> Simlilar case with setTimeOut() as it will keep on hanging in our browser and make our app's performance very low
// --> In terms of an user, he can multiple times try to change the components and come back to the actual componenthence, hence, our app performance will get really low





//So how to stop the looping due to setInterval() when we changed the component?

// We have to use the componentWillUnmount()
// --> that gets triggered whenever our component leaves the page
// --> We have to use a clearinterval() inside the componentWillUnmount() to stop the looping when we change and go to some other component




// STEPS :-
// --> 'this' is shared between all the methods of a class , hence it helps us to access a variable in some other function to be used in the current function

// --> Using 'this.variable_name' we can access the variable anywhere within the class
// --> We have to use it both during declaration and also while accessing

// --> Hence use this.variable_name to declare the setInterval() inside a variable in componentDidMount() 
// --> After that use clearInterval() inside componentWillUnmount() 
// --> Inside the clearInterval() , provide this.variable_name, to clear that setInterval() just as our component clears the page 

componentDidMount()
{
  this.setI = setInterval(() => {
    console.log("Namaste React OP");
  }, 1000);
}

componentWillUnmount()
{
  clearInterval(this.setI);
}





//In functional component :-
// --> IF we use setInterval() or setTimeOut() inside useEffect() it will behave in same way that is, even if we change the pages (components) , the setInterval() loop will keep on going and whenever we load that particular page(component) again and again, the looping speed will keep on increasing, till we actually clear it


useEffect(() => {
  setInterval(() => {
    console.log("REACT OP");
  }, 1000);
}, [count])




// How to stop and clear the setInterval() inside useEffect() ?
// --> Use a return statement inside useEffect() and return a function
// --> and inside that function use clearInterval()
// --> This function that is called will be returned when we are unmounting the component
// Since both the return statement and the setInterval() are inside the same useEffect(), hence we can directly store the setInterval() in a variable and use that variable inside the clearInterval()


useEffect(() => {
  const timer = setInterval(() => {
    console.log("REACT OP");
  }, 1000);

  return () => {
    clearInterval(timer);
  }
}, [count])





//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */





// E) Why can't we have the `callback function` of `useEffect async`?

// A: `useEffect` expects it's callback function to return nothing or return a function (cleanup function that is called when the component is unmounted). If we make the callback function as `async`, it will return a `promise` and the promise will affect the clean-up function from being called.




//***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

// E) Some info on Lifecycle methods :-

// --> We learnt about 5 lifecycle methods for now.
// --> In earlier versions of React, it had more no. of lifecycles which got depreciated.








