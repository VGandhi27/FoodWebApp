import React from 'react'
import logo from "../Image/logo.jpeg";
import gp from "../Image/gp.png";
import ap from "../Image/apimg.png";

 const Footer = () => {
  return (
    <>
    <div className="footer" id="footer-id">
              <div className="container">
                      <div className="row">
                              <div className="footer-col-1">
                                      <h3>Download our App</h3>
                                       <p>Download App for Android and IOS Mobile Phone.</p>
                                       <div className={logo}>
                                        <img src={gp} alt="" style={{width:"150px"}}/>
                                        <img src={ap} alt=""  style={{width:"150px"}}/>
                                </div>      
                              </div>
                 
                <div className="footer-col-3">
                                <h3>Useful Links</h3>
                                <ul>
                                        <li>Coupons</li>
                                        <li>Blog Post</li>
                                        <li>Return Policy</li>
                                        <li>Join Affiliates</li>
                                </ul>
                        </div>
                <div className="footer-col-4">
                                        <h3>Follow us</h3>
                                        <ul>
                                                <li>Facebook</li>
                                                <li>Twitter</li>
                                                <li>Instagram</li>
                                                <li>YouTube</li>
                                        </ul>
                        
                                </div>            
                     
              </div>
              <hr/>
              <p className="copyright">&#169; Copyright 2022- Vidushi Gandhi</p>
      </div>
      </div>
    </>
  )
}
export default Footer;