import PDRTop from "./PDRTop";
import PDRMiddle from "./PDRMiddle";
import PDRBottom from "./PDRBottom";

export default function ProductDetailRight(){
    return(
                        
        <div className="col-lg-6 col-md-6">
            <div className="product-details-content ml-70">
              
                <PDRTop/>
                <PDRMiddle/>
                <PDRBottom/>

            </div>
        </div>
    
   
    );
}