var arr = ['naresh','barfa','barfa','dinesh','kag','barfa','day0201'];
console.log(arr.length);
var i;
var new_arr = [];
for ( i=0; i<arr.length; i++){
    if(!new_arr.includes(arr[i])) {
        new_arr.push(arr[i])
    }
}
console.log(new_arr);

