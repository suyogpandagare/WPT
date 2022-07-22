import React from "react";
import Calc from "./Calc";
import ShowArray from "./ShowArray";

export  default function Welcome() {
  let x = 300;
  let arr=["suyog","rakhi","sanket","aniket"]
  let data={}
  data.key=12;
  data.value="Kolkata"

  let square = (x)=>{ return x*x }
  
  return (<div><center><b><i>Welcome Everyone {x} {2+3} {3*9-2} {"hello".toUpperCase()}</i></b></center>
    <ShowArray names={arr} data={data} maths={square}></ShowArray>
    </div>)

}

//this function is called by react framework
//React framework reads the attribute personname and adds it to props object 
//and it passses props object here
export function Greeting(props)
{
  return (<p>Namaste...{props.personname}...from...{props.country}</p>)
}

export function Greeting1()
{
  return (<p>Kem Cho...</p>)
}







