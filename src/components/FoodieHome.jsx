const Home = () => {
  return (
      // <div className="home  row bg-warning p-lg-5 p-sm-0">
      //     <p className="col-lg-6 col-sm-12" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      //          Doloribus totam ratione nam perferendis. Blanditiis dolorum sit quas, necessitatibus odio soluta totam
      //           autem nulla? Debitis est repellat ad quidem atque impedit?</p>
      //     <p className="col-lg-6 col-sm-12" >Lorem ipsum dolor sit amet consectetur adipisicing elit.
      //          Aliquid libero molestias dolores architecto molestiae labore recusandae sequi repudiandae.
      //           Ducimus similique aspernatur recusandae doloremque, culpa velit iste commodi cumque? Magnam, tenetur.</p>
      // </div>
      <div className="Home mx-5">
          <div className="home d-lg-flex d-sm-flex ">
              <img className="col-lg-8 col-sm-12" height="600px" src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
              <div className="desc  h-100">
                  <div className="decs1 bg-warning p-4 ">
                      <p className="text-danger mt-4 "  >Featured Posts</p>
                      <h1>Love the Delicious & Tasty Foods</h1>
                      <p className="text-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque beatae doloribus veniam neque natus, dolorem illo eaque sapiente.
                          Sit modi earum, tempora odio perferendis ipsam consequatur ratione eum beatae sed.</p>
                      <button className="btn btn-dark">Add a Post </button>
                  </div>
                  <div className="desc2">
                      <button className="btn btn-outline-dark p-5" >Forword</button>
                      <button className="btn btn-outline-dark p-5" >Next</button>
                  </div>
              </div>

          </div>
          <div className="recent  mt-5">
              <h1>Recent Stories</h1>
              <div className="images_Recent d-flex">
                  <div className="imgs mx-4  d-flex ">
                      <div className="im1">
                          <img className="mx-4 my-5 rounded " height="250px" width="250px" src="../images/pic1.avif" alt="" />
                          <p>Dessert __________________ march 01,2018</p>
                          <h4>Tasty & Delicious Foods</h4>
                          <a href="">Read More</a>
                      </div>
                      <div className="im1">
                          <img className="mx-4 my-5 rounded" height="250px" width="300px" src="../images/pic2.avif" alt="" />
                          <p>Dessert __________________ march 01,2018</p>
                          <h4>Tasty & Delicious Foods</h4>
                          <a href="">Read More</a>
                      </div>
                      <div className="im1">
                          <img className="mx-4 my-5 rounded" height="250px" width="300px" src="../images/pic3.avif" alt="" />
                          <p>Dessert __________________ march 01,2018</p>
                          <h4>Tasty & Delicious Foods</h4>
                          <a href="">Read More</a>
                      </div>
                      <div className="im1">
                          <img className="mx-4 my-5 rounded" height="250px" width="300px" src="../images/pic3.avif" alt="" />
                          <p>Dessert __________________ march 01,2018</p>
                          <h4>Tasty & Delicious Foods</h4>
                          <a href="">Read More</a>
                      </div>
                  </div>
                  <div className="imgs1">
                      <img src="../images/pic3.avif" alt="" />
                  </div>
              </div>
          </div>
      </div>


  );
}

export default Home;


// import { Link } from "react-router-dom";


// const Home = () => {
//   return (
//     // <div className="Home row bg-warning p-lg-5 p-sm-0">
//     //   <p className="col-lg-8 col-sm-12">
//     //     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
//     //     facere nam at iusto possimus facilis saepe vitae reiciendis cumque
//     //     accusamus quis eligendi fuga excepturi ipsam, sit nesciunt labore
//     //     aspernatur non perferendis. Necessitatibus, recusandae alias? Illo neque
//     //     eligendi sint est adipisci, ea repellendus harum nostrum sit rem
//     //     consectetur perferendis, corrupti voluptate animi sunt obcaecati
//     //     temporibus quod quisquam pariatur modi. Ab modi, fugit cumque quod
//     //     adipisci velit, delectus error voluptates natus quas illo repellat
//     //     expedita neque, dolorum officia fugiat impedit ipsum magni
//     //     necessitatibus odio ut sequi explicabo. Aliquid, voluptatibus voluptatum
//     //     quaerat adipisci aspernatur dignissimos saepe sequi aperiam, eaque autem
//     //     vel provident culpa.
//     //   </p>
//     //   <img src="../images/pic5.avif" alt="" />
//     //   <p className="col-lg-4 col-sm-12">
//     //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
//     //     quas temporibus a, ipsum deleniti possimus labore corporis autem
//     //     voluptatum libero quo! Deleniti distinctio ullam molestias velit numquam
//     //     sunt, sapiente blanditiis nam, odio officiis enim tenetur facere itaque
//     //     dicta eius. Illum placeat sed rerum aperiam dolor, obcaecati cum,
//     //     similique, modi dignissimos ad ullam aliquam tenetur suscipit
//     //     praesentium laboriosam. Est praesentium illo minima odit ea temporibus
//     //     minus ducimus rem possimus saepe. Iusto esse est aut veniam earum
//     //     exercitationem modi. Vero eum animi ab cum vitae a perferendis expedita,
//     //     dolores sapiente cupiditate modi ipsum iste natus quisquam nobis officia
//     //     architecto, sunt quos fuga.
//     //   </p>
//     // </div>
//     <div className="home row  mx-5">
//       <img className="col-lg-8 col-sm-12 " src="../images/pic5.avif" alt="" />
//       <div className="col-lg-4 col-sm-12 mt-lg-5 bg-warning">
//         <h1>Love the delicious & tasty food</h1>
//         <p>
//           Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,
//           temporibus? Adipisci facere esse laborum velit obcaecati praesentium
//           quam libero repellendus repellat voluptatem consectetur eos, nobis
//           blanditiis accusamus nemo eveniet in?
//         </p>
//         <button className="btn btn-dark">Add post </button>
//       </div>
//     </div>
//   );
// };

// export default Home;

