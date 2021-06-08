import React, { Component } from 'react';  // 리액트 안의 컴포넌트를 쓰겠다
import Subject from './components/Subject';
import Nav from './components/Nav';
import Texts from './components/Texts';
import Contents from './components/Contents';

import './App.css';


function App() {

  return (
    <div style={{margin:"20px"}}>
      <Subject
        name="스펀지밥"
        add="Hi I love hamburger!">
        010-xxxx-xxxx

       </Subject>
       
      <Nav />
      {/* <Texts></Texts> */}
      <Contents></Contents>
    </div>
  );
}

export default App;
