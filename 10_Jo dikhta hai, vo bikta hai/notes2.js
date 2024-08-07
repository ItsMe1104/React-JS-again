// 1) Pros and Cons of Tailwind CSS :-

// PROS :-
// --> We dont have to move between files
// --> It also gives us prebuilt components like bootstrap that we can use directly
// --> Very lightweight, hence when parcel will make the bundle of CSS, it will only include the CSS that is required on our webpage
// --> No matter how many times we use a specific class in our app, it will be included only once
// --> It keeps the bundle size small
// --> Use to build complex UI
// --> Redundant css shipped to production is minimised (if one developer already made a green button, other developer could not find out and made his own green button, hence redundancy included)
// --> Very easy to make the app in dark mode using "dark:"
// --> e.g :- classname = "text-slate-500 dark:text-slate-400"



// CONS :-
// --> Might have a long learning curve
// --> When we have to apply lots of CSS to our elements, we have to write classes for each and every small thing which makes our code look ugly
// --> Code becomes less ugly