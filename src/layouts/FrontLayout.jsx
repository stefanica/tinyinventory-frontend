import React from "react";
import ReactDOM from "react-dom";
import "../assets/css/FrontStyles.css";
import { Outlet } from "react-router-dom";

import Navigation from "../components/Front/Navigation";
import Footer from "../components/Front/Footer";

function FrontLayout() {
    return(
        <>
        <Navigation />
        <Outlet/>
        <Footer />
        </>
    );
}

export default FrontLayout;