import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import "./Welcome.css";


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({ type: "CHANGE_STAGE" })}>
          <div id="textbut" >
           Encontre seu monitor!
        </div>
      </button>

      <div id="imgPD">
      <img src={testeafinidade} alt="Início do Quiz" />
      </div>

    </div>
    
  );
};

export default Welcome;
