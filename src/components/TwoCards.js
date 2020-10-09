import React, {Fragment} from 'react'
import Img5 from '../img/5.jpg'
import Img6 from '../img/6.jpg'
import '../styles/TwoCards.css'
const TwoCards = () => (
    <Fragment>
    <div className="card card-page">
        <div className="row">
            <div className="col-sm-6">
                <div style={{backgroundImage:'url('+Img5+')'}} className="card card-image" >
                    <div className="text-white text-left d-flex align-items-center rgba-black-strong py-5 px-4">
                        <div>
                            <h3 className="card-title pt-2"><strong>&nbsp;</strong></h3>
                            <h3 className="card-title pt-2"><strong>&nbsp;</strong></h3>
                            <h2 className="card-title">SPLASH OF SUMMER</h2>
                            <h2 className="card-title pt-2">25% OFF</h2>
                            <button type="button" className="btn btn-secondary btn-box">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="card card-image" style={{backgroundImage:'url('+Img6+')'}}>
                    <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
                        <div>
                            <h5 className="pink-text">&nbsp;</h5>
                            <h3 className="card-title pt-2"><strong>&nbsp;</strong></h3>
                            <h2 className="card-title pt-2">FRESH FLOWER &nbsp;</h2>
                            <h2 className="card-title pink-text">35% OFF</h2>
                            <button type="button" className="btn btn-secondary btn-box">SHOP NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </Fragment>
)

export default TwoCards
