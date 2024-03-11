import "./Welcome.css";
import testeafinidade from "../img/quiz.svg";
import sol from "../img/sol.png";

const Welcome = () => {
  return (
    <div id="welcome">
      <h2>Seja bem-vindo</h2>
      
      <p>Clique no botão abaixo para começar:</p>
        <button>
        {/* <div id="nuvem"><img src={nuvem} alt="Nuvem" /> </div> */}
          <div id="textbut" >
        Encontre seu monitor!
        </div>
        <img src={sol} alt="Sol" />
      </button>  
      <div id="imgPD">
      <img src={testeafinidade} alt="Início do Quiz" />
      </div>
    </div>
    
  );
};

export default Welcome;