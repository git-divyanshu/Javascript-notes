// console.log("hello") //printing
const accountId=12 // const variable
let accountEmail="bejxjen" // let keyword . use this as it is good
var accountPassword="1234 " // do not use it because of block issue
accountCity="Jaipur" // variable can also be declared like this but avoid it
let accountState // it will give undefined
// console.table([accountId,accountEmail,accountPassword,accountState]) // it prints all the variables given in form of table

// data types 
"use strict" // treat all the code as newer version

// alert(3+3) // we areusing node.js not browser so it will not work here

let name="rahul" // string data type
let age=18 // number
let isLoggedIn=false // false

// number, bigint,string,boolean,null,undefined,symbol  are different types of datatypes

// advanced datatypes are objects

// console.log(typeof null )
// console.log(typeof undefined)

// coversion operation

let score="33"
let valueNumber=Number(score) //converted into number
// console.log(typeof(valueNumber)) 

let a="33df"
let value=Number(a)
// console.log(typeof value) // its answer is number but it is not actual number this si problem with javascript
// console.log(value) // it gives nan

// "33"=> it cn be converted to number
// "33abc"=> Nan
// true=> 1 ; false=>0

// 1=>true
//""=> false
// "hello"=>true

// console.log(2**3) // it means 2 raise to power 3
// console.log("abc" +" bcd") // strings can be added
// console.log("abc"-"sjd") // it gives NaN
// console.log("abc"/"djd") // it also gives Nan
// console.log("1"+2) // it gives 12 as output 2 converted to string and added
// console.log(2+"4") // it gives 24
// console.log(2+2+"3") // it gives 43 bcz 2 and 2 are added and 4 converted to string and added to 3
//console.log(2>=1)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=
// comparison

//console.log("2">1) it will give true

//console.log(3===3) it gives true
// === checks whether both terms has same value as well as data type or not
//console.log("3"===3) it gives false because data type is different

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/* there are two types of dataypes primitives and non primitives */
/* primitives are of 7 types: String,Number,Boolean,null,undefined,Symbol,BigInt*/
/*  non primitives include arrays,objects,functions*/

// use of symbol
// const id=Symbol("123")
// const anotherId=Symbol("123")
// console.log(id===anotherId) // it gives false as symbols to give unique value
// all non-primitive data types has type object

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack memory used by primitive data type.

// let x=3
// let y=x
// y=4
// console.log(x)
// console.log(y)
// here initially y takes value of x. then y is updayed to 4 but value of x remain unchanged because y have copy of x not actual x.
// heap memory is used  by non primitive data type and no copy is produced but reference is there just like java.
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// modern way to concatenate string that is string interpolation
//console.log(`hello my name is ${name} and i will be successfull`) 

const game="contra"
// console.log(game[0]) produces output c
//console.log(game.length) gives length of string
//console.log(game.toUpperCase()) convert string to uppercase
//console.log(game.charAt(1))  gives character at 1
//console.log(game.indexOf('t')) gives index of t
//console.log(game.substring(0,4)) gives cont
//console.log(game.slice(2,6)) // gives ntra
//console.log(game.slice(-3,-1))  gives tr
//console.log(game.split(" ")) split the string on basis of given value

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// nums and maths
const balace=new Number(100)
//console.log(balace.toString().length); converting number to string and finding its length
//console.log(balace.toFixed(2)) used to give precision value upto 2 decimal places

//++++++++++++++++++++ Dates and Time ++++++++++++++++++++++++++
let myDate=new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString());
//console.log(typeof myDate); it is object type
//let myTimeStamp=Date.now()
//console.log(myTimeStamp); // this gives exact time right now
//console.log(myDate.getMonth()); it gives the month
//console.log(myDate.getDay()) gives the day like monday or tuesday

//++++++++++++++++++++++++++ Arrays +++++++++++++++++++++++++++++++++
const myArr=[1,2,3,4,5] 
//console.log(myArr[0])

// javascript array operations create shallow copy
/* shallow copy of an object means the properties share same references as those of source objects*/
/* deep copy of an object means the properties do not share same references as those of source objects*/ 

//myArr.push(6) pushes the number 6
//myArr.pop() pop the last added number
//console.log(myArr.includes(3)); returs true if it contains that element otherwise false
//console.log(myArr.indexOf(3));

//const arr1=myArr.slice(1,3)
//console.log(arr1);
//console.log(myArr);

//const arr2=myArr.splice(1,3)
//console.log(arr2)
//console.log(myArr);

/* slice is just used to slice the array according to the index provided and does not include the end index and
does not change the original array whereas splice trim the array according to index provided and includes last index as well
and also change the original array. the original array left with elements that are not included in the splice index */

