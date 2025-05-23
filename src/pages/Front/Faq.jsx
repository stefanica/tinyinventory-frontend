import React from "react";
import ReactDom from "react-dom";

function Faq() {
    return (
        <main className="flex-shrink-0">
            {/*<!-- Page Content-->*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="text-center mb-5">
                        <h1 className="fw-bolder">Frequently Asked Questions</h1>
                        <p className="lead fw-normal text-muted mb-0">How can we help you?</p>
                    </div>
                    <div className="row gx-5">
                        <div className="col-xl-8">
                            {/*<!-- FAQ Accordion 1-->*/}
                            <h2 className="fw-bolder mb-3">Mobile App</h2>
                            <div className="accordion mb-5" id="accordionExample">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">What kind of codes does the app is able to scan?</button></h3>
                                    <div className="accordion-collapse collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0">The app reads most standard formats:</p>
                                            <p className="mb-0">- <b>Linear formats:</b> Codabar, Code 39, Code 93, Code 128, EAN-8, EAN-13, ITF, UPC-A, UPC-E</p>
                                            <p className="mb-0">- <b>2D formats:</b> Aztec, Data Matrix, PDF417, QR Code</p>

                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Do we have to specify the code format?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0">No! The app automatically detects the code format. You can scan for all supported barcode formats at once without having to specify the format you're looking for.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Does the phone orientation affect the code scanning?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0">No! Barcodes are recognized and scanned regardless of their orientation: right-side-up, upside-down, or sideways.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingFour"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Do I need an internet connection to scan the codes?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="mb-0">Yes! Technically, the app can scan codes without an internet connection, but you must be connected to your account so that the app can communicate with the database.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                           {/* <!-- FAQ Accordion 2--> */}
                            <h2 className="fw-bolder mb-3">Website Issues &amp; Questions</h2>
                            <div className="accordion mb-5 mb-xl-0" id="accordionExample2">
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne2" aria-expanded="true" aria-controls="collapseOne2">I added a new product, but it doesn't appear on the list. Why?</button></h3>
                                    <div className="accordion-collapse collapse show" id="collapseOne2" aria-labelledby="headingOne" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0">Possible network connectivity issues, and the product didn't get saved when you clicked add. Be sure to check the message that appears right after you click add on the app.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">Can I add the same product, but with a different price?</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseTwo2" aria-labelledby="headingTwo" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0">No! Currently, the app supports one price per product/barcode. But you can update the quantity and price of the existing stock.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item">
                                    <h3 className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree2" aria-expanded="false" aria-controls="collapseThree2">I want a new feature!</button></h3>
                                    <div className="accordion-collapse collapse" id="collapseThree2" aria-labelledby="headingThree" data-bs-parent="#accordionExample2">
                                        <div className="accordion-body">
                                            <p className="mb-0">Great! You can send an email to contact@tinyinventory.com, and if it enhances the app/website functionality, it will be implemented, as long as it is reasonable.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4">
                            <div className="card border-0 bg-light mt-xl-5">
                                <div className="card-body p-4 py-lg-5">
                                    <div className="d-flex align-items-center justify-content-center">
                                        <div className="text-center">
                                            <div className="h6 fw-bolder">Have more questions?</div>
                                            <p className="text-muted mb-4">
                                                Contact us at
                                                <br />
                                                <a href="#!">contact@tinyinventory.com</a>
                                            </p>
                                            <div className="h6 fw-bolder">Follow us</div>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                            <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Faq;