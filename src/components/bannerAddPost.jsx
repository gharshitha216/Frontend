const BannerAddPost = (props) => {
    let title1 = props.data
    return ( 
        <div className="banner_addPost d-flex align-items-center justify-content-center">
            <div className="Title1">
                <h1 className=" text-light fs-1 fw-bold">{title1}</h1>
            </div>

        </div>
     );
}
 
export default BannerAddPost;