import React, { Fragment, useState } from 'react';
import Texts from './Texts';


export default function Contents(){
    let [textTest, setTextTest] = useState(["HTML","React"]); //이거 쓰려면 class Subject extends Component{ ... 이방식으로는 못함

    return(
        <Fragment>
            <article>
                <h2>{textTest[1]}</h2>
                <Texts></Texts>
                <p>세상에서 제일 쉬웠어요 이거 써보면 좋아요 ㅎ </p>
            </article>
        </Fragment>
    );
  }

 // ******************* 최신 문법 ****************
