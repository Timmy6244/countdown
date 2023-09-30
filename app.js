const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec"];
const weekdays = [
		"sun",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Sat"];
const giveaway = document.querySelector('#giveaway');
const deadline =  document.querySelector('.deadline');
const elements = document.querySelectorAll('.deadline-format h3');

const tempDate  = new Date();
const year =  tempDate.getFullYear();
const getMonth = tempDate.getMonth();
const day = tempDate.getDate();

const futureDate =  new Date(year, getMonth, day + 60, 12, 0);
const hour =  futureDate.getHours();
const mins = futureDate.getMinutes();
// const secs =  futureDate.getSeconds();
let month = futureDate.getMonth();
month = months[month];
let weekday = futureDate.getDay();
weekday = weekdays[weekday];

const date =  futureDate.getDate();
// console.log(date);

giveaway.innerText = `Giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hour}:${mins}PM`;
const targetDate = futureDate.getTime();
// console.log(targetDate)
function getRemainTime(){
	const currentDate = new Date().getTime();

	// Time difference
	const timeDiff = targetDate - currentDate;
	// console.log(timeDiff);

	// I converted all to mili
	const oneDay = 24*60*60*1000;
	const oneHour = 60*60*1000;
	const oneMin = 60*1000;
	let days =  timeDiff / oneDay;
	days = Math.floor(days)
	const hours = Math.floor((timeDiff % oneDay) / oneHour);
	const  mins = Math.floor((timeDiff % oneHour) / oneMin);
	const seconds = Math.floor((timeDiff % oneMin) / 1000);
	// console.log(seconds)
	function format (item) {
		if (item < 10) {
		return item = `0${item}`
	}
		return item
	}
	const vals = [days, hours, mins, seconds] 
	elements.forEach((elem, index) => {
		elem.innerHTML = format(vals[index])
	});
	if (timeDiff < 0) {
		clearInterval(countDown);
		deadline.innerHTML = `<h4> sorry, this givaway has expired</h4>`

	}
	
}
var countDown = setInterval(getRemainTime, 1000);
getRemainTime()