import { render } from "@testing-library/react";
import React from "react";
import "./Shoppingitem.css"

export default function Shoppingitem(props)
{
return(
    <div className="item">
        <p>
        Name : {props.item_name}
        </p>
        <p>
            Cost : {props.item_cost}
        </p>
        <p>
            Quantity : {props.item_q}
        </p>
    </div>
)
    
}