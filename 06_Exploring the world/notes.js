// Monolith vs Microservice Architecture :-

// i) Monolith :-
// ==> Traitionally all the apps were developed using the monolith architecture
// ==> There was a huge project and inside that all the different services code were present
// ==> like API, UI, Authntication, DB connection, SMS sending, etc
// ==> Every depeloper had to work in the same repository
// ==> Hence, for doing any minor change in one of the service, we would have to compile and deploy the whole bulky code altogether
// ==> In monolith architecture, the same tech stack had to be used for all the services




// ii) Microservices :-
// ==> In today's time, world is moving towards microservice architecture
// ==> All services were independent
// ==> All micro services combined together formed the big app.
// ==> This is known as "separation of concerns" and "single responsibility principle", where each and every service has its own job
// ==> All the teams work on their own independent service
// ==> All the services iteract with each other inorder for the app to work
// ==> Our React project is just a small UI microservice
// ==> We can have different tech stacks for different services
// ==> How the services are connected ?
// ==> All the services run on their own specific ports
// ==> e.g :-
// --> 1234 == UI
// --> 1000 == Backend
// --> 1279 == DB connection

// ==> All these ports are mapped to Domain Name
// --> Backend :- /api
// --> UI :- /
// --> DB connedction :- / db

// ==> How do they interact?
// --> They make a call to the required URL


//**************************************************************************************************************************************************************************************************************************************************************************************************************************************** */

//In this chapter :- we will see how React / UI app talk to different microservices like backend, etc




// There are two approaches how webapps fetch the data from backend


// 1) Approach 1 (POOR UX) :- When our app loads, we make an API call and we wait till we get back the data and then we render the UI
//   LOADS --> API ---> Render


// 2) Approach 2 (Better UX) :- )When our app loads, we will render our UI, then we make an API call and as soon as we get back the data from API, we will now rerender our app with the new data
//    LOADS --> Render (skeleton) --->  API  ----> Render (with actual data)




// NOTE :- In REACT we always use the second approach, even though we overcomplicated the process
// Reason :- Better UX as the user can atleast see the skeleton on the page and then slowly the website loads
// React has one of the best and fast render mechanisms with very fast render cycles and hence we dont bother about an extra render