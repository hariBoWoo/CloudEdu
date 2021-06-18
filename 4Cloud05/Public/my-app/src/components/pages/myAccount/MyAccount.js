import Header from '../../../components/layout/Header';
import Bread from '../../elements/ui/Bread';
import Footer from '../../../components/layout/Footer';
import MyAccountForm from './MyAccountForm';
import React, {Fragment} from 'react';

export default function MyAccount(){
    
    return(
        <Fragment>
            <Header />
            <Bread productName = "My Account"/>
            <MyAccountForm/>
            <Footer />
        </Fragment>
    );
}