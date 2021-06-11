import React from 'react';
import Brand from '../../../components/elements/ui/widgets/brand/Brand';
import Nav from '../../../components/elements/ui/Nav'

export default function Features(){
   return(
       <div id="wrap">
           <div className="container-fluid" style={{padding: "0px"}}>
               <Nav/>
           </div>
           <Brand/>
       </div>

   ); 
}