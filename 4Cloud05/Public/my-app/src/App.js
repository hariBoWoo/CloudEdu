import React from 'react'; 
import Header from './components/layout/Header';
import Deal from './components/layout/Deal';
import Blog from './components/layout/Blog';
import Footer from './components/layout/Footer';


import Brand from './components/elements/ui/widgets/brand/Brand';
import Home from './components/pages/Home/Home';
import Features from './components/pages/Features/Features';

import "./assets/css/mystyle.css";
import {BrowserRouter, Route, Switch } from "react-router-dom";


function App() {

// 밑에 말은 path가 /features라는게 오면 Features 로 가겠다는 것으로 : 없었던 페이지를 생성해주는 것이다. link랑은 다름!(이건 있던 페이지로 이동하는거고)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/features"><Features/></Route>
        {/* <Route exact path="/productdetail/:id"><ProductDetail/></Route> */}

      </Switch>
    </BrowserRouter>
  );
}

export default App;
