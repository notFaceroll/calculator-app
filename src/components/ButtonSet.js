import React, { useState } from 'react';
import './ButtonSet.css';

const buttons = [
  ['7', '8', '9', 'del'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['.', '0', '/', '*'],
  ['Reset', '='],
];

export default function ButtonSet(props) {
  const [storedValue, setStoredValue] = useState('');
  const [operation, setOperation] = useState('');
  const [num, setNum] = useState('0');

  // Parcialmente terminado
  const numInputHandler = ({ target: { value } }) => {
    if (num.length < 16) {
      //   // TODO: do not include 0 if there's no value
      //   setEnteredNumber(enteredNumber + value);
      // }
      // if (calc.inputNum.length < 16) {
      //   setCalc({ ...calc, inputNum: calc.inputNum + value });
      // setNum(num + value);
      setNum(num === '0' ? value : num + value);
    }
  };

  // Parcialmente terminado
  const decimalHandler = ({ target: { value } }) => {
    if (num.includes('.')) {
      return;
    } else {
      setNum(num === '0' ? '0' + value : num + value);
    }
  };

  // Parcialmente terminado
  const resetHandler = () => {
    setNum('0');
  };

  // Parcialmente terminado
  const deleteInputHandler = () => {
    const updatedDisplay = num.slice(0, -1);
    setNum(updatedDisplay === '' ? '0' : updatedDisplay);
  };

  const equalsHandler = () => {
    if (num.length === 0 || storedValue === 0) return;
    switch (operation) {
      case '+': {
        const newResult = +storedValue + +num;
        setNum(newResult.toString());
        setStoredValue('');
        setOperation('');
        break;
      }
      case '-': {
        const newResult = +storedValue - +num;
        setNum(newResult.toString());
        setStoredValue('');
        setOperation('');
        break;
      }
      case '*': {
        const newResult = +storedValue * +num;
        setNum(newResult.toString());
        setStoredValue('');
        setOperation('');
        break;
      }
      case '/': {
        const newResult = +storedValue / +num;
        setNum(newResult.toString());
        setStoredValue('');
        setOperation('');
        break;
      }
    }
  };

  const operationHandler = ({ target: { value } }) => {
    if (operation && storedValue && num) {
      return equalsHandler();
    } else if (operation) {
      return;
    }
    // set an operation
    setOperation(value);
    // set the value to be calculated
    setStoredValue(!storedValue && num ? num : storedValue);
    setNum('');
  };

  return (
    <main>
      <div className="display">
        {storedValue && (
          <span>
            {storedValue} {operation}
          </span>
        )}
        <span>{num}</span>
      </div>

      <div className="keyboard">
        {buttons.flat().map((btn, index) => {
          return (
            <button
              key={index}
              value={btn}
              className={
                btn === '=' || btn === 'Reset'
                  ? 'large'
                  : btn === 'del'
                  ? 'del'
                  : null
              }
              onClick={
                btn === 'Reset'
                  ? resetHandler
                  : btn === '+' || btn === '-' || btn === '*' || btn === '/'
                  ? operationHandler
                  : btn === '='
                  ? equalsHandler
                  : btn === 'del'
                  ? deleteInputHandler
                  : btn === '.'
                  ? decimalHandler
                  : numInputHandler
              }
            >
              {btn}
            </button>
          );
        })}
      </div>
    </main>
  );
}
