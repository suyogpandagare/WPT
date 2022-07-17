function add(x,y)
{
     //var n1 = parseInt(x);
     //var n2 = parseInt(y);
    if(x == undefined || y == undefined)
    {
        x=0; y=0;
    }
    return x+y;  //implied summation or concatination
}

var sum = add(3,4);
console.log(sum);
console.log(add("iet","cdac"));
console.log(add(100,"students"));
console.log(add(12));
console.log(add());