import { useState } from 'react';
import Bloglist from './Bloglist'


const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum...", author: 'mario', id: 1},
        { title: "Welcome party!", body: "lorem ipsum...", author: 'ninja', id: 2},
        { title: "Web dev top tips", body: "lorem ipsum...", author: 'mario', id: 3}
    ])
    return ( 
        <div className="home">
            <Bloglist blogs={blogs} title = "All Blogs!"/>
            <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title = "Marios Blog"/>
        </div>
     );
}
 
export default Home;