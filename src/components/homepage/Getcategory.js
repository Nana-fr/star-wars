import { useState, useEffect } from "react";
import Card from "./Card";

function Getcategory() {
  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://swapi.dev/api/')
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          let data = result;
          setItems(data)
          // for (let item in result) {
          //   let x = items.concat(item);
          //   setItems(items => items.concat(x)); 
          // } 
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div className="text-center">Error: You're going to the dark side</div>;
  }
  
  if (!isLoaded) {
    return <div className="text-center">The force is loading...</div>;
  }

  return (
      <div className="container d-flex flex-wrap justify-content-center text-center mb-5">
        {Object.keys(items).map((item) => (
          <Card key={item} item={item}/>
        ))}
        {/* {items.map(item => (
          <Card key={item} item={item}/>
        ))} */}
      </div>
    );
}

export default Getcategory;