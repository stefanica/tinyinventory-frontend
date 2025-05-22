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
                                Effective Date: 20/04/2025
                            </p>
                            <p className="text-muted small text-start">
                                Last Updated: 22/05/2025
                            </p>
                            <p className="text-muted small text-start">
                                Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your personal data when you use Tiny Inventory, our mobile app and web platform.
                            </p>
                            <h4 className="text-start">1. Who We Are</h4>
                            <p className="text-muted small text-start">
                                <b>Tiny Inventory</b> is located in Romania, and we are committed to protecting your privacy in compliance with the <b>General Data Protection Regulation (EU) 2016/679 (GDPR)</b>.
                            </p>
                            <p className="text-muted small text-start">
                                Contact us at: 📧 [contact@tinyinventory.com]
                            </p>
                            
                            <h4 className="text-start">2. What Information We Collect</h4>
                            <p className="text-muted small text-start">
                                <b>Personal Data (when you register an account):</b>
                            </p>
                            <p className="text-muted small text-start">
                                - Name
                            </p>
                            <p className="text-muted small text-start">
                                - Email address
                            </p>
                            <p className="text-muted small text-start">
                                <b>Non-Personal Data (product inventory):</b>
                            </p>
                            <p className="text-muted small text-start">
                                - Product names and descriptions
                            </p>
                            <p className="text-muted small text-start">
                                - Product quantities and prices
                            </p>
                            <p className="text-muted small text-start">
                                - Barcode data
                            </p>
                            <p className="text-muted small text-start">
                                <b>Website Analytics (via Google Analytics):</b>
                            </p>
                            <p className="text-muted small text-start">
                                When you visit our website, we collect certain technical data through <b>Google Analytics</b>, such as:
                            </p>
                            <p className="text-muted small text-start">
                                - Pages visited
                            </p>
                            <p className="text-muted small text-start">
                                - Time spent on site
                            </p>
                            <p className="text-muted small text-start">
                                - Browser and device type
                            </p>
                            <p className="text-muted small text-start">
                                - Approximate geographic location (based on anonymized IP address)
                            </p>
                            
                            <h4 className="text-start">3. How We Use Your Informationt</h4>
                            <p className="text-muted small text-start">
                                We use your data to:
                            </p>
                            <p className="text-muted small text-start">
                                - Provide access to our app and services
                            </p>
                            <p className="text-muted small text-start">
                                - Maintain and improve our website
                            </p>
                            <p className="text-muted small text-start">
                                - Analyze web traffic and usage patterns using Google Analytics
                            </p>
                            <p className="text-muted small text-start">
                                - Communicate important updates
                            </p>
                            <p className="text-muted small text-start">
                                We <b>do not</b> use personal data for advertising purposes.
                            </p>
                            
                            <h4 className="text-start">4. Google Analytics</h4>
                            <p className="text-muted small text-start">
                                We use <b>Google Analytics</b>, a web analytics tool by Google Inc., to understand how visitors use our website.
                            </p>
                            <p className="text-muted small text-start">
                                <b>Important GDPR Considerations:</b>
                            </p>
                            <p className="text-muted small text-start">
                                - Your IP address is anonymized before being stored or processed by Google.
                            </p>
                            <p className="text-muted small text-start">
                                - No personally identifiable information (PII) is collected via Google Analytics.
                            </p>
                            <p className="text-muted small text-start">
                                - Google Analytics cookies may be stored on your device to help analyze site usage.
                            </p>
                            <p className="text-muted small text-start">
                                You can opt out of Google Analytics tracking at any time by installing the <b>Google Analytics Opt-out Browser Add-on:</b> 
                            </p>
                            <p className="text-muted small text-start">
                               🔗 <a href="https://tools.google.com/dlpage/gaoptout" target="blank">https://tools.google.com/dlpage/gaoptout</a>
                            </p>
                            <p className="text-muted small text-start">
                                For more details, please refer to <a href="https://policies.google.com/privacy" target="blank">Google’s Privacy Policy</a>.
                            </p>
                            
                            <h4 className="text-start">5. Legal Basis for Processing</h4>
                            <p className="text-muted small text-start">
                                We process your data under the following legal bases:
                            </p>
                            <p className="text-muted small text-start">
                                - <b>Consent</b> – Given at account registration and for cookie-based analytics.
                            </p>
                            <p className="text-muted small text-start">
                                - <b>Contractual necessity</b> – To provide the service.
                            </p>
                            <p className="text-muted small text-start">
                                - <b>Legal obligation</b> – To comply with applicable regulations.
                            </p>
                            
                            <h4 className="text-start">6. Data Storage and Security</h4>
                            <p className="text-muted small text-start">
                                Your data is stored securely on EU-based servers (or specify location). We use strict access controls, encryption, and secure backups.
                            </p>
                            
                            <h4 className="text-start">7. Data Sharing</h4>
                            <p className="text-muted small text-start">
                                We do <b>not</b> sell, rent, or share your personal data with third parties.
                            </p>
                            <p className="text-muted small text-start">
                                Limited data may be shared with service providers (e.g., hosting or analytics) under strict confidentiality and data processing agreements.
                            </p>
                            
                            <h4 className="text-start">8. Your GDPR Rights</h4>
                            <p className="text-muted small text-start">
                                You have the right to:
                            </p>
                            <p className="text-muted small text-start">
                                - Access your data
                            </p>
                            <p className="text-muted small text-start">
                                - Correct or update inaccurate information
                            </p>
                            <p className="text-muted small text-start">
                                - Delete your data (“right to be forgotten”)
                            </p>
                            <p className="text-muted small text-start">
                                - Restrict or object to processing
                            </p>
                            <p className="text-muted small text-start">
                                - Request data portability
                            </p>
                            <p className="text-muted small text-start">
                                To exercise any of these rights, contact us at [contact@tinyinventory.com].
                            </p>

                            <h4 className="text-start">9. Data Retention</h4>
                            <p className="text-muted small text-start">
                                We retain your data only as long as necessary to deliver the service or comply with legal obligations. You may delete your account at any time, and we will remove your personal data.
                            </p>

                            <h4 className="text-start">10. Children’s Privacy</h4>
                            <p className="text-muted small text-start">
                                Tiny Inventory is not intended for individuals under 16. We do not knowingly collect data from children.
                            </p>

                            <h4 className="text-start">11. Changes to This Policy</h4>
                            <p className="text-muted small text-start">
                                We may update this policy as necessary. Users will be notified of any changes through the app or website. Continued use of Tiny Inventory implies acceptance of the updated policy.
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