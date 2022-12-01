
import Item from "./Item"

function ListItems(props) {

    return (
        <div>
            { props.list.map((user) => {
                return <Item
                    key={user.id}
                    name={user.name}
                    age={user.age}
                />
                })
            }
        </div>
    )
}

export default ListItems