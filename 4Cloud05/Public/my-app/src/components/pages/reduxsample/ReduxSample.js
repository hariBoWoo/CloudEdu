import React from 'react'
import styles from './ReduxSample.module.css'
//모듈.css 는 해당 컴포넌트에만 적용이 돼서 단독으로 처리가 가능하다! 모듈이라서 쓸때 아래 styles.reduxContainer 처럼 사용해야한다.
import Subscribers from '../../Subscribers';
import Views from '../../Views';

const ReduxSample = () =>{
    return(
        <div className={styles.reduxContainer}>
            {/* <h2>Test</h2> */}
            <Subscribers/>
            <Views/>
        </div>
    );
}

export default ReduxSample