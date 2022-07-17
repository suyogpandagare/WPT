// var arr = [10,20,30,40]

// //1 way
// var a = arr[0]
// var b = arr[3]

// //another way
// var [a,,,b] = arr;
// console.log(a,b);


var obj = {fname:'suyog',marks:40,city:'pune',setName:function(n){console.log(n)}}

var fname = obj.fname;
var setName = obj['setName']

// var {fname,setName} = obj;
// console.log(fname,setName);

var {fname:nm,setName:set} = obj;
console.log(nm)
set('hi')
