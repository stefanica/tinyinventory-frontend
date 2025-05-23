import React from "react";
import ReactDOM from "react-dom";
import Header from "../../components/Front/Header";
import CataMediumAvatar from "../../assets/images/front/cata-avatar-150.png";
import FirstAboutImg from "../../assets/images/front/inventory-manager-app-1.jpg";
import SecondAboutImg from "../../assets/images/front/barcode-scanner-app-2.jpg";
import ThirdAboutImg from "../../assets/images/front/barcode-inventory-scanner-3.jpg";
import FourthAboutImg from "../../assets/images/front/android-barcode-reader-4.jpg";

function About() {
    return (
        <div className="d-flex flex-column">

        <main className="flex-shrink-0">
            {/*Navigation*/}
            {/*<Navigation />*/}
           
            {/*Header*/}
            <Header />

            {/*About section one*/}
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src={FirstAboutImg} alt="Manage your warehouse inventory" /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">About Tiny Inventory</h2>
                            <p className="lead fw-normal text-muted mb-3">
                                <b>Tiny Inventory</b> is a simple, powerful tool designed to help small businesses stay on top of their inventory—without the hassle.
                            </p>
                            <p className="lead fw-normal text-muted mb-0">
                                Managing stock shouldn't be complicated or expensive. That’s why we built Tiny Inventory: to make inventory control fast, intuitive, and accessible for everyone. Whether you're running a retail store, a small warehouse, or a pop-up shop, Tiny Inventory gives you the tools you need to track, update, and check out products—all from your phone or browser.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*About section two*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src={SecondAboutImg} alt="Barcode scanner app of store products" /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Built for Simplicity</h2>
                            <p className="lead fw-normal text-muted mb-0">
                                Just scan a barcode, add or update the product, and you’re done. With an Android app for quick scanning and a clean web dashboard to oversee your entire inventory, Tiny Inventory helps you focus on what really matters—running your business.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*About section three*/}
            <section className="py-5 bg-light" id="scroll-target">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src={ThirdAboutImg} alt="Android barcode inventory scanner" /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Designed with Small Businesses in Mind</h2>
                            <p className="lead fw-normal text-muted mb-3">
                                I know the challenges small shop owners face. No bloated features, no confusing menus—just the essentials to keep your shelves organized and your customers happy.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*About section four*/}
            <section className="py-5">
                <div className="container px-5 my-5">
                    <div className="row gx-5 align-items-center">
                        <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src={FourthAboutImg} alt="Barcode reader app" /></div>
                        <div className="col-lg-6">
                            <h2 className="fw-bolder">Free to Use - but Still in Development</h2>
                            <p className="lead fw-normal text-muted mb-3">
                                Tiny Inventory is <b>completely</b> free to use while we continue building and improving the platform. We're still in the development phase, which means you may occasionally encounter a bug or a feature that’s not fully polished.
                            </p>
                            <p className="lead fw-normal text-muted mb-0">
                                We appreciate your patience and feedback during this stage — every suggestion helps us shape the app into the best possible tool for small businesses. If you spot a bug or have an idea, don’t hesitate to reach out!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/*Team members section*/}
           {/* <section className="py-5 bg-light">
                <div className="container px-5 my-5">
                    <div className="text-center">
                        <h2 className="fw-bolder">The "team"</h2>
                        <p className="lead fw-normal text-muted mb-5">Dedicated to quality and your success</p>
                    </div>
                    <div className="row gx-5 row-cols-1 row-cols-sm-2 row-cols-xl-4 justify-content-center"> */}
                 { /*  <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Ibbie Eckart</h5>
                                <div className="fst-italic text-muted">Founder &amp; CEO</div>
                            </div>
                        </div> */}
                      {/*  <div className="col mb-5 mb-5 mb-xl-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src={CataMediumAvatar} alt="Barcode Scanner Founder" />
                                <h5 className="fw-bolder">Catalin</h5>
                                <div className="fst-italic text-muted">Developer</div>
                            </div>
                        </div>*/}
                    { /* <div className="col mb-5 mb-5 mb-sm-0">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Toribio Nerthus</h5>
                                <div className="fst-italic text-muted">Operations Manager</div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="text-center">
                                <img className="img-fluid rounded-circle mb-4 px-4" src="https://dummyimage.com/150x150/ced4da/6c757d" alt="..." />
                                <h5 className="fw-bolder">Malvina Cilla</h5>
                                <div className="fst-italic text-muted">CTO</div>
                            </div>
                        </div> */}
                  {/*  </div>
                </div>
            </section>*/}
        </main>

        </div>
    );
}

export default About;