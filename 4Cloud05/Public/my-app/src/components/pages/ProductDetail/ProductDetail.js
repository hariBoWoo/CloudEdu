import React , {Fragment, useState,useEffect} from 'react';
import {BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';
import Bread from '../../elements/ui/Bread';
import ProductTop from '../../elements/ui/widgets/product/ProductTop';

export default function ProductDetail(){

    const {id} = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3005/product/${id}`) // 전체가 들어오지않고 id값에 맞는 데이터만 딱딱 가져온다.
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setProductData(data);
            // console.log(data);
        });
    },[id]);  //종속성으로 id를 여기서는 적어주기 안 적으면 다른 이펙스 실행시 문제가 생길수있음

    return(
        <Fragment>
      {/* 프로덕트디테일의 해더 로고는 id값으로 링크가 한번더 들어가서 해더 로고 이미지의 경로가 틀어지기때문에 안나온다 ㅜ  */}
            <Header/>
            
            <Bread
                productId={productData.id}
                productName={productData.name}
                productUrl={`/productdetail/${productData.id}`}
            />

            <ProductTop/>

            {/*<ProductTop productImg={props}/>
            <ProductBottom/> */}




            <Footer/>
  
      </Fragment>
    );
}