import React from "react";
import ReactDOM from "react-dom";
import Navigation from "../../components/Front/Navigation";
import Header from "../../components/Front/Header";
import Features from "../../components/Front/Features";
import Testimonial from "../../components/Front/Testimonial";
import Footer from "../../components/Front/Footer";

function Home() {
    return (
        <div className="d-flex flex-column h-100">

        <main className="flex-shrink-0">
            {/*Navigation*/}
            {/*<Navigation />*/}

            {/*Header*/}
            <Header />

            {/*Features section*/}
            <Features />

            {/*Testimonial section*/}
            <Testimonial />

            {/*Blog preview section*/}
            
        </main>
        
        {/*Footer*/}
        {/*<Footer />*/}

	</div>

    );
}

export default Home;