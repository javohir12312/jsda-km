let elForm = document.querySelector(".site-form");
let elInput = document.querySelector(".site-input");

let elP = document.querySelector(".result")
let elPeople = document.querySelector(".result-people");
let elBike = document.querySelector(".result-bike");
let elCar = document.querySelector(".result-car");
let elTrain = document.querySelector(".result-train");

let people = 7; 
let bike = 12;
let car = 15;
let train = 25;
 

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();
    
  var peopleKm = (Math.floor(elInput.value / people));
  var bikeKm = (Math.floor(elInput.value / bike));
  var carKm = (Math.floor(elInput.value / car));
  var trainKm = (Math.floor(elInput.value / train));

  if (elInput.value > 0) {
  elPeople.textContent = `${peopleKm} hours`;
  elBike.textContent = `${bikeKm} hours`;
  elCar.textContent = `${carKm} hours`;
  elTrain.textContent = `${trainKm} hours`;
  }

})