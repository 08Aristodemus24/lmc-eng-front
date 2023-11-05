
export default function Navbar(props){
    return (
        <header className="navbar-container">
            <nav className="navbar">
                <div className="nav-brand-container">
                    <a className="navbar-brand" href="/">{props['brand']}</a>
                    
                    <div className="button-container">
                        <a href="#" className="top-left-corner"></a>
                        <a href="#" className="top-edge"></a>
                        <a href="#" className="top-right-corner"></a>
                        
                        <a href="#" className="left-edge"></a>
                        <a href="#" className="center"></a>
                        <a href="#" className="right-edge"></a>
                        
                        <a href="#" className="bottom-left-corner"></a>
                        <a href="#" className="bottom-edge"></a>
                        <a href="#" className="bottom-right-corner"></a>
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