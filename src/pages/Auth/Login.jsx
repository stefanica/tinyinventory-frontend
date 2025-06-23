import React from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from "react";
import ApiUrls from "../../assets/js/api/ApiUrls";

function Login() {
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


    /**********************Login Form*******************************/
    const [infoLog, setInfoLog] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        

        try {
            const response = await fetch(ApiUrls.LOGIN, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.get('username'),
                    password: formData.get('password'),
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setInfoLog("Login failed! " + data.error);
                //alert("Login failed:" + data.error);
            } else {
                const data = await response.json();
                localStorage.setItem("tiny_access_token", data.token);
                localStorage.setItem('username', formData.get('username'));
                navigate('/dashboard');
                
                /*alert(data.token);
                document.getElementById("loginForm").reset();*/
            }
        } catch (err) {
            console.error('Login error:', err);
            setInfoLog("Login failed! " + err);
        }

    }
    /********************************************************** */

    return (

        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} id="loginForm">
                                   {/* <div className="form-floating mb-3">
                                        <input className="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                        <label for="inputEmail">Email address</label>
                                    </div>*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="username" id="inputUsername" type="text" placeholder="username" />
                                        <label htmlFor="inputUsername">Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" name="password" id="inputPassword" type="password" placeholder="password" />
                                        <label htmlFor="inputPassword">Password</label>
                                    </div>
                                   {/*<div className="form-check mb-3">
                                        <input className="form-check-input" id="inputRememberPassword" type="checkbox" value="" />
                                        <label className="form-check-label" for="inputRememberPassword">Remember Password</label>
                                    </div> */}
                                    <div className="d-flex align-items-center justify-content-between mt-0 mb-0">
                                        <p style={{ color: "red" }}>{infoLog}</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Link className="link-light small text-muted" to="/password"><span style={{ color: "blue" }}> Forgot Password? </span></Link>
                                        {/*<a className="small" href="password.html">Forgot Password?</a>*/}
                                        {/*<a className="btn btn-primary" href="index.html">Login</a>*/}
                                        <input type="submit" className="btn btn-primary" value="Login" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div><Link className="link-light small text-muted" to="/register"><span style={{ color: "blue" }}> Need an account? Sign up! </span></Link></div>
                                {/*<div className="small"><a href="register.html">Need an account? Sign up!</a></div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );

}

export default Login;