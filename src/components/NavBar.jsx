import React from "react";
import "../styles.css"

const NavBar = (props) => {
    return (
        <div className="container">
            <nav className="navbar">
                <div className="navbar-left">
                    <a href="/">
                        <img className="navbar-logo"
                             src="/logo.png"
                             alt="Logo"/>
                    </a>
                    <a className="navbar-link"
                       href="/">
                        Home
                    </a>
                </div>
                <div className="navbar-right">
                    <a className="navbar-link"
                       href="/personalize">
                        Personalize
                    </a>
                    <a className="navbar-link"
                       href="/examples">
                        Examples
                    </a>
                    <a className="navbar-link"
                       href="/products">
                        Products
                    </a>
                    <a className="navbar-link"
                       href="/contact">
                        Contact Us
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar