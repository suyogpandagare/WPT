import React, { Component } from "react";

export default class InputExC extends Component
{
    constructor()
    {
        super();
        this.state={data:"Default"}
        this.handler1 = this.handler1.bind(this)
    }

    //this simpe function doesnt get outer context so  it must be bound using bind function
    handler1(event)
    {
        this.setState({data:event.target.value})
    }

    //The arrow function gets the outer context of the caller as this
    handler2 = (event)=>{
        console.log("handler2 is called")
        this.setState({data:event.target.value
        })
    }
    render()
    {
        return(
            <div>
            Handler 1 :<input type="text" onBlur={this.handler1}></input>
            <p>{this.state.data}</p>
            <p>
            Handler 2 :<input type="text" onBlur={this.handler2}></input>
            </p>
        </div>
       )
       
    }
}