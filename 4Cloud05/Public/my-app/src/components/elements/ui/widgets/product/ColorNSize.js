import React, {useEffect,useState} from 'react';

export default function ColorNSize({vData, setColor, setSize}){

    const [isCheck, setIsCheck] = useState(false);
    const [sizeData,setSizeData] = useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:3005/size`) 
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setSizeData(data);
            
        });
    },[]);

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
                    {
                        sizeData.map(item =>(
                            <label key={item.id} className="pro-details-size-content--single">
                                <input onClick={()=> setSize(item.name)} type="radio" value={item.name} />
                                <span className="size-name">{item.name}</span>
                            </label>
                        ))
                    }
                    
                </div>
            </div>
        </div>
    );
}

