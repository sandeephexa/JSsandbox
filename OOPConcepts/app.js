// CONSTRUCTORS

// person constructor
// function Person(name,dob)
// {
//     this.name = name;
//     this.birthdate = new Date(dob);
//     this.calculateAge = function(){
//         const diff = Date.now() - this.birthdate.getTime();
       
//        // console.log("diff is"+diff);
//         const ageDate = new Date(diff);
//        // console.log("ageDate is"+ageDate);
//        // console.log("UTC year "+ageDate.getUTCFullYear());
//        console.log(ageDate.getUTCFullYear());
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
// }

// const brad = new Person("brad");

// const sandy = new Person("sandy","9-10-2010");

// console.log(sandy.calculateAge());

// BUILT-IN CONSTRUCTORS

// var name1 = 'jeff';
// var name2 = new String('jeff');

// if(name2 === 'jeff')
// {
//     console.log('yes');
// }
// else{
//     console.log('no');
// }


// PROTOTYPING

// function Person(firstName,lastName,dob)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthdate = new Date(dob);
//     //calculate age
//     Person.prototype.calculateAge = function(){
//         const diff = Date.now() - this.birthdate.getTime();
//         const ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }
//     // get fullname
//     Person.prototype.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     // gets married
//     Person.prototype.getsMarried = function(newLastName){
//          this.lastName = newLastName;
//     }

// }

// var john = new Person('john','doe','8/5/93');

// console.log("before marriage "+john.getFullName());

// john.getsMarried('williams');

// console.log("after marriage "+john.getFullName());

// console.log(john.hasOwnProperty('lastName'));
// console.log(john.hasOwnProperty('getFullName'));

// INHERITANCE


// function Person(firstName,lastName){
//        this.firstName = firstName;
//        this.lastName = lastName;
// }
// // greetings

// Person.prototype.greetings = function(){
//     return `${this.firstName} ${this.lastName}`;
// }

// var person1 = new Person('john','doe');
// console.log(person1.greetings());

// // customer constructor
// function Customer(firstName,lastName,phone,membership){
//     Person.call(this,firstName,lastName);
//     this.phone = phone;
//     this.membership = membership;
// }
// // inherit person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // make customer prototype return customer
// Customer.prototype.constructor = Customer;

// // override greeting method from customer
// Customer.prototype.greetings = function(){
//     return `${this.firstName} ${this.lastName} welcome to our company`;
// }



// var customer1 = new Customer('james','anderson','7854859686','standard');
// var john = new Person('john','doe');
// console.log(customer1);
// console.log(customer1.greetings());

// ===============
// OBJECT CREATION
//================

// const personPrototypes = {
//     greeting : function(){
//         return `hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried : function(newLastName)
//     {
//        this.lastName = newLastName;
//     }
// }

// var mary = Object.create(personPrototypes);
// mary.firstName = 'mary';
// mary.lastName = 'william';
// mary.age = 30;

// console.log(mary.lastName);
// mary.getsMarried('blake')
// console.log(mary.greeting());

// second way to create Object

// const personPrototypes = {
//     greeting : function(){
//         return `hello there ${this.firstName} ${this.lastName}`;
//     },
//     getsMarried : function(newLastName)
//     {
//        this.lastName = newLastName;
//     }
// }

// const hanes = Object.create(personPrototypes,{
//     firstName : {value : 'hanes'},
//     lastName : {value : 'zymmer'},
//     age : {value : 30}
// })

// console.log(hanes);
// console.log(hanes.greeting());

//================
// ES6 classes
//================

// class Person {
//   constructor(firstName,lastName,dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthDay = new Date(dob);
//   }

//   greeting(){
//       return `hello ${this.firstName}`;
//   }
  
//    getsMarried(lastName){
//       this.lastName = lastName;
//    }

//    ageDifference(){
//        var diff =  Date.now() - this.birthDay.getTime();
//        var age = new Date(diff);
//        return Math.abs(age.getUTCFullYear() - 1970);
//    }
  
//    static addNumbers(x,y){
//        return x+y;
//    }
// }

// const marry = new Person('marry','william','04-04-1993');
// marry.getsMarried('stathom');
// console.log(Person.addNumbers(5,6));

// INHERITANCE IN ES6


// class Person {
//     constructor(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
    
//     }
  
//     greeting(){
//         return `hello ${this.firstName}`;
//     }
// }

// class Customer extends Person {
//     constructor(firstName,lastName,age,membership){
//         super(firstName,lastName);
//         this.age = age;
//         this.membership = membership;
//     }

//     static membership(){
//         return 500;
//     }
// }

// const cust = new Customer('john','doe',23,'standard');
// console.log(Customer.membership());

