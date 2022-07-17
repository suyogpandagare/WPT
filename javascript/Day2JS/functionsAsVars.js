function m1()
{
    console.log("test")
}

var x = m1   ///not calling the function ..assigning m1 to x----variable x to function asdsign kar dia

console.log(x,typeof(x))

x()
m1()

//shortcut---directly giving fun body to variable
var p = function (){
    console.log("test 2")
}

p()

//uska bhi shortcut
var q = function (){
    console.log("test 3")
}()

//one more way---Fat Arrow Notation Very Popular in JavaScript
var z = (x)=>{ console.log("test 4",x)}

z(12)






















