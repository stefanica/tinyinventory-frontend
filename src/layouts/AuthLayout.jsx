import React from "react";
import ReactDOM from "react-dom";

import "../assets/css/DashboardStyles.css";

import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';

function AuthLayout() {
    const currentDate = new Date();
    const thisYear = currentDate.getFullYear();
    return (

        <div className="bg-primary" id="layoutAuthentication">
            <div id="layoutAuthentication_content">
                <Outlet/>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; Tiny Inventory {thisYear}</div>
                            <div>
                                <Link className="link-light small text-muted" to="/privacy"><span style={{ color: "blue" }}> Privacy Policy </span></Link>
                                &middot;
                                <Link className="link-light small text-muted" to="/terms"><span style={{ color: "blue" }}> Terms &amp; Conditions</span></Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>

    );
}

export default AuthLayout;