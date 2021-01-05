function hourFomate(number) {
    let hours, minutes, seconds;
    if(!number || number < 0 || number === undefined || typeof number !== 'number') {
        return "Invalid input"
    }
    if(number < 60) {
        seconds = number
    } else {
        seconds = number % 60
    }
    let a = number / 60
    if(a < 60) {
        minutes = a
    } else {
        minutes = a % 60
    }
    if(number >= 3600) {
        hours = number / 3600
    } else {
        hours = 00
    }
    return {
        hours: formatNumber(hours),
        minutes: formatNumber(minutes),
        seconds: formatNumber(seconds)
    }
}
var input = 3609;
const outFunction = hourFomate(input)
console.log("input = ",input)
console.log("hour format = ",outFunction.hours," : ",outFunction.minutes," : ",outFunction.seconds)
function formatNumber(num) {
    let out;
    if(num <= 9) {
        out = '0'+ parseInt(num);
    }
    else out = parseInt(num);
    return out
}