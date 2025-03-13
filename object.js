// Object
//  let obj =  {
//     marks : 50,
//     name : 'abdul basit',
//     gpa : 3.4,
//     isPass : true,
//     friends: ['ali','aslam','khan'],
//     address: {
//         city: 'mardan',
//         country: 'pakistan',
//         tehsel: 'katlang'
//     },
//  }
//  console.log(obj.address.country);
//  if(obj.isPass == true){
//     for (let i = 0; i < obj.friends.length; i++) {
//         console.log(obj.friends[i]);
//     } 
   
//  }else{
//     console.log('No friends');
//  }

// let students = [
//     {
//        marks : 50,
//        name : 'abdul basit',
//        gpa : 3.4,
//        isPass : true,
//        friends: ['ali','aslam','khan'],
//        address: {
//            city: 'mardan',
//            country: 'pakistan',
//            tehsel: 'katlang'
//        },
//     },
//     {
//        marks : 23,
//        name : 'ALi',
//        gpa : 3.1,
//        isPass : false,
//        friends: ['kami','amir','saif'],
//        address: {
//            city: 'charsada',
//            country: 'pakistan',
//            tehsel: 'road'
//        },
//     },
//     {
//        marks : 90,
//        name : 'Fatih',
//        gpa : 3.5,
//        isPass : true,
//        friends: ['Basit','Ikrash','khan'],
//        address: {
//            city: 'Peshawar',
//            country: 'pakistan',
//            tehsel: 'Peshawar'
//        },
//     }
//  ]
//  students.forEach(element => {
//     if (element.isPass == true) {
       
//        console.log(element.address.city);
//     }
//  });
 // console.log(students[2].friends[1]);
 
 // for(let i = 0; i<students.length; i++ ){
    // console.log(students[0].city)
    // console.log(students[1].city)
    // console.log(students[2].city)
 // }

let products = [
    {name: "laptop",
     isAvailable: false,
     price: 23400
    },
    {name: "android",
        isAvailable: true,
        price: 2234000
    },
    {name: "mac",
        isAvailable: true,
        price: 520000
    },
    {name: "I phone",
        isAvailable: false,
        price: 23400444
    },
]
for(i = 0; i < products.length; i++){
    let total = products[i].price;

console.log(total + products[i+1].price);
}