import React, {useState,useEffect} from 'react';
import CategoryData from '../../../db/nav.json';

export default function ShowItemUp({setCategoryName}){
    
    const handleClick = (e) => {
        setCategoryName(e.target.value);
    }




    return(
        
            
        <div className="row mb-5">
            <ul className="col-12 col-md-6 offset-md-3 nav justify-content-center">
                {
                    CategoryData.category.map(item =>(
                    <button key = {item.id} value = {item.name} onClick={handleClick}> {item.name} </button>
                    ))
                }
            </ul>
        </div>
        
    );
}