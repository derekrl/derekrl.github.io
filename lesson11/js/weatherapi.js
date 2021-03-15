const apiURLCurrent =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=c52a08839dea168bd8ac1f197c2f6a78&units=imperial";
const apiURLForecast =
  "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=c52a08839dea168bd8ac1f197c2f6a78&units=imperial";
// expansion for other city pages: pass parameter to function, switch statement to get city ID

fetch(apiURLCurrent)
  .then((response) => response.json())
  .then((jsObject) => {
 
    let curTemp = jsObject.main.temp;
    let curWind = jsObject.wind.speed;

    if (curTemp <= 50 && curWind >= 3) {
      let windFactor = Math.pow(curWind, 0.16);
      windChill =
        35.74 +
        0.6215 * curTemp -
        35.75 * windFactor +
        0.4275 * curTemp * windFactor;
      document.getElementById("sum-windchill").innerText = Math.round(
        windChill
      );
    } else {
      document.getElementById("sum-windchill").innerText = "N/A";
      document.getElementById("sum-windchill").nextSibling.innerText = null;
    }

    document.getElementById("sum-condition").textContent =
      jsObject.weather[0].main;
    document.getElementById("sum-high").textContent = Math.round(
      jsObject.main.temp_max
    );
    document.getElementById("sum-humid").textContent = jsObject.main.humidity;
    document.getElementById("sum-wind").textContent = Math.round(curWind);
  });

fetch(apiURLForecast)
  .then((response) => response.json())
  .then((jsObject) => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const forecast = jsObject["list"].filter((day) =>
      day.dt_txt.includes("18:00:00")
    );

    for (let i = 0; i < 5; i++) {
      let day = forecast[i];
      
      let date = new Date(day.dt_txt);
      let weekday = weekdays[date.getDay()];
      document.querySelector(
        `#fiveday thead>tr>th:nth-child(${i + 1})`
      ).innerText = weekday;

      let imagesrc = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
      let desc = day.weather[0].description;
      document
        .querySelector(`#fiveday tbody>tr>td:nth-child(${i + 1}) img`)
        .setAttribute("src", imagesrc);
      document
        .querySelector(`#fiveday tbody>tr>td:nth-child(${i + 1}) img`)
        .setAttribute("alt", desc);

      document.querySelector(
        `#fiveday tbody>tr>td:nth-child(${i + 1}) span`
      ).innerText = `${Math.round(day.main.temp)}`;
    }
  });
