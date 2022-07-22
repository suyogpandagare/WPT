import { Component } from "react";

export default class HelloC extends Component
{
    render()
    {
        return (<p>Hello {this.props.pname}</p>)
    }
}