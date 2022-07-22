import React from "react";

export default function ShowList()
{
    let arr = ["salt","sugar","tea","coffee","milk"]
    let list_items = arr.map((element,index)=>{return <li key={index}> {element}</li>})

return(<div>
    <ol>{list_items}</ol>
</div>)

}