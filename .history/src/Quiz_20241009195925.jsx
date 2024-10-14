 import { useState }from "react";
import { resultInitalState } from "./constants";
    const Quiz=({ questions }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(null);
    const [result, setResult] = useState(resultInitalState);
    const [showResult, setShowResult] = useState(false);
    const { question, choices, correctAnswer } = questions [currentQuestion];
    const onAnwswerClick= (answer, index) => {
    setAnswerIdx(index);
    if (answer === correctAnswer) {
    
  
    
    setAnswer(true);
    
   
    
    } else {
    
   
    
    setAnswer(false);
    
    }
    
    };
    const onClickNext = () => {
     Quiz.jsx > [] Quiz
    if (currentQuestion !== questions.length-1) {
    setCurrentQuestion ((prev) => prev + 1);
   
    
    } else {

    
    setCurrentQuestion(0);
    
    setShowResult(true);
    
    }
    
    };
    
    const onTryAgain = () => {
    

    
    setResult()
    
    }
    
 
    
    return (
    <div className="quiz-container">
    
    {!showResult ? (
    
    <>
    
    <span className="active-question-no">{currentQuestion + 1}</span>
    
    <span className="total-question">/{questions.length}</span> <h2>{question}</h2>
    
    {choices.map((choice, index) => ( setShowResult(true);
    
    }
    };
    const onTryAgain = () =>
    
    setResult(resultInitalState);
    setShowResult(false);
    
    return (
    key={choice}
    
    onClick=(() => onAnwswerClick(choice, index)}
    
    
    {choices.map((choice, index) => (
    
    <h2>{question}</h2>
    
    <ul>
    
    <span className="total-question">/{questions.length}</span>
    
    {IshowResult ? (
    
    <<>>
    
    <span className="active-question-no">{currentQuestion + 1}</span>
    
    <div className="quiz-container
    ):(

<div className="result">

<h3>Result</h3>

<p>

Total Questions: <span>{questions.length}</span>

</p>

<p>

Total Score: <span>{result.score}</span>

</p>

78

<p>

79

Correct Answers: <span>{result.correctAnswers}</

88

</p>
<p>

Wrong Answers: <span>{result.wrongAnswers)</span>

</p>


<button>Try again/button

</div>
)}



</div>


);



};