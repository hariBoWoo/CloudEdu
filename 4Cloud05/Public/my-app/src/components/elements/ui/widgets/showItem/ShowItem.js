import React, {useState,useEffect} from 'react';
import Rating from './ProductRating';
import {Link} from "react-router-dom";

export default function ShowItem({categoryName}){

    const [newData, setNewData] = useState([]); 
    
    // jsonServer를 돌리고 있는중에 json 파일에서 데이터를 가져와서 사용하는것이다. 즉, 서버가 안 돌고 있으면 가져올수 없음
    useEffect(()=>{
        fetch("http://localhost:3005/product")
        .then(res => {
            return res.json();
        })
        .then(data =>{
            setNewData(data)
        })
    },[]); //jsonServer 를 쓰기때문에 newData에 들어갈 데이터를 따로 처리해줘야한다.



    console.log(categoryName);
    //카테고리 필터링하기 조건문임! 0 ? t : f
    const searchData = categoryName
    ? newData.filter(
        item => item.category.filter(single => single === categoryName)[0] //[0]이라고 써야함 : 배열일때 전체배열을 비교하려고 할때 이다. single은 변수이다. item에 전체 데이터가 들어가고 또 한번더 필터링 해서 거기서 카테고리를 가지고 있는중 하나라도 클릭한 카테고리를 포함하면 출력되는 구조이다.
      )
    : newData;
    // const searchData = newData.filter(index => (
    //    index.category[0] === categoryName || index.category[1] === categoryName || index.category[2] === categoryName
    // ))
    console.log(searchData);


    const productList = searchData.map(item =>(

        <div className="cdo-12 col-md-3 mb-4" key={item.id}>
            
            {/* 아래 달러 사용하려고 '' 아니고 `` ~에 있는거 쓰는거임 */}
            <Link to={`/productdetail/${item.id}`}><div className="productImg"></div></Link>
            {/* 링크를 p 태그까지 걸고싶으면 Link를 p뒤에 넣어주면 된다.  */}
            <p className="pTitle">{item.name}</p>

            <p className=" pScore">
                {item.rating && item.rating > 0 ? (
                    <Rating ratingValue={item.rating}/>
            ) : ( 
            ""
            )}
            </p>
            
            <p className=" pPrice">{(0.01*(100-item.discount)*item.price).toFixed(2)} $<span>{item.price} $</span></p>
        </div>

    )).slice(0,8);

    return(
        <div className="row mt-5">
            {productList}
        </div>
        
    );
}