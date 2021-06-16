import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../Rating';
import { Checkbox } from '@material-ui/core';

export default function ProductView({categoryName}){

    const [newData, setnewData] = useState([]);
    console.log(newData);

    useEffect(() => {
        fetch("http://localhost:3005/product")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setnewData(data);
        })
        //.catch(error => console.log(error))
    },[]);

    const searchData = categoryName
    ? newData.filter(
        item => item.category.filter(single => single === categoryName)[0]
      )
    : newData;


    const handleDelete = (id) => {
        fetch(`http://localhost:3005/wish/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다.")
        )
    }

    const handlePutWishList = (id) => {
        
        fetch(`http://localhost:3005/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            fetch(`http://localhost:3005/wish/`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: data.id,
                    name: data.name,
                    image: data.image,
                    price: data.price,
                    discount: data.discount
                }),
            })
        }).then(
            alert("success")
        )
    }
    
    // const searchData = newData.filter(index => (
    //    index.category[0] === categoryName || index.category[1] === categoryName || index.category[2] === categoryName
    // ))
    const productList = searchData.map((item, index) => (

        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 " key={item.id}>
        <div className="product-wrap mb-25">
            <div className="product-img">
                <Link to={`/productdetail/${item.id}`}>
                    <img className="default-img" src="./fashion/8.jpg" alt="" />
                    <img className="hover-img" src="./fashion/6.jpg" alt="" />
                </Link>
                <div className="product-img-badges">
                    {
                        item.discount > 0 ? <span className="pink">-{item.discount}%</span> : ""
                    }
                    
                    {
                        item.new ? <span className="purple">new</span> : ""
                    }
                    
                </div>
                <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                        <button
                            value={item.id}
                            onClick={() => handlePutWishList(item.id)}
                        >
                            <i className="las la-bookmark"></i>
                        </button>
                    </div>
                    <div className="pro-same-action pro-cart">
                        <button disabled="" className="active">Buy</button>
                    </div>
                    <div className="pro-same-action pro-quickview">
                        <button 
                            className="" 
                            title={item.id} 
                            onClick={() => handleDelete(item.id)} 
                            value={item.id}
                        >
                            <i className="las la-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-content text-center">
                <h3><Link to={`/productdetail/${item.id}`}>{item.name}</Link></h3>
                <div className="product-rating">
                    {item.rating && item.rating > 0 ? (
                        <Rating ratingValue={item.rating} />
                    ) : (
                    ""
                )}
                </div>
                <div className="product-price">
                    <span>{item.price}</span> 
                    {
                        item.discount > 0 ? <span className="old">{(item.price * ((100+item.discount)/100)).toFixed(2)}</span> : ""
                    }
                </div>
            </div>
        </div>
    </div>
        

    )).slice(0,8);

    return(
        <div className="row mt-5">
            {productList}


            
        </div>
        
    );
}