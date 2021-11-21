import { useState } from "react";
import Getdata from "./Getdata";

function Searchpage() {

    const [inputValue, setInput] = useState(0);

    function handleChange(e) {
        let value = e.target.value;
        setInput(value);
    }

    return (
        <main className="d-flex justify-content-around text-center text-white">
            <aside className="d-none d-lg-flex flex-column mx-4 py-4">
                <iframe src="https://giphy.com/embed/dmypi9dyBfmOQ" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/kyWH22kp3U9Dq" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                <iframe src="https://giphy.com/embed/l2JJICWlefTgexNle" width="100%" height="100%" className="giphy-embed py-1"></iframe>
            </aside>
            <article className="bg2 container">
                <h2 className="text-decoration-underline Starjout py-5">Search a character by id:</h2>
                <div className="d-flex flex-column align-items-center">
                    <p className="w-80 py-3">You can find all data about a character by his id. Choose a number between 1 and 83. May the force be with you.</p>
                    <input type="text" onChange={handleChange} placeholder="Ex: 1"></input>
                    <Getdata id={inputValue}/>
                </div>
            </article>
            <aside className="d-none d-lg-flex flex-column mx-4 py-4">
                        <iframe src="https://giphy.com/embed/ZZcnaOh0VzqZq" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                        <iframe src="https://giphy.com/embed/3ofSB8NFxyfY6jw2Jy" width="100%" height="100%" className="giphy-embed py-1"></iframe>
                        <iframe src="https://giphy.com/embed/eHYazg6wGDqYE" width="100%" height="100%" className="giphy-embed py-1"></iframe>
            </aside>
        </main>
    )
}

export default Searchpage;