import React from "react";
import ReactDOM from "react-dom";

function Contact() {

    return(
       <div className="d-flex flex-column">
            <section className="py-5">
                {/*<!-- Page content--> */}
                <div className="container px-5">
                  {/*  <!-- Contact form--> */}
                    <div className="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                        <div className="text-center mb-5">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <h1 className="fw-bolder">Get in touch</h1>
                            <p className="lead fw-normal text-muted mb-0">We'd love to hear from you</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                             {/*   <!-- * * * * * * * * * * * * * * *-->
                                <!-- * * SB Forms Contact Form * *-->
                                <!-- * * * * * * * * * * * * * * *-->
                                <!-- This form is pre-integrated with SB Forms.-->
                                <!-- To make this form functional, sign up at-->
                                <!-- https://startbootstrap.com/solution/contact-forms-->
                                <!-- to get an API token!--> */}
                                <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                   {/* <!-- Name input--> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                        <label for="name">Full name</label>
                                        <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                    </div>
                                  {/*  <!-- Email address input--> */}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                        <label for="email">Email address</label>
                                        <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                        <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                    </div>
                                    {/*<!-- Phone number input-->*/}
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                        <label for="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    {/*<!-- Message input-->*/}
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required"></textarea>
                                        <label for="message">Message</label>
                                        <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                    </div>
                                   {/* <!-- Submit success message-->
                                    <!---->
                                    <!-- This is what your users will see when the form-->
                                    <!-- has successfully submitted-->*/}
                                    <div className="d-none" id="submitSuccessMessage">
                                        <div className="text-center mb-3">
                                            <div className="fw-bolder">Form submission successful!</div>
                                            To activate this form, sign up at
                                            <br />
                                            <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                        </div>
                                    </div>
                                    {/*<!-- Submit error message-->
                                    <!---->
                                    <!-- This is what your users will see when there is-->
                                    <!-- an error submitting the form-->*/}
                                    <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                                    {/*<!-- Submit Button-->*/}
                                    <div className="d-grid" onClick={() => alert("The form is not yet functional")}><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/*<!-- Contact cards-->*/}
                    <div className="row gx-5 row-cols-2 row-cols-lg-4 py-5 justify-content-center">
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-chat-dots"></i></div>
                            <div className="h5 mb-2">Chat with us</div>
                            <p className="text-muted mb-0">Chat live with one of our support specialists using WhatsApp at: (+40)-764-691-645</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-envelope"></i></div>
                            <div className="h5">Send us an email</div>
                            <p className="text-muted mb-0">From your email you direcly can send us a message at contact@tinyinventory.com</p>
                        </div>
                        <div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-question-circle"></i></div>
                            <div className="h5">Support center</div>
                            <p className="text-muted mb-0">Browse FAQ's and support articles to find solutions.</p>
                        </div>
                        {/*<div className="col">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-telephone"></i></div>
                            <div className="h5">Call us</div>
                            <p className="text-muted mb-0">Call us during normal business hours at (555) 892-9403.</p>
                        </div>*/}
                    </div>
                </div>
            </section>
       </div>
    );
}

export default Contact;