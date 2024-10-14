import Quiz from "./components/Quiz/Quiz";
import {jsQuizz} from "./constants";
function App() {
  useEffect(()=>{
    getQuestions();
  },[]);
  const getQuestions=async()=>{
    try{
      const resp
    }
  }

  });
  return <Quiz questions={jsQuizz.questions}/>;
}

export default App
