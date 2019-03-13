
// current date
var today = new Date();

// get full year
var fullYear = today.getFullYear();

// get month
var monthNumber = today.getMonth();

var monthNames = new Array(12);
monthNames[0] = 'January'
monthNames[1] = 'February'
monthNames[2] = 'March'
monthNames[3] = 'April'
monthNames[4] = 'May'
monthNames[5] = 'June'
monthNames[6] = 'July'
monthNames[7] = 'August'
monthNames[8] = 'September'
monthNames[9] = 'October'
monthNames[10] = 'November'
monthNames[11] = 'December'

var month = monthNames[monthNumber];

// day of week
var dayOfWeekNumber = today.getDay();

var dayNames = new Array(7);
dayNames[0] = 'Sunday'
dayNames[1] = 'Monday'
dayNames[2] = 'Tuesday'
dayNames[3] = 'Wednesday'
dayNames[4] = 'Thursday'
dayNames[5] = 'Friday'
dayNames[6] = 'Saturday'
dayNames[7] = 'Sunday'

var dayOfWeek = dayNames[dayOfWeekNumber];

var fullDate = dayOfWeek + ', ' + month + ' ' + today.getDate() + ', ' + fullYear;

document.getElementById("currentDate").innerHTML = fullDate;

console.log(fullDate);