function rangPrimeNumber( num1 , num2 )
{   
    let resultPrime = " "
    for( let i = num1 ; i <= num2 ; i++)
    {   
        if ( typeof primeNumber(i) === 'number' )
        {
        resultPrime = resultPrime + " "+ primeNumber( i )
        }
    }
    return resultPrime
}
var inputs = rangPrimeNumber( 1 , 47 )
console.log(  inputs )

function primeNumber( num )
{
    let count = 0;
    for ( let i = 0 ; i <= num; i++ )
    {
        if ( num % i === 0)
        {
            count = count + 1;
        }
    }
    if ( count <= 2)
    {
        return num
    }

}