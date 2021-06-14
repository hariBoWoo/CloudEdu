import React , {Fragment, useState,useEffect} from 'react';
import {BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Header from '../../../components/layout/Header';
import Footer from '../../../components/layout/Footer';


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
            console.log(data);
        });
    },[id]);  //종속성으로 id를 여기서는 적어주기 안 적으면 다른 이펙스 실행시 문제가 생길수있음

    return(
        <Fragment>
      
            <Header/>
            

            <Bread/>
            <ProductTop productImg={props}/>
            <ProductBottom/>




            <Footer/>
  
      </Fragment>
    );
}