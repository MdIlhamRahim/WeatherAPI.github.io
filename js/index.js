var temps = document.getElementById("temperature");
var humid = document.getElementById("humidity");
var weath = document.getElementById("weather");
var image = document.getElementById("weather-img");
var city = document.getElementById("cityName");
var bttn = document.querySelector(".bttn");
var inputValue = document.getElementById("inputValue");
var vis = document.getElementById("visi");
var hid = document.getElementById("hidd");


bttn.addEventListener("click" , function(){
    if(inputValue.value === ""){
        alert("Please enter city")
       
       }
    else{
        progressLoad();
        showVis()
        getWeather();
    }       

    
})  

function getWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputValue.value+"&appid=4cf0f0364c76a74896e17cb6bd52582f&units=metric")
    .then(response => response.json())
    .then(data => {
        
        city.innerHTML = data['name'];
        
        
        temps.innerHTML =Math.round( data['main']['temp']) + ' °C';
        weath.innerHTML = data['weather'][0]['description'];
        humid.innerHTML = data['main']['humidity'];

        
    })

     .catch(err => alert("Invalid City"))
}     
    

function showVis() {
    vis.style.visibility = 'hidden';
    hid.style.visibility = 'visible';
}

function progressLoad(){

    
}