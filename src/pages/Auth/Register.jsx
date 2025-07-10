import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import { useState } from "react";
import ApiUrls from "../../assets/js/api/ApiUrls";



function Register() {
    const navigate = useNavigate(); // Hook for programmatic navigation
    
    /**********************Login Form*******************************/
    const [infoReg, setInfoReg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        

        try {
            const response = await fetch(ApiUrls.REGISTER, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: formData.get('firstname'),
                    lastName: formData.get('lastname'),
                    username: formData.get('username'),
                    email: formData.get('email'),
                    password: formData.get('password'),
                    passwordConfirmed: formData.get('passwordconfirm'),
                }),
            });

            if (!response.ok) {
                const data = await response.json();
                setInfoReg("Registration failed: " + data.message);
                //alert("Login failed:" + data.error);
            } else {
                // The 3 lines of code below can be used to remain logged in if we also send the JWT token.
                //const data = await response.json();
                //localStorage.setItem("tiny_access_token", data.token);
                //localStorage.setItem('username', formData.get('username'));
                navigate('/login');
                
                /*alert(data.token);
                document.getElementById("loginForm").reset();*/
            }
        } catch (err) {
            console.error('Registration error:', err);
            setInfoReg("Registration failed! " + err);
        }

    }
    /********************************************************** */



    return (
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Create Account</h3></div>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} method="post" autoComplete="on">
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
                                                <input className="form-control" id="inputPassword" name="password" type="password" placeholder="Create a password" autoComplete="new-password"  title="Must be at least 8 characters, include uppercase, lowercase, number, and special character."/>
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
                                    <small style={{ color: "red" }}>{infoReg}</small>
                                    <div className="mt-4 mb-0">
                                        <input type="submit" className="btn btn-primary btn-block d-grid" value="Create Account" />
                                        {/*<div className="d-grid"><a className="btn btn-primary btn-block" href="login.html">Create Account</a></div>*/}
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