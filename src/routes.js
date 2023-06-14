import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Atv1} from "./components/atividade-1";
import PeopleCounter from "./components/atividade-2/people-counter/PoelpeCounter";
import {Calculadora} from "./components/atividade-5/Calculadora/Calculadora";
import {JogoMemoria} from "./components/atividade-6/JogoMemoria";
import {Home} from "./home";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calculadora" element={<Calculadora />}></Route>
        <Route path="/jogo-da-memoria" element={<JogoMemoria />}></Route>
        <Route path="/contador-pessoas" element={<PeopleCounter />}></Route>
        <Route path="/data-hora-letreiro" element={<Atv1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
