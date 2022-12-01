
import UserInput from './components/Input/UserInput'
import ListItems from './components/Display/ListItems';
import Invalid from './components/Invalid/invalid'


import './App.css';
import { useState } from 'react';

const Users = [{name:'jani',age:25,id:1315454211}];

function App() {
  const [list, setList] = useState(Users)
  const [isValid, setIsValid] = useState(true)
  const [input, setInput] = useState('');

  function addNewUser(name, age) {
    const newUser = { name:name,age:age,id:Math.random().toString()}
    setList((prevList) => {
      const UpdatedList = [...prevList];
      UpdatedList.unshift(newUser)
      return UpdatedList;
    })
  }

  function InValidInput(inputType) {
    console.log(inputType)
    setInput(inputType)
    setIsValid(false)
  }

  function popUpWindow() {
    setIsValid(true)
  }


  return (
    <div>
      {
        !isValid && <Invalid inputType={input} popUpWindow={popUpWindow } />
      }
      <div className={!isValid ? 'visibility' : '' }>
        <UserInput
          addNewUser={addNewUser}
          InValidInput={InValidInput}
        />
        <ListItems list={ list} />
      </div>
    </div>
  );
}

export default App;
