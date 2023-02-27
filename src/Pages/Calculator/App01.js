import React from "react";
import { useState } from "react";
import BackBtn from "../ExpenseTracker/components/BackBtn";
import "./App01.css";
import { Link } from "react-router-dom";

function App01() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ["/", "*", "+", "-", "."];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };
  // comment
  const backSpace = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const allClear = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, 0);
    setCalc(value);
    const val = result.slice(0, 0);
    setResult(val);
  };

  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>
          {i}
        </button>
      );
    }
    return digits;
  };

  return (
    <>
      <Link to="/">
        <BackBtn />
      </Link>
      <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <spam>({result})</spam> : ""}&nbsp;
            {calc || "0"}
          </div>
          <div className="clear">
            <button onClick={backSpace}>DEL</button>
            <button onClick={allClear}>AC</button>
          </div>
          <div className="operators">
            <button onClick={() => updateCalc("/")}>/</button>
            <button onClick={() => updateCalc("*")}>*</button>
            <button onClick={() => updateCalc("+")}>+</button>
            <button onClick={() => updateCalc("-")}>-</button>
          </div>

          <div className="digits">
            {createDigits()}
            <button onClick={() => updateCalc("0")}>0</button>
            <button onClick={() => updateCalc(".")}>.</button>

            <button onClick={calculate}>=</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App01;
