import React from "react";
import ReactDOM from "react-dom";

function Footer() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    return (
            <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Your Website {year}</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
            </footer>
    );
}

export default Footer;