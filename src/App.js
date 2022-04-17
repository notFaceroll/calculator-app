import Header from './components/Header';
import Calculator from './components/Calculator';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from './themes/themes';
import { useState } from 'react';
import Footer from './components/Footer';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
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
      <Container>
        <Header toggleTheme={toggleTheme} />
        <Calculator />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
