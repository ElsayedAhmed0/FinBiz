import React from "react";
import { Row, Col } from "react-bootstrap";
const Footer = () => {
  return (
    <div className="footer_sec">
      <div className="container">
        <Row>
          <Col md={4}>
            <div className="social_sec">
              <div className="footer_logo">
                <a href="">
                  <img src="img/logo.svg" alt="" />
                </a>
              </div>
              <p>Data analysis software is a type of software tool used for data analysis and reporting.</p>
              <div className="slocial_icon">
                <ul>
                  <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a></li>
                  <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a></li>
                  <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg></a></li>
                  
                  
                </ul>
              </div>
            </div>
          </Col>
          <Col md={2}>
            <div className="f_title">
              <h4>Company</h4>
              <ul>
                <li>Service</li>
                <li>Resources</li>
                <li>About us</li>
              </ul>
            </div>
          </Col>
          <Col md={2}>
          <div className="f_title">
              <h4>Help</h4>
              <ul>
                <li>Customer Support</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
          <div className="f_title">
              <h4>Subscribe to Newsletter</h4>
             <div className="input_subscrip">
              <input type="text" placeholder="Enter email address"/>
              <button>Join</button>
             </div>
            </div>
          </Col>
        </Row>
        <div className="copy-writr">
          <span>© Copyright 2024, All Rights Reserved by FinBiz</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
