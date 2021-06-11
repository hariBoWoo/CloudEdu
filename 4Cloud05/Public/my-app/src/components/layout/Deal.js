import React, { useState } from 'react'; 
import ShowItem from '../elements/ui/widgets/showItem/ShowItem';
import ShowItemUP from '../elements/ui/ShowItemUp';
import ShowItemTitle from '../elements/ui/ShowItemTitle';


export default function Deal(){

    const [categoryName, setCategoryName] = useState("fashion");
    console.log(categoryName);

    return(
        <section id="deal">
            <div className="container">
                <ShowItemTitle title="Today's Deal"/>
                {/* <ShowItemTitle categoryName = {categoryName}/> */}
                <ShowItemUP setCategoryName = {setCategoryName}/> 
                {/* props로 넘겨주는거임 이라기 보다는 useState가 계속 바뀌는걸 감시중인거라고 생각하는게 좋음 위 */}
                <ShowItem categoryName = {categoryName}/>

            </div>

        </section>
    );
}