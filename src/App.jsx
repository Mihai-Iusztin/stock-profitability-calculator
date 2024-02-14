import Input from './components/Input';
import Return from './components/Return';
import { useState } from 'react';

function App() {
  const [instrumentInput, setInstrumentInput] = useState({
    instrument: 'SGRY',
  });
  const [newInput, setNewInput] = useState({
    // instrument: 'AMD',
    initialStocks: 10,
    initialPrice: 100,
    annualProfitability: 10,
    annualNewStocks: 5,
    duration: 10,
  });

  function handleInstrument(newInstrument) {
    setInstrumentInput((prevInstr) => {
      return {
        ...prevInstr,
        instrument: newInstrument,
      };
    });
  }

  function handleInput(identifier, newValue) {
    setNewInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +newValue,
      };
    });
  }
  console.log(newInput);
  console.log(instrumentInput);
  return (
    <>
      <Input
        investorInput={newInput}
        inputChange={handleInput}
        instrumentChange={handleInstrument}
        instrumentInput={instrumentInput}
      />
      <Return investInput={newInput} />
    </>
  );
}

export default App;