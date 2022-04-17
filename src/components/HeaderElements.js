import styled from 'styled-components';

export const Container = styled.header`
  width: min(100%, 450px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1rem;
  color: ${(props) => props.theme.colors.text.screen};
  h1 {
    font-size: 2.5rem;
  }

  p {
    margin: 18px 15px 0 auto;
    text-transform: uppercase;
    font-size: 1rem;
  }
`;

export const SliderBox = styled.div`
  width: 18%;
  display: flex;
  flex-direction: column;

  .slider-label {
    display: flex;
    justify-content: space-between;
    padding: 0 5px;
  }

  .slider-range {
    max-width: 100%;
    -webkit-appearance: none;
    appearance: none;
    border-radius: 999px;
    padding: 2px 4px;
    background-color: ${(props) => props.theme.colors.background.keypad};
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .slider-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.theme.colors.background.equal};
    border-radius: 50%;
    cursor: pointer;
  }

  .slider-range::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background-color: ${(props) => props.theme.colors.background.equal};
    cursor: pointer;
    border: 0;
  }
`;
