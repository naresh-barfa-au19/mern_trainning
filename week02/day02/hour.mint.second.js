var number = 3600;
if(number<=60){
        console.log("seconds are ", parseInt(number))
}else{
        second = number%60;
        console.log("seconds are ", parseInt(second))
}
var n = number/60;
if(n > 59){
        var  mints = n%60;
        console.log("mints are ", parseInt(mints))
}else{
        console.log("mints are  ", parseInt(n))
}
if (number >= 3600){
        var  hours = number/60/60;    
        console.log("hours are ", parseInt(hours))
}else{
        console.log("hours are 00")
}