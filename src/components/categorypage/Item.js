import { Link } from 'react-router-dom'

function Item(props) {
    return(
        <li><Link to={`/item/${props.name}`} state={{ url: `${props.url}` }}>{props.name}</Link></li>
    )
}

export default Item;