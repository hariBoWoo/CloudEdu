import React, {useEffect, useState} from "react";

export default function UseFech({url}){
    
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3005/${url}')
        .then(res => {
            return res.json();
        })
        .then(data => {
            setData(data);
        })
    },[url]);

}