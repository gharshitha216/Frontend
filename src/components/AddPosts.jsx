import axios from "axios";
import { useState } from "react";
import BannerAddPost from "./bannerAddPost";

let title1 = "Add Your Post";
const AddPost = () => {
    const [author, setAuthour] = useState("")
    const [title, SetTitle] = useState("");
    const [summary, setSummary] = useState("")
    const [image, setImage] = useState("")
    const [location, setLocation] = useState("")

    let addPost = (e) => {
        e.preventDefault()
        let data = { author, title, summary, image, location }
        if (author && title && summary && image && location) {
            axios.post("http://localhost:4000/add-posts", data)
                .then(res => {
                    alert(res.data.message)
                })
                .catch(err => {
                    alert(err.data.message)
                })
        } else {
            alert("please fill all the fields")
        }
    }

    return (
        <div className="addPosts">
            <div className="ban_img">
                <BannerAddPost data={title1} />
            </div>
            <div className="add_posts row mt-5 mx-5">
                <div className="addpost_img col-lg-6">
                    <img className="rounded" height="650px" width="550px"
                        src="../images/pic12.jpeg" alt="" />
                </div>
                <div className="addpost_form col-lg-6">
                    <h1>ADD POST</h1>
                    <form action="" onSubmit={addPost}>
                        <div className="addpost_input p-2">
                            <div className="author">
                                <p>Author</p>
                                <input className="p-2 w-75" type="text" placeholder="Author" name="author" required value={author} onChange={(e) => setAuthour(e.target.value)} />
                            </div>
                            <div className="title">
                                <p>Title</p>
                                <input className="p-2 w-75" type="text" placeholder="Title of the post" name="title" required value={title} onChange={(e) => SetTitle(e.target.value)} />
                            </div>
                            <div className="summary">
                                <p>Summary</p>
                                <textarea className="p-2 w-75" type="text" placeholder="Summary" name="summary" required value={summary} onChange={(e) => setSummary(e.target.value)} />
                            </div>
                            <div className="image">
                                <p>Image</p>
                                <input className="p-2 w-75" type="text" placeholder="Image of the post" name="image" required value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="location">
                                <p>Location</p>
                                <input className="p-2 w-75" type="text" placeholder="Location of the post" name="location" required value={location} onChange={(e) => setLocation(e.target.value)} />
                            </div>
                        </div>
                        <button className="btn btn-outline-warning">Submit post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddPost;
