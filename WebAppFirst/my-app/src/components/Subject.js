import React, { useState } from 'react';

export default function Subject(props) {

    const [좋아요, 좋아요변경] = useState(0);

    const handleClick = () => {
        좋아요변경(좋아요+1);  //변수 순서랑 사용 방법 주의 건너건너 줘야한다. 본 값을 변경해버리는걸 방지하기위해서*********************************
        
    }

      return(
        <header>
          <h1>React App </h1>
          <h2>{props.name} <span onClick={handleClick}> 좋아요 </span>{좋아요}</h2>
          <h2>{props.add}</h2>
          <p>phon: {props.children}</p>

          
        </header>
      );
}


