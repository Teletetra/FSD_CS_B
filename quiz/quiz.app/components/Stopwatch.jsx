import { useEffect,useState } from "react";

const Stopwatch=()=>{
    const [isrunning,setIsrunning]=useState(false);
    const [Time,setTime]=useState(0);
    const [validid,setvalidid]=useState(null);

    function handleStartStop(){
        setIsrunning((p)=>!p)
        clearInterval(validid)
    }

    function handleReset(){
        setTime(0);
        clearInterval(validid)
    }

    useEffect(()=>{
        if (isrunning){
            const id=setInterval(()=>{
            setTime((time)=>(time+1))
    },1000) 
    setvalidid(id);
    }
    return ()=>clearInterval(validid);
    },[isrunning])

    function formattime(time){
        const hour=Math.floor(time/3600);
        const h=hour<10?("0"+hour):hour;
        const minutes=Math.floor((time%3600)/60);
        const m=minutes<10?("0"+minutes):minutes;
        const second=time%60;
        const s=second<10?("0"+second):second;
        return '${h}:{m}:${s}'
    }

    return (
        <div>
            <h1>stop watch App</h1>
            <h1>{Time}</h1>
            <button onClick={handleStartStop}>{isrunning?'Stop':'Start'}</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
};