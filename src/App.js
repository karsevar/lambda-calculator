import React, {useState} from "react";
import "./App.css";
import Numbers from './components/ButtonComponents/NumberButtons/Numbers'
import Operators from './components/ButtonComponents/OperatorButtons/Operators'
import Specials from './components/ButtonComponents/SpecialButtons/Specials'
import Display from './components/DisplayComponents/Display'
// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";

function App() {
  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props

  // State and function for number additions in display.
  const [numeric, setNumeric] = useState('');
  const numericString = () => setNumeric(numeric);

  // mathematic operations state (returns an operator string).
  const [operation, setOperation] = useState();

  // Will need to create an object state that can contain two numeric values and an operations value.
  const [calculations, setCalculations] = useState([]);

  console.log(calculations);

  // mathematic operations: I'm not really sure if this function will work with the logic 
  // of the application structor.
  function mathematics( numericOne, operation, numericTwo) {
    let total = 0
    switch(operation) {
      case '/': 
        total = numericOne/numericTwo; 
        break;
      
      case "x":
        total = numericOne/numericTwo;
        break;
      
      case "-":
        total = numericOne - numericTwo;
        break;
      
      case "+":
        total = numericOne + numericTwo;
        break;

      case "=":
        console.log(total);
        break;
    }

    return total;
      
  }

  return (
    <div className="container">
      <Logo />
      <Display 
      numeric={numeric}
      operation={operation}
      />

      <div className="App">

        {/* Checking if data is being passed to button components */}
        {/* Will need to separate the number and specials div layers from the operators to get a partial effect */}
        <div className='numbers-specials'>
          <Specials />
          <Numbers 
            numeric={numeric} 
            setNumeric={setNumeric} 
            numericString={numericString} 
          />
        </div>
        <Operators 
          operation={operation}
          setOperation={setOperation}
          calculations={calculations}
          setCalculations={setCalculations}
          numeric={numeric} 
          setNumeric={setNumeric}
        />
        

        {/* STEP 4 - Render your components here and be sure to properly import/export all files */}
      </div>
    </div>
  );
}

export default App;
