import React from "react";
import GoodBye from "./GoodBye";
import GoodMorning from "./GoodMorning";

//Www is an alias to whatever is exported by default  in ./Welcome file
import Www from "./Welcome";

//Ting is an alias to normal export Greeting in ./Welcome
import { Greeting as Ting,Greeting1 } from "./Welcome";

//we can also write import in single line as
//import Www, {Greeting} from './Welcome'

import './App.css';
import InputC from "./InputC";
import HelloC from "./HelloC";
import Factorial from "./Factorial";
import IsPrime from "./IsPrimeC";
import Calcu from "./Calcu";



function App() {


  // let arr1 = [12,4]
  // let arr2 = ["plus","minus","mul","divide"]

 // console.log(arr2[1])

  return (
    <div>
    {/* <Calc a1={arr1} a2={arr2[0]}></Calc> */}
    
    
    
    {/* <Calcu></Calcu> */}
    
    {/*<IsPrime num="11131"></IsPrime>
     <Factorial num="5"></Factorial>
    <HelloC pname="Sankya"></HelloC>
    <Www></Www>
    <GoodMorning></GoodMorning>
    <Ting personname="suyog" country="India"></Ting>
    <Greeting1></Greeting1>
    <InputC></InputC>
    <div className="SomeStyle"><center>"HI How are you great to see you </center></div>
    <div><center>Just keep doing Hardwork pays off..!!"</center></div>
    <GoodBye></GoodBye> */}
  </div>
  )


}
export default App;
