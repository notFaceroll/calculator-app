import { Fragment } from 'react';
import Header from './components/Header';
import Visor from './components/Visor';
import ButtonSet from './components/ButtonSet';
import './App.css';

function App() {
  return (
    <Fragment>
      <Header />
      <ButtonSet />
    </Fragment>
  );
}

export default App;
