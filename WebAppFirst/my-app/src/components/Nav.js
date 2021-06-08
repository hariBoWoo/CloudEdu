import React, { Component, Fragment, useState } from 'react';

export default function Nav(){

    const [urlName, setUrlName] = useState([
        '네이버',
        '카카오',
        '페이스북',
        '라인',
        '구글',
        '인스타그램',
    ]); // Json type

    return(
      <Fragment>
        <nav>
            <ul>
              {
                urlName.map((items, index)=>{
                  return(
                    <li>{items}</li>
                  );
                })
              } 
              {/* {}안에 적어서 바로 쓸수있게 만들기 */}


                {/* <li><a href="1.html">HTML</a></li>
                <li><a href="1.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li> */}
            </ul>
        </nav>
      </Fragment>
    );
  }

