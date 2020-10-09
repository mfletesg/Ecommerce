import React from 'react'
import '../styles/Footer.css'

const Footer = () => (
<React.Fragment>
    <footer className="page-footer font-small unique-color-dark footer-color">
        <div>
            <div className="container">
              <div className="row py-4 d-flex align-items-center">
              </div>
            </div>
        </div>

        <div className="container text-center text-md-left mt-5">
            <div className="row mt-3 text-white footer">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h1 className="w-20 p-3 text-uppercase "><i className="fas fa-shopping-bag"></i> Company</h1>

                    <p className="small">Great Range Of Laptops For Your Everyday Essential w/
                        Intel ® Core™. Same Day Shipment &bull; Cash On Delivery  &bull;
                        EMI Options India's No.1 Most Trusted Technology Brand in 2015</p>
                    <hr  style={{ borderTop: '1px solid #4e4e4e'}} ></hr>
                    <p className="small">
                        <i className="fas fa-home mr-3"></i> 321, Ramis Gandour Colony, District 9 Florida
                    </p>
                    <p className="small">
                        <i className="fas  fa-phone mr-3"></i> 090-0965-2987
                    </p>
                    <p className="small">
                        <i className="fas fa-mail mr-3"></i> contact@company.com
                    </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                    <h6 className="text-uppercase">COLLECTIONS</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p className="small">
                        <a href="#/">Summer 2017</a>
                    </p>
                    <p className="small">
                        <a href="#/">Women's Dress</a>
                    </p>
                    <p className="small">
                        <a href="#/">Women's Jackets</a>
                    </p>
                    <p className="small">
                        <a href="#/">Men's Dress</a>
                    </p>
                    <p className="small">
                        <a href="#/">Accessories</a>
                    </p>
                    <p className="small">
                        <a href="#/">Travel Bags</a>
                    </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase">CUSTOMERE CARE</h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p className="small">
                        <a href="#/">Order Tracking</a>
                    </p>
                    <p className="small">
                        <a href="#/">The Privacy Policy</a>
                    </p>
                    <p className="small">
                        <a href="#/">Payments & Returns</a>
                    </p>
                    <p className="small">
                        <a href="#/">Product Care</a>
                    </p>
                    <p className="small">
                        <a href="#/">FAQ'S</a>
                    </p>
                    <p className="small">
                        <a href="#/">Shipping Information</a>
                    </p>
                    <p className="small">
                        <a href="#/">Accounts Setting</a>
                    </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase " style={{textDecorationLine: 'underline'}}>
                        SUBSCRIBE FORM MORE UPDATES
                    </h6>
                    <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}} />
                    <p className="small">
                        Sing up for Newsletter to Get all the information on Events, Offers, Sales and More
                    </p>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <div className="input-group-append">
                            <button className="btn btn-secondary" type="button"><i className="fab fa-telegram-plane"></i></button>
                        </div>
                    </div>
                    <span className="small">We never share your mail at any where</span>
                    <hr/>
                    <i className="fab fa-twitter"></i> &nbsp; &nbsp; &nbsp;
                    <i className="fab fa-linkedin"></i> &nbsp; &nbsp; &nbsp;
                    <i className="fab fa-facebook-square"></i> &nbsp; &nbsp; &nbsp;
                    <i className="fab fa-skype"></i> &nbsp; &nbsp; &nbsp;
                    <i className="fab fa-pinterest-square"></i>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-left py-3 footer-color2 text-white">
        <div className="container container-footer">
          <div className="row py-1 d-flex">
          Copyright © 2018. Company All Rights Reserved
          </div>
        </div>
        </div>
    </footer>
</React.Fragment>
)

export default Footer
