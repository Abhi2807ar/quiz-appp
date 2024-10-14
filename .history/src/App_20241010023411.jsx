import Quiz from "./components/Quiz/Quiz";
import {jsQuizz} from "./constants";
function App() {
  useEffect(()=>{
    getQuestions();
  },[]);
  const getQuestions=async()=>{
    try{
      const response=await fetch("https://6706ea5ca0e04071d228a865.mockapi.io/api/v1/questions"

      );

      const questionsResponse=await response.json();

      console.log(questionsResponse);
    }catch(error){
      console.log(error)
    }
  };

  return <Quiz questions={jsQuizz.questions}/>;
}

export default App
