// const one = (callback) =>{
//    setTimeout(() =>{
//        console.log('one');
//        callback()
//    },2000)
// }

// const two = (callback) =>{
//     setTimeout(() =>{
//         console.log('two');
//         callback()
//     },3000)
    
// }
// const three = (callback) => {
//     setTimeout(() =>{
        
//         console.log('three');
//         callback()
//     },1000)
// }

// one();
// two();
// three();


//Callback hell
// one(
//     () =>{
//     two(()=>{
//         three(()=>{
//             console.log('done');
//         })
//     })
//     }
// )
// const five = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             console.log('five'); 
//             resolve()},2000)
//         })
//     }

// const one = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('one');
//             resolve();
//         },3000)
//     })
// }
// const two = () =>{
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log('two');
//             resolve();
//         },1000)
//     })
// }

// one().then(() =>{
//     two().then(() =>{
//         five().then(() =>{
//             console.log('done');
//         })
//     })
// })