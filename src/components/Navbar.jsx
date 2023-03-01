import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar d-flex mx-5">
            <div className="nav_logo">
            <h1>Foodie</h1>
            </div>
            <div className="nav_list navbar-expand">
            <ul className="navbar-nav">
                <li className="nav-item"><Link className="mx-2 nav-link " to="/home">Home</Link> </li>
                <li><Link className="mx-2 nav-link" to="/home/about">About</Link> </li>
                <li><Link className="mx-2 nav-link" to="/home/posts">Posts</Link> </li>
                <li><Link className="mx-2 nav-link" to="/home/add-posts">Add Post</Link> </li>
                <li><Link className="mx-2 nav-link" to="/">Logout</Link> </li>
            </ul>
            </div>
        </div>
     );
}
 
export default Navbar;