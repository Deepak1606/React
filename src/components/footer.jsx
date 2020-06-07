import React from "react";
import { Link } from "react-router-dom";
import { faPhone, faFax, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faYoutube,
  faGooglePlus,
  faFacebook,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              121, Clear Water Bay Road
              <br />
              Clear Water Bay, Kowloon
              <br />
              HONG KONG
              <br />
              <FontAwesomeIcon icon={faPhone} />
              <a href="tel:+852 8765 4321"> +852 8765 4321</a>
              <br />
              <FontAwesomeIcon icon={faFax} />: +852 8765 4321
              <br />
              <FontAwesomeIcon icon={faEnvelope} />:
              <a href="mailto:confusion@food.net">confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="google" href="http://google.com/+">
                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
              </a>
              <a
                className="facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a className="linkedin" href="http://www.linkedin.com/in/">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a className="twitter" href="http://twitter.com/">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a className="youtube" href="http://youtube.com/">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a className="gmail" href="mailto:">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2018 Ristorante Con Fusion</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
