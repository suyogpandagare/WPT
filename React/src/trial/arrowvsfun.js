let obj = {

    myname : "prachi",
    getName : function()
    {
        console.log("getname is called")
        console.log(this.myname)
        return this.myname
    }


}

let f1 = obj.getName
f1()   //unbound , it doesnt get a this
f1 = f1.bind(obj)  //bound obj , it has a this
f1()  