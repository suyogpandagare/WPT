// var str = "double quote string single line string"
// var str2 = 'single quote string single line string'
// var str3 = `this is a multi line string
// ont this line i tell the time it is 10 10
// on this line i tell the date it is 14 july
// here we must use back quote`

// var str4 = new String("this is the string object")

// console.log(`Showing first string ${str}`)
// console.log(`back quote string can have embedded variables ${str2}, ${str3}`)

// console.log(str.toUpperCase())

// console.log("length =",str.length)

// console.log("char at 0",str.charAt(0).toUpperCase())
// console.log("concate","hello".concat("world",str))

// var s = str.concat(" CHECK IT")
// console.log(str)
// console.log(s)

// var s3 = "0123456789"

// console.log(s3.slice(0,3))  //start is 0 index and go till 3 3 not included
// console.log(s3.slice(3))   //end id end of string
// console.log(s3.slice(-3))  //string form -3 to end of string
// console.log(s3.slice(-5,-2))
// console.log(s3.slice(0,-1))

// console.log("    hii   hello   ".trim()) //removes the leading and trailing spaces
// console.log("        ".trim.length)

var a = "hello";
var b = "hello";
var c = new String("hello");
var d = new String("hello")

if(d.valueOf()==c.valueOf()) console.log("they are same")
else console.log("they are different")