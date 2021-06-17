import React, { useState } from 'react'; 
// import ShowItem from '../elements/ui/widgets/showItem/ShowItem';
// import ShowItemUP from '../elements/ui/ShowItemUp';
import TabMenu from '../elements/ui/TabMenu';
import ShowItemTitle from '../elements/ui/ShowItemTitle';
import ProductView from '../elements/ui/widgets/product/ProductView';


export default function Deal(){

    const [categoryName, setCategoryName] = useState("fashion");
    console.log(categoryName);
    let sliceNumber = 12; // 몇줄을 보여줄껀가
    let columNumber = 3; //12중 3씩 차지하는 거로 정해놔서 4개씩 들어간다. // 줄에 들어갈 상품개수

    return(
        <section id="deal">
            <div className="container">
                <ShowItemTitle title="Today's Deal"/>
                {/* <ShowItemTitle categoryName = {categoryName}/> */}
                <TabMenu setCategoryName = {setCategoryName}/> 
                {/* props로 넘겨주는거임 이라기 보다는 useState가 계속 바뀌는걸 감시중인거라고 생각하는게 좋음 위 */}
                <ProductView 
                    categoryName = {categoryName==="All Categories"? "":categoryName}
                    sliceNumber = {sliceNumber}
                    columNumber = {columNumber}
                />

            </div>

        </section>
    );
}