let currentDate = new Date()

// current event banner
currentWeekDay = currentDate.getDay()
banner = document.getElementById("currentevent")
if (currentWeekDay == 5) {
  banner.classList.add("friday")
}

// nav
function navMenu() {
  document.getElementById("nav-menu").classList.toggle("hidden");
}

// footer
const months = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let formattedDate = weekdays[currentDate.getDay()] + ", " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear()
document.getElementById('current-date').textContent = formattedDate;
