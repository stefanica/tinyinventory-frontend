import React from "react";
import ReactDom from "react-dom";




function SideNavbar() {
    return (
        <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <a className="nav-link" href="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Website</div>

                        {/*Uncomment for new menu section*/}
                          {/* <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                    Authentication
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                                <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                    <nav className="sb-sidenav-menu-nested nav">
                                        <a className="nav-link" href="login.html">Login</a>
                                        <a className="nav-link" href="register.html">Register</a>
                                        <a className="nav-link" href="password.html">Forgot Password</a>
                                    </nav>
                                </div>*/}


                            {/********* Replaced with the code below this ************/}
                            {/*<a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Pages
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">

                                    <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                        Front
                                        <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                                    </a>
                                    <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <nav className="sb-sidenav-menu-nested nav">
                                            <a className="nav-link" href="/">Home</a>
                                            <a className="nav-link" href="/about">About</a>
                                            <a className="nav-link" href="/contact">Contact</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>*/}
                            {/********* Replaced with the code below this ************/}


                            {/**************  Code replaced the one bove   **************/}
                            <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseFront" aria-expanded="false" aria-controls="collapseFront">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Front
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseFront" aria-labelledby="headingFront" data-bs-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="/">Home</a>
                                    <a className="nav-link" href="/about">About</a>
                                    <a className="nav-link" href="/faq">FAQ</a>
                                    <a className="nav-link" href="/contact">Contact</a>
                                </nav>
                            </div>
                            {/**************  Code replaced the one bove   **************/}


                            <div className="sb-sidenav-menu-heading">Database</div>
                            <a className="nav-link" href="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                                Inventory
                            </a>
                            <a className="nav-link" href="/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-shopping-cart"></i></div>
                                Products Out
                            </a>
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        {localStorage.getItem("username")}
                    </div>
                </nav>
            </div>
    );
}

export default SideNavbar;