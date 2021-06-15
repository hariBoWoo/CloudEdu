import { Fragment, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';import ColorNSize from "./ColorNSize";
import AddBuyNCart from "./AddBuyNCart";

export default function PDRMiddle({data}){
    const { id } = useParams();

    const [ varData, setVardata ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:3005/product/${id}`) 
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setVardata(data);
            
        });
    },[process.IP, process.PORT, id]);

    return(
        <Fragment>
            
            <ColorNSize
                vData = {varData.variation}
            />
            <AddBuyNCart/>

        </Fragment>
    );
}