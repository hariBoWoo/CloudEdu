import ProductDetailLeft from "./ProductDetailLeft";
import ProductDetailRight from "./ProductDetailRight";
import React , { useState, useEffect} from 'react';



export default function ProductTop(){

    return(
    
        <div className="shop-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <ProductDetailLeft/>
                    <ProductDetailRight/>
                </div>
            </div>
        </div>

    );
}