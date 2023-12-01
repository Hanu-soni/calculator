import React, { useState } from 'react';
import Operator from './components/Operator.jsx';
import './css/Calculator.css';

function App( id="calculator") {
  const [result, setResult] = useState('');

  const handleOperatorClick = (operator) => {
    // Handle operator click and update the result state
    if(operator=='C'){
      setResult("");
      return;
    }
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
    <div className={result.charAt(result.length - 1) === '+' ? "calculator-top-operator" : "calculator-top"}>
      {result}
    </div>
    <div className="calculator-bottom">
      {['*', '/', '%', '+', '-','0', '1', '2', '3', '4', '5', '6', '7', '8','9', '=', "C", "(", ")"].map((item, index) => (
        <Operator
          key={index}
          item={item}
          onClick={item === '=' ? handleEqualsClick : handleOperatorClick}
          className={isNaN(Number(item)) ? "operator-button" : "number-button"} // Apply styles based on the type
        />
      ))}
    </div>
  </div>
</div>

  );
}

export default App;
