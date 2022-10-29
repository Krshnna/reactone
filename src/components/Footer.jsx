import React from "react";
import {AiFillYoutube, AiFillGithub, AiFillInstagram} from "react-icons/ai"
const Footer = () => {
  return(  
  <footer>
    <div>
      <h1>TechStar</h1>
      <p>@All right reserved</p>
    </div>
    <div>
        <h5>Follow Us</h5>
        <div>
            <article>
            <div> 
              <AiFillYoutube/>
              <a href="https://youtube.com" target={"blank"}>Youtube</a>
            </div>
            <div>
              <AiFillGithub/>
              <a href="https://github.com" target={"blank"}>GitHub</a>
            </div>
            <div>
              <AiFillInstagram/>
              <a href="https://instagram.com" target={"blank"}>Instagram</a>
            </div>
            </article>
        </div>
    </div>
  </footer>
  );
};

export default Footer;
