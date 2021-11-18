import { Link } from 'react-router-dom'

function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">StarWars</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-center">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                    <Link to="/searchpage" className="nav-link">Search</Link>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;