
function greetingFunction(time)
{
switch(time) {   
    case 00 >= time < 12: 
    console.log("good morning aaa") 
    break;
    case  time === 12:
        console.log("good noon")
        break;
    case 12 >  time < 18:
        console.log("good afternoon")
        break;
    case 18 >= time < 20:
        console.log("good evening")
        break;
    case 20 >= time < 00:
        console.log("good night")
        break;
    default:
        console.log("hours Invalid")
}

}
greetingFunction(00);