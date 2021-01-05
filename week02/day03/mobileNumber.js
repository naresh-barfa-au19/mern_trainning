function mobileNumber( number )
{   
     if(!number || number < 0 || number === undefined || typeof number !== 'number') {
        return "Invalid input, please enter valid phone number :) "
    }
    return numLength( number )
}
var phoneNum = 7219995596
console.log(" input number :", phoneNum )
var phoneNumber = mobileNumber( phoneNum )
console.log( " out put :",phoneNumber )
function numLength(num)
{   let lessDigitNum = "" + num;
   // console.log(" size of  phone number", lessDigitNum.length)
    if ( lessDigitNum.length !== 10 )
    {
        lessDigitNum = " please Enter 10 digit number :) "
    }
    else lessDigitNum = num ;
    return lessDigitNum 
}