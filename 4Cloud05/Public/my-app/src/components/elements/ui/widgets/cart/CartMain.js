import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

    const handleDelete = (id) => {
        fetch(`http://localhost:3005/cart/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다."),
            // alert에서 확인을 눌러야 없어지고, 이건 다시 데이터를 받아오는 것이다!
            fetch(`http://localhost:3005/cart`) 
            .then(res => {
                return res.json();
            })
            .then(data =>{
                setCartDatas(data);
            
            })
        )
    }

    const cartList = cartDatas.map((item, index)=>(
        <tr key={index}>
            <td className="product-thumbnail">
                <Link to={`/productDetail/${item.id}`}><img className="img-fluid" src="../assets/img/product/fashion/2.jpg" alt=""/></Link>
            </td>
            <td className="product-name">
            <Link to={`/productDetail/${item.id}`}>{item.name}</Link>
                <div className="cart-item-variation">
                    <span>Color: blue</span>
                    <span>Size: x</span>
                </div>
            </td>
            <td className="product-price-cart">
                <span className="amount old">${item.price}</span>
                <span className="amount">${(item.price * ((100-item.discount)/100)).toFixed(2)}</span>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton">-</button>
                    <input className="cart-plus-minus-box" type="text" readonly="" value="1"/>
                    <button className="inc qtybutton">+</button>
                </div>
            </td>
            <td className="product-subtotal">$15.72</td>
            <td className="product-remove"><button onClick={()=>handleDelete(item.id)}><i className="fa fa-times"></i></button></td>
        </tr>
    ))



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
                               {cartList}
                               
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
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="cart-tax">
                        <div className="title-wrap">
                            <h4 className="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                        </div>
                        <div className="tax-wrapper">
                            <p>
                                Enter your destination to get a shipping estimate.
                            </p>
                            <div className="tax-select-wrapper">
                                <div className="tax-select">
                                    <label>* Country</label>
                                    <select className="email s-email s-wid">
                                        <option>Bangladesh</option>
                                        <option>Albania</option>
                                        <option>Åland Islands</option>
                                        <option>Afghanistan</option>
                                        <option>Belgium</option>
                                    </select>
                                </div>
                                <div className="tax-select">
                                    <label>* Region / State</label>
                                    <select className="email s-email s-wid">
                                        <option>Bangladesh</option>
                                        <option>Albania</option>
                                        <option>Åland Islands</option>
                                        <option>Afghanistan</option>
                                        <option>Belgium</option>
                                    </select>
                                </div>
                                <div className="tax-select">
                                    <label>* Zip/Postal Code</label>
                                    <input type="text"/>
                                </div>
                                <button className="cart-btn-2" type="submit">Get A Quote</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="discount-code-wrapper">
                        <div className="title-wrap">
                            <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                        </div>
                        <div className="discount-code">
                            <p>Enter your coupon code if you have one.</p>
                            <form>
                                <input type="text" required="" name="name"/>
                                <button className="cart-btn-2" type="submit">Apply Coupon</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <div className="grand-totall">
                        <div className="title-wrap">
                            <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                        </div>
                        <h5>Total products <span>$73.13</span></h5>
                        <h4 className="grand-totall-title">Grand Total <span>$73.13</span></h4>
                        <a href="/checkout">Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    );
}