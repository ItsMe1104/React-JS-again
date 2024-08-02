// A) API CALLS in Class-Based React Components :-

// --> We will use the github api to get the Github userinfo of some person
// --> Use the address :- https://api.github.com/users/USERNAME
// --> e.g :- https://api.github.com/users/ItsMe1104



// i) In functional Components
// ==> We always usefd the useEffect() hook with an empty dependency array before the return statement, along with some async function



useEffect(() => {
  fetchMenu();
}, [])

const fetchMenu = async () => {
  const data = await fetch("URL");
  const json = await data.json();
  console.log(json);
}




// ii) Class-based Components

// STEPS :-
// ==> We always make API calls inside the componentDidMount()
// ==> here we dont make separate async function, but we itself make the componentDidMount() as async
// ==> Then we simply fetch the data using fetch()
// ==> Then convert it using .json() method

/*
        async componentDidMount()
        {
            const data = await fetch("https://api.github.com/users/ItsMe1104");
            const json = await data.json();

            console.log(json);
        }

*/




//******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */




// B) UPDATING INFO RECEIVED FROM API CALLS INTO UI :-

// ==> Just like in functional components, we used Local State variables to update in UI, here we also need to do that


// STEPS :-
// First make a State variable using "this.state" inside constructor and fill it with dummy object and data
// Then use "this.setState()" to update the State variable with json data inside the componentDidMMount()
// Then destructure the required data from the State Variable inside the render() method before return statement
// Then use the destructured variables normally inside HTML tags with curly breaces



/*

   constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        avatar_url : null
        login: "Dummy",
        followers: "Default",
        following: "Default",
      }
    }
  }

  async componentDidMount() {

    const data = await fetch("https://api.github.com/users/ItsMe1104");
    const json = await data.json()
    this.setState({
      userInfo: json
    })

  }

  render() {

    const {avatar_url, login, followers, following } = userInfo;

    return <div className="user-card">
      <img src={avatar_url} alt="" />
      <h2>{login}</h2>
      <h3>Followers : {followers}</h3>
      <h3>Following : {following}</h3>
    </div >
  }
}

*/





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */



//Life Cycle of Mounting and Updating during API call :-


// Terms to know :-
// --> componentDidUpdate() :- It is called at the end of the UpdateCycle
// --> componentWillUnmount() :- It will be called just before the component is wiped out from the page (removing from UI) so that some other component is loaded



// MOUNTING cycle:-

// RENDER PHASE :-
// Parent constructor() is called
//   --> State variable was created with some default value
// Parent render() is called
//   --> The render() happens with a default value

// COMMIT PHASE :-
// React updates the DOM with a dummy data
// Parent componentDidMount() was called
//   --> Api call was made
//   --> setState() is called and hence,
// MOUNTING CYCLE ends, UPDATING CYCLE starts



// UPDATING cycle :-

// As soon as setState() is called, Updating cycle begins

// RENDER PHASE
// setState() updates the State variable
// Parent render() is called again
//   --> The render() happens with the updated value


// COMMIT PHASE :-
//  React updates the DOM with the updated data
//  Parent ComponentDidUpdate() will be called





// SUMMARY :-

/******
 *
 *
 * ---- MOUNTING ----
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 *
 * ComponentDidMount
 *      <API Call>
 *      <this.setState>
 *
 *
 *
 * ---- UPDATE ----
 * Render(API data)
 *      <HTML (new API data)>
 * ComponentDidUpdate
 */





//********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************** */


// componentWillUnmount()
// --> It will be called just before the component is wiped out from the page (getting removed from UI) so that some other component can be loaded

// --> It marks the end of the lifecycle of that component 