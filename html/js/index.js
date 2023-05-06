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
