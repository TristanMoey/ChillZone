
// SELECT ELEMENTS
const iconElement = document.querySelector(".weather-icon");
const tempElement = document.querySelector(".temperature-value p");
const descElement = document.querySelector(".temperature-description p");
const locationElement = document.querySelector(".location p");
const notificationElement = document.querySelector(".notification");
const whyask = document.querySelector(".why-location");

// App data
const weather = {};

weather.temperature = {
    unit : "celsius"
}

// APP CONSTS AND VARS
const KELVIN = 273;
// API KEY
const key = "82005d27a116c2880c8f0fcb866998a0";

// CHECK IF BROWSER SUPPORTS GEOLOCATION
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
}

// SET USER'S POSITION
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    
    getWeather(latitude, longitude);
}

// SHOW ERROR WHEN THERE IS AN ISSUE WITH GEOLOCATION SERVICE
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> Location Permission Denied </p>`;
    whyask.style.display = "block";
}

// GET WEATHER FROM API PROVIDER
function getWeather(latitude, longitude){
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
        .then(function(){
            displayWeather();
        });
}

// DISPLAY WEATHER TO UI
function displayWeather(){
    
    tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}

// C to F conversion
function celsiusToFahrenheit(temperature){
    return (temperature * 9/5) + 32;
}

// WHEN THE USER CLICKS ON THE TEMPERATURE ELEMENET
tempElement.addEventListener("click", function(){
    if(weather.temperature.value === undefined) return;
    
    if(weather.temperature.unit == "celsius"){
        let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        
        tempElement.innerHTML = `${fahrenheit}°<span>F</span>`;
        weather.temperature.unit = "fahrenheit";
    }else{
        tempElement.innerHTML = `${weather.temperature.value}°<span>C</span>`;
        weather.temperature.unit = "celsius"
    }
});


function playPause(){

  document.getElementById('music').paused
  ? document.getElementById('music').play()
  : document.getElementById('music').pause()

  document.querySelector('.audio-wire-1').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-1').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-1').style.animationPlayState = "paused"
  
  document.querySelector('.audio-wire-2').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-2').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-2').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-3').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-3').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-3').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-4').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-4').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-4').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-5').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-5').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-5').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-6').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-6').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-6').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-7').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-7').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-7').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-8').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-8').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-8').style.animationPlayState = "paused"

  document.querySelector('.audio-wire-9').style.animationPlayState === "paused"
  ? document.querySelector('.audio-wire-9').style.animationPlayState = "running"
  : document.querySelector('.audio-wire-9').style.animationPlayState = "paused"
}


//! Internet speed calculator //
var imageAddr = "http://www.kenrockwell.com/contax/images/g2/examples/31120037-5mb.jpg"; 
var downloadSize = 4995374; //bytes

function ShowProgressMessage(msg) {
    if (console) {
        if (typeof msg == "string") {
            console.log(msg);
        } else {
            for (var i = 0; i < msg.length; i++) {
                console.log(msg[i]);
            }
        }
    }
    
    var oProgress = document.getElementById("progress");
    if (oProgress) {
        var actualHTML = (typeof msg == "string") ? msg : msg.join("<br />");
        oProgress.innerHTML = actualHTML;
    }
}

function InitiateSpeedDetection() {
    ShowProgressMessage("Testing Speed...");
    window.setTimeout(MeasureConnectionSpeed, 1);
};    

if (window.addEventListener) {
    window.addEventListener('load', InitiateSpeedDetection, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', InitiateSpeedDetection);
}

function MeasureConnectionSpeed() {
    var startTime, endTime;
    var download = new Image();
    download.onload = function () {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function (err, msg) {
        ShowProgressMessage("Connection Error");
    }
    
    startTime = (new Date()).getTime();
    var cacheBuster = "?nnn=" + startTime;
    download.src = imageAddr + cacheBuster;
    
    function showResults() {
        var duration = (endTime - startTime) / 1000;
        var bitsLoaded = downloadSize * 8;
        var speedBps = (bitsLoaded / duration).toFixed(2);
        var speedKbps = (speedBps / 1024).toFixed(2);
        var speedMbps = (speedKbps / 1024).toFixed(2);
        ShowProgressMessage([
            
           // "Your connection speed is:", //
            
          
            speedMbps + " Mbps"
        ]);
    }
}

//! Internet speed calculator //

//! frames sec calculator//

// Options
const outputEl = document.getElementById('fps-output');
const decimalPlaces = 2;
const updateEachSecond = 1;

// Cache values
const decimalPlacesRatio = Math.pow(10, decimalPlaces);
let   timeMeasurements = [];

// Final output
let fps = 0;

const tick = function() {
  timeMeasurements.push(performance.now());
  
  const msPassed = timeMeasurements[timeMeasurements.length - 1] - timeMeasurements[0];
  
  if (msPassed >= updateEachSecond * 1000) {
    fps = Math.round(timeMeasurements.length / msPassed * 1000 * decimalPlacesRatio) / decimalPlacesRatio;
    timeMeasurements = [];
  }

  outputEl.innerText = fps;

  requestAnimationFrame(() => {
    tick();
  });
}

tick();

//! frames sec calculator//

var size = [window.width,window.height];  //public variable

$(window).resize(function(){
  window.resizeTo(size[0],size[1]);
});

