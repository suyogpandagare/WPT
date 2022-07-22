import React, { Component } from "react"

export default class Calc extends Component
{
    render(props)
    {
        let num1 = parseInt(this.props.name[0])
        let num2 = parseInt(this.props.name[1])
        let op = this.props.name[2]
        if(op == '+') {return(<h1>Addition of {num1} and {num2} is : {num1+num2}</h1>)}
        if(op == "-") {return(<h1>Substraction of {num1} and {num2} is : {num1-num2}</h1>)}
        if(op == "*") {return(<h1>Multiplication of {num1} and {num2} is : {num1*num2}</h1>)}
        if(op == "/") {return(<h1>Division of {num1} and {num2} is : {num1/num2}</h1>)}
        else{return (<h1>Invalid Operator</h1>)}
        
    }
}