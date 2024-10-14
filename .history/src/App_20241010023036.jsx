import Quiz from "./components/Quiz/Quiz";
import {jsQuizz} from "./constants";
function App() {
  useEffect(()=>{
    getQuestions();
  }

  });
  return <Quiz questions={jsQuizz.questions}/>;
}

export default App