const marvel=["thor","ironman","spiderman"]
const dc=['superman',"batman","flash"]
//const allHeros=marvel.concat(dc) it combines both the array and it returns new array. it does not manipulate exisiting array
//console.log(allHeros); 

// another method for join two arrays is spread operator
//const allHeroes=[...marvel,...dc] in this way also we can join two arrays
//console.log(allHeroes);

//const array=[1,2,3,[4,5,6],7,[8,9,[10,56]]]
//console.log(array.flat(3)) flat method is used to flat the array if nested arrays present in an array.It takes upto much depth you want to flat

//console.log(Array.isArray("hitesh")) used to check whether given is array or not
//console.log(Array.from("hitesh")); used to convert given input into array
//console.log(Array.from({name:"hitesh"})); it will not be able to convert to array
//console.log(Array.of(100,200,300)); convert this into array

//+++++++++++++++++++++++++++++ Objects +++++++++++++++++++++++++++++++++++++++++++++++

// object literals

const mySymbol=Symbol("key1")
const user={
    name:"divyanshu",
    age:21,
    location:"kurukshetra",
    [mySymbol]:"myKey1",
    isLogged:false,
    lastLoginDays:["Monday","Friday"],
    "IsGirfriend":false
}

//console.log(user.location); one way to access objects
//console.log(user["location"]); other way to access objects
//console.log(user["IsGirfriend"]); if you want to access isGirlfriend only this way would work
//console.log(typeof user[mySymbol]); this is the way to access symbol
//user.location="yamunanagar" way to change value
//Object.freeze(user) if you dont want anyone to change anything in the object use this,it will freeze the object
// user.greeting=()=>{
//     console.log("hello js user");
    
// }  we added a function to our object user
//console.log(user.greeting()); way to access function in object
// user.greetingTwo=function(){
//     console.log(`hello js user,${this.name}`);
    
// } use of this keyword to access current object
//console.log(user.greetingTwo());


// object singleton
//const tinderUser=new Object() way to declare singleton object
//tinderUser.id="123avb"
//tinderUser.name="harry"

// nested objects

const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname); way to access nested objects

// combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3=Object.assign(obj1,obj2) combining two objects
//const obj3={...obj1,...obj2} another modern way to combine objects using spread operator
//console.log(obj3);
//console.log(Object.keys(user)); way to get all keys of Object in an array.important
//console.log(Object.values(user)); way to get all values of object in array
//console.log(Object.entries(user));
//console.log(user.hasOwnProperty("name")); to check whether the object contains that proptery or not

// destructuring of objects
const course={
    names:"javascript",
    price:"999"
}

//const {names,price}=course   this is destructuring
//console.log(names);

// APIS
/* APIS generally give data in the form of json */
// in json usually keys are also strings


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ Functions++++++++++++++++++++++++++++++++++++++++++++++++++

// function add(number1,number2){
//     console.log(number1+number2);
// }

//  function loginMessage(username){
//     return `${username} just logged in`
//  }

 //console.log(loginMessage()) here we have not passed arguements so it prints undefined just logged
 
//  function calculateCartPrice(...num1){ the ... opeartor used to take multiple values
//     return num1
//  }

 //console.log(calculateCartPrice(100,200,300)) it return array of passed arguements

 // in this way we can pass object
// const user1={
//     username:"hitesh",
//     price:199
// }

// function handleObject(anyObject){
//     console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
// }
// handleObject(user1)

//++++++++++++++++++++++++++++++++++++++++++++++++ Scopes +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// if(true){
//     let q=10;
//     const w=30
//     var e=30
// }

//console.log(q) this will give error bcz q is defined in function and its scope is not outside
//console.log(w); also give error bcz scope is not outside
//console.log(e); it prints 30 but it is in function . so var can be accessible outside scope which is a problem

//console.log(addone(45)) this will run without error

//  function addone(num){
//     return num+1
//  }

//console.log(addTwo(12)); this will give error because it cant ableto identify addtwo as we declare function with help of variable

// const addTwo=function(num){
//     return num+2
// }


//+++++++++++++++++++++++++++++++++++++++++++++++++++ Arrow function ++++++++++++++++++++++++++++++++++++++++

// const obj={
//     name:"hitesh",
//     items:345,
//     welcomeMessage:function(){
//         console.log(`hello ${this.name}`); // this will print hitesh
//         console.log(this)  // this will print the current object bcz the current context is obj
//     }
// }
// obj.welcomeMessage()
 // this keyword is used to access the current context
//console.log(this); this will print the empty object object as there is no current context

// function chai(){
//     let abc=24
//     console.log(this.abc); it will give undefined that means we cant use this in function
// }
// chai()

