import React from 'react'; 
import CategoryData from '../../../db/nav.json';
// ******************************************************* 모두가 쓰는 타이틀이 되었따.

export default function ShowItemTitle({title}){
    return(
        <div class="section-title text-center mb-50 ">
            <h2>{title}</h2>
            <p class=""></p>
        </div>
        // <div className="row mb-5">
        //     <div className="col-12 col-md-6 offset-md-3 title">
        //         <h3>{title}</h3>
        //     </div>
        // </div>
    );
}