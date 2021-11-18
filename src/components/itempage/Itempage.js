import { useLocation } from 'react-router-dom'
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

function Itempage() {

    let params = useParams();
    const location = useLocation()
    const { url } = location.state
    console.log(url)

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
        .then(function(response){
            console.log(response.data)
            setData(response.data)
            // setItems(response.data.results);
            setIsLoaded(true);
        })
        .catch(function(error){
            setError(error)
        })
    }, [])

    if (error) {
        return <div className="text-center">Error: not found</div>;
    }
      
    if (!isLoaded) {
        return <div className="text-center">The force is loading...</div>;
    }

    


    // {typeof data[item] === "object" ? Object.values(data[item]).join(" - ") : data[item]}

    return(
        <main className="container text-center mb-5">
            <h2 className="py-5 text-decoration-underline">Data about {params.itemId}</h2>
            <table className="text-center table table-bordered table-striped align-middle my-2">
                <tbody>
                {Object.keys(data).map((item) => (
                    <tr><td>{item}</td><td>{typeof data[item] === Object ? Object.values(data[item]).join(" - ") : data[item]}</td></tr>
                ))}
                </tbody>
            </table>
        </main>
    )
}

export default Itempage;