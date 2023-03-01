import Banner from "./Banner";

const About = () => {
    let title = "About Page"
    return ( 
        <div className="About">
            <Banner data={title} />

            <h1>Hello</h1>
        </div>
     );
}
 
export default About;