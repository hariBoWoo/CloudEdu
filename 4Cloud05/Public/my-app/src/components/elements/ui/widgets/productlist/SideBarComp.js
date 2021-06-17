import React, {useState} from 'react';

export default function SideBarComp({item, setCategoryName}){
    
    const [chk, setChk] = useState(false);

    const handleCheck = (name) =>{
        setCategoryName(name)
        setChk(!chk)

    }
    
    return(
        <ul>
            
            <li key={item.id}>
                <div className="sidebar-widget-list-left">
                    <button onClick={()=>handleCheck(item.name)}><span className={chk?"mark":"checkmark"}></span> {item.name} </button>
                </div>
            </li>


        </ul>
    );
}