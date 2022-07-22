import { Component } from "react";

export default class ShowArray extends Component
{
    render()
    {
        return(<div>The Array is {this.props.names[1]}
        <p>The Data Is {this.props.data.key} and {this.props.data.value} </p>
            <p>The return value of the function is {this.props.maths(5)}</p>

        </div>)
    }
}