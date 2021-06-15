import React from 'react';
import WishListTable from './WishListTable';
import WishListButton from './WishListButton';

export default function WishListMain(){
    return(
        <div className="cart-main-area pt-90 pb-100">
            <div className="container">
                <h3 className="cart-page-title">Your wishlist items</h3>
                <WishListTable/>
                
                <WishListButton/>
            </div>
        </div>
    );
}