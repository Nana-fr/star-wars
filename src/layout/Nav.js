import { Link } from 'react-router-dom'

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="star-wars/" className="navbar-brand Starjhol ms-3 mx-lg-4 fs-1">@</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-center Starjout fs-4">
                    <Link to="star-wars/" className="nav-link mx-3" aria-current="page">Home</Link>
                    <Link to="star-wars/searchpage" className="nav-link mx-3">Search</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;