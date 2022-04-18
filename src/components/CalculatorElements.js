import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  max-width: min(100%, 450px);

  button {
    background-color: ${(props) => props.theme.colors.background.numbers};
    color: ${(props) => props.theme.colors.text.numbers};
    font-family: inherit;
    font-size: 2rem;
    font-weight: 700;
    line-height: 0.5;
    padding: 0.5rem 1rem;
    padding-top: 0.75rem;
    border-radius: 8px;
    border: 0;
    border-bottom: 3px solid ${(props) => props.theme.colors.shadows.numbers};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* transition: all 0.5s ease, transform 0.1s ease; */

    &:active {
      transform: scale(0.95);
    }

    &:hover {
      opacity: 0.75;
    }
  }

  .large {
    grid-column: span 2;
  }

  button:nth-child(4),
  button:nth-child(17) {
    background-color: ${(props) => props.theme.colors.background.erase};
    color: ${(props) => props.theme.colors.text.erase};
    font-size: 1.125rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-bottom: 3px solid ${(props) => props.theme.colors.shadows.erase};
  }

  button:last-of-type {
    background-color: ${(props) => props.theme.colors.background.equal};
    color: ${(props) => props.theme.colors.background.numbers};
    border-bottom: 3px solid ${(props) => props.theme.colors.shadows.equal};
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .display {
    background-color: ${(props) => props.theme.colors.background.screen};
    color: ${(props) => props.theme.colors.text.screen};
    font-size: 3rem;
    font-weight: bold;
    padding: 1rem;
    border-radius: 8px;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-grow: 0;
    text-align: center;
    align-items: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    transition: all 0.5s ease;
  }

  .keyboard {
    background-color: ${(props) => props.theme.colors.background.keypad};
    padding: 1.5rem;
    border-radius: 8px;
    display: grid;
    grid-gap: 1.125rem;
    grid-template-rows: repeat(5, 50px);
    grid-template-columns: repeat(4, minmax(40px, 80px));
    transition: all 0.5s ease;
  }
`;