import Getcategory from "./Getcategory";

function Homepage() {
    return (
        <main  className="container">
            <h2 className="text-center text-decoration-underline py-5">Choose a category:</h2>
            <Getcategory />
        </main>
    )
}

export default Homepage;