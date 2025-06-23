import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
//import { useState } from "react";
import ApiUrls from "../../assets/js/api/ApiUrls";



function Register() {
const navigate = useNavigate(); // Hook for programmatic navigation
    
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
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                            <div className="card-body">
                                <form method="post" autoComplete="on">
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" id="inputFirstName" name="firstname" type="text" placeholder="Enter your first name" />
                                                <label htmlFor="inputFirstName">First name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating">
                                                <input className="form-control" id="inputLastName" name="lastname" type="text" placeholder="Enter your last name" />
                                                <label htmlFor="inputLastName">Last name</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputUsername" name="username" type="text" placeholder="Create a username" autoComplete="username" />
                                        <label htmlFor="inputUsername">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputEmail" name="email" type="email" placeholder="name@example.com" autoComplete="email" />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" id="inputPassword" name="password" type="password" placeholder="Create a password" autoComplete="new-password" />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input className="form-control" id="inputPasswordConfirm" name="passwordconfirm" type="password" placeholder="Confirm password" />
                                                <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Create Account</a></div>
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div><Link className="link-light small text-muted" to="/login"><span style={{ color: "blue" }}> Have an account? Go to login </span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>


    );
}

export default Register;