//A) LifeCycle of React Class-Based Components :-
// --> How the class-based components are mounted / loading on the webpage


// For every class-based Component in MOUNTING CYCLE, there are basically three regions
// --> Constructor()
// --> render()
// --> componentDidMount()



// --> Though by convention in a classbased component, first constructor() is written, then componentDidMount() and then render().
// --> But the execution happens in the way of --> constructor() --> render() --> componentDidMount() 


// --> There is something called componentDidUpdate() also but that is a part of Updating cycle. 
// --> There is something called componentWillUnmount() also but that is a part of Unmounting cycle.



//Rules for a single component:-
// --> The first thing when a class is instantiated / loaded (a new instance of the class is created), the constructor is called
// --> Once the constructor is called, then render() method is called
// --> After the render() method is TOTALLY COMPLETED, if there is a componentDidMount() method, then it is called




// Scenario 1 :-
//For a component with no child
// --> The lifecycle happens in the following order
// --> Constructor() --> render() --> componentDidMount()




// Scenario 2 :-
//For a component with no child and no componentDidMount()
// --> The lifecycle happens in the following order
// --> Constructor() --> render()




// Scenario 3 :-
//For a component with one child inside render()

<Parent>
  constructor()
  componentDidMount()
  render()
  {
    <Child></Child>
  }
</Parent>

// The child has its own constructor(), render() and componentDidMount() functions

// --> The lifecycle happens in the following order :-
// Parent Constructor()
// Parent Render()

// Child Constructor()
// Child Render()
// Child componentDidMount()

// Parent componentDidMount()







/* Scenario 4 :-
For a component with one child and one grand child inside render()

<Parent>
  constructor()
  componentDidMount()
  render()
  {
    <Child1>
    </Child1>

  }
</Parent>


In Child1 component, we have Child2 component in its render method()

<Child1>
  constructor()
  componentDidMount()
  render()
  {
    <Child2> ... <Child2>
  }
</Child1>
*/


// Every child has its own constructor(), render() and componentDidMount() functions


// --> The lifecycle happens in the following order :-

// Parent Constructor()
// Parent Render()

// Child1 Constructor()
// Child1 Render()

// Child2 Constructor()
// Child2 Render()
// Child2 componentDidMount()

// Child1 componentDidMount()

// Parent componentDidMount()




// Basically it is just like recursion






/* Scenario 5 (Exceptional Scenario) :-
For a component with two child inside render()
--> It can be two instances of the same class (component) or two instances of different class (component)


<Parent>
  constructor()
  componentDidMount()
  render()
  {
    <Child1> ... </Child1>
    <Child2> ... </Child2>
  }
</Parent>


Every child has its own constructor(), render() and componentDidMount() functions

<Child>
  constructor()
  componentDidMount()
  render()
  {

  }
</Child>
*/


// --> The lifecycle happens in the following order :-
// Parent Constructor()
// Parent Render()

// Child1 Constructor()
// Child1 Render()
// Child1 componentDidMount()

// Child2 Constructor()
// Child2 Render()
// Child2 componentDidMount()

// Parent componentDidMount()




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/



// B) componentDidMount()

// ==> It is called when the component and its children (if any) have already mounted into the webpage
// ==> Its use is the exact replica of the useEffect() hook in functional components (but never say it directly in the interviewS)
// ==> It is majorly used to make API calls
// ==> We do this because, we follow the approach of
// Loading --> Rendering components --> API call --> Rendering with data

// We want to render the component once, make an API call and then fill the data into the components
// We dont want to wait for the API to return the data to render the component, else the component will keep on waiting for the API to return data




//************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/




//C) Batching in React Lifecycles :-


/* Scenario 5 (Exceptional Scenario) :-
For a component with two or more child inside render()
--> It can be two instances of the same class (component) or two instances of different class (component)


<Parent>
  constructor()
  componentDidMount()
  render()
  {
    <Child1> ... </Child1>
    <Child2> ... </Child2>
  }
</Parent>


Every child has its own constructor(), render() and componentDidMount() functions

<Child>
  constructor()
  componentDidMount()
  render()
  {

  }
</Child>
*/





// --> The lifecycle happens in the following order :-


//WRONG ORDER :-
// Parent Constructor()
// Parent Render()
// Child1 Constructor()
// Child1 Render()
// Child1 componentDidMount()
// Child2 Constructor()
// Child2 Render()
// Child2 componentDidMount()
// Parent componentDidMount()



//Correct ORDER :-
// Parent Constructor()
// Parent Render()
// Child1 Constructor()
// Child1 Render()
// Child2 Constructor()
// Child2 Render()
// Child1 componentDidMount()
// Child2 componentDidMount()
// Parent componentDidMount()



// ==> It is not according to the order which we actually assumed
// ==> In case of multiple children inside a component, React optimizes the lifecycles in such a way such that the

// ==> For more info about React lifecycle method diagram, Go to https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/


//Key-points :-
// ==> When a component is mounted, it is mounted in two phases
// --> Render phase
// --> Commit phase
// (It is the reason why React is fast because it has two phases)




// During Mounting (Happens for every child, every parent in React) :-
// i) Render phase
// --> First the constructor is called then the render() is called

// ii) Commit phase
// --> React updates the DOM
// --> componentDidMount() is called (Best time to make an API call)




// For any component with multiple childs
// --> Parent constructor will be called
// --> Render() will be called

// Inorder to optimize React will batch the render phase of its child
// Hence, first all the children's RENDER PHASE will happen and then the COMMIT PHASE  will happen together


//        RENDER PHASE
//        First Child Lifecycle method starts
//        --> First Child constructor() is called
//        --> First Child render() is called

//        Second Child Lifecycle method starts
//        --> Second Child constructor() is called
//        --> Second Child render() is called


//        COMMIT PHASE
//        --> First Child componentDidMount()
//        --> Second Child componentDidMount()

// --> Parent componentDidMount() will be called









// Why does REACT Batches up the render() phase of all its children ?
// --> Because as soon as the COMMIT PHASE starts, React starts to update the DOM, which is the most costly process while loading a component
// --> In the RENDER PHASE, React is triggering the reconciliation and finding the difference between the virtual DOMs and getting the final updated virtual DOM ready
// --> When it tries to update the DOM, it batches all the children's RENDER PHASE which is very fast because Virtual DOM only deals with JS objects
// --> As the COMMIT PHASE takes time in updating the DOM, hence the RENDER PHASE being faster is done in a single batch

// NOW AFTER THE FINAL VIRTUAL DOM is ready, the RENDER PHASE ends.

// NOW THE DOM MANIPULATION in a single batch begins as the RENDER PHASE is over and this marks the beginning of the COMMIT phase

// --> After that React tries to batch up the COMMIT PHASE of all children and the parent itself together which is a heavy and slower task


// --> Hence it optimizes the performance of the React APP