// Arrow function
// const chai=()=>{
//     let username="hitesh"
//     console.log(this.username); it will give undefined
//     console.log(this); it will give empty object
// }

// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2}


// const addtwo=(num1,num2)=> (num1+num2)     this is implicit return as it does not require return keyword to return something
// console.log(addtwo(12,34));

// const addTwo=()=>({username:"hitesh"}) this is how we return object by using paranthesis
// console.log(addTwo());

 // immediately invoked function expressions(IIFE)

 /*  IIFE is a javascript function that runs as soon as it is defined. 
 Use cases:
  avoid polluting global namspace. If we have some initiation code that we don't need to use again, we could use the IIFE pattern.
   */

//   (function chai() {
//     console.log('Db connected');
//   })();  
// above is how we use IIFE expression

// ((name)=>{
//     console.log(`db connected`);
// })()

//+++++++++++++++++++++++++++++++++++++++++++ Javascript execution phase ++++++++++++++++++++++++++++++++++++=

//two types of execution context
// 1) Global execution context
// 2)Function execution context

/*sbse pehle global execution allocate hota hai then memory phase execute hota jisme memory allocate hoti haito variables functions etc
 Now execution phase executed in which varibale values are assigned to variable, calculations are performed.Executionalcontext gets
 deleted when its work is completed.
*/

//++++++++++++++++++++++++++++++++++++++++++++ If Statement +++++++++++++++++++++++++++++++
// if(condition){
//     do something
// }

// falsy values
/* false,0,-0,BigInt 0n,null,undefined,NaN */

// truthy values
// "0","false"," ",[],{},function(){}

// used to check if object is empty or not
// if(Object.keys(obj).length==0){
//     console.log("object is empty");
    
// Nullish coalescing operator(??) : null undefined
let val1;
// val1=5??10 in this case val1 store 5
// val1=null??10 int this case val1 store 10
// val1=undefined?? 16 in this case val1 store 16
// val1=null ?? 10 ?? 20 here 10 is stored in val1

// Ternary operator

// condition?true:false

// let iceTeaPrice=100
// iceTeaPrice<=80?console.log("no"):console.log("yes")

//++++++++++++++++++++++++++++++++++++++++ Loops +++++++++++++++++++++++++++++++++++++++

// for loop
// for(let i=0;i<8;i++){
//     do something
// }

// break and continue keyword

// while loop
// while(condition){
//     do something
// }

// do while loop
// do{
//     do something
// }while(condition)

// for of loop

// const arr=[1,2,3,4,5]
// for(const i of arr){
//     console.log(i);
// }

// for in loop
// const arr=[1,2,3,78]
// for(const key in arr){
//     console.log(arr[key]);
// }

// for each loop  this is important
const coding=["js","ruby","java","cpp"]
// coding.forEach((item)=>{
//     console.log(item);
// })


// another use
// function print(item){
//     console.log(item);
// }
// coding.forEach(print)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

//iteration on array of objects using for each loop
//  const arr=[
//     {
//         language:"javascript",
//         languageFileName:"js"
//     },
//     {
//         language:"java",
//         languageFileName:"java"
//     },
//     {
//         language:"pyhton",
//         languageFileName:"py"
//     }
// ]

// arr.forEach((item)=>{
//     console.log(item.language);
// })


// const values=coding.forEach((item)=>{
//     return item
// })
// console.log(values); it gives undefined


//++++++++++++++++++++++++++++++++++++++++++++++++ Filter Map Reduce +++++++++++++++++++++++++++++++++++++++++ 

const numbers=[1,2,3,6,8,9,10]
//const newNums=numbers.filter((num)=>num>5) this is implicit return so we can return elements without use of return
// const newNums=numbers.filter((item)=>{
//     return item>5
// })
//console.log(newNums);


// map
// const ans=numbers.map((num)=>num+10)
// console.log(ans);

// chaining
// const ans=numbers
//           .map((num)=> num*10)
//           .map((num)=>num+1)
//           .filter((num)=>num>=40)

// console.log(ans);


// reduce 

// const ans= numbers.reduce((acc,currval)=>{
//     console.log(`acc: ${acc} and currval:${currval}`);
    
//     return acc + currval
// },0)

// above code can also be written as
// const ans=numbers.reduce((acc,currval)=>acc+currval,0)
// console.log(ans);

// reduce real world use
// const shoppingCart=[
//     {
//         itemName:"js course",
//         price:2999
//     },
//     {
//         itemName:"python",
//         price:999
//     },
//     {
//         itemName:"mobile dev",
//         price:4999
//     },
//     {
//         itemName:"data engineer",
//         price:12999
//     }
// ]

// const priceToPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
// console.log(priceToPay);



















 












 








 


