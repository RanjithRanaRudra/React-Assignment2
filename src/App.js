import React, {useState} from 'react';
import './App.css';
import Validation from  './Validation/Validation';
import Char from './Char/Char';

function App() {

  const [userInputState, setUserInputState] = useState({
    userInput: '',
    userInputLength: 0,
  });
  
  const userInputChangeHandler = (event) => {
    setUserInputState({
      userInput: event.target.value,
      userInputLength: event.target.value.length,
    });
  }

  const deleteCharItem = (index) => {
    const char = userInputState.userInput.split('');
    char.splice(index, 1);
    const updatedUserInput = char.join('');
    setUserInputState({
      userInput: updatedUserInput,
      userInputLength: updatedUserInput.length,
    });
  }

  let CharComponent = null;
  if (userInputState.userInputLength > 0) {
    CharComponent = userInputState.userInput.split('').map((char, index) => {
      return char !== ' ' ? <Char data={char} key={index} click={() => deleteCharItem(index)}/>: null;
    });
  }
  return (
    <div className="App">
      <input type="text" onChange={userInputChangeHandler} value={userInputState.userInput} maxLength="20"/>
      <p>{userInputState.userInput.length}</p>
      <Validation length={userInputState.userInputLength}/>
      {CharComponent}
    </div>
  );
}

export default App;
