const urlParams = new URLSearchParams(window.location.search);
const search = urlParams.get('search').toLocaleLowerCase() ;
console.log("search for : " + search);

var searchSpan = document.createElement("span");
searchSpan.innerHTML = search;
document.getElementById("searchHeader").appendChild(searchSpan);

// const header = document.getElementById('navbar');
// const height = header.offsetHeight;
// console.log(height);

// document.getElementById("myBody").style.paddingTop = height + "px";

function createSearchElement(search) {
    console.log("createSearchElement() called");
    var searchElement = document.createElement("h3");
    searchElement.classList.add("searchElement");
    searchElement.style.fontSize = "30px";
    searchElement.style.fontWeight = "500";
    searchElement.innerHTML = search;
    document.getElementById("searchResults").appendChild(searchElement);
}

function searchPageSearch() {
    console.log("searchPage() from serach.js called");

    if(search == "home" ||search == "about" || search == "services" || search == "contact" || search == "blog" || search == "landing" || search == "contact" ) {
        createSearchElement(search + " page");
    } else if(search == "home page" ||search == "about page" || search == "services page" || search == "contact page" || search == "blog page" || search == "landing page" || search == "contact page" ) {
        createSearchElement(search);
    }
}

searchPageSearch();

