function m1(...n1)
{
    var sum = 0; 
    for(var i=0;i<n1.length;i++)
    {
        sum = sum + n1[i];
    }
    return sum;
}

var res = m1(2,3,4,5,6);
console.log("result is = ",res);