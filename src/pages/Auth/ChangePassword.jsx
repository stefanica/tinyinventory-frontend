//import { data, Link } from 'react-router-dom'; //Older version, don't know why it was used for
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';
import { useState } from "react";
import { useParams } from 'react-router-dom';
import ApiUrls from "../../assets/js/api/ApiUrls";

function ChangePassword() {

    const navigate = useNavigate(); // Hook for programmatic navigation


    /**********************Change Password Form*******************************/

    const { token } = useParams();  // This extracts the {token} from the URL
    const [infoReg, setInfoReg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        

        try {

            const responseChange = await fetch(ApiUrls.CHANGE_PASSWORD, {
                method: 'PUT',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    token: token,
                    password: formData.get('password'),
                    confirmedPassword: formData.get('passwordconfirm'),
                }),
            });

            const data = await responseChange.json();

            if (!responseChange.ok) {
                setInfoReg("Failed:  " + data.message);
            } else {
                //If reset password succesfuly redirect to Login page
                setInfoReg(data.message + " You will be redirected to Login in 5 seconds");
                e.target.reset();  // If OK, reset the form
                setTimeout(() => {
                    navigate('/login');
                }, "5000");    
            }
        } catch (err) {
            console.error('Failed:', err);
            setInfoReg("Password change failed: " + err);
        }

    }
    /********************************************************** */


    return(
        <main>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Password Recovery</h3></div>
                            <div className="card-body">
                                <div className="small mb-3 text-muted">Change your tinyinventory.com account password</div>
                                <form onSubmit={handleSubmit}>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input className="form-control" id="inputPassword" name="password" type="password" placeholder="Create a password" autoComplete="new-password"  title="Must be at least 8 characters, include uppercase, lowercase, number, and special character."/>
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-floating mb-3 mb-md-3">
                                            <input className="form-control" id="inputPasswordConfirm" name="passwordconfirm" type="password" placeholder="Confirm password" />
                                            <label htmlFor="inputPasswordConfirm">Confirm Password</label>
                                        </div>
                                    </div>
                                    <small>{infoReg}</small>
                                    <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                        <Link className="link-light small text-muted" to="/login"><span style={{ color: "blue" }}> Return to login </span></Link>
                                        <input type="submit" className="btn btn-primary" value="Reset Password" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer text-center py-3">
                                <div className="small"><a href="register.html">Need an account? Sign up!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default ChangePassword;