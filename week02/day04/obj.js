var arr = [
  "dinesh",
  25,
  523,
  "A+",
  "naresh",
  24,
  560,
  "A",
  "ramesh",
  31,
  360,
  "c",
];

function studentdata(data) {
  let newArr = [];
  for (let i = 0; i < data.length; i = i + 4) {
    let student = {
      name: data[i],
      age: data[i + 1],
      marks: data[i + 2],
      result: data[i + 3],
    };
    newArr.push(student);
  }
  return newArr;
}
// array of object = newArr
// array of elements = arr
let arrObj = studentdata(arr);

let mapResult = arrObj.filter(function (item) {
  if (item.name === "dinesh") {
    return item;
  }
});

let mapResult2 = arrObj.filter(item => item.age > 24 && item.result === "A+");
let mapResult3 = arrObj
  .filter(item => item.marks > 400)
  .map(item => item.age)
  .reduce((curr, prev) => curr + prev, 0);

console.log(mapResult3);
