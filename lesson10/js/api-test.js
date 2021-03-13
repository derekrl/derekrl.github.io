const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c52a08839dea168bd8ac1f197c2f6a78&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    
    let imagesrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    let desc = jsObject.weather[0].description;
    
    document.getElementById("current-temp").textContent = jsObject.main.temp;
    document.getElementById("imagesrc").textContent = imagesrc;
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);

  })