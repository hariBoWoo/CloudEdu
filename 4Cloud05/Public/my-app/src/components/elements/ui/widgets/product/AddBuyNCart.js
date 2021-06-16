import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';


export default function AddBuyNCart({ color, size}){
    const { id } = useParams();
    const [datas, setDatas] = useState([]);
    const [count, setCount]=useState(1);

    const handleCountAdd = () =>{
        setCount(count+1)
    }
    const handleCountSub = () =>{
        count >1 ? setCount(count-1) : setCount(1)
    }


    useEffect(() => {
        fetch(`http://localhost:3005/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setDatas(data);
        })
    },[]);


    const handlePutCartList = (id) => {
        fetch(`http://localhost:3005/cart/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: datas.id,
                name: datas.name,
                image: datas.image,
                price: datas.price,
                discount: datas.discount,
                qty : count,
                color : color,
                size : size
            }),
        }).then( alert("success"))
    }

    const handlePutCompList = (id) => {
        
        fetch(`http://localhost:3005/compare/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: datas.id,
                name: datas.name,
                image: datas.image,
                price: datas.price,
                discount: datas.discount,
                shortDescription: datas.shortDescription,
                rating: datas.rating
            }),
        }).then( alert("success"))
    }

    const handlePutWishList = (id) => {
        
        fetch(`http://localhost:3005/wish/`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: datas.id,
                name: datas.name,
                image: datas.image,
                price: datas.price,
                discount: datas.discount
            }),
        }).then( alert("success"))
    }
    
    return(
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton" onClick={()=>handleCountSub()}>-</button>
                <input className="cart-plus-minus-box" type="text" readonly="" value={count}/>
                <button className="inc qtybutton" onClick={()=>handleCountAdd()}>+</button>
            </div>
            
            <div className="pro-details-cart btn-hover" >
                <button
                    value={datas.id}
                    onClick={() => handlePutCartList(datas.id)}
                > Add To Cart </button>
            </div>

            <div className="pro-details-cart btn-hover ml-0"> 
                <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
            </div>
            
            <div className="pro-details-wishlist">
                <button className="" title="Add to wishlist"
                    onClick={() => handlePutWishList(datas.id)}>
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare">
                <button className="" title="Add to compare"
                    onClick={() => handlePutCompList(datas.id)}>
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>
    );
}