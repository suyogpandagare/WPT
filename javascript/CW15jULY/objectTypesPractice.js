//1)--Using object Literals or  object initializers

// let user = {
//     firstName : 'suyog',
//     lastName:'pandagare',
//     email:'suyog@gmail.com',
//     age:24,

//     getFullName:function(){
//         return this.firstName +" "+ this.lastName;
//     }
// }

// console.log(user);
// console.log(user.getFullName());

//2)--Using a Constructor Function

// function User(name,surname,email,age){
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.age = age;
// }

// let user1 = new User("suyog","pandagare","suyog@gmail.com",24);
// console.log(user1);

// let user2 = new User("sanket","wighe","sanket@gmail.com",24);
// console.log(user2);

// let user3 = new User("aniket","mohod","aniket@gmail.com",24);
// console.log(user3);

//3)--Using Object.create() method

// let user = {
//     firstName : 'suyog',
//     lastName:'pandagare',
//     email:'suyog@gmail.com',
//     age:24,

//     getFullName:function(){
//         return this.firstName +" "+ this.lastName;
//     }
// }

// let user1 = Object.create(user);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.getFullName());

class User{

    constructor(firstName,lastName,email,age)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }

    getFirstName(){
        return this.firstName;
    }

    getlastName(){
        return this.lastName;
    }

}

let user1 = new User("suyog","pandagare","suyog@gmail.coo",24);
console.log(user1);
console.log(user1.getFirstName);
console.log(user1.getlastName);

