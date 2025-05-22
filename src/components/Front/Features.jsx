import React from "react";
import ReactDOM from "react-dom";

function Features() {
    return(
        <section className="py-5" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0"><h2 className="fw-bolder mb-0">A simple way to manage your products.</h2></div>
                        <div className="col-lg-8">
                            <div className="row gx-5 row-cols-1 row-cols-md-2">
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-upc-scan"></i></div>
                                    <h2 className="h5">Add New Products Effortlessly</h2>
                                    <p className="mb-0">Quickly register a new product by scanning its barcode using the Android app. Enter the product name, description, quantity, and price — and it’s instantly saved to your inventory.</p>
                                </div>
                                <div className="col mb-5 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-cart-check"></i></div>
                                    <h2 className="h5">Seamless Checkout Process</h2>
                                    <p className="mb-0">Scan multiple product barcodes to add them to the checkout list. Adjust quantities if needed, and complete the checkout with a tap. The system will automatically deduct the sold items from your inventory.</p>
                                </div>
                                <div className="col mb-5 mb-md-0 h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-pencil-square"></i></div>
                                    <h2 className="h5">Edit Product Details</h2>
                                    <p className="mb-0">Update product information in seconds. Simply scan the barcode, edit the quantity, price, or description, and save your changes. Perfect for restocking or price adjustments.</p>
                                </div>
                                <div className="col h-100">
                                    <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-bar-chart-line"></i></div>
                                    <h2 className="h5">Real-Time Inventory Dashboard</h2>
                                    <p className="mb-0">Access a clean and organized dashboard on the web platform. View all products currently in your inventory, including details like quantity, price, and availability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Features;