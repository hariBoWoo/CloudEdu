import React , {Fragment, useState,useEffect} from 'react';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import CartMain from '../../elements/ui/widgets/cart/CartMain';


export default function Cart(){

    const [productData, setProductData] = useState([]);

   

    return(
        <Fragment>
      
            <Header/>
            
            <Bread
                productId=''
                productName="CART"
                productUrl=''
            />
            
            <CartMain/>
            
           

            <Footer/>
  
      </Fragment>
    );
}