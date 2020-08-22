for (let i = 1; i <= 5 ; i ++)
 {
    let str = ''
    for (let k = 1; k <= 5 ; k ++)

     { 
         if(k<=i)
         {

             str += "*"
         } else{
            str += "$"
         }
         

         
     }
       
        console.log(str)
}