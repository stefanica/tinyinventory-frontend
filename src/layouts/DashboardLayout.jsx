import React from "react";
import ReactDOM from "react-dom";

import "../assets/css/DashboardStyles.css";

import { Outlet } from "react-router-dom";

import TopNavbar from "../components/Dashboard/TopNavbar";
import SideNavbar from "../components/Dashboard/SideNavbar";
import FooterDash from "../components/Dashboard/FooterDash";

function DashboardLayout() {

    return (
        <div className="sb-nav-fixed">
            <TopNavbar />
            <div id="layoutSidenav">
                <SideNavbar/>
                <div id="layoutSidenav_content">
                    <Outlet/>
                    <FooterDash/>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;