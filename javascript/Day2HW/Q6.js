function factory(i)
{
    const arr = [ function (a1,a2){ console.log("summation = ",(a1+a2))},function (a1,a2){ console.log("difference = ",(a1-a2))},function (a1,a2){ console.log("multiplication = ",(a1*a2))}, function (a1,a2){ console.log("division = ",(a1/a2))} ];
    return arr[i];
}

var fun1 = factory(0);
fun1(3,4);

var fun2 = factory(1);
fun2(7,4);

var fun3 = factory(2);
fun3(3,4);

var fun4 = factory(3);
fun4(20,4);