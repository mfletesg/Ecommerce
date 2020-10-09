import React from 'react'
import '../styles/Carousel.css'
import Img1 from '../img/1.jpg'

const Carousel = () => (
<React.Fragment>
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src={Img1} className="rounded" alt="Responsive" />
                <div className="container">
                    <div className="carousel-caption text-left ">
                        <h1>TULIPS</h1>
                        <h1 className="title-carousel">SALE</h1>
                        <p className="title-percent">50%</p>
                        <p className="title-off">OFF</p>
                        <p className="title-shop">SHOP NOW</p>
                        <button className="btn btn-lg btn btn-secondary shop-now-button">SHOP NOW</button>
                        <button className="btn btn-lg btn btn-secondary shop-from-button">FROM $15</button>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Img1} className="rounded" alt="Responsive " />
                <div className="container">
                    <div className="carousel-caption text-left ">
                        <h1>TULIPS</h1>
                        <h1 className="title-carousel">SALE</h1>
                        <p className="title-percent">50%</p>
                        <p className="title-off">OFF</p>
                        <p className="title-shop">SHOP NOW</p>
                        <button className="btn btn-lg btn btn-secondary shop-now-button">SHOP NOW</button>
                        <button className="btn btn-lg btn btn-secondary shop-from-button">FROM $15</button>
                    </div>
                </div>
            </div>
            <div className="carousel-item">
                <img src={Img1} className="rounded" alt="Responsive" />
                <div className="container">
                    <div className="carousel-caption text-left ">
                        <h1>TULIPS</h1>
                        <h1 className="title-carousel">SALE</h1>
                        <p className="title-percent">50%</p>
                        <p className="title-off">OFF</p>
                        <p className="title-shop">SHOP NOW</p>
                        <button className="btn btn-lg btn btn-secondary shop-now-button">SHOP NOW</button>
                        <button className="btn btn-lg btn btn-secondary shop-from-button">FROM $15</button>
                    </div>
                </div>
            </div>

            <div className="carousel-item">
                <img src={Img1} className="rounded" alt="Responsive" />
                <div className="container">
                    <div className="carousel-caption text-left ">
                        <h1>TULIPS</h1>
                        <h1 className="title-carousel">SALE</h1>
                        <p className="title-percent">50%</p>
                        <p className="title-off">OFF</p>
                        <p className="title-shop">SHOP NOW</p>
                        <button className="btn btn-lg btn btn-secondary shop-now-button">SHOP NOW</button>
                        <button className="btn btn-lg btn btn-secondary shop-from-button">FROM $15</button>
                    </div>
                </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
            <button className="btn btn-lg  btn-secondary btn-control-prev-icon" href="#/">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </button>
            <span className="sr-only">Previous</span>
        </a>

        <a className="carousel-control-next" href="#myCarousel"  data-slide="next">
            <button className="btn btn-lg  btn-secondary btn-control-next-icon" href="#/">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </button>
            <span className="sr-only">Next</span>
        </a>
    </div>
</React.Fragment>
)

export default Carousel
