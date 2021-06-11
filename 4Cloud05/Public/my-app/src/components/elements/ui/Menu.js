import React from 'react';
import menuData from '../../../db/nav.json';
import {Link} from "react-router-dom";


export default function Menu() {

    const menuList = menuData.menu.map(item => (
        <li key={item.id} className="nav-link"><Link to={item.url}>{item.name}</Link></li>

    ))
    // map으로 쭉 반복해서 뿌려주는데 슬라이스로 원하는 정도를 조절가능 : )).slice(0,2);

    return(
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            {menuList}
        </ul>
    );
}