import React from 'react';
import Header from '../../../components/layout/Header';
import Deal from '../../../components/layout/Deal';
import Blog from '../../../components/pages/Blog/Blog';
import Footer from '../../../components/layout/Footer';
import Brand from '../../../components/elements/ui/widgets/brand/Brand';

export default function Home(){
    return(
    <div id="wrap">
      <Header/>
      <Brand/>
      <Deal/>
      <Blog/>
      <Footer/>

    </div>
    );
}
