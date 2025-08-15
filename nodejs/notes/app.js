// const uuid = require('uuid')
// const {faker}  = require('@faker-js/faker')
// var shuffle = require('shuffle-array'),
// collection = [1,2,3,4,5];
 
// shuffle(collection);
 
// console.log(collection);

// console.log(uuid.v4());

// console.log(faker.internet.email());
// console.log(faker.person.fullName());


//////////////////////////Important//////////////////////////////////////
// if i delete node_module folder so there will be no problem we have a recipie in package.json
// we just run a commond "npm install" it will install all the module similarly if we push it 
// so no need to push node_module others will install it
//if i want to push except node_module file so we will create ".gitignore" file and write in it the path of node_module


/////////////////2nd toturial/////////////////////////////////////////////

const fs = require('fs');

// fs.readFile('read.txt','utf8',(err,data)=>{
//     console.log(data);
// })
const obj = {
    name: 'ali',
    age: 19,
    addess:{
        country: 'Pakistan',
        state: "kpk",
        city: "peshawar",
        village: "regi lalma"
    }
}
fs.writeFile('read.txt',JSON.stringify(obj),(err, data)=>{
    if(err) return;
    console.log('file saved');
})
fs.readFile('read.txt','utf-8',(err,data)=>{
    const ob = JSON.parse(data);
    console.log(ob);
})