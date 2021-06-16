import React from 'react'; 
import Header from './components/layout/Header';
import Deal from './components/layout/Deal';
import Blog from './components/layout/Blog';
import Footer from './components/layout/Footer';


import Brand from './components/elements/ui/widgets/brand/Brand';
import Home from './components/pages/Home/Home';
import Features from './components/pages/Features/Features';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import WishLish from './components/pages/wishList/WishList';
import Compare from './components/pages/compare/Compare';
import Cart from './components/pages/cart/Cart';

import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/css/mystyle1.css";
import "./assets/css/style.css";
import "./assets/icons8/css/line-awesome.min.css";
import ToTop from './utillitles/ToTop';

// import "./assets/css/layout.css";



import {BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
//Route 부분을 사용하는 이유는 새로운 html을 만들어서 이동하는게 아니고 이동없이 동일한 화면에서 새로 뿌려겠다는 의미이다, 같은 프로덕트 페이지를 뿌리는데 거기서 동적으로 id값을 받아와서 id값에 맞춰서 데이터만 바꿔주겟따를위해 사용.
// (몇 백 페이지가 되어도 그래보이는거고 그냥 바뀌는 것만 갈아끼워주는거~ 뭐 그런거)
// 밑에 말은 path가 /features라는게 오면 Features 를 뿌려주겠다는 뜻으로 : 없었던 페이지를 생성해주는 것이다. link랑은 다름!(이건 있던 페이지로 이동하는거고)
// 순서는 위에서 아래로 우선순위가 있기때문에 exact 안적어주면 다 home으로 가므로 exact로 정확히 일치하는 것들만 넘겨주도록 해야한다. 그리고 없는 페이지를 입력해서 들어오면 젤 밑에 notFound를 하나더 만들어서 그쪽으로 넘어가게 할 수 있다.
return (
    <BrowserRouter>
      <ToTop>
        <Switch>
          <Route exact path="/"><Home/></Route>
          <Route exact path="/features"><Features/></Route>
          <Route exact path="/productdetail/:id"><ProductDetail/></Route>
          <Route exact path="/wishlist"><WishLish/></Route>
          <Route exact path="/compare"><Compare/></Route>
          <Route exact path="/cart"><Cart/></Route>


        </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
