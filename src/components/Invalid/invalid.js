
import './invalid.css'

function Invalid(props) {
    
    function popUp() {
        props.popUpWindow()
    }

    return (
        <div className="invalid">
            <div>
                <span>{props.inputType} input is invalid</span>
                <button type='button' onClick={popUp}>close</button>
            </div>
            
        </div>
    )
}

export default Invalid;