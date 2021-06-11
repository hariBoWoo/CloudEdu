import React from 'react'; 
import {Link} from "react-router-dom";
import footerData from '../../../db/footer.json';


export default function FooterLogo(){

    return(
        <div className="col-12 col-md-2">
            <p className="footerLogo">HERSHEY'S</p>
            <p className="copy">© 2017–2021 Company, Inc. cocacola</p>
        </div>
    );
}