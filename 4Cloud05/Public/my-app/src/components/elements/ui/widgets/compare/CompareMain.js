import React , {Fragment, useState,useEffect} from 'react';


export default function CompareMain(){
    return(
        <Fragment>
            <div className="compare-main-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="compare-page-content">
                                <div className="compare-table table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <tbody>
                                            <tr>
                                                <th className="title-column">Product Info</th>
                                                <td className="product-image-title">
                                                    <div className="compare-remove">
                                                        <button><i className="las la-trash"></i></button>
                                                    </div>
                                                    <a className="image" href="/product/2"><img className="img-fluid" src="./fashion/2.jpg" alt=""/></a>
                                                    <div className="product-title">
                                                        <a href="/product/2">Lorem ipsum coat</a>
                                                    </div>
                                                    <div className="compare-btn">
                                                        <a href="/product/2">Select Option</a>
                                                    </div>
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <th className="title-column">Price</th>
                                                <td className="product-price">
                                                    <span className="amount old">$18.50</span>
                                                    <span className="amount">$15.72</span>
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <th className="title-column">Description</th>
                                                <td className="product-desc">
                                                    <p>
                                                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
                                                    </p>
                                                </td>
                                                
                                            </tr>
                                            <tr>
                                                <th className="title-column">Rating</th>
                                                <td className="product-rating">
                                                    <i className="fas fa-star yellow"></i>
                                                    <i className="fas fa-star yellow"></i>
                                                    <i className="fas fa-star yellow"></i>
                                                    <i className="far fa-star"></i>
                                                    <i className="far fa-star"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}