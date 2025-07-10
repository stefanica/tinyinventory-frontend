import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import "../assets/css/DashboardStyles.css";

import { Outlet } from "react-router-dom";
import { Link } from 'react-router-dom';
import ApiUrls from "../assets/js/api/ApiUrls";

function AuthLayout() {
    const navigate = useNavigate(); // Hook for programmatic navigation

    const currentDate = new Date();
    const thisYear = currentDate.getFullYear();


    /********IF already logged in and the Token is valid, THEN redirect to Dashboard ****************/
    useEffect(() => {
        const ACCESS_TOKEN = localStorage.getItem("tiny_access_token");

        if (ACCESS_TOKEN) {
            // Define and call the async function inside useEffect
            const checkToken = async () => {
                try {
                    const response = await fetch(ApiUrls.VALIDATE, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${ACCESS_TOKEN}`, // Correct way
                        },
                        /*body: JSON.stringify({
                            token: ACCESS_TOKEN,
                        }),*/
                    });

                    //const data = await response.json();

                    if (!response.ok) {
                        //alert("Token invalid: " + ACCESS_TOKEN );
                        localStorage.removeItem("tiny_access_token");
                        localStorage.removeItem("username");
                    } else {
                        //alert("Welcome back: " + data.message);
                        navigate('/dashboard'); // Redirect
                    }
                } catch (error) {
                    console.error("Token check failed:", error);
                    //localStorage.removeItem("tiny_access_token");
                }
            };

            checkToken();
        }
    }, [navigate]); // Safe to add navigate here
    /*********************************************************************/


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
                                <Link className="link-light small text-muted" to="/"><span style={{ color: "blue" }}> Home </span></Link>
                                &middot;
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