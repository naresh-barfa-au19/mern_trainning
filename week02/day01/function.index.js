var str1 = 'cathrin';
var str2 = 'caroline';
var str3 = 'naresh';
var str4 = 'dinesh';



function hummingdis( input1, input2){
    let count = 0;
    let arr1 = input1.split("");
    let arr2 = input2.split("");
    if (arr1.length === arr2.length){
        console.log("Same Length")
        for (let i = 0 ; i < arr1.length ; i++) {
             if (arr1[i] === arr2[i]) {
                count = count + 1 ;
             }
         }
    } else {
        console.log("Length is not same")
    }
    return count ;
}
 var dis = hummingdis("123","124")
 console.log("humming distance is ",dis)
 