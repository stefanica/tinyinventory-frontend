import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

function Footer() {

    let myDate = new Date();
    let year = myDate.getFullYear();

    return (
        <footer className="bg-dark py-4 mt-auto">
            <div className="container px-5">
                <div className="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div className="col-auto"><div className="small m-0 text-white">Copyright &copy; Tiny Inventory {year}</div></div>
                    <div className="col-auto">
                        <Link className="link-light small" to="/privacy">Privacy</Link>
                        <span className="text-white mx-1">&middot;</span>
                        <Link className="link-light small" to="/terms">Terms</Link>
                        <span className="text-white mx-1">&middot;</span>
                        <Link className="link-light small" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;