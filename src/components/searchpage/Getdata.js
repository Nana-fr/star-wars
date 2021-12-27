import { useState, useEffect } from "react";


function Getdata(props) {

  // variables
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
    
  let url;
  if (props.id === "" || props.id == 0) {
    url = `https://swapi.dev/api/people/1`;
  } else if (props.id > 83) {
    url = "";
  } else {
    url = `https://swapi.dev/api/people/${props.id}`;
  }

  // request
  useEffect(() => {
    // let active = true;
        fetch(url)
        .then(res => res.json(), setIsLoaded(false), setError(null))
        .then(
            (result) => {
                setIsLoaded(true);
                let newData = result;
                // if (active) {
                setData(newData);
                // }
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            },
        )
        // return () => {
        // active = false;
        // }
  }, [url])

    if (error) {
        return <div className="Starjout text-white my-5">Error: "i find your lack of smartness disturbing."</div>;
    }
    
    if (!isLoaded) {
        return <div className="Starjout text-white my-5">The force is loading...</div>;
    }

    let rows = Object.keys(data).map((item) => (
                <tr><td>{item}</td><td>{typeof data[item] === "object" ? Object.values(data[item]).map(x => <li>{x}</li>) : data[item]}</td></tr>
                ))

    return (
        <table className="text-white table table-bordered align-middle my-5">
            <thead>
                <tr>
                    <th colspan="2" className="fs-4 text-decoration-underline py-3">Data of {data.name}</th>
                </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </table>
    ); 
}

export default Getdata;

  