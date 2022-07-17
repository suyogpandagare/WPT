//1)--
//let x =/a/  //single a
//let x =/a+/  //+ means one or more occurance
//console.log(x,typeof(x))

// let s = "bahaa"
// console.log(s.match(x))  //match will search string - to find a

//2)--
// let pattern1 = /bad/
// let pattern2 = /bad$/
// let pattern3 = /^bad/

// var arr = ['ahmedabad','delhi','kultabad','badlapur','badni','aurangabad']

// arr.filter((element)=>{
//     return element.match(pattern3)
// }).forEach((element)=>{console.log(element)})

//3)--

// let pattern = /[0-9]{3}/  //3 occurance of any digit btn 0 to 9 in the end

// var arr = ['pp343pp','kkkk','hello123','1342234','sdf54y','kjvc456','dsfvsfv']

// arr.filter((element)=>{
//     return element.match(pattern)
// }).forEach((element)=>{console.log(element)})


//4)--
// let emailpattern = /[a-z A-Z - _]+\@[a-z A-Z]+\.[a-z A-Z]{1,3}$/

// var arr = ['---@aaa.com','pra@gmail.org','pra_g@hotmail','pra_gre@ggg.vvv','test@gov.in']

// arr.filter((element)=>{
//     return element.match(emailpattern)
// }).forEach((element)=>{console.log(element)})

//5)--

// let pattern = /(aa)+/
// var s = 'pppaaaaaa'
let pattern = /^[A-Z][a-z A-Z 0-9]+/   //1st letter must be uppercase rest all are can be any of the 3 given they arte in or 
var s = 'a'
console.log(s.match(pattern));












