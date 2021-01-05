
function greetingFunction(time)
{
switch(  time ){
    
    case 01:
    case 02:
    case 03:
    case 04:
    case 05:
    case 06:
    case 07:
    case 08:
    case 09:
    case 10:
    case 11:
        console.log("good morning")
        break;
    case 12:
        console.log("good noon")
        break;
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
        console.log("good after noon")
        break;
    case 19:
    case 20:
    case 21:
    case 22:
        console.log("good evening")
        break;
    case 23:
    case 00:
        console.log("good night")
        break;
    default:
        console.log("Invalid hours")
    
}

}
greetingFunction(13);
