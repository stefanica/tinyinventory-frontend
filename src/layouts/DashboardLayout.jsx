import React from "react";
import ReactDOM from "react-dom";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import ApiUrls from "../assets/js/api/ApiUrls";

import "../assets/css/DashboardStyles.css";

import { Outlet } from "react-router-dom";

import TopNavbar from "../components/Dashboard/TopNavbar";
import SideNavbar from "../components/Dashboard/SideNavbar";
import FooterDash from "../components/Dashboard/FooterDash";

function DashboardLayout() {

    const navigate = useNavigate(); // Hook for programmatic navigation

    /********IF the Token from localstorage is NOT valid or absent, THEN redirect to Login ****************/
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
                        });
    
                        //const data = await response.json();
    
                        if (!response.ok) {
                            //alert("Token invalid: " + ACCESS_TOKEN );
                            localStorage.removeItem("tiny_access_token");
                            localStorage.removeItem("username");
                            navigate('/login'); // Redirect
                        }
                    } catch (error) {
                        console.error("Token check failed:", error);
                        alert("Possible network error. Try again!");
                        navigate('/');
                        //localStorage.removeItem("tiny_access_token");
                    }
                };
    
                checkToken();
            } else {
                navigate('/login'); // Redirect
            }
        }, [navigate]); // Safe to add navigate here
        /*********************************************************************/

    useEffect(() => {
    
            const scriptUrls = [
              "../assets/js/dashboard/demo/scripts.js",
              //"../assets/js/dashboard/demo/chart-area-demo.js", //Uncomment for Charts; Also on index.html
              //"../assets/js/dashboard/demo/chart-bar-demo.js", //Uncomment for Charts; Also on index.html
            ];
    
        
            const scripts = scriptUrls.map((url) => {
              const script = document.createElement("script");
              script.src = url;
              script.async = true;
              document.body.appendChild(script);
              return script;
            });
        
            return () => {
              // Optional: cleanup on unmount
              scripts.forEach((script) => {
                document.body.removeChild(script);
              });
            };
    }, []);


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