import React from "react";
import { Fragment } from "react";
import vg from "../assests/2.webp";
import {AiFillAmazonCircle, AiFillInstagram, AiFillYoutube, AiFillGoogleCircle, } from "react-icons/ai"
const Home = () => {
  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solution to all your Problems</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech Problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium illum reprehenderit consequuntur quaerat earum
            voluptatibus ex laboriosam iure perferendis voluptatum molestias
            ducimus, facilis labore molestiae id corporis tempora qui laborum,
            tenetur voluptate iusto unde. Assumenda omnis, culpa ratione ipsam
            deleniti facilis officiis provident harum dolorum laudantium vitae
            laborum sit. Inventore ipsum ipsam in perferendis placeat corrupti
            sunt, quam dolorum molestiae numquam optio commodi doloremque at!
            Cumque dolore perspiciatis veniam ad ipsum officia doloribus saepe
            dolorem quasi. Possimus doloribus amet itaque ipsam nostrum autem,
            porro, nesciunt quasi sit libero necessitatibus ducimus cupiditate!
            Facere officiis, sit porro quibusdam impedit eos eius. Dolorem!
        </p>
        </div>
      </div>
      
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{
              animationDelay: "0.3s",
            }}>
              <AiFillGoogleCircle/>
              <p>Google</p>
            </div>
            <div style={{
              animationDelay: "0.5s",
            }}>
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div style={{
              animationDelay: "0.7s",
            }}>
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div style={{
              animationDelay: "0.1s",
            }}>
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>

    </Fragment>
  );
};

export default Home;
