// // Js expected 
// //  let const and var 

// // let we can't redclare the varibale but can change the value block scope
// // const we can't redclare the varibale  and can't change value block scope 
// // let we can redclare the varibale      and  can change the value functional scope 

// // Hositing
// // Hositing a default behaviour of moving all declarations to top of the scope 



// // the promise object represents the eventual completion or failure 
// // of an synchronous operation and it ,s resulting value 


// // await is used inside a async function to wait for the asynchronous operation 


// // mounting 
// // updating 
// // unmounting
// // import React, { Component } from 'react'

// // mounting

// // Component didmount first time render 
// // constuctor is one type 
// // render what type of   

// // updating
// // componetDidupdate

// // unmounting
// // componentwillUnmount

// let s = 5;
// var a = 15;
// function bini() {
//     let x =1
//     console.log(x);
// } 
// bini()
// const sahi = () => {
//     let y = 10 
//     console.log(y);
// }
// sahi()

// // closures 
// // function with its lexical scope is know as Closures

// function x() {
//     let a = 15 ;
//     function y(){
//         console.log(a);
//     }
//     return y
// }


// const z = x()
// z()

// // for (var i = 0; i < 5; i++) {
// //    function bini(s){
// //     setTimeout(() => {
// //         console.log(s);
// //        } ,1000*s )
// //    }
// //     bini(i)
// // }

// // event loop 
// const biin  = {
//     sahi : 'name'
// }

// let op = {...biin} ;
// op.sahi = 'ol'

// console.log(op ,biin);

// const sahis = [1,2,3,4,5,]

// console.log(sahis.splice(3,1));

// // this 

// // temporal Dead  Zone  

// // promises 

// // promises are used to handel asynchronous operations 

// // what is promises vs callback 

// // const ops = new Promise((reslove ,reject ) => {
// //   return function (biin) {
// //     if(true){
// //         reslove(biin)
// //       }
// //       reject('error')
// //    }
// // } )

// function settimeoutpromise(delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject('error')
//         },delay)
//     })
// } 

// // settimeoutpromise(100).then()

// // ops.then(e => console.log(e)).catch((e) => console.error(e) )

// // callback Hell 

// // async await 


// // async function saih() {
// //      const papa =  await fetch('')
// //      const data = await papa.json()
// //      return data   
// // }
// // const [state, dispatch] = useReducer()


// // function onpointerup(){
// // console.log('sahi');
// // const  sai = () => console.log('papa');
// // return  sai
// // }

// // onpointerup()()

// // React interview preparation 
// //  Lifecycle 
// //  useState , Useeffect ,  usememo , useCallback , useReducer ,  propDrilling , key , virtualDom
// //  Redux , Reduxthunk

// // Lifecycle 

// // USESTATE()


// //  passing props through the children component 
// //  it is a copy of actual Dom wihich react creates because directly complete  




// const arr = [1,2,3,4,5]
// let biniop = arr.map((e,i,f,fd) => {
//      console.log(e,i,f); 
//     // return e * 3 + i
// } )

// // console.log(bini);

// //  const bini1 = arr.reduce( (e,f) => {
// //      console.log(e,f);
// //     return e + f
// // } ,1 )






// // export default class Script extends Component {
 
// //     componentDidMount() {
// //         console.log('sahi');
// //     }

// //     render() {return (<div>Hello jay</div>)}
// // }

// // console.log(Script);


// function bini(...params){

// console.log(params);

// }  

// bini(1,2,3)

// let a1 = [1,2,3]
// let a3 =  JSON.parse(JSON.stringify(a1))

// a3.push('sahi')

// console.log(a1);

// // THIS 
// // promise  vs  async await 

// // usememo vs usecallback


// // debouncing 

// let counter = 0

// function getdata() {
//  console.log('wha wha');
//     counter++
// }
// function debounce(call,d) {
//     let n ;
//     return function(...args) {
//         if (n) clearTimeout(n)
//      n =   setTimeout( () => {
//             call()
//         },d)
//     }
    
// } 

// let papa =   debounce(getdata ,1000)

// //  use memo 
 
function myMap(cb) {
  let arr = []
   for (let i = 0; i < this.length; i++) {
      console.log(this);
    arr.push(cb(this[i] ,i,this ))
    
   }
   return arr
}
Array.prototype.myMap = myMap
let array12 = [1,2,3,4,5];
// const result  = array12.myMap((e,i) =>  e * 2  )
// console.log(result);


function myflter(cb) {
    const results = [] ;
    for (let i = 0; i < this.length; i++) {
        const cbresult = cb(this[i])
        if (cbresult) results.push(this[i])

    }
    return results
}

Array.prototype.myflter = myflter;
const result1 =  array12.myflter((e,i) =>  e % 2  )
console.log(result1);


function myreduce(cb,initial) {
 
    let acc;
    let cur;

    if (!this.length && !initial) {
        throw new console.error('sahi');
    } else {
        acc = initial ? initial : this[0]

        for (let i = 0; i < this.length; i++) {
            cur = this[i]
            acc  = cb(acc,cur)
            
        }
    }
    return acc
}
Array.prototype.myreduce = myreduce
const result2 =  array12.myreduce((acc,cur) => {  acc += cur 
return acc
},23  )
console.log(result2);