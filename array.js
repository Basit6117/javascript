// let marks = [23,45,66,7,90,50,67,32,23,56]

// map
// const fail = marks.filter((value) => {
//     return value > 30;
// })
// console.log(fail);
//filter
// const square = marks.map((value) => value > 30 ? value : value * value);    
//     console.log(square);

//reduce
// const sum = marks.reduce((a , b = 0) => a + b);
// console.log(sum);
    
//find

//fill

//sort

// let list2 = [20,1,6,9,3,40,7];
//for single digit
// const sort = list2.sort();

// multi digit
// ascending order
// const sort = list2.sort((a,b) => a - b)

//desecing order
// const sort = list2.sort((a,b) => b - a)\
// console.log(sort);

// chaining
// let marks = [45,5,76,23,90,80,45,32];


  // let sum =  marks
  //   .sort((a , b) => a - b)  //mutable
  //   .filter((n) => n > 50)   //immutable
  //   .map((n) => n + 1)       //mutable
  //   // .forEach((n) => {console.log(n)})
  //   .reduce((a, b)=> a + b, 0);

  //   console.log(sum);

    // const l = marks.indexOf(23);

    // if(l == -1){
    //   marks.push(100);
    // }
    // console.log(l);

    // console.log(marks);
    // (marks.indexOf(90) === -1 ? marks.push(90) : marks.pop())

// let list1 = [3,4,5,7,9,0,13,4,566,78];

// const list2 = [4,6,7,9,8,7,65,33,12,33,334]
//cancate add list 2 at the end of list1 array
// const fullList = list1.concat(list2);
// console.log(fullList);


//to check all values are same 
//  const arr = [10,10,10,10,10,10,10];
//  arr.every(10)   // will return true 


const student = {
  name: "Abdul Basit",
  marks: 89,
  isPass: true,
  address: {
    country: "Pakistan",
    province: "KPK",
    city: "Peshawar",
    village: "Regilalma"
  } 
  
}

//Destructuring
// const {name, address} = student;
// console.log(address.country,name);

//if wanna  add 10 extra marks to the marks so how 

// changeMarks(student);

// const changeMarks = (obj) => {
//here we only need marks to change but we pass the whole object 
// so we will do destructuring -> two types of destructuring  array and object destructuring below is object

// const changeMarks = ({marks,address}) => {
//   obj.marks = 98;
// }

// const greet = "hello world !";
// const l2 = "this is new line";

// const line3 = `${greet} ${l2}`;
//  console.log(line3); 
//  const line4  = l2.replace("line","karkha");
//  console.log(line4);

const country = "My country is Pakistan";

let key = "Pakistan";

const countr = country.slice(country.indexOf(key), country.length);

console.log(countr);

//split is used to extract values from string in php it is called explode

// const string = "1, Abdul Basit, Peshawar, Regilalma";
// const [id, name, city, village] = string.split(",");

// console.log(id);
// console.log(name);
// console.log(city);
// console.log(village);

//////the split function delimater(end with ",") and after "," we have space so the when we print will have extra space so we use trim()
// trim()
const name1 = " Abdul Basit";
name1.trim();  //finish spaces from left and right if  want (trimLeft() | trimRight() also used )