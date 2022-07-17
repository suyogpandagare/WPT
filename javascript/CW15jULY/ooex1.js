//JSON object structure
let obj = {
    'name':'ppp',
    '_age':'33',
    set age(a){
        if(a>10 && a<100)
        {
            console.log("setter is called")
            this._age=a;
        }
    else {console.log("wrong age")}
},
        get age()
        {
            console.log("getter is called")

            return this._age;
        },

    'show':function()
    {
        console.log(this.name,this.age)
    },
    'changeName':function(n)
    {
        this.name=n;
    }
}

// console.log(obj.name,obj.age,obj.show)
obj.show();

obj.changeName("suyog");
obj.show();

obj.profession='plumber'
// console.log(obj.name,obj.age,obj.show,obj.profession)
// console.log(obj)

obj.age = 300  //setter gets called automatically
console.log(obj)  //getter gets called automatically

obj.age=34;
console.log(obj)


