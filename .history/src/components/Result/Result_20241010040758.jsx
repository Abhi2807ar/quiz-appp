import "./Result.scss";
import {useState} from "react";

const Result=({totalQuestions,result,onTryAgain})=>{
    const[name,setName]=useState("");
    const[highScores,setHighScores]=useState([]);
    const[showScores,setShowScores]=useState([]);


    const handleSave=()=>{
        const score={
            name,
            score:result.score,
        };
const newHighScores=[...highScores, score].sort((a,b)=>b.score - a.score);
setHighScores(newHighScores);
setShowScores(true);
localStorage.setItem("highScores",JSON.stringify(newHighscores));
    };
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
     {!showScores ? <>
     <h3>
        Enter Your name below<br/> to save your score!
     </h3>
     <input placeholder="Your Name"
     value={name}
     onChange={(evt)=>setName(evt.target.value)}
      />
      <button onClick={handleSave}>Save</button>
     </>: <>
     <table>
        <thead>
            <tr>
                <th>Ranking</th>
                <th>Name</th>
                <th>Score</th>
            </tr>
            <tbody></tbody>
        </thead>
     </table>
     </>}
     </div>
     );
};
export default Result;