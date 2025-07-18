import React from "react";
import ReactDOM from "react-dom";
import ProductRow from "../../components/Dashboard/ProductRow";
import ApiUrls from "../../assets/js/api/ApiUrls";
import { useEffect } from "react";
import { useState } from "react";
//import { useNavigate } from 'react-router-dom';


/*function createRow(row) {
    return (
        <ProductRow 
            number = {row.id}
            name = {row.name}
            code = {row.code}
            quantity = {row.quantity}
            price = {row.price}
            date = {new Date()}
        />
    );
}*/

function Dashboard() {
    //const navigate = useNavigate(); // Hook for programmatic navigation

    /*************** Get All Products from database ******************/

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        const ACCESS_TOKEN = localStorage.getItem("tiny_access_token"); // or sessionStorage, depending on where you store it

        if (ACCESS_TOKEN != null) {
            fetch(ApiUrls.GET_ALL_PRODUCTS, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Unauthorized or failed request');
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);

                // Initialize DataTable after DOM has rendered with new data
                setTimeout(() => {
                    const _datatable = new window.simpleDatatables.DataTable("#datatablesSimple");
                }, 200); // slight delay to ensure DOM is ready


            })
            .catch(error => console.error('Error:', error));
        }
    }, []);


    /*************** Get Products from database ******************/


    return(             
                <main>
                    <div className="container-fluid px-4">
                        <h1 className="mt-4">Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Dashboard</li>
                        </ol>
                        {/*<div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Primary Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Warning Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Success Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-danger text-white mb-4">
                                    <div className="card-body">Danger Card</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                        {/*<div className="row">
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-area me-1"></i>
                                        Area Chart Example
                                    </div>
                                    <div className="card-body"><canvas id="myAreaChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                            <div className="col-xl-6">
                                <div className="card mb-4">
                                    <div className="card-header">
                                        <i className="fas fa-chart-bar me-1"></i>
                                        Bar Chart Example
                                    </div>
                                    <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
                                </div>
                            </div>
                        </div>*/}
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table me-1"></i>
                                All the products from inventory
                            </div>
                            <div className="card-body">
                                <table id="datatablesSimple">
                                    <thead>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Code</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Date Modified</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>No.</th>
                                            <th>Name</th>
                                            <th>Code</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Date Modified</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {products.map(product => (
                                            <ProductRow
                                                key={product.id}
                                                number={product.id}
                                                name={product.name}
                                                code={product.code}
                                                quantity={product.quantity}
                                                price={product.price}
                                                date={product.date}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </main>
    );
}

export default Dashboard;