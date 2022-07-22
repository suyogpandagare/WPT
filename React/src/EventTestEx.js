import React from "react"

export default function EventTestEx()
{
    //this is called by react framework
    function handlerex(event)
    {
        if(event.target.name == "b1")
        console.log("HI THERE BUTTON OK1 CLICKED")
        if(event.target.name == "b2")
        console.log("HI THERE BUTTON OK2 CLICKED")

        console.log(event.target.name)

    }

    //this is called by us so x is passed 
    function handler2(x)
    {
        if(x === 1)
        console.log("Button OK3 is clicked")
        if(x === 2)
        console.log("Button OK4 is clicked")
    }

    return(
        <div>
            <button name="b1" onClick={handlerex}>OK1</button>
            <button name="b2" onClick={handlerex}>OK2</button>
        
        {/* We are registering arroe function for click
        React will call the arroe function when button is clicked */}
            <p>
            <button name="b3" onClick={()=>{ handler2(1) }}>OK3</button>
            <button name="b4" onClick={()=>{ handler2(2) }}>OK4</button>
            </p>

        </div>
    )
}