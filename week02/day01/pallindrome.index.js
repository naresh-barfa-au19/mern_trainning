var str = "mom";
function reversestr( string1  )
{   
    var arr = string1.split('');
    let new_arr = [];
    for (let i =arr.length ; i >=0 ; i --)
    {
      new_arr.push(arr[i]);
    }   
    
    return new_arr.join('')

}

var revstr = reversestr( str )
 console.log('reverse sting = ', revstr)
 if ( revstr === str )
 {
     console.log(str ,'string IS  pallindrome');
 }
 else
 {
     console.log('strings are NOT pallindrome');
 }
