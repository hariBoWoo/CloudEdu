import React, {useState} from 'react'; 
import FooterMenu from '../elements/ui/FooterMenu';
import FooterLogo from '../elements/ui/FooterLogo';
import FooterMenuData from '../../db/footer.json';

export default function Footer(){

    const [newFooterMenu, setNewFooterMenu] = useState(FooterMenuData);
    

    return (
        
        <footer>
        <div className="container-fluid" style={{padding: "0"}}>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <FooterLogo/>
                        <FooterMenu 
                            footerMenuList={newFooterMenu['ABOUT US']}
                            footerMenuTitle = "ABOUT US"/>
                        <FooterMenu 
                            footerMenuList={newFooterMenu['USEFUL LINKS']}
                            footerMenuTitle = "USEFUL LINKS"/>
                        <FooterMenu 
                            footerMenuList={newFooterMenu['FOLLOW US']}
                            footerMenuTitle = "FOLLOW US"/>
                        

                        <div className="col-12 col-md-2">
                            <p className="menuTitle">About US</p>
                            <p>Get E-mail updates about our shop and speial offers.</p>
                            <p>a</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </footer>
        
    );
}