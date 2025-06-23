import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

function Footer() {
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    return (
            <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Tiny Inventory{year}</div>
                            <div>
                                <Link className="link-light small text-muted" to="/privacy"><span style={{ color: "black" }}>Privacy Policy </span></Link>
                                &middot;
                                <Link className="link-light small text-muted" to="/terms" ><span style={{ color: "black" }}> Terms &amp; Conditions</span></Link>
                            </div>
                        </div>
                    </div>
            </footer>
    );
}

export default Footer;