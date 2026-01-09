const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

const weekDays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const today = new Date();

console.log(today);

date.innerHTML = (today.getDate()<10?'0':'')+today.getDate();
day.innerHTML = weekDays[today.getDay()];
month.innerHTML = monthsName[today.getMonth()];
year.innerHTML = today.getFullYear();