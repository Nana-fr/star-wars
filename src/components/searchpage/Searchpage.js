import { useState } from "react";
import Getdata from "./Getdata";

function Searchpage() {

    const [inputValue, setInput] = useState(0);

    function handleChange(e) {
        let value = e.target.value;
        setInput(value);
    }

    return (
        <main className="container text-center text-white">
            <h2 className="text-decoration-underline Starjout py-5">Search a character by id:</h2>
            <p>You can find all data about a character by his id. Choose a number between 1 and 83. May the force be with you.</p>
            <div className="py-3 d-flex flex-column align-items-center">
                <input type="text" onChange={handleChange} placeholder="Ex: 1"></input>
                <Getdata id={inputValue}/>
            </div>
        </main>
    )
}

export default Searchpage;