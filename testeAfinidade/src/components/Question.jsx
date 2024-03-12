import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Question.css";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.question[quizState.currentQuestion]

  return(
  <div>
    <p>Pergunta {quizState.currentQuestion} de {quizState.question.length}</p>
    <h2>(currentQuestion.question)</h2>
    <div id="options-container"><p>Opções</p></div>
    <p>Opções</p>
    <button>Continuar</button>
    </div>
    );
}

export default Question