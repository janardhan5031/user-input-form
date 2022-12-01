
import './card.css'

function Card(props) {
    return (
        <div className="card_class">{ props.children}</div>
    )
}

export default Card;