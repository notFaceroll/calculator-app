import styled from 'styled-components';

export const Container = styled.footer`
  background: linear-gradient(to bottom right, #333333, #121212);
  position: fixed;
  bottom: 0;
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .attribution {
    color: #bcbcbc;
    font-weight: 300;
    font-size: 0.85rem;

    a {
      text-decoration: none;

      &:active,
      &:visited,
      &:link {
        color: #bcbcbc;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
