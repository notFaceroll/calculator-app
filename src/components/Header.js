import React from 'react';
import { Container, SliderBox } from './HeaderElements';

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
          defaultValue="1"
          onChange={toggleTheme}
        />
      </SliderBox>
    </Container>
  );
}
