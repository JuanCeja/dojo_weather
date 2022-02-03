var temperatureHigh = document.querySelector("#temperatureHigh");
var temperatureLow = document.querySelector("#temperatureLow");
var temperatureHigh1 = document.querySelector("#temperatureHigh1");
var temperatureLow1 = document.querySelector("#temperatureLow1");
var temperatureHigh2 = document.querySelector("#temperatureHigh2");
var temperatureLow2 = document.querySelector("#temperatureLow2");
var temperatureHigh3 = document.querySelector("#temperatureHigh3");
var temperatureLow3 = document.querySelector("#temperatureLow3");

function convert(){
    temperatureHigh.innerText = 75.2;
    temperatureLow.innerText = 64.4;
    temperatureHigh1.innerText = 80.6;
    temperatureLow1.innerText = 66.2;
    temperatureHigh2.innerText = 69.8;
    temperatureLow2.innerText = 60.8;
    temperatureHigh3.innerText = 78.8;
    temperatureLow3.innerText = 69.8;
}

var cookies = document.querySelector(".cookies");
var button = document.querySelector("#cookie-button")

button.addEventListener("click", () => {
    cookies.classList.remove("active");
})

setTimeout(() => {
    cookies.classList.add("active");
}, 2000);