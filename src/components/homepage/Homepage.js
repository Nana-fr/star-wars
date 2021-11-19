import Getcategory from "./Getcategory";

function Homepage() {
    return (
        <main  className="container Starjout">
            <h2 className="text-center text-decoration-underline text-white py-5">A category you will choose:</h2>
            <Getcategory />
        </main>
    )
}

export default Homepage;