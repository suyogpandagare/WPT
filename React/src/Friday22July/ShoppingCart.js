
import React from "react";
import Shoppingitem from "./Shoppingitem";
import "./Shoppingitem.css";

export default function ShoppingCart()
{
let Shopping_list = [
    {id:"I1", item_name:"dress",item_cost:3000,item_q:1},
    {id:"I2",item_name:"jeans",item_cost:4000,item_q:4},
    {id:"I3",item_name:"saari",item_cost:2000,item_q:3},
    {id:"I4",item_name:"top",item_cost:6000,item_q:1},
    {id:"I5",item_name:"cap",item_cost:8000,item_q:2},
]

let all_items = Shopping_list.map((item)=>{return <Shoppingitem key={item.id} item_name={item.item_name} item_cost={item.item_cost} item_q={item.item_q}></Shoppingitem>})

return(
    <div>
        {all_items}
    </div>
)


}