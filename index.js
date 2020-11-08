// write your code below!

function happyHolidays () {
	return `Happy holidays!`
}

function happyHolidaysTo (name) {
	return `Happy holidays, ${name}!`
}

function happyCustomHolidayTo (holiday, name) {
	return `Happy ${holiday}, ${name}!`
}

function holidayCountdown (holiday, days) {
	return `It's ${days} days until ${holiday}!`
}

console.log(happyHolidays("shelby"))

console.log(happyCustomHolidayTo("sandwich day", "shelby"))

console.log(holidayCountdown("sandwich day", 6))
