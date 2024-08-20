

export function Profile() {
    return (
        <div className="flex justify-center p-10">
            <div className="shadow shadow-slate-700">
                <div className="w-full h-24">
                    <img src="src\assets\bgimg.jpg"></img>
                </div>
                <div className="flex justify-center pt-10">
                    <img src="src\assets\profile.jpg" className="w-20 h-20 rounded-full"></img>
                </div>
                <div className="text-center">
                    <h1 className="font-bold">Adam Williams 
                        <span className="text-xl text-gray-500"> 26</span>
                    </h1>
                    <h3 className="font-light">London</h3>
                </div>
                <div className="w-full bg-gray-100 py-px"></div>
                <div className="flex justify-around p-2 text-center">
                    <div>
                        <h1 className="font-bold">80K</h1>
                        <div className="text-sm font-light">Followers</div>
                    </div>
                    <div>
                        <h1 className="font-bold">801K</h1>
                        <div className="text-sm font-light">Likes</div>
                    </div>
                    <div >
                        <h1 className="font-bold">1.4K</h1>
                        <div className="text-sm font-light">Vedios</div>
                    </div>
                </div>
            </div>
        </div>
    )
}