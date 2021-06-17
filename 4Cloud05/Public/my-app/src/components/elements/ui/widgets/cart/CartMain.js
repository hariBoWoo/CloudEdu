import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartFooter from "./CartFooter";
import CartTable from "./CartTable";

export default function CartMain(){

    const [cartDatas, setCartDatas] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3005/cart`) 
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setCartDatas(data);
          
        });
    },[]); 


    return(
        
    
    <div className="cart-main-area pt-90 pb-100">
        <div className="container">
            <h3 className="cart-page-title">Your cart items</h3>
            <div className="row">
                <div className="col-12">
                    <div className="table-content table-responsive cart-table-content">
                        <table>
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Product Name</th>
                                    <th>Unit Price</th>
                                    <th>Qty</th>
                                    <th>Subtotal</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* 여기를 객체지향적으로 만들어 줘야(컴포넌트화) 버튼을 누른다고 해서 전체가 바뀌는 일이 없다. */}
                                {
                                    cartDatas.map(item => (
                                        <CartTable
                                            item = {item}
                                            setCartDatas = {setCartDatas}
                                        />
                                    ))
                                }
                            
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                        <div className="cart-shiping-update">
                            <a href="/shop-grid-standard">Continue Shopping</a>
                        </div>
                        <div className="cart-clear">
                            <button>Clear Shopping Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <CartFooter/>
        </div>
    </div>


    );
}