import { useLocation } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from "react";

function Itempage() {

    const location = useLocation()
    const { url } = location.state;
    const { name } = location.state
    console.log(url)

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([])

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

    return(
        <main className="container d-flex flex-column align-items-center text-center text-white mb-5">
            <h2 className="py-5 text-decoration-underline Starjout">Data about {name.toLowerCase()}</h2>
            <table className="text-white table table-bordered align-middle my-2">
                <tbody>
                {Object.keys(data).map((item) => (
                    <tr><td>{item}</td><td>{typeof data[item] === "object" && data[item] !== null ? Object.values(data[item]).map(x => <li>{x}</li>) : data[item]}</td></tr>
                ))}
                </tbody>
            </table>
        </main>
    )
}

export default Itempage;