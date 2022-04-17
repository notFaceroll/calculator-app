import Header from './components/Header';
import ButtonSet from './components/ButtonSet';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from './themes/themes';
import { useState } from 'react';

const Footer = styled.footer`
  position: fixed;
  height: 10px;
  botton: 0;
  width: 100%;
  background: linear-gradient(to bottom right, #333333, #121212);
`;

const Divzao = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.background.main};
`;

function App() {
  const [theme, setTheme] = useState(themes.default);

  const toggleTheme = (val) => {
    switch (val) {
      case '1':
        setTheme(themes.default);
        break;
      case '2':
        setTheme(themes.lightTheme);
        break;
      case '3':
        setTheme(themes.purpleTheme);
        break;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Divzao>
        <Header toggleTheme={toggleTheme} />
        <ButtonSet />
        {/* <Footer /> */}
      </Divzao>
    </ThemeProvider>
  );
}

export default App;
