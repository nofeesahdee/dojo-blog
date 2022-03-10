import { useState,useEffect } from 'react';
import Bloglist from './Bloglist'


const Home = () => {
    const [blogs, setBlogs] = useState(null)

    // Fetch the data from the local server
    useEffect(() => {
        fetch(' http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setBlogs(data)
        })
    },[])
    
    return ( 
        <div className="home">
            {blogs &&<Bloglist blogs={blogs} title = "All Blogs!"/>}
        </div>
     );
}
 
export default Home;