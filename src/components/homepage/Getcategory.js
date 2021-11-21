import { useState, useEffect } from "react";
import Card from "./Card";

function Getcategory() {
  
  // variables
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // request
  useEffect(() => {
    fetch('https://swapi.dev/api/')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          let data = result;
          setItems(data)
        
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div className="text-center Starjout text-white my-5">Error: Something went wrong.</div>;
  }
  
  if (!isLoaded) {
    return <div className="text-center Starjout text-white my-5">The force is loading...</div>;
  }
  
  const card = Object.keys(items).map((item) => (<Card key={item} item={item}/>));

  return (
      <div className="container d-flex flex-wrap justify-content-center text-center mb-5">
        {card}
      </div>
    );
}

export default Getcategory; 















// for (let item in result) {
          //   let x = items.concat(item);
          //   setItems(items => items.concat(x)); 
          // } 
          
          
          
          {/* {items.map(item => (
          <Card key={item} item={item}/>
        ))} */}