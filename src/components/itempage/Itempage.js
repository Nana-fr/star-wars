import { useLocation } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";

function Itempage() {

    // variables
    const location = useLocation()
    const { url } = location.state;
    const { name } = location.state

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])

    // request
    useEffect(() => {
        axios.get(url)
        .then(function(response){
            console.log(response.data)
            setData(response.data)
            setIsLoaded(true);
        })
        .catch(function(error){
            setError(error)
        })
    }, [])

    if (error) {
        return <div className="text-center Starjout text-white my-5">Error</div>;
    }
      
    if (!isLoaded) {
        return <div className="text-center Starjout text-white my-5">The force is loading...</div>;
    }

    let row = Object.keys(data).map((item) => (
        <tr><td>{item}</td><td>{typeof data[item] === "object" && data[item] !== null ? Object.values(data[item]).map(x => <li>{x}</li>) : data[item]}</td></tr>
    ))

    return(
        <main className="d-flex justify-content-around text-center text-white">
            <aside className="d-none d-lg-flex flex-column mx-4 py-4">
                <iframe src="https://giphy.com/embed/dmypi9dyBfmOQ" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/kyWH22kp3U9Dq" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/l2JJICWlefTgexNle" width="100%" height="100%" className="giphy-embed py-1"></iframe>
            </aside>
            <article className="bg2 container d-flex flex-column align-items-center pb-5">
                <h2 className="py-5 text-decoration-underline Starjout">Data about {name.toLowerCase()}</h2>
                <table className="table table-responsive table-bordered text-white my-2">
                    <tbody>
                    {row}
                    </tbody>
                </table>
            </article>
            <aside className="d-none d-lg-flex flex-column mx-4 py-4">
                    <iframe src="https://giphy.com/embed/ZZcnaOh0VzqZq" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                    <iframe src="https://giphy.com/embed/3ofSB8NFxyfY6jw2Jy" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                    <iframe src="https://giphy.com/embed/eHYazg6wGDqYE" width="100%" height="100%" className="giphy-embed py-1"></iframe>
            </aside>
        </main>
    )
}

export default Itempage;