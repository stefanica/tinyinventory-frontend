import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useEffect } from "react";
import React  from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import ApiUrls from "../../assets/js/api/ApiUrls";

function Profile() {
    const navigate = useNavigate(); // Hook for programmatic navigation
    const [infoLog, setInfoLog] = useState('');

    /******** Get user data from database ****************/
    
    // 1. Setting up the user object
    const [user, setUser] = useState({
            id: '',
            username: '',
            fullName: '',
            email: ''
            });

    // 2. Get user data from backend
    useEffect(() => {
        const ACCESS_TOKEN = localStorage.getItem("tiny_access_token");
        if (ACCESS_TOKEN) {
            // Define and call the async function inside useEffect
            const fetchUser = async () => {
                try {
                    const response = await fetch(ApiUrls.PROFILE, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${ACCESS_TOKEN}`, // Correct way
                        },
                    });

                    const data = await response.json();

                    if (response.ok) {
                        setUser(data);
                    }
                } catch (error) {
                    console.error("Getting user info failed: ", error);
                    setInfoLog("Getting user info failed: " + error);
                }
            };

            fetchUser();
        } else {
            setInfoLog("Login toke in failed authenticaton. Log out, log in, and try again.")
        }
    }, []);

    // 3. Destructure user directly inside the render
    const { username, fullName, email } = user;

    /*********************************************************************/


    /**************************User accound delete form function *****/

    //Make the pop-up window visible/invisible
    const [show, setShow] = useState(false);

    //Get username and password from the form
    const [usernameDel, setUsernameDel] = useState('');
    const [passwordDel, setPasswordDel] = useState('');

    //Buttons to close or submit the info
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Function that triggers the account deletion
    const handleSubmit = async (e) => {
        e.preventDefault();

        const ACCESS_TOKEN = localStorage.getItem("tiny_access_token");

        /*const payload = {
        field1: field1,
        field2: field2
        };*/

        try {
            /*const response = await fetch('/api/your-endpoint', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });*/

            const response = await fetch(ApiUrls.CLOSE_ACCOUNT, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${ACCESS_TOKEN}`, // Correct way
                     },
                body: JSON.stringify({
                    username: usernameDel,
                    password: passwordDel,
                }),
               
            });
            
            //If the response is OK delete user data from local storage and navigate to front page
            if (response.ok) {
                alert('Account deleted');
                localStorage.removeItem("tiny_access_token");
                localStorage.removeItem("username");
                handleClose();
                navigate('/'); // Redirect
            } else {
                alert('Submission failed. ');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. ' + error);
        }
    };

    /*************************************************************** */

    return (
        <main>
            <div className="col-lg-8">
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Username</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{username}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Full Name</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{fullName}</p>
                            </div>
                        </div>
                        <hr></hr>
                        <div className="row">
                            <div className="col-sm-3">
                                <p className="mb-0">Email</p>
                            </div>
                            <div className="col-sm-9">
                                <p className="text-muted mb-0">{email}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10">
                                <p className="mb-0">{infoLog}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-10">
                        <button type="button" class="btn btn-primary" onClick={handleShow}>Delete Account</button>
                    </div>
                </div>
            </div>

            {/*Popup to delete user*/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Enter login data to delete account</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="username"
                        value={usernameDel}
                        onChange={(e) => setUsernameDel(e.target.value)}
                        required
                    />
                    </Form.Group>

                    <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="password"
                        value={passwordDel}
                        onChange={(e) => setPasswordDel(e.target.value)}
                        required
                    />
                    </Form.Group>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Cancel
                    </Button>
                    <Button type="submit" variant="primary">
                    Submit
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>



        </main>
    );
}


export default Profile;