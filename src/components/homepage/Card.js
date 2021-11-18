import { Link } from 'react-router-dom'

function Card(props) {

    const picture = require(`../../img/${props.item}.png`).default;

    return (
        <div className="card m-3" style={{width: 18 + "rem"}}>
            <figure className="d-flex justify-content-center mt-3">
                <img src={picture} alt={props.item}></img>
            </figure>
            <article className="card-body">
                <h5 className="card-title">{props.item.toUpperCase()}</h5>
                <p className="card-text">All data on {props.item}</p>
                <Link to={`/category/${props.item}`} className="btn btn-dark">See</Link>
            </article>
        </div>
    )
}

export default Card;