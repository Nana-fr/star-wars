import { Link } from 'react-router-dom'

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="homepage" className="navbar-brand">StarWars</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link to="homepage" className="nav-link active" aria-current="page">Home</Link>
                    <Link to="searchpage" className="nav-link">Search</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;