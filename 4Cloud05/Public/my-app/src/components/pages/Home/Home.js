import React , {Fragment} from 'react';
import Header from '../../../components/layout/Header';
import Deal from '../../../components/layout/Deal';
import Blog from '../../../components/pages/Blog/Blog';
import Footer from '../../../components/layout/Footer';
import Brand from '../../../components/elements/ui/widgets/brand/Brand';
import Banner from '../../../components/elements/ui/Banner';


export default function Home(){
    return(
    <Fragment>
      
      <Header/>
      <Banner/>
      <Brand/>
      <Deal/>
      <Blog/>
      <Footer/>

    </Fragment>
    );
}
