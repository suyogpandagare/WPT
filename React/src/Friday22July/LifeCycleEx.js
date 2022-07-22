import React, { Component } from "react";

export default class LifeCycleEx extends Component
{
    constructor()
    {
        super()
        this.state={data:1}
        console.log("Component instantiated")
    }
    
    componentDidMount()
    {
        console.log("component mounted")
    }

    componentWillUnmount()
    {
        console.log("component unmount")
    }

    componentDidUpdate(prevProps,prevState)  //React framework applies previous value
    {
        console.log("updated Props=",prevProps,"prevState=",prevState)
    }

    render()
    {
        return(
            <div>
                <button onClick={()=>{this.setState({data:this.state.data+1})}}>change data</button>
                <p>LifeCycleEx Seen {this.props.message}</p>
            </div>
        )
    }
}