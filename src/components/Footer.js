import React from "react";
import footer from "../assests/footer.png";

function Footer() {
  return (
    <div className="footer-section">
     
      <div className="container">
        <div className="imgfo">
            <img src={footer} alt="cybernest"/>
        </div>
         <div className="ft-list">
            <ul className="ft-list-items">
                <li>
                     <a href="#services">Services</a>
                </li>
                 <li>
                     <a href="#work">Work</a>
                 </li>
                 <li>
                    <a href="#about">About</a>
                 </li>
                 <li>
                    <a href="#contact">Contact</a>
                 </li>
            </ul>
          </div>
        <div className="ft-list">
            <ul className="ft-list-items1">
                <li>Terms</li>
                <li>Privacy</li>
            </ul>
        </div>
    </div>
  </div>
  );
}

export default Footer;