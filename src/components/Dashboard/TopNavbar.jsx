import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';

function TopNavbar() {
    const navigate = useNavigate(); // Hook for programmatic navigation
    
    function logOut() {
        localStorage.removeItem("tiny_access_token");
        localStorage.removeItem("username");
        navigate('/'); // Redirect

    }

    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
             {/*Navbar Brand*/}
            <a className="navbar-brand ps-3" href="index.html">Tiny Inventory</a>
            {/*Sidebar Toggle*/}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            {/*Navbar Search*/}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/*Navbar*/}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" href="/profile">Account</a>
                        {/*<li><a className="dropdown-item" href="#!">Activity Log</a></li>*/}
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" onClick={logOut}>Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    ); 
}

export default TopNavbar;