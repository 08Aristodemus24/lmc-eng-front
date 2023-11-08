"use client";

import Link from "next/link";
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
                        <Link href="/about" className="nav-item about-section" aria-current="page">about</Link>
                        <Link href="/projects" className="nav-item projects-section">projects</Link>
                        <Link href="/services" className="nav-item services-section">services</Link>
                        <Link href="/contact" className="nav-item contact-section">contact</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}