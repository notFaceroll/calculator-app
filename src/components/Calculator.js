import React, { useState } from 'react';
import { MainContent } from './CalculatorElements';

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

  const numInputHandler = ({ target: { value } }) => {
    if (num.length < 16) {
      setNum(
        num === '0' || num === 'Infinity' || num === 'NaN' ? value : num + value
      );
    }
  };

  const decimalHandler = ({ target: { value } }) => {
    if (num.includes('.')) {
      return;
    } else {
      setNum(num === '0' ? '0' + value : num + value);
    }
  };

  const resetHandler = () => {
    setNum('0');
    setStoredValue('');
    setOperation('');
  };

  const deleteInputHandler = () => {
    if (storedValue !== null) {
      const updatedDisplay = num.slice(0, -1);
      return setNum(updatedDisplay);
    }
    const updatedDisplay = num.slice(0, -1);
    setNum(updatedDisplay === '' ? '0' : updatedDisplay);
  };

  const handleOperations = (newResult) => {
    setNum(newResult.toString());
    setStoredValue('');
    setOperation('');
  };

  const equalsHandler = () => {
    if (num.length === 0 || storedValue === 0) return;
    switch (operation) {
      case '+': {
        const newResult = +storedValue + +num;
        handleOperations(newResult.toFixed(2));
        break;
      }
      case '-': {
        const newResult = +storedValue - +num;
        handleOperations(newResult.toFixed(2));
        break;
      }
      case '*': {
        const newResult = +storedValue * +num;
        handleOperations(newResult.toFixed(2));
        break;
      }
      case '/': {
        const newResult = +storedValue / +num;
        handleOperations(newResult.toFixed(2));
        break;
      }
    }
  };

  const operationHandler = ({ target: { value } }) => {
    if (operation && storedValue && num) {
      return equalsHandler();
      // } else if (operation) {
      //   return;
    }
    // set an operation
    setOperation(value);
    // set the value to be calculated
    setStoredValue(!storedValue && num ? num : storedValue);
    setNum('');
  };

  return (
    <MainContent>
      <div className="display">
        {storedValue && (
          <span>
            {storedValue}
            {operation}
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
    </MainContent>
  );
}
