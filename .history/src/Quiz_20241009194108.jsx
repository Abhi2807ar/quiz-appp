 import { usestate }from react";
import { resultInitalState } from "./constants";
    
    const Quiz ({ questions }) => {
    
    const [currentQuestion, setCurrentQuestion] = useState(0);
    
    const [answerIdx, setAnswerIdx] = useState(null);
    
    const [answer, setAnswer] = useState(null);
    
    const [result, setResult] = useState(resultInitalState);
    
   
    const [showResult, setShowResult] = useState(false);
    
    
    const { question, choices, correctAnswer } = questions [currentQuestion];
    
    
    
    const onAnwswerClick= (answer, index) => {
    
    14
    
    setAnswerIdx(index);
    
    15
    
    if (answer === correctAnswer) {
    
    16
    
    setAnswer(true);
    
    17
    
    } else {
    
    18
    
    setAnswer(false);
    
    }
    
    };
    
    19
    
    20
    
    const onClickNext = () => {
    [7:36 pm, 9/10/2024] Abhijeet Aryan: Quiz.jsx > [] Quiz
    
    37
    
    if (currentQuestion !== questions.length-1) {
    
    38
    
    setCurrentQuestion ((prev) => prev + 1);
    
    39
    
    } else {
    
    40
    
    setCurrentQuestion(0);
    
    setShowResult(true);
    
    }
    
    };
    
    41
    
    42
    
    43
    
    44
    
    const onTryAgain = () => {
    
    45
    
    46
    
    setResult()
    
    }
    
    47
    
    48
    
    return (
    
    49
    
    50
    
    51
    
    52
    
    53
    
    54
    
    55
    
    56
    
    57
    
    PROBLEMS
    
    OUTPUT
    
    <div className="quiz-container">
    
    {!showResult ? (
    
    <>
    
    <span className="active-question-no">{currentQuestion + 1}</span>
    
    <span className="total-question">/{questions.length}</span> <h2>{question}</h2>
    
    {choices.map((choice, index) => (
    [7:37 pm, 9/10/2024] Abhijeet Aryan: setShowResult(true);
    
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