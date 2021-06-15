import React , {Fragment, useState,useEffect} from 'react';
import { useParams } from "react-router-dom";

import Rating from '../../Rating';

export default function PDRTop(){

    const {id} = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3005/product/${id}`) 
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setProductData(data);
       
        });
    },[id]); 

    return(
        <Fragment>
            <h2>{productData.name}</h2>
                <div className="product-details-price">
                    <span>${productData.price} </span>
                </div>
                <div className="pro-details-rating-wrap">
                    {productData.rating && productData.rating > 0 ? (
                        <Rating 
                            ratingValue={productData.rating}
                        />
                    ) : ''}
                    
                </div>
                <div className="pro-details-list">
                    <p>{productData.shortDescription}</p>
                </div>
        </Fragment>
    );
}