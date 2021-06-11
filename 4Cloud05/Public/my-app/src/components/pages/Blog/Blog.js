import React from 'react'; 
import Title from '../../elements/ui/ShowItemTitle';
import Bloglist from '../../elements/ui/widgets/bloglist/Bloglist';


export default function Header(){
    return(
        <section id="blog">
            <div className="container">
                
                <Title tilte = "Today's Blog"/>
                <Bloglist/>
                
            </div>
        </section>
    );
}
