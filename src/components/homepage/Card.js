function Card() {
    return (
        <div className="card m-2" style={{width: 18 + "rem"}}>
            <img src="..." className="card-img-top" alt=""></img>
            <article className="card-body">
                <h5 className="card-title">People</h5>
                <p className="card-text">All data on people</p>
                <button className="btn btn-primary">See</button>
            </article>
        </div>
    )
}

export default Card;