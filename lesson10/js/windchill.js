let curTemp = document.getElementById("sum-high").innerText;
let curWind = document.getElementById("sum-wind").innerText;

if ((curTemp <= 50) && (curWind >= 3)) {
  let windFactor = (Math.pow(curWind, 0.16));
  windChill=35.74+(0.6215*curTemp)-(35.75*windFactor)+(0.4275*curTemp*windFactor);
  document.getElementById("sum-windchill").innerText=Math.round(windChill);
} else {
  document.getElementById("sum-windchill").innerText="N/A";
  document.getElementById("sum-windchill").nextSibling.innerText=null;
}
