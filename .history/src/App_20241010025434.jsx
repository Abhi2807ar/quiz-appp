
import Quiz from "./Quiz";
import { useEffect,useState } from "react";
import {jsQuizz} from "./constants";
function App() {
  return <Quiz questions={jsQuizz.questions}/>;

}

export default App
