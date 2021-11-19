import { Link } from 'react-router-dom'
import slugify from 'react-slugify';



function Item(props) {

    const slugName = slugify(props.name);

    return(
        <li className="fs-5"><Link to={`${props.id}/item/${slugName}`} state={{ url: `${props.url}`, name:`${props.name}` }}>{props.name}</Link></li>
    )
}

export default Item;