import React , {Fragment, useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import ProductRating from '../../Rating';

export default function CompareTable(){

    const [compareDatas, setCompareDatas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3005/compare")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCompareDatas(data);
        })
    },[]);

    const handleDelete = (id) => {
        fetch(`http://localhost:3005/compare/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다."),
            // alert에서 확인을 눌러야 없어지고, 이건 다시 데이터를 받아오는 것이다!
            fetch(`http://localhost:3005/compare`) 
            .then(res => {
                return res.json();
            })
            .then(data =>{
                setCompareDatas(data);
            
            })
        )
    }

    const compareList01 = compareDatas.map((item, index)=>(
        <td className="product-image-title">
            <div className="compare-remove">
                <button onClick={()=> handleDelete(item.id)}><i className="las la-trash"></i></button>
            </div>
            <Link className="image" to={`/productDetail/${item.id}`}><img className="img-fluid" src={item.image[0]} alt=""/></Link>
            <div className="product-title">
                <Link to={`/productDetail/${item.id}`}>{item.name}</Link>
            </div>
            <div className="compare-btn">
                <Link to={`/productDetail/${item.id}`}>Select Option</Link>
            </div>
        </td>
    )).slice(0,3);

    const compareList02 = compareDatas.map((item, index)=>(
        <td className="product-price">
            <span className="amount old">${item.price}</span>
            <span className="amount">${(item.price * ((100-item.discount)/100)).toFixed(2)}</span>
        </td>
    )).slice(0,3);

    const compareList03 = compareDatas.map((item, index)=>(
        <td className="product-desc">
            <p>
                {item.shortDescription}
            </p>
        </td>
    )).slice(0,3);

    const compareList04 = compareDatas.map((item, index)=>(
        <td className="product-rating">
            {item.rating && item.rating >0 ? (<ProductRating ratingValue={item.rating}/>) : ''}
        </td>
    )).slice(0,3);

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
                                                        {compareList01}
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th className="title-column">Price</th>
                                                        {compareList02}
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th className="title-column">Description</th>
                                                        {compareList03}
                                                        
                                                    </tr>
                                                    <tr>
                                                        <th className="title-column">Rating</th>
                                                        {compareList04}
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