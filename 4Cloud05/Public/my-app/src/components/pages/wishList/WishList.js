import React , {Fragment, useState,useEffect} from 'react';
import {BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import WishListMain from '../../elements/ui/widgets/wishlish/WishListMain';

export default function WishList(){

    const {id} = useParams();
    const [productData, setProductData] = useState([]);

   

    return(
        <Fragment>
      
            <Header/>
            
            <Bread
                productId=''
                productName="WISHLIST"
                productUrl=''
            />
            
            <WishListMain/>
            
           

            <Footer/>
  
      </Fragment>
    );
}