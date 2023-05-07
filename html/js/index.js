console.log('Hello World!');

// document.getElementById("switchButton").onclick = 

function  changeTheme() {
    console.log("theme switch clicked");

    var theme;

    document.getElementById("myBody").classList.toggle("dark");

    if (document.getElementById("myBody").classList.contains("dark")) {
        // alert("dark theme");
        theme = "DARK";
    }else{
        // alert("light theme");
        theme = "LIGHT";
    }

    // save to local storage

    localStorage.setItem("PageTheme",JSON.stringify(theme));
    

};

let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
console.log(GetTheme);

if (GetTheme == "DARK") {
    document.getElementById("myBody").classList.add("dark");
}

console.log("testing.js loaded");

const overlay = document.querySelector('.overlay');
// const icon = document.querySelector('.fas.fa-info-circle');

// const icon = document.querySelector('.fa.fa-search.test1');

const icon = document.querySelector('.fa.fa-search');


const xMark = document.querySelector('.fa-solid.fa-xmark');

icon.addEventListener('click', function() {
  overlay.style.display = 'block'; /* Show the overlay */
});

xMark.addEventListener('click', function() {
  overlay.style.display = 'none'; /* Hide the overlay */
});


function searchPage(){
    console.log("searchPage() called");
    var searchValue = document.getElementById("searchInput").value;
    console.log("searchValue: " + searchValue);

    if (searchValue == "") {
        alert("Please enter a search term");
        return;
    }else if(searchValue == "home" ||searchValue == "about" || searchValue == "services" || searchValue == "contact" || searchValue == "blog" || searchValue == "landing" || searchValue == "contact" || searchValue == "home page" ||searchValue == "about page" || searchValue == "services page" || searchValue == "contact page" || searchValue == "blog page" || searchValue == "landing page" || searchValue == "contact page" ) {
        window.location.href = "search.html?search=" + searchValue;
    }else {
        window.location.href = "searchNothing.html";
    }
}

function searchPageNothing(){
  console.log("searchPage() called");
  var searchValue = document.getElementById("searchInputNothing").value;
  console.log("searchValue: " + searchValue);

  if (searchValue == "") {
      alert("Please enter a search term");
      return;
  }else if(searchValue == "home" ||searchValue == "about" || searchValue == "services" || searchValue == "contact" || searchValue == "blog" || searchValue == "landing" || searchValue == "contact" || searchValue == "home page" ||searchValue == "about page" || searchValue == "services page" || searchValue == "contact page" || searchValue == "blog page" || searchValue == "landing page" || searchValue == "contact page" ) {
      window.location.href = "search.html?search=" + searchValue;
  }else {
      alert("No results found for ' " + searchValue + " '");
  }
}

