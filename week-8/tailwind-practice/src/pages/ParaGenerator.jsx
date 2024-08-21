import { useState } from "react";

const WORDS = ['high', 'low', 'red', 'green', 'yellow', 'blue', 'roads', 'street', 'message', 'food', 'drinks'];
export function ParaGenerator() {
    const [length, setLength] = useState(0);
    const [para, setPara] = useState("");
    function generatePara() {
        let newPara = '';
        for (let i = 0; i < length; i++) {
            newPara += (WORDS[Math.floor(Math.random() * WORDS.length)] + " ");
        }
        setPara(newPara);
    }
    return (
        <div>
            <div  className="flex m-5 justify-evenly">
            <input className="rounded-lg p-2 shadow shadow-slate-900" type="number" onChange={(e) => {
                setLength(parseInt(e.target.value));
            }}></input>
            <button className="bg-red-500 p-2 rounded-lg" type="button" onClick={generatePara}>Generate</button>       
            </div>
            <div className="ml-10 p-3 w-80 h-80 bg-gray-500 rounded capitalize text-white">{para}</div>
        </div>
    )
}