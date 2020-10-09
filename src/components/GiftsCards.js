import React, {Fragment}  from 'react'
import '../styles/GiftsCards.css'

const GiftsCards = ({products, reseñas}) => (
<Fragment>
    <div className="album py-5 ">
        <div className="container ">
            <nav className="navbar navbar-light bg-light justify-content-between">
                <p className="navbar-brand" ></p>
                <form className="form-inline">
                <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-chevron-left"></i></button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-chevron-right"></i></button>
                </form>
            </nav>
        </div>
        <div className="container container-cards">
            <div className="row">
                {
                    products.map((product, index) => (
                        <div className="col-md-3" key={product.id}>
                            <div className="card mb-4 shadow-sm">

                            <div className="badge badge-pill badge-outline-primary"><center className="badge-text">10%</center></div>
                                <img src={product.img} className="rounded" alt="Responsive" width="100%" height="260"/>
                                <div className="card-body card-body-text">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <p className="card-text small">{product.name}</p>
                                        </div>
                                        <small className="text-muted "><strong>${product.specialPrice}</strong></small>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group">
                                            <p className="card-text small">&nbsp;</p>
                                        </div>
                                        <s className="text-muted small">${product.price}</s>
                                    </div>
                                    <h5 className="text-muted small text-category-card">{product.category}</h5>
                                        {
                                            reseñas.map((reseña, y) =>
                                                {if (product.id===reseña.id) {
                                                    if (reseña.stars===0) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===1) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===2) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===3) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="far fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===4) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0s"><i className="far fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    if (reseña.stars===5) {
                                                        return (
                                                            <ul className="list-unstyled list-inline rating mb-0 small"  key={y}>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                                <li className="list-inline-item mr-0"><i className="fas fa-star"></i></li>
                                                            </ul>
                                                        )
                                                    }
                                                    return (
                                                        <div className="productText" key={y}>
                                                        </div>
                                                    )}
                                                    return(
                                                        <div className="productText" key={y}>
                                                        </div>
                                                    )
                                                }
                                            )
                                        }
                                        <br/>
                                        <a className="text-muted ">Add To Card</a>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
</Fragment>
)
export default GiftsCards
