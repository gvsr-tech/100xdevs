import { useState } from "react";

export function BirthdayWish() {
    const [username, setUsername] = useState('');
    return (
        <div className="w-full h-screen flex justify-center">
        <div className="w-80 h-80 bg-gray-500 mt-20">
        <div className="flex m-5 justify-evenly">
        <input placeholder="Enter your name" className="rounded-lg p-2 shadow shadow-slate-900" type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>
        </div>
        {username ? <div className="p-5"><div className="bg-white mt-10 p-5">
            <div>* Happy BirthDay {username}</div>
            <div>* Janmadin Subhakansh {username}</div>
            <div>* Wish you many more returns of the day {username}</div>
            </div></div> : ""}
        </div>
        </div>

    )
}