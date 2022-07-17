
//1)
function increment(x)
{
    x++;
}
// var p=10;
// increment(p);
// console.log("after increment",p);  //pass by value

//2)
function change(arr)  //copy of reference , ONLY one array
{
    arr[0] = "universal";
}

// a = [12,13,14,15]
// change(a)         //the reference of the array is passsed
// for(var i=0;i<a.length;i++)
// {
//     console.log(a[i]);
// }

//3)
function changestr(str)
{
    str = str + str;
}

// s = "hi";
// changestr(s);  //string s is immutable
// console.log("new string is =",s);

//4)
function changeObj(obj)  //object 1 he bana hai references 2 hai ---reference is received ,ONLU one object
{
    obj.name = "modified";

}

var o = {'name':'suyog','age':'24'}
changeObj(o);  //reference is passed 
console.log(o.name,o.age);