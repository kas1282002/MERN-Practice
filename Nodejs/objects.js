// Object:-Object js ka ek data container hota hai jismein hum real world cheezein ko key -value pairs ke form me store karte hain.

// const user={name:"Priyanka",age:30,city:"ghaziabad"}
// console.log(user.name);

// new property add karna:- 
// user.genger="Female"

// property remove karna
// delete user.city;

// Object array ke andar(backend me most used)
// const users = [
//   { name: "Krishna", age: 22 },
//   { name: "Rohan", age: 17 },
//   { name: "Aman", age: 25 }
// ];
// console.log(users[1].name);  // Output: Rohan

// object ke andar function 
// const user = {
//   name: "Krishna",
//   greet() {
//     console.log("Hello " + this.name);
//   }
// };
// user.greet(); // Output: Hello Krishna

// Task: Array of users me se sirf Delhi wale users ke names print karo.
// const users = [
//   { name: "Krishna", city: "Delhi" },
//   { name: "Rohan", city: "Mumbai" },
//   { name: "Aman", city: "Delhi" }
// ];
// const delhiUsers = users
//   .filter(u => u.city === "Delhi")
//   .map(u => u.name);
// console.log(delhiUsers);

// Not able to change in object we use freeze
// let obj={
//     age:15
// }
// Object.freeze(obj);
// obj.age=25;
// console.log(obj.age);


