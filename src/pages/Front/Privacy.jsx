import React from "react";
import ReactDom from "react-dom";

function Privacy() {
    return (
        <div className="d-flex flex-column min-vh-100"> {/* Div used to make the content 100% height to the window (push the footer down) */}
            <main className="flex-shrink-0">
                {/*<!-- Page Content-->*/}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Privacy Information</h1>
                            <p className="lead fw-normal text-muted mb-0">How we handle your data</p>

                        {/* Privacy text goes here */}
                        <div className="bg-light p-4 rounded shadow-sm">
                            <p className="text-muted small text-start">
                                By using this service, you agree to our terms and conditions. Please read them carefully before proceeding.
                            </p>
                        </div>
                            
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Privacy;