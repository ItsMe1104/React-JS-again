// IGNITING our react app using parcel
// --> using parcel in our app / code files




// 1) use command "npx parcel source_file"

// *) source_file = index.html (here)
// *) npx = node package executor :- to execute a package


//parcel will create a server for us and our app will be hosted in a localhost port.

//parcel goes to the source file, (here index.html) and builds a development build and hosts it in the localhost server





// 2) Remove all the cdn links (script tags) from html inside body tag
// --> not a good practice to fetch react and react-dom from cdn links
// --> since its a costly operation to fetch from cdns as we have to make a network call to get React into our app
// --> we will have to keep changing the url of cdn links since a specific version of package (here react) is present on them
// --> If we want to upgrade the package, we would have to keep updating the urls

