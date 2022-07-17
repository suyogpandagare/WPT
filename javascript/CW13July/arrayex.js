var d = []  //size and type of the array is not fixed 

//console.log(d.length)

d.push(12);
//console.log(d.length,d)
d.push("golden")
//console.log(d.length,d)
d.pop();
//console.log(d.length,d)
d.push(13,20,24,10)
//console.log(d.length,d)
// d.push("hello", "hoo","hii")
// console.log(d.length,d)

var cutout = d.slice(0,3)
//console.log(d.length,"slice :" ,cutout,"original :",d)

var c2 = d.splice(3,2)
//console.log("slice :" ,c2,"original :",d)

//c2 = d.splice(0,1,"moon")  //0th element is replaced by  "moon"
//c2 = d.splice(0,0,"moon")  //0th element is inserted as  "moon"
//console.log("SPLICE ",c2,"original ",d)
d.push(13,20,24,10)
//console.log(d.length,d)

d.forEach((e) => {console.log(e)})

d.sort((a,b)=>a-b)
//console.log("asc :",d)

d.sort((a,b)=>{return b-a})
//console.log("desc :",d)

var o1 = {"name":"ddd","age":"24"}
var o2 = {"name":"eee","age":"25"}
var o3 = {"name":"fff","age":"22"}
var o4 = {"name":"ggg","age":"12"}
var o5 = {"name":"hhh","age":"28"}

arr = []
arr.push(o1,o2,o3,o4,o5)
arr.sort((a,b)=>{return a.age-b.age})  //sort by age
//console.log("sort by age :",arr)

arr.sort((a,b)=>{return a.name.localeCompare(b.name)})  //sort by age
//console.log("sort by name :",arr)

var nums = [1,2,3,4]

//square array
var squarearr = nums.map((e)=>{return (e*e)})
//console.log("nums :", nums)
//console.log("square :",squarearr)

var colors = ['red','green','pink','blue','yellow','black','white','turquoise','golden','grey']
var newarr = colors.filter((e)=>{return e.length < 5})
console.log("newarr :",newarr,"original :",colors)
