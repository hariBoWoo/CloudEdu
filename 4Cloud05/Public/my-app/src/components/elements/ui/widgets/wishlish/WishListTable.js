import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function WishListTable(){
    

    const [wishDatas, setWishDatas] = useState([]);
    

    useEffect(()=>{
        fetch(`http://localhost:3005/wish`) 
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setWishDatas(data);
          
        });
    },[]); 

    const handleDelete = (id) => {
        fetch(`http://localhost:3005/wish/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다."),
            // alert에서 확인을 눌러야 없어지고, 이건 다시 데이터를 받아오는 것이다!
            fetch(`http://localhost:3005/wish`) 
            .then(res => {
                return res.json();
            })
            .then(data =>{
                setWishDatas(data);
            
            })


        )
    }

    const wishListTable = wishDatas.map((item, index)=>(
        <tr key={index}>
            <td className="product-thumbnail"><Link to={`/productDetail/${item.id}`}><img className="img-fluid" src="../fashion/2.jpg" alt=""/></Link></td>
            <td className="product-name text-center"><Link to={`/productDetail/${item.id}`}>{item.name}</Link></td>
            <td className="product-price-cart"><span className="amount old">${item.price}</span><span className="amount">${(item.price * ((100-item.discount)/100)).toFixed(2)}</span></td>
            <td className="product-wishlist-cart"><Link to={`/productDetail/${item.id}`}>Select option</Link></td>
            <td className="product-remove"><button onClick={()=> handleDelete(item.id)}><i className="fa fa-times"></i></button></td>
        </tr>
    ))

    return(
        <div className="row">
            <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Unit Price</th>
                                <th>Add To Cart</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {wishListTable }
                            {/* 반복 */}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="cart-shiping-update-wrapper">
                        <div className="cart-shiping-update">
                            <a href="/shop-grid-standard">Continue Shopping</a>
                        </div>
                        <div className="cart-clear"><button>Clear Wishlist</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
}