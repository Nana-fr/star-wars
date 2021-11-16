import Card from "./Card";

function Homepage() {
    return (
        <div>
            <h2 className="text-center text-decoration-underline py-3">Choose a category:</h2>
            
            <div className="container py-5">
                
                <div className="row">
                    <Card />

                    <div className="card m-2" style={{width: 18 + "rem"}}>
                        <img src="..." className="card-img-top" alt=""></img>
                        <article className="card-body">
                            <h5 className="card-title">Species</h5>
                            <p className="card-text">All data on species</p>
                            <button className="btn btn-primary">See</button>
                        </article>
                    </div>

                     <div className="card m-2" style={{width: 18 + "rem"}}>
                        <img src="..." className="card-img-top" alt=""></img>
                        <article className="card-body">
                            <h5 className="card-title">Vehicles</h5>
                            <p className="card-text">All data on vehicles</p>
                            <button className="btn btn-primary">See</button>
                        </article>
                    </div>
                </div>
                
                <div className="row">
                    <div className="card m-2" style={{width: 18 + "rem"}}>
                        <img src="..." className="card-img-top" alt=""></img>
                        <article className="card-body">
                            <h5 className="card-title">Spaceships</h5>
                            <p className="card-text">All data on spaceships</p>
                            <button className="btn btn-primary">See</button>
                        </article>
                    </div>

                    <div className="card m-2" style={{width: 18 + "rem"}}>
                        <img src="..." className="card-img-top" alt=""></img>
                        <article className="card-body">
                            <h5 className="card-title">Planets</h5>
                            <p className="card-text">All data on planets</p>
                            <button className="btn btn-primary">See</button>
                        </article>
                    </div>

                    <div className="card m-2" style={{width: 18 + "rem"}}>
                        <img src="..." className="card-img-top" alt=""></img>
                        <article className="card-body">
                            <h5 className="card-title">Films</h5>
                            <p className="card-text">All data on films</p>
                            <button className="btn btn-primary">See</button>
                        </article>
                    </div>
                </div> 
                
            </div>
        </div>
    )
}

export default Homepage;