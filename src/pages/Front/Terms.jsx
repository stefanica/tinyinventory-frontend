import React from "react";
import ReactDom from "react-dom";

function Terms() {
    return (
        <div className="d-flex flex-column min-vh-100"> {/* Div used to make the content 100% height to the window (push the footer down) */}
            <main className="flex-shrink-0">
                {/*<!-- Page Content-->*/}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder">Terms and conditions</h1>
                            <p className="lead fw-normal text-muted mb-0">Applies to all of our users</p>

                        {/* Your terms and conditions text goes here */}
                        <div className="bg-light p-4 rounded shadow-sm">
                            <p className="text-muted small text-start">
                                Effective Date: 20/04/2025
                            </p>
                            <p className="text-muted small text-start">
                                Welcome to Tiny Inventory. By using our mobile app or website, you agree to the following Terms and Conditions. Please read them carefully.
                            </p>
                            <h4 className="text-start">1. Account Registration</h4>
                            <p className="text-muted small text-start">
                                To use Tiny Inventory, you must create an account by providing your name and email address. You agree to provide accurate, complete, and up-to-date information during registration and to keep your credentials secure.
                            </p>
                            <h4 className="text-start">2. Use of the Service</h4>
                            <p className="text-muted small text-start">
                                Tiny Inventory is designed to help users manage product inventories efficiently. You may use the app and website to add, edit, and view information about your products, including:
                            </p>
                            <p className="text-muted small text-start">
                                - Product name and description
                            </p>
                            <p className="text-muted small text-start">
                                - Price and quantity
                            </p>
                            <p className="text-muted small text-start">
                                - Barcode information
                            </p>
                            <p className="text-muted small text-start">
                                You are responsible for all activity under your account and agree not to misuse the service in any unlawful or unauthorized way.
                            </p>
                            <h4 className="text-start">3. Data Privacy and GDPR Compliance</h4>
                            <p className="text-muted small text-start">
                                We value your privacy. All personal data is processed in compliance with the <b>General Data Protection Regulation (EU) 2016/679 (GDPR)</b>. We collect only what is necessary (name and email) to provide you with access to the service.
                            </p>
                            <p className="text-muted small text-start">
                                We do not collect, share, or sell any product-related data you store (such as prices, quantities, or barcodes) for advertising or analytics purposes.
                            </p>
                            <p className="text-muted small text-start">
                                For more information, see our [Privacy Policy].
                            </p>
                            <h4 className="text-start">4. Intellectual Property</h4>
                            <p className="text-muted small text-start">
                                The app (web and mobile) and its logo, design, and functionality are the intellectual property of Tiny Inventory. You may not copy, modify, distribute, or create derivative works from any part of the service without written permission.
                            </p>
                            <h4 className="text-start">5. Termination</h4>
                            <p className="text-muted small text-start">
                                We reserve the right to suspend or terminate your account at our discretion if there is a violation of these Terms.
                            </p>
                            <h4 className="text-start">6. Changes to the Terms</h4>
                            <p className="text-muted small text-start">
                                We may update these Terms from time to time. When we do, we will notify users through the app or website. Continued use of the service after changes means you accept the new terms.
                            </p>
                            <h4 className="text-start">7. Contact Us</h4>
                            <p className="text-muted small text-start">
                                If you have questions or concerns, please contact us at:
                            </p>
                            <p className="text-muted small text-start">
                                📧 [contact@tinyinventory.com]
                            </p>
                        </div>
                            
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Terms;