/*const daynames = [
   "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "Julay",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();

const fulldate = `${dayName}, ${d.get Date()} ${monthName} ${year}`;

document.getElementById("currentDate").textContent = fulldate;
*/
const options = {
    weekday: 'long',
     day: 'numeric',
      month: 'long',
       year: 'numeric'
    };
document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', options);