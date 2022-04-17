import React from 'react';
import styled from 'styled-components';
import './Header.css';

const Container = styled.header`
  width: min(100%, 450px);
  display: flex;
  box-sizing: border-box;
`;

const SliderBox = styled.div`
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
    background-color: #232c43;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }

  .slider-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    background-color: #d03f2f;
    cursor: pointer;
  }

  .slider-range::-moz-range-thumb {
    width: 12px;
    height: 12px;
    background-color: #d03f2f;
    cursor: pointer;
    border: 0;
  }
`;

export default function Header(props) {
  const toggleTheme = ({ target: { value } }) => {
    props.toggleTheme(value);
  };

  return (
    <Container>
      <h1>calc</h1>
      <p>theme</p>
      <SliderBox>
        <div className="slider-label">
          <span>1</span>
          <span>2</span>
          <span>3</span>
        </div>
        <input
          type="range"
          className="slider-range"
          min={1}
          max={3}
          onChange={toggleTheme}
        />
      </SliderBox>
    </Container>
  );
}
