import { useState, useEffect } from "react";


function Getdata(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
    
  let url;
  if (props.id === "" || props.id == 0) {
    url = `https://swapi.dev/api/people/1`;
  } else if (props.id > 83) {
    url = ""
  }else {
    url = `https://swapi.dev/api/people/${props.id}`;
  }
    
  useEffect(() => {
    let active = true;
        fetch(url)
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                let newData = result;
                if (active) {
                setData(newData);
                }
            },
            (error) => {
            setIsLoaded(true);
            setError(error);
            },
        )
        return () => {
        active = false;
        }
    }, [url])

    if (error) {
        return <div className="text-center my-5">Error: I find your lack of smartness disturbing.</div>;
    }
    
    if (!isLoaded) {
        return <div className="text-center my-5">The force is loading...</div>;
    }

    return (
  
        <table className="text-center table table-bordered table-striped align-middle my-5">
            <thead>
                <tr>
                    <th colspan="2">Data of {data.name}</th>
                </tr>
            </thead>
            <tbody>
            {Object.keys(data).map((item) => (
                <tr><td>{item}</td><td>{typeof data[item] === "object" ? Object.values(data[item]).join(' - ') : data[item]}</td></tr>
            ))}
            </tbody>
        </table>
    ); 
}

export default Getdata;



// export default function DataDisplayer(props) {
//     const [data, setData] = useState(null);
//     const [fetchedId, setFetchedId] = useState(null);
//     useEffect(() => {
//       const fetchData = async () => {
//         setTimeout(async () => {
//           const response = await fetch(
//             `https://swapi.dev/api/people/${props.id}/`
//           );
//           const newData = await response.json();
//           setFetchedId(props.id);
//           setData(newData);
//         }, Math.round(Math.random() * 12000));
//       };
//       fetchData();
//     }, [props.id]);
//     if (data) {
//       return (
//         <div>
//           <p style={{ color: fetchedId === props.id ? 'green' : 'red' }}>
//             Displaying Data for: {fetchedId}
//           </p>
//           <p>{data.name}</p>
//         </div>
//       );
//     } else {
//       return null;
//     }
//   }





// useEffect(() => {
//     let active = true;
//     const fetchData = async () => {
//       setTimeout(async () => {
//         const response = await fetch(`https://swapi.dev/api/people/${props.id}/`);
//         const newData = await response.json();
//         if (active) {
//           setFetchedId(props.id);
//           setData(newData);
//         }
//       }, Math.round(Math.random() * 12000));
//     };
//     fetchData();
//     return () => {
//       active = false;
//     };
//   }, [props.id]);
  