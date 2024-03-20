// Question :- What makes our Web app more Readable ?
// Answer :- JSX else it wa a pain to create elements using React.createElement





// 5) Putting React Element inside JSX (Element as well as Components):-

// --> Put any React Element (whether using React.createElement or JSX) in curly braces "{}"" inside JSX
// --> Since behind the scenes any React element is converted to JS object only which is a valid expression

//e.g1 (React element (jsx) inside React element(jsx)) :-
const ele1 = <div className="ele1">
  <h1>
    This is ele1.
  </h1>
</div>


const ele2 = <span className="ele2">
  {ele1}
</span>


//e.g1 (React element (jsx) inside component) :-
const ele3 = <div className="ele3">
  <h1>
    This is ele1.
  </h1>
</div>


const NewComponent = () => (
  <div className="NewComponent">
    <h2>
      We are inside the new component.
      {ele3}
    </h2>
  </div>
)



//*********************************************************************************************************************************************************************************************************************************************************************** */



//6) Putting components inside React Elements

//Since components also return a jsx , hence just call the component and the jsx it returns will get merged as the children of the React element

//component
const NewComponent2 = () => (
  <div className="NewComponent2">
    <h2>
      We are inside the new component.
    </h2>
  </div>
)

//component inside JSX (React Element)
const ele4 = <div className="ele4">
  <h1>
    This is ele1.
    <NewComponent2 />
  </h1>
</div>


//NOTE :- If in this case while declaring component inside React element
// --> We must declare the Component above the declaration of React Element
// --> This is because we declared the React Element as const, hence if we cannot use any value inside const which is not already declared




//*********************************************************************************************************************************************************************************************************************************************************************** */


//7) Infinite loop :- (VVI)
// --> If we define the component inside and element and that element inside the same component together, we will be trapped in an infinite loop while rendering
// --> It will crash the Browser, hence always avoid

// Experiment :-
// --> Still we have to write component above React element

//React element inside component 
const NewComponent3 = () => (
  <div className="ele24">
    <h2>
      We are inside the new component.
    </h2>
  </div>
)


//component inside JSX (React Element)
const ele5 = <div className="ele5">
  <h1>
    This is ele1.
    <NewComponent2 />
  </h1>
</div>



//*********************************************************************************************************************************************************************************************************************************************************************** */

// JSX provide security against malicious data which might come inside braces {} as a JS expression
// JSX prevents cross site scripting attacks also

//e.g :-

// const data = api.getData();

// --> If some user tries to send some malicious code using the api which gets executed inside our jsx
// --> This type of attack is known as Cross site scripting
// --> Hence the code can steal cookies, our data, local storage


// Internally JSX takes care of this injection attacks.
// It will escape it.
// JSX doesnt blindly execute every JS expression inside braces {}
// It first scans and then only executes it





//*************************************************************************************************************************************************************************************************************************************************************************** */


//8) Component function inside React Element (JSX)
// --> If we use the normal JS function syntax for calling a component
// --> Then inside JSX we, have to put it inside curly braces {}, unlike normal JSX tag syntax where we used that directly


//component
const NewComponent4 = () => (
  <div className="NewComponent3">
    <h2>
      We are inside the new component.
    </h2>
  </div>
)

//component inside JSX (React Element)
const ele6 = <div className="ele4">
  <h1>
    This is ele1.
    {NewComponent4()}
  </h1>
</div>

