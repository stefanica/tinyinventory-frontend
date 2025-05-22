import React from "react";
import ReactDOM from "react-dom";
import CataSmallAvatar from "../../assets/images/front/cata-avatar-50.png";

function Testimonial() {
    return (
        <div className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="row gx-5 justify-content-center">
                        <div className="col-lg-10 col-xl-7">
                            <div className="text-center">
                                <div className="fs-4 mb-4 fst-italic">"I built Tiny Inventory to make stock management as simple as scanning a barcode—fast, reliable, and stress-free."</div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <img className="rounded-circle me-3" src={CataSmallAvatar} alt="TinyInventory Founder Logo" />
                                    <div className="fw-bold">
                                        Catalin
                                        <span className="fw-bold text-primary mx-1">/</span>
                                        Developer, TinyInventory
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Testimonial;