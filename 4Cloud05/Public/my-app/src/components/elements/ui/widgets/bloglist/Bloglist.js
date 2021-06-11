import React, {useState} from 'react'; 
import BlogData from '../../../../../db/blog-featured.json';
import {Link } from "react-router-dom";


export default function Bloglist(){

    const [newBlogData, setNewBlogDAta] = useState(BlogData);
    const blogList = newBlogData.map(item => (
        
        <div key={item.id} className="col-12 col-md-4 mb-4">
                {/* style={{backgroundImage:{}, backgroundSize:"cover"}} */}
            <Link to={`/blogdetail/${item.id}`}><div className="blogImg" style={{backgroundImage:`url(${item.image})`, backgroundSize:"cover"}}></div></Link>
            <div className="blogTxt">
                <Link to={`/blogdetail/${item.id}`}><p className="blogTitle">{item.title}</p></Link>
                <Link to={`/blogdetail/${item.author}`}><p className="blogAuth">by. {item.author}</p></Link>
            </div>
        
        </div>
    )).slice(0,3);

    return(
        <div className="row mt-5">
            {blogList}
        </div>
    );
}