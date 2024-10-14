import "./Result.scss";
import {useState} from "react";

const Result=({totalQuestions,result,onTryAgain})=>{
    const[name,setName]=useState("");
    const[name,setHighScores]=useState([]);

    const handleSave=()=>{
        const score={
            name,
            score:result.score
        };

    }
return(
<div className="result">
    <h3>Result</h3>
    <p>
    Total Questions: <span>{totalQuestions}</span>
    </p>
    <p>
    Total Score: <span>{result.score}</span>
    </p>
    <p>
    Correct Answers: <span>{result.correctAnswers}</span>
    </p>
    <p>
    Wrong Answers: <span>{result.wrongAnswers}</span>
    </p>
     <button onClick={onTryAgain}>Try again</button>
     <>
     <h3>
        Enter Your name below<br/> to save your score!
     </h3>
     <input placeholder="Your Name"
     value
     </>
     </div>);
};
export default Result;