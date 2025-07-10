import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import { useState } from "react";
import ApiUrls from "../../assets/js/api/ApiUrls";

function ForgotPassword() {


    /**********************Send Email Form*******************************/
    const [infoReg, setInfoReg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        

        try {
            const response = await fetch(ApiUrls.RESET_PASSWORD_EMAIL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.get('email'),
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                
                setInfoReg("Failed:  " + data.message);
            } else {
 
                setInfoReg(data.message);
                e.target.reset();  // If OK, reset the form

                //navigate('/login');
            }
        } catch (err) {
            console.error('Email sending failed: ', err);
            setInfoReg("Email sending failed: " + err);
        }

    }
    /********************************************************** */




    return (
        <main>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-5">
                        <div class="card shadow-lg border-0 rounded-lg mt-5">
                            <div class="card-header"><h3 class="text-center font-weight-light my-4">Password Recovery</h3></div>
                            <div class="card-body">
                                <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="inputEmail" name="email" type="email" placeholder="name@example.com" autoComplete="email" />
                                        <label htmlFor="inputEmail">Email address</label>
                                    </div>
                                    <small>{infoReg}</small>
                                    <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Link className="link-light small text-muted" to="/login"><span style={{ color: "blue" }}> Return to login </span></Link>
                                        {/*<a class="small" href="login.html">Return to login</a>*/}
                                        {/*<a class="btn btn-primary" href="login.html">Reset Password</a>*/}
                                        <input type="submit" className="btn btn-primary" value="Send reset password link" />
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer text-center py-3">
                                {/*<div class="small"><a href="register.html">Need an account? Sign up!</a></div>*/}
                                <div><Link className="link-light small text-muted" to="/register"><span style={{ color: "blue" }}> Need an account? Sign up! </span></Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ForgotPassword;