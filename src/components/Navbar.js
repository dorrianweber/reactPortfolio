function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm sticky-top" style={{ backgroundColor: "rgb(212, 96, 96)" }}>
            <p id="myName">Dorrian Weber</p>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;