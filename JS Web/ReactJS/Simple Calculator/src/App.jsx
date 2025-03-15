import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Operation from './components/Operation'

function App() {

  const [result, setResult] = useState(0)
  const [firstOperand, setFirstOperand] = useState('');
  const [secondOperand, setSecondOperand] = useState('');
  const [operator, setOperator] = useState('');

  function calculate() {
    if (firstOperand === '' || secondOperand === '' || operator === '') {
      return;
    }
    switch (operator) {
      case '+': setResult(+firstOperand + +secondOperand);
        break;
      case '-': setResult(+firstOperand - +secondOperand);
        break;
      case '*': setResult(+firstOperand * +secondOperand);
        break;
      case '/': setResult(+firstOperand / +secondOperand);
        break;
    }
  }

  function numbersHandler(e) {

    if (operator === '') {
      setFirstOperand(currentResult => currentResult += e.target.textContent);
    } else {
      setSecondOperand(currentResult => currentResult += e.target.textContent);
    }
  }

  function resetHandler() {
    setFirstOperand('');
    setSecondOperand('');
    setOperator('');
  }

  function operatorsHandler(e) {

    if (firstOperand === '') {
      setFirstOperand(0)
    }
    setOperator(e.target.textContent)
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Simple Calculator</h1>
      <div className="card">
        <button>
          Result: {result}
        </button>
      </div>

      <Operation firstOperand={firstOperand} secondOperand={secondOperand} operator={operator} />
      <button onClick={resetHandler}>Reset</button>
      <section className="buttons">
        <div>
          <div>
            <button onClick={numbersHandler}>1</button>
            <button onClick={numbersHandler}>2</button>
            <button onClick={numbersHandler}>3</button>
          </div>

          <div>
            <button onClick={numbersHandler}>4</button>
            <button onClick={numbersHandler}>5</button>
            <button onClick={numbersHandler}>6</button>
          </div>
          <div>
            <button onClick={numbersHandler}>7</button>
            <button onClick={numbersHandler}>8</button>
            <button onClick={numbersHandler}>9</button>
          </div >
          <div>
            <button onClick={numbersHandler}>0</button>
          </div>
        </div>
        <div className='operators'>
          <button onClick={operatorsHandler}>/</button>
          <button onClick={operatorsHandler}>*</button>
          <button onClick={operatorsHandler}>-</button>
          <button onClick={operatorsHandler}>+</button>
          <button onClick={calculate}>=</button>
        </div>
      </section>
    </>
  )
}

export default App
