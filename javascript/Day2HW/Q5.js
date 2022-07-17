function factorial(num=2)
{
    let fact = 1;
    var i;
    for(i=1;i<=num;i++)
    {
        fact = fact * i;
    }
    return fact;
}

//1)
var res = factorial();
console.log("the factorial is = ",res);

//2)
var res = factorial(5); 
console.log("the factorial is = ",res);
