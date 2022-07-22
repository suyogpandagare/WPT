import { useState } from "react"
import React from "react"
import Calc from "./Calc"

export default function Calcu()
{

    let [num1,setNum1] = useState("")
    let [num2,setNum2] = useState("")
    let [op,setOp] = useState("")
    
    function handler1(event)
    {
        setNum1(event.target.value)
        console.log("num1:",num1)
    }
    function handler2(event)
    {
        setNum2(event.target.value)
        console.log("num2:",num2)
    }
    function handler3(event)
    {
        setOp(event.target.value)
        console.log("op:",op)
    }

    let arr = [num1,num2,op]
    return(<div>
        <input type="number" onBlur={handler1} />
        <input type="number" onBlur={handler2} />
        <select onClick={handler3}>
            <option value={"+"}>+</option>
            <option value={"-"}>-</option>
            <option value={"*"}>*</option>
            <option value={"/"}>/</option>
        </select>
        <p>{num1}</p>
        <p>{num2}</p>
        <p>{op}</p>
        <Calc name={arr}></Calc>
        </div>
    )
}