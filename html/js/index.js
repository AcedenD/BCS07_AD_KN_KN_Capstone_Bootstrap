console.log('Hello World!');

document.getElementById("switchButton").onclick = function () {
    console.log("theme switch clicked");

    document.getElementById("myBody").classList.toggle("dark");
};

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
