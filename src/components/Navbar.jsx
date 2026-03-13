import { Link, NavLink } from "react-router-dom";
import site from "../data/site";

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="container nav-wrap">
                <Link to="/" className="brand">
                    {site.brandName}
                </Link>

                <nav className="nav-links">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </div>
        </header>
    );
}
