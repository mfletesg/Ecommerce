import React from 'react'
import '../styles/CardCarousel.css'
import Rectangle_1 from '../img/Rectangle_1.png'
import Rectangle_2 from '../img/Rectangle_2.png'
import Rectangle_3 from '../img/Rectangle_3.png'

const CardCarousel = () => (
    <React.Fragment>
    <div className="container">
        <div className="row row-card-carousel" style={{padding: '2em'}}>
            <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
                <div className="carousel-inner carousel-inner-box " role="listbox">
                    <div className="carousel-item active card-carousel-item  ">
                        <div className="col-md-3 ">
                            <div className="card ">
                                <div className="row no-gutters">
                                        <img src={Rectangle_1} className="img-fluid" alt="" width="50%" />
                                    <div className="col">
                                        <div className="card-block px-1">
                                            <p className="card-text small">&nbsp;</p>
                                            <h4 className="card-title small"><strong>Be Happy Flower Bouquet</strong></h4>
                                            <h5 className="card-text small">$30</h5>
                                            <i className="fas fa-heart small"></i> <i className="fas fa-shopping-cart small"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item card-carousel-item">
                        <div className="col-md-3">
                            <div className="card ">
                                <div className="row no-gutters">
                                        <img src={Rectangle_1} className="img-fluid" alt="" width="50%" />
                                    <div className="col">
                                        <div className="card-block px-1">
                                            <p className="card-text small">&nbsp;</p>
                                            <h4 className="card-title small">Be Happy Flower Bouquet</h4>
                                            <p className="card-text small">$30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item card-carousel-item">
                        <div className="col-md-3">
                            <div className="card ">
                                <div className="row no-gutters">
                                        <img src={Rectangle_2} className="img-fluid" alt="" width="50%" />
                                    <div className="col">
                                        <div className="card-block px-1">
                                            <p className="card-text small">&nbsp;</p>
                                            <h4 className="card-title small">Be Happy Flower Bouquet</h4>
                                            <p className="card-text small">$30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item card-carousel-item">
                        <div className="col-md-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title small"><strong>Special Offer Limited Time Only</strong></h5>
                                <button type="button" className="btn btn-dark">SHOP NOW</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="carousel-item card-carousel-item">
                        <div className="col-md-3">
                            <div className="card ">
                                <div className="row no-gutters">
                                        <img src={Rectangle_3} className="img-fluid" alt="" width="50%" />
                                    <div className="col">
                                        <div className="card-block px-1">
                                            <p className="card-text small">&nbsp;</p>
                                            <h4 className="card-title small">Be Happy Flower Bouquet</h4>
                                            <p className="card-text small">$30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item card-carousel-item">
                        <div className="col-md-3">
                            <div className="card ">
                                <div className="row no-gutters">
                                        <img src={Rectangle_1} className="img-fluid" alt="" width="50%" />
                                    <div className="col">
                                        <div className="card-block px-1">
                                            <p className="card-text small">&nbsp;</p>
                                            <h4 className="card-title small">Be Happy Flower Bouquet</h4>
                                            <p className="card-text small">$30</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <a className="carousel-control-prev w-auto" href="#recipeCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next w-auto" href="#recipeCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark border border-dark rounded-circle" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</React.Fragment>
)

export default CardCarousel
