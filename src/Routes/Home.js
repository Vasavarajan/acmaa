import React from "react";

import './Home.css'
import Main from "../Assets/Images/Main.png";

function Home() {
    return (
        <div>
            <div className="MainImg">
                <img src={Main} alt="Main" width='100%' height='100%' />
            </div>
        </div>
    );
}

export default Home;
