// import { useState } from "react";

export default function Navbar(props){
    // let [isOpened, setIsOpened] = useState(false);

    return (
        <header className="navbar-container">
            <nav className="navbar">
                <div className="nav-brand-container">
                    <a className="navbar-brand" href="/">{props['brand']}</a>
                    
                    <div className="button-container">
                        <span className="bar"></span>
                    </div>
                </div>
                
                <div className="nav-menu-container">
                    <div className="nav-menu">
                        <a className="nav-item about-section" aria-current="page">about</a>
                        <a className="nav-item work-group-section">work</a>
                        <a className="nav-item contact-section">contact</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}