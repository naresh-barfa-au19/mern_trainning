var dt = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("day").innerHTML = dt.getUTCDate();
document.getElementById("month").innerHTML = months[dt.getMonth()];
document.getElementById("year").innerHTML = dt.getFullYear();

setInterval(() => {
  let dt = new Date();
  document.getElementById("time").innerText = dt.toLocaleTimeString();
}, 1000);
