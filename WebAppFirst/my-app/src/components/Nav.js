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


    const [name, setName] = useState('mike');

    function showText(e){
        console.log(e.target.value);
    }

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

        <div>
          <h1>HERE CHANGE! : {name}</h1>
          {/* 인라인 방식(아래)을 써야할때가 있으므로 함수 만들어서 쓰는 법과 같이 알아두자 */}
          <button onClick={()=>{
            let newName = name === 'mike' ? 'jane' : 'mike';
            setName(newName);
          }}>click Me!</button>

                <hr ></hr>

          <div>
            <h6> 아래 박스에 적히는 것을 실시간으로 인식가능해서 (지금은 콘솔로 확인가능) 
              예를들어 회원가입시 쓰면안되는 특수기호를 바로바로 확인해서 경고를 발생할수있음! </h6>
            <input type="text" onChange={showText}/>
          </div>
        </div>
        <hr ></hr>

      </Fragment>
    );
  }

