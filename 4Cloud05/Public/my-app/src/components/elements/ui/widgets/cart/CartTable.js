import {Link} from 'react-router-dom';
import React, {useState} from 'react';

export default function CartTable({item, setCartDatas}){
   
    const [count, setCount]=useState(item.qty);


    const handleDelete = (id) => {
        fetch(`http://localhost:3005/cart/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다."),
            fetch(`http://localhost:3005/cart`) 
            .then(res => {
                return res.json();
            })
            .then(data =>{
                setCartDatas(data);
                // props로 setCartDatas를 받아와서 쓰면 된다.******
            
            })
        )
    }

    const addCount = () => {
        setCount(count+1)
    }
    const subCount = () => {
        if(count>1){
            setCount( count - 1 )
        }else{
            setCount(1)
        }
        
    }

    return(
        
        <tr>
            <td className="product-thumbnail">
                <Link to={`/productDetail/${item.id}`}><img className="img-fluid" src="../assets/img/product/fashion/2.jpg" alt=""/></Link>
            </td>
            <td className="product-name">
            <Link to={`/productDetail/${item.id}`}>{item.name}</Link>
                <div className="cart-item-variation">
                    <span>Color: {item.color}</span>
                    <span>Size: {item.size}</span>
                </div>
            </td>
            <td className="product-price-cart">
                <span className="amount old">${item.price}</span>
                <span className="amount">${(item.price * ((100-item.discount)/100)).toFixed(2)}</span>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton" onClick={()=>subCount()}>-</button>
                    <input className="cart-plus-minus-box" type="text" readonly="" value={count}/>
                    <button className="inc qtybutton" onClick={()=>addCount()}>+</button>
                </div>
            </td>
            <td className="product-subtotal">${((item.price * (100-item.discount)/100) * item.qty).toFixed(2)}</td>
            <td className="product-remove"><button onClick={()=>handleDelete(item.id)}><i className="fa fa-times"></i></button></td>
        </tr>

    );
}
