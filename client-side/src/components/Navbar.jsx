"use client";

import { useState } from "react";

export default function Navbar(props){
    let [isOpened, setIsOpened] = useState(false);

    return (
        <header className={isOpened === true ? "navbar-container opened" : "navbar-container"}>
            <nav className="navbar">
                <div className="nav-brand-container">
                    <a className="navbar-brand" href="/">{props['brand']}</a>
                    
                    <div className={isOpened === true ? "button-container opened" : "button-container"} onClick={() => {
                        setIsOpened((state) => !state);
                    }}>
                        <span className="bar"></span>
                    </div>
                </div>
                
                <div className="nav-menu-container">
                    <div className="nav-menu">
                        <a className="nav-item about-section" aria-current="page">about</a>
                        <a className="nav-item projects-section" aria-current="page">projects</a>
                        <a className="nav-item services-section">services</a>
                        <a className="nav-item contact-section">contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}