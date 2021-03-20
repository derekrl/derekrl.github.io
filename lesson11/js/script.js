let currentDate = new Date()

// current event banner
currentWeekDay = currentDate.getDay()
banner = document.getElementById("currentevent")
if (currentWeekDay == 6) {
  banner.classList.add("saturday")
}

// nav
function navMenu() {
  document.getElementById("nav-menu").classList.toggle("hidden");
}

// storm center severity label
function severityLabel(value) {
  document.getElementById("severity-rating").innerHTML = value;
}

// footer
const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let formattedDate = weekdays[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear()
document.getElementById("current-date").textContent = formattedDate;
