import {Routes,Route} from "react-router-dom";
import Home from "./FoodieHome"
import Navbar from "./Navbar";
import About from "./About";
import AddPost from "./AddPosts";
const HomePortal = () => {
    return ( 
        <div className="HomePortal">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>} />
                <Route path="/add-posts" element={<AddPost/>} />
            </Routes>
        </div>
     );
}
 
export default HomePortal;