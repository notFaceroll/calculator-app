import React from 'react';
import { Container } from './FooterElements';

export default function Footer() {
  return (
    <Container>
      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        , Coded by{' '}
        <a
          href="https://www.frontendmentor.io/profile/notFaceroll"
          target="_blank"
        >
          Jorge Miguel
        </a>
      </div>
    </Container>
  );
}
