import {useState} from "react";
import "./calculadora.css";
// function init() {
//     console.log('init')
// }
// function resetValues() {
//     console.log('resetValues')
// }
// function calculate() {
//     console.log('calculate')
// }
// function deleteCaracter() {
//     console.log('deleteCaracter')
// }
// function result() {
//     console.log('result')
// }
export function Calculadora() {
  const [value, setValue] = useState(0);

  const handleClick = (param) => {
    if (value === 0) {
      setValue(param);
    } else {
      setValue(value + param);
    }
    switch (param) {
      case "A":
        setValue(0);
        break;
      case "+":
        setValue(value + param);
        break;
      case "-":
        setValue(value + param);
        break;
      case "*":
        setValue(value + param);
        break;
      case "/":
        setValue(value + param);
        break;
      case "=":
        setValue(eval(value));
        break;
      case ".":
        setValue(value + param);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <section className="section-container">
        <h1 className="titulo">Calculadora</h1>
        <div className="calculadora">
          <div className="row row-first">
            <p>{value}</p>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick("A")}>
                A
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("+")}>
                +
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("%")}>
                %
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("/")}>
                /
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick("7")}>
                7
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("8")}>
                8
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("9")}>
                9
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("*")}>
                *
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick("5")}>
                5
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("4")}>
                4
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("6")}>
                6
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("-")}>
                -
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="button" onClick={() => handleClick("1")}>
                1
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("2")}>
                2
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("3")}>
                3
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("+")}>
                +
              </button>
            </div>
          </div>
          <div className="row row-last">
            <div className="col">
              <button type="button" onClick={() => handleClick("0")}>
                0
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick(".")}>
                .
              </button>
            </div>
            <div className="col">
              <button type="button" onClick={() => handleClick("=")}>
                =
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
