function primeNumber( num )
{
    let count = 0, prime ;
    for ( let i = 1 ; i <= num; i++ )
    {
        if ( num % i === 0)
        {
            count = count + 1;
        }
    }
    if ( count > 2)
    {
        return "not prime number"
    }
    else 
    {   
        prime = num ;
        return prime
        
    }
}
var primeNum = primeNumber( 37 )
console.log("prime number :", primeNum );