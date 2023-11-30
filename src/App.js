import React, { useState } from 'react';
import Operator from './components/Operator.jsx';
import './css/Calculator.css';

function App() {
  const [result, setResult] = useState('');

  const handleOperatorClick = (operator) => {
    // Handle operator click and update the result state
    setResult((prevResult) => prevResult + operator);
  };

  const handleEqualsClick = () => {
    try {
      // Use eval to evaluate the mathematical expression
      const calculatedResult = eval(result);
      
      // Check if the result is a finite number
      if (isFinite(calculatedResult)) {
        setResult(calculatedResult.toString());
      } else {
        setResult('Error');
      }
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <h1 className="center text-bold color-primary">Welcome to Calculator</h1>
      <div className="calculator-box">
        <div className="calculator-top">{result}</div>
        <div className="calculator-bottom">
          {['*', '/', '%', '+', '-', '1', '2', '3', '4', '5', '6', '7', '8', '='].map((item, index) => (
            <Operator key={index} item={item} onClick={item === '=' ? handleEqualsClick : handleOperatorClick} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
