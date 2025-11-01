// #Arrays


// 1) foreach:- It is used to run afunction for each element in an array.It is mainly used when you just want to do something with each item.
// let arr = [1, 2, 3, 4];
// arr.forEach(function (val) {
//   console.log(val + " Hello");
// });
// using arrow function:-
// const fruits=["Apple","Banana","Mango"];
// fruits.forEach(fruits=>{
//     console.log(fruits);
// });
//forEach() array ke har item ko ek ek karke rkhta hai or uss par aapka given function chalata hai.Yeh sirf kaam karta hai,koi naaya array return nhi karta. 

//2) Map:-map array ke har element par ek function chalata hai.aur uska result lekar ek naya array banata hai.map always returns a new array
// let arr=[1,2,3,4];
// let newarr=arr.map(function(val){
//       return val*3;
// })
// console.log(newarr);
// example of objects se sirf ek property ka array banana
// const users=[{name:"Krishna",age:24},{name:"Rohan",age:23},{name:"Devansh",age:22}];
// const namesOnly=users.map(user=>user.name);
// console.log(namesOnly);

//3) Filter:-filter ka kam hai array me se sirf wahi elements rakhna jo condition satisfy kare, baki sab remove ho jaate hain.It returns a new array.
// let arr=[1,2,3,4,5];
// let newarr=arr.filter(greater=>{
//     if(greater>=3){ return true;}
//     else{ return false;}
// })
// console.log(newarr);
// Example of backend
// const users=[{name:"Krishna",age:24}, {name:"Rohan",age:16}];
// const adults= users.filter(A=> A.age>=18);  
// console.log(adults);

// 4)Find:-find() array me pehla element dhundta hai jo condition match karta hai.Or sirf ek hi value return karta hai.aagar kuch nhi mila toh undefined return hota hai.
// const numbers=[1,2,3,4,5];
// const result=numbers.find(num=>num>3);
// console.log(result);
// more example
// const users = [
//   { name: "Krishna", age: 22 },
//   { name: "Rohan", age: 17 },
//   { name: "Aman", age: 25 }
// ];
// const user = users.find(u => u.name === "Aman");
// console.log(user);

// 5) indexOf:-indexOf array ke andar kisi value ka index (position) batata hai
// arr.indexOf(2);

