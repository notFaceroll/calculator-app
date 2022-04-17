import React, { useState } from 'react';
import styled from 'styled-components';
// import './ButtonSet.css';

const buttons = [
  ['7', '8', '9', 'del'],
  ['4', '5', '6', '+'],
  ['1', '2', '3', '-'],
  ['.', '0', '/', '*'],
  ['Reset', '='],
];

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 8px;
  padding: 1rem;
  max-width: 450px;

  button {
    padding: 0.5rem 1rem;
    padding-top: 0.75rem;
    line-height: 0.5;
    color: ${(props) => props.theme.colors.text.numbers};
    background-color: ${(props) => props.theme.colors.background.numbers};
    font-size: 2rem;
    border-radius: 8px;
    border: 0;
    border-bottom: 3px solid ${(props) => props.theme.colors.shadows.numbers};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-weight: 700;
    transition: all .5s ease, transform .1s ease;
    cursor: pointer;

    &:active {
      transform: scale(0.95);
    }
  }

  .large {
    grid-column: span 2;
  }

  button:nth-child(4),
  button:nth-child(17) {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.text.erase};
    background-color: ${(props) => props.theme.colors.background.erase};
    border-bottom: 3px solid ${(props) => props.theme.colors.shadows.erase};
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  button:last-of-type {
    background-color: ${(props) => props.theme.colors.background.equal};
    border-bottom: 3px solid ${(props) => props.theme.colors.shadows.equal};
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text.equal};
    font-weight: 500;
    letter-spacing: 1px;
  }

  .display {
    background-color: ${(props) => props.theme.colors.background.screen};
    flex-grow: 0;
    color: ${(props) => props.theme.colors.text.screen};
    font-size: 3rem;
    font-weight: bold;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    height: 100px;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    border-radius: 8px;
    text-overflow: ellipsis;
    transition: all .5s ease
  }

  .keyboard {
    display: grid;
    grid-gap: 1.125rem;
    grid-template-rows: repeat(5, 50px);
    grid-template-columns: repeat(4, minmax(40px, 80px));
    background-color: ${(props) => props.theme.colors.background.keypad};
    padding: 1.5rem;
    border-radius: 8px;
    transition: all .5s ease
  }
`;

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
  };

  const deleteInputHandler = () => {
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
        handleOperations(newResult);
        break;
      }
      case '-': {
        const newResult = +storedValue - +num;
        handleOperations(newResult);
        break;
      }
      case '*': {
        const newResult = +storedValue * +num;
        handleOperations(newResult);
        break;
      }
      case '/': {
        const newResult = +storedValue / +num;
        handleOperations(newResult);
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
