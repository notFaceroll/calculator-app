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
  const [enteredNumber, setEnteredNumber] = useState('');

  const [storedValue, setStoredValue] = useState('');
  const [operation, setOperation] = useState('');
  const [num, setNum] = useState('');

  const [calc, setCalc] = useState({
    operation: '',
    inputNum: '',
    result: '',
    storedValue: '',
  });

  const [result, setResult] = useState('0');

  // Parcialmente terminado
  const numInputHandler = ({ target: { value } }) => {
    // if (enteredNumber.length < 16) {
    //   // TODO: do not include 0 if there's no value
    //   setEnteredNumber(enteredNumber + value);
    // }
    // if (calc.inputNum.length < 16) {
    //   setCalc({ ...calc, inputNum: calc.inputNum + value });
    // }
    setNum(num + value);
  };

  // Parcialmente terminado
  const decimalHandler = ({ target: { value } }) => {
    console.log(value);
    if (enteredNumber.includes('.')) {
      return;
    } else {
      // TODO: include 0 if there's no value
      setEnteredNumber(enteredNumber + value);
    }
  };

  // Parcialmente terminado
  const resetHandler = () => {
    setEnteredNumber('');
  };

  // Parcialmente terminado
  const deleteInputHandler = () => {
    const updatedDisplay = enteredNumber.slice(0, -1);
    setEnteredNumber(updatedDisplay);
  };

  const equalsHandler = () => {
    if (num.length === 0 || storedValue === 0) return;
    switch (operation) {
      case '+': {
        const newResult = +num + +storedValue;
        setCalc({
          operation: '',
          inputNum: newResult,
          result: '',
          storedValue: '',
        });
        setNum(newResult.toString());
        setStoredValue(null);
        setOperation('');
        break;
      }
      case '-': {
        const newResult = +calc.storedValue - +calc.inputNum;
        setCalc({
          operation: '',
          inputNum: newResult,
          result: '',
          storedValue: '',
        });
        break;
      }
      case '*': {
        const newResult = +calc.inputNum * +calc.storedValue;
        setCalc({
          operation: '',
          inputNum: newResult,
          result: '',
          storedValue: '',
        });
        break;
      }
      case '/': {
        const newResult = +calc.storedValue / +calc.inputNum;
        setCalc({
          operation: '',
          inputNum: newResult,
          result: '',
          storedValue: '',
        });
        break;
      }
    }
  };

  const operationHandler = ({ target: { value } }) => {
    if (operation) {
      return;
    }
    // set an operation
    setOperation(value);
    // set the value to be calculated
    setStoredValue(!storedValue && num ? num : storedValue);
    setNum('');

    // calc.storedValue
    //   ? setCalc({ ...calc, operation: value, inputNum: '' })
    //   : setCalc({
    //       ...calc,
    //       operation: value,
    //       storedValue: calc.inputNum,
    //       inputNum: '',
    //     });
  };
console.log(num)
  return (
    <main>
      {/* <input
        value={calc.inputNum}
        text="text"
        id="display"
        className="display"
        readOnly
        placeholder="0"
      /> */}
      <div className="display">
        {storedValue && (
          <span>
            {operation} {storedValue}
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
              className={btn === '=' || btn === 'Reset' ? 'large' : ''}
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
