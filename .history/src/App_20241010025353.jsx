import { useEffect } from "react";
import Quiz from "./Quiz";
import { useEffect,use } from "react";
import {jsQuizz} from "./constants";
function App() {
  return <Quiz questions={jsQuizz.questions}/>;

}

export default App
