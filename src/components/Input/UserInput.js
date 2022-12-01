
import Form from './Form'

function UserInput(props) {
    
    function inValidInput(input) {
        if (input === 'name') {
            props.InValidInput('name')
        } else {
            props.InValidInput('age')
        }
    }
    
    function addUser(name, age) {
        // console.log(name,age)
        
        props.addNewUser(name,age)
    }

    return (
        <Form
            submit={addUser}
            inValidInput={inValidInput}
        ></Form>
    )
}

export default UserInput;
