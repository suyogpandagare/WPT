// 4.  write a JS file that  has a function alpha that accepts three functions as parameters 
// 	the parameter function1 takes 2 strings as parameters
// 	the parameter function2 takes 3 numbers as parameters
//        the parameter function3 takes rest parameter as parameter

//      the alpha function should call the 3 functions one after the other with proper parameters.
// 	the functions are supposed to print all the parameters in different ways.

// call the alpha function 3 times and pass different functions to it.



function alpha(f1,f2,f3)
{
    f1("jai","hoo");
    f2(5,7,8);
    f3(5,5,4,6,7,8,9);
}

alpha((p1,p2)=>{ console.log("strings = ",p1,p2)},((n1,n2,n3)=>{ console.log("add = ",(n1+n2+n3)) }),((...args)=>{ 
    var sum = 0;
    for(var i=0;i<args.length;i++)
    { 
        sum = sum + args[i];
    }
     console.log("sum = ",sum) 
}))

