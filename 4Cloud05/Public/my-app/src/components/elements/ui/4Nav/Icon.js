import React from 'react';
import menuData from '../../../../db/nav.json';


export default function Icon() {
    // 재사용성을 위해서 const 한번 해서 값 넘겨준다!
    const menuList = menuData.sidemenu.map(item => (
        <li key={item.id} className="nav-link px-2"><i className={item.name}></i></li>

    ))

    return(
        <div className="col-md-2">
            <ul className="nav justify-content-end px-4">  
                {menuList}
            </ul>
    
        </div>
    );
}