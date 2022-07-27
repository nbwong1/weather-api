var today = moment().format("l");
$("#todays-date").text(today);
console.log(today);

var todayPlusOne = moment().add(1, 'days').format("l");
$("#today-plus-one").text(todayPlusOne);
console.log(todayPlusOne);

var todayPlusTwo = moment().add(2, 'days').format("l");
$("#today-plus-two").text(todayPlusTwo);
console.log(todayPlusTwo);

var todayPlusThree = moment().add(3, 'days').format("l");
$("#today-plus-three").text(todayPlusThree);
console.log(todayPlusThree);

var todayPlusFour = moment().add(4, 'days').format("l");
$("#today-plus-four").text(todayPlusFour);
console.log(todayPlusFour);

var todayPlusFive = moment().add(5, 'days').format("l");
$("#today-plus-five").text(todayPlusFive);
console.log(todayPlusFive);

// variables for city search
var cityInput = document.querySelector("#city-text");
var citySearchForm = document.querySelector("#city-form");
var cityList = document.querySelector("#city-list");
var cityCountSpan = document.querySelector("#city-count")

var cities = [];

// saving the last searched city info in local storage
function renderCities() {
    cityList.innerHTML = "";
    cityCountSpan.textContent = cities.length;

    for (var i = 0; i < cities.length; i++) {
        var city = cities[i];

        var button = document.createElement("li");
        li.textContent = city;
        li.setAttribute("data-index", i);

        cityList.appendChild(li);
    }
}

function init() {
    var storedCities = JSON.parse(localStorage.getItem("cities"));

    if (storedCities !== null) {
        cities = storedCities;
    }

    renderCities();
}

function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

citySearchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var cityText = cityInput.value.trim();

    if (cityText === "") {
        return;
    }

    cities.push(cityText);
    cityInput.value = "";

    storeCities();
    renderCities();
});

init()