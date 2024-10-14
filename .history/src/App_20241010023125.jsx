import Quiz from "./components/Quiz/Quiz";
import {jsQuizz} from "./constants";
function App() {
  useEffect(()=>{
    getQuestions();
  },[]);
  const getQuestions=async()=>{
    try{
      const response=await fetch("")
    }catch(error)
  }

  });
  return <Quiz questions={jsQuizz.questions}/>;
}

export default App
