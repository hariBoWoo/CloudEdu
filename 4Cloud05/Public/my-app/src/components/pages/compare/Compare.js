import React , {Fragment, useState,useEffect} from 'react';
import {BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import CompareMain from '../../elements/ui/widgets/compare/CompareMain';

export default function Compare(){


   

    return(
        <Fragment>
      
            <Header/>
            
            <Bread
                productId=''
                productName="COMPARE"
                productUrl=''
            />
            
            <CompareMain/>
            
           

            <Footer/>
  
      </Fragment>
    );
}