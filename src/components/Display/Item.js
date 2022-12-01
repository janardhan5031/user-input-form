
import Card from '../UI/Card';
import './item.css'

function Item(props) {
    return (
        <Card>
            <div className="list-item">
                <h4>{props.name}</h4>
                <h4>{props.age}</h4>
            </div>
        </Card>
    )
}

export default Item;