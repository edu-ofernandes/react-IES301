import {Link} from "react-router-dom";
import "./home.css";

export function Home() {
  return (
    <div className="container">
      <ul>
        <li>
          <Link to="calculadora">Calculadora</Link>
        </li>
        <li>
          <Link to="jogo-da-memoria">Jogo da memória</Link>
        </li>
        <li>
          <Link to="contador-pessoas">Contador de pessoas</Link>
        </li>
        <li>
          <Link to="data-hora-letreiro">Data e hora e letreiro</Link>
        </li>
      </ul>
    </div>
  );
}
