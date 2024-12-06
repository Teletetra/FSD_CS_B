import React from "react";

const RefEx=()=>{
    const count=useRef(0);
    console.log("object rendering")
    const a=5;
    function handleaddValue(){
        count.current++;
        if(count.current==5){
            alert("you hit button"+count.current)
        }
        console.log("count.current=",count.current);
    }
    return (
        <div>
            <h1>useRef Example</h1>
            <h1>Ref Counter:{count.current}</h1>
            <button onClick={handleaddValue}>Add Value</button>
        </div>
    )
}