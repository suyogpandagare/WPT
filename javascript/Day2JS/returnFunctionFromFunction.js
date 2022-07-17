function message(choice)
{
    if(choice==1) //returning anonymous function
    return function(name){ console.log("good morning",name)}

    if(choice==2) //returning fat arrow function
    return (n)=>{ console.log("good afternoon",n)}

    if(choice==3)
    {
        function abc(nm)
        {
            console.log("good evening",nm)
        }
        return abc  //returing named function
    }

    if(choice==4)
    {
        var x = function(n){ console.log("good night",n)}
        return x   //returning function type variable
    }
}

var f1 = message(2)     //return value ko variable me le ke call kia
 f1("kathy")      

message(1)("twitter")  //return value ko wahi ke wahi call kr dia

message(3)("telegram")

message(4)("whatsapp")

