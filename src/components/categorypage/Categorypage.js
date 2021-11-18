import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

import Item from "./Item";

function Categorypage() {

    let params = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])
    const [url, setUrl] = useState(`https://swapi.dev/api/${params.categoryId}`)
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(url)
        .then(function(response){
            setData(response.data)
            setItems(response.data.results);
            setIsLoaded(true);
        })
        .catch(function(error){
            setError(error)
        })
}, [url])

function handleClickNext() {
    if (data.next !== null) {
       setUrl(data.next);
    } else {
        alert("You reached the end"); 
    }
    
}

function handleClickPrevious() {
    if (data.previous !== null) {
        setUrl(data.previous);
    } else {
       alert("You reached the top"); 
    }
    
}

if(error) {
    return (
        <div className="text-center">
            Error: You're going to the dark side
        </div>
    )
}

if(!isLoaded) {
    return (
        <div className="text-center my-5">
            The force is loading...
        </div>
    )
}

    return(
        <main className="container text-center py-5">
            <h2 className="text-decoration-underline pb-5">List of {params.categoryId}</h2>
            <ul>
                {items.map(item => <Item name={item[Object.keys(item)[0]]} url={item.url} />)}
            </ul>
            <button onClick={handleClickPrevious} className="btn btn-dark m-3">Previous</button><button onClick={handleClickNext} className="btn btn-dark m-3">Next</button>
        </main>
    )
}

export default Categorypage;