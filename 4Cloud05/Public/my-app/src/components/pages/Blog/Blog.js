import React from 'react'; 
import ShowItemTitle from '../../elements/ui/ShowItemTitle'; 
import Bloglist from '../../elements/ui/widgets/bloglist/Bloglist';


export default function Header(){
    return(
        <section id="blog">
            <div className="container">
                
                <ShowItemTitle title = "Today's Blog"/>
                <Bloglist/>
                
            </div>
        </section>
    );
}
