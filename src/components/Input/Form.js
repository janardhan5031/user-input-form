import { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

import './Form.css'

function Input(props) {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState(0)
    const [validName, setValidName] = useState(false)
    const [validAge,setValidAge] = useState(false)

    function validateUserName(e) {
        checkName(e.target.value)
    }

    function validateAge(e) {
        checkAge(e.target.value)
    }
    
    function checkName(name) {
        if (name.trim('').length > 0) {
            setValidName(true)
        }else setValidName(false)
        setEnteredName(name)
    }
    function checkAge(age) {
        if (age > 0) {
            setValidAge(true)
        }else setValidAge(false)
        setEnteredAge(age)
    }
    
    function submitForm(e) {
        e.preventDefault();
        checkName(e.target.userName.value)
        checkAge(e.target.age.value)
        console.log(validName)

        if (!validName) {
            props.inValidInput('name')
        }
        else if (!validAge) {
            props.inValidInput('age')
        }

        if (validName && validAge) {
            props.submit(enteredName, enteredAge)
            setEnteredName('');
            setEnteredAge(0);
            setValidName(false);
            setValidAge(false)
        }
    }

    return (
        <Card>
            <form onSubmit={submitForm} >
                <div className="form-input">
                    <label htmlFor="userName">Username</label>
                    <input type='text' id="userName" onChange={validateUserName} value={ enteredName} />
                </div>
                <div className="form-input">
                    <label htmlFor="age">age</label>
                    <input type='number' id="age" onChange={validateAge} value={ enteredAge} />
                </div>
                <Button type='submit' >submit</Button>
            </form>
        </Card>
    )
}

export default Input;