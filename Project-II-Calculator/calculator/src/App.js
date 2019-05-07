import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import ButtonContainer from './components/ButtonComponents/ButtonContainer';
import ActionButton from './components/ButtonComponents/ActionButton';
import NumberButton from './components/ButtonComponents/NumberButton';

class App extends React.Component {
  render() {
    return (
      <div className="calculator-wrapper">
        <CalculatorDisplay />
        <ButtonContainer className="top-buttons">
          <ActionButton className="matching-button" text="clear" />
          <NumberButton buttonStyle="red-button" text="÷" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonStyle="small-button" text="7" />
          <NumberButton buttonStyle="small-button" text="8" />
          <NumberButton buttonStyle="small-button" text="9" />
          <NumberButton buttonStyle="red-button" text="X" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonStyle="small-button" text="4" />
          <NumberButton buttonStyle="small-button" text="5" />
          <NumberButton buttonStyle="small-button" text="6" />
          <NumberButton buttonStyle="red-button" text="-" />
        </ButtonContainer>
        <ButtonContainer>
          <NumberButton buttonStyle="small-button" text="1" />
          <NumberButton buttonStyle="small-button" text="2" />
          <NumberButton buttonStyle="small-button" text="3" />
          <NumberButton buttonStyle="red-button" text="+" />
        </ButtonContainer>
        <ButtonContainer>
          <ActionButton className="matching-button" text="0" />
          <NumberButton buttonStyle="red-button" text="=" />
        </ButtonContainer>
      </div>
    );
  };
};

export default App;