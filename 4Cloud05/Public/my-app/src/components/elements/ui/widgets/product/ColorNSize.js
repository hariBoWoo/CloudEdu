import React, {useEffect,useState} from 'react';

export default function ColorNSize({vData, setColor, setSize}){

    const [isCheck, setIsCheck] = useState(false);

    return(
        <div className="pro-details-size-color">
            <div className="pro-details-color-wrap">
                <span>Color</span>
                <div className="pro-details-color-content">
                    {  
                        vData ? vData.map( item => (
                            <label className={`pro-details-color-content--single ${item.color}`}>
                                <input type="radio" name="product-color" value={item.color} checked={isCheck} onClick={()=>setColor(item.color)} />
                                <span className="checkmark"></span>
                            </label>
                        ))
                        : <p style={{fontSize:"0.7rem"}}>no color</p>
                   }
                </div>
            </div>
            <div className="pro-details-size">
                <span>Size</span>
                <div className="pro-details-size-content">
                    <label className="pro-details-size-content--single">
                        <input type="radio" value="x" checked=""/>
                        <span className="size-name">x</span>
                    </label>
                </div>
            </div>
        </div>
    );
}

