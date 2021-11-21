import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Item from "./Item";
import Counterpages from "./Counterpages";

function Categorypage() {

    // variables
    let params = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [url, setUrl] = useState(`https://swapi.dev/api/${params.categoryId}`)
    const [items, setItems] = useState([]);
    let previous = false;
    let next = null;

    // request API
    useEffect(() => {
        axios.get(url)
        .then(function(response){
            console.log(response.data)
            setData(response.data)
            setItems(response.data.results);
            setIsLoaded(true);
        })
        .catch(function(error){
            setError(error)
        })
}, [url])

if(error) {
    return (
        <div className="text-center Starjout text-white my-5">
            Error: Something went wrong.
        </div>
    )
}

if(!isLoaded) {
    return (
        <div className="text-center Starjout text-white my-5">
            The force is loading...
        </div>
    )
}

// buttons
function handleClickPrevious() {
    if (data.previous !== null) {
        let newPage = page - 1;
        setPage(newPage);
        setUrl(data.previous);
    }  
}
data.previous === null ? previous = false : previous = true;

function handleClickNext() {
    if (data.next !== null) {
        let newPage = page + 1;
        setPage(newPage);
       setUrl(data.next);
    }
}
data.next === null ? next = false : next = true;

// counter pages
let maxPages = Math.ceil((data.count-1)/10);

// list
const list = items.map(item => <Item name={item[Object.keys(item)[0]]} id={params.categoryId} url={item.url} />);

    return(
        <main className="d-flex justify-content-around text-center text-white">
            <aside className="d-none d-lg-flex flex-column mx-4 py-4">
                <iframe src="https://giphy.com/embed/dmypi9dyBfmOQ" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/kyWH22kp3U9Dq" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/l2JJICWlefTgexNle" width="100%" height="100%" className="giphy-embed py-1"></iframe>
            </aside>
            <article className="bg container py-5">
                <h2 className="text-decoration-underline Starjout pb-5">List of {params.categoryId}</h2>
                <ul className="mb-5">
                    {list}
                </ul>
                <button onClick={handleClickPrevious} className={`btn btn-dark Starjout m-3 ${previous ? "" : "d-none"}`}>Previous</button>
                <Counterpages page={page} maxPages={maxPages} />
                <button id="next" onClick={handleClickNext} className={`btn btn-dark Starjout m-3 ${next ? "" : "d-none"}`}>Next</button>
            </article>
            <aside className="d-none d-lg-flex flex-column mx-4 py-4">
                <iframe src="https://giphy.com/embed/ZZcnaOh0VzqZq" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/3ofSB8NFxyfY6jw2Jy" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/eHYazg6wGDqYE" width="100%" height="100%" className="giphy-embed py-1"></iframe>
            </aside>
        </main>
    )
}

export default Categorypage;


