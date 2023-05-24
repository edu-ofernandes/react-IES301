import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ul>
              <li><a href="/atividade-1">atividade-1</a></li>
              <li><a href="/atividade-2">atividade-2</a></li>
              <li><a href="/atividade-3">atividade-3</a></li>
              <li><a href="/atividade-4">atividade-4</a></li>
              <li><a href="/atividade-5">atividade-5</a></li>
              <li><a href="/atividade-6">atividade-6</a></li>
              <li><a href="/atividade-7">atividade-7</a></li>
            </ul>
          }
        ></Route>
        <Route path="/atividade-1" element={
            <p>atividade-1</p>
        }></Route>
        <Route path="/atividade-2" element={
            <p>atividade-2</p>
        }></Route>
        <Route path="/atividade-3" element={
            <p>atividade-3</p>
        }></Route>
        <Route path="/atividade-4" element={
            <p>atividade-4</p>
        }></Route>
        <Route path="/atividade-5" element={
            <p>atividade-5</p>
        }></Route>
        <Route path="/atividade-6" element={
            <p>atividade-6</p>
        }></Route>
        <Route path="/atividade-7" element={
            <p>atividade-7</p>
        }></Route>
      </Routes>
    </BrowserRouter>
  );
}
