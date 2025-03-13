// Regular expression can be use for searching and | verifying

// const str = "Abdul Basit";
// const s = str.search("Abdul Basit");
// console.log(s);


// const p = str.search(/abdul Basit/i)  //it is pattern b/w (//) not a string | i is flag search  caseinsensitive
// console.log(p);
// flags -> i|g|m

// const name2 = "Mansoor";
//  const n = name2.search(/mans(oo|u)r/i);
//  console.log(n);
 //for more detail visit ->regexr.com

//  search for cheatsheat ->it is for all info in one page

 //for valid string 
//  const  f = name2.search(/[a-z]/i) // a to z
//  const  fe = name2.search(/[a-z]\s[a-z]/i) //  for first name one space and last name
//  const  fes = name2.search(/[a-z]\s*[a-z]/i) //  for first name one space and last name

/////////////Rest & Spread Opreater//////////////////
// spread operator cancartenate two arrays and also objects
// const list1 = [3,4,54,2,32,32,12,];
// const list2 = [0,9,3,4,52,1,233,...list1, 445];
// console.log(list2);

// const obj1 ={
//     name: "ali",
//     fName: "Khan",
//     address: "Peshawar"
// }

// const obj2 = {
//     ...obj1,
//     gpa: 4.0,
//     semester: "6th",
// }
// console.log(obj2);

//////////////Math Functions//////////////////////////
// const test1 = 344;
// const str = test1.toString();
// console.log(typeof(str));
//  const num = 23.555444;
//  const fix = num.toFixed(2);
//  console.log(fix);

//  const num1 = Math.ceil(num)
//  const num2 = Math.floor(num)
//  console.log(num1,num2);
// for(let i = 0; i < 50; i++){
// const ran = Math.random();
// console.log(Math.floor(ran*6) + 1);
// }

function randomNum(max, min){
    return Math.floor(Math.random() * (min - max + 1) + min)
}
console.log(randomNum(1, 6));