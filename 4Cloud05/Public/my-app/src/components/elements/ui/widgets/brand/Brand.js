import React, {useState,useEffect} from 'react'; 
// import BrandData from '../../../../../db/nav.json';

export default function Brand(){

    const [newBrand, setNewBrand] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3005/brand")
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setNewBrand(data)
        })
    },[]); 


    const brandList = newBrand.map( item => (
        // 반복될 부분을 모듈화~
        <div key={item.id} className="col-12 col-md-3">
            <div className="row">
                <div className="col-12 col-md-4 brandImg"><i className={item.img}></i></div>
                <div className="col-12 col-md-auto">
                    <p className="brandTitle">{item.name}</p>
                    <p className="brandText">{item.content}</p>
                </div>
            </div>
        </div>
    )).slice(0,4);

    return(

        <section id="brand">
            <div className="container">
                <div className="row">

                    {brandList}

                </div>
            </div>
        </section>
    );
}