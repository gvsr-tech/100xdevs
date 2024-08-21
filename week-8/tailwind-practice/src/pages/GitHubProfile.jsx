import { useState } from "react";
const GITHUB_URL = 'https://api.github.com/users/'

export function GithubProfile() {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState({});
    function getGitHubData() {
        fetch(GITHUB_URL + username).then(function (data) {
            data.json().then(function (res) {
                console.log(res);
                setProfile(res);
            });
        });
    }
    return (
        <div>
            <div className="flex m-5 justify-evenly">
                <input className="rounded-lg p-2 shadow shadow-slate-900" type="text" onChange={(e) => {
                    setUsername(e.target.value);
                }}></input>
                <button className="bg-red-500 p-2 rounded-lg" type="button" onClick={getGitHubData}>Get</button>
            </div>
            {profile.login ? (<div className="flex justify-center p-10">
                <div className="shadow shadow-slate-700">
                    <div className="w-full h-24">
                        <img src="src\assets\bgimg.jpg"></img>
                    </div>
                    <div className="flex justify-center pt-10">
                        <img src={profile.avatar_url} className="w-20 h-20 rounded-full"></img>
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold">{profile.login}
                            <span className="text-xl text-gray-500"> 26</span>
                        </h1>
                        <h3 className="font-light">{profile.location}</h3>
                    </div>
                    <div className="w-full bg-gray-100 py-px"></div>
                    <div className="flex justify-around p-2 text-center">
                        <div>
                            <h1 className="font-bold">{profile.followers}</h1>
                            <div className="text-sm font-light">Followers</div>
                        </div>
                        <div>
                            <h1 className="font-bold">{profile.public_repos}</h1>
                            <div className="text-sm font-light">Public Repos</div>
                        </div>
                        <div >
                            <h1 className="font-bold">{profile.public_gists}</h1>
                            <div className="text-sm font-light">Gists</div>
                        </div>
                    </div>
                </div>
            </div>) : ''
            }
        </div >
    )
}