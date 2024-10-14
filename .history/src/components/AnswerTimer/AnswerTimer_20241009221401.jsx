import "./AnswerTimer.scss";
import { useEffect,useState,useRef } from "react";
function AnswerTimer(){
    const[counter,setCounter]=useState(0);
    const[progressLoaded,setProgresssLoaded]=useState(0);
    const intervalRef=useRef();

    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setCounter((cur)=>cur+1);
        },1000);
        return 
    })
    return(
        <div className="answer-timer-container">
        <div className="progress"></div>
        </div>
    );
}
export default AnswerTimer;