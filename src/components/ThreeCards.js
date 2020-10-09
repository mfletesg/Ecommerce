import React, {Fragment} from 'react'
import Img2 from '../img/2.jpg'
import Img3 from '../img/3.jpg'
import Img4 from '../img/4.jpg'
import '../styles/ThreeCards.css'

const ThreeCards = () => (
    <Fragment>
        <div className="card card-page">
            <div className="row">
                <div className="col-sm-4">
                    <div style={{backgroundImage:'url('+ Img2 +')'}} className="card card-image rounded" >
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                                <h1 className="card-title pt-2"><strong>&nbsp;</strong></h1>
                                <h5 className="pink-text">Fast Same day Delivery</h5>
                                <h3 className="card-title pt-2"><strong>BIRTHDAY FLOWRS</strong></h3>
                                <h4>Gerbera</h4>
                                <button type="button" className="btn btn-secondary btn-box">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card card-image" style={{backgroundImage:'url('+ Img3 +')'}}>
                        <div className="text-white text-left d-flex align-items-center rgba-black-strong py-5 px-4">
                            <div>
                                <h2 className="card-title pt-2">V7 Digital Photo Printing PROTECTIVE PREVENTATIVE MAINTENANCE</h2>
                                <h5 className="pink-text">On orders over $99</h5>
                                <h4>&nbsp;</h4>
                                <button type="button" className="btn btn-secondary btn-box">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card card-image " style={{backgroundImage:'url('+ Img4 +')'}}>
                        <div className="text-white text-left align-items-center rgba-black-strong py-5 px-4">
                            <div className="margin-content">
                                <h3 className="pink-text">Rose</h3>
                                <h2 className="card-title pt-2">FLOWER BOUQUET</h2>
                                <h4>50% OFF</h4>
                                <button type="button" className="btn btn-secondary btn-box">SHOP NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

export default ThreeCards
