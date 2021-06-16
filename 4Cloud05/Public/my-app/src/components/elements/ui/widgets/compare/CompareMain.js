import React , {Fragment, useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import ProductRating from '../../Rating';

export default function CompareMain(){

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
// <td> 로 나눠서 뿌려주고 3번만 나오도록 해주면 됨 반복 그게 좀 달라서... 계속 들어오는건 map 슬라이스로 3개만 보이도록 조절
    const compareList = compareDatas.map((item, index)=>(
        <tbody>
            <tr>
                <th className="title-column">Product Info</th>
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
                
            </tr>
            <tr>
                <th className="title-column">Price</th>
                <td className="product-price">
                    <span className="amount old">${item.price}</span>
                    <span className="amount">${(item.price * ((100-item.discount)/100)).toFixed(2)}</span>
                </td>
                
            </tr>
            <tr>
                <th className="title-column">Description</th>
                <td className="product-desc">
                    <p>
                        {item.shortDescription}
                    </p>
                </td>
                
            </tr>
            <tr>
                <th className="title-column">Rating</th>
                <td className="product-rating">
                    {item.rating && item.rating >0 ? (<ProductRating ratingValue={item.rating}/>) : ''}
                </td>
            </tr>
        </tbody>
    ))




    return(
        <Fragment>
            <div className="compare-main-area pt-90 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="compare-page-content">
                                <div className="compare-table table-responsive">
                                    <table className="table table-bordered mb-0">
                                        {compareList}
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