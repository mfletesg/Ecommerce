import React from 'react'
import '../styles/CategoryBar.css'
const CategoryBar = () => (
<React.Fragment>
    <div className="d-flex flex-column flex-md-row align-items-center justify-content-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm bar-title-category">
        <a className="p-3 text-dark" href="#/">Home</a>
        <a className="p-3 text-dark" href="#/">Shop</a>
        <a className="p-3 text-dark" href="#/">New Arrivals</a>
        <a className="p-3 text-dark" href="#/">Products</a>
        <a className="p-3 text-dark" href="#/">Brand</a>
        <a className="p-3 text-dark" href="#/">Contact</a>
        <div className="mx" style={{width: '10%'}}>
        </div>
        <div className="d-inline p-2 btn-group-body">
            <div className="btn-group btn-group-cart ">
                <div className="card btn-group-cart">
                    <div className="row no-gutters ">
                        &nbsp;<i className="fas fa-shopping-bag" style={{width:'50px', height:'50px', verticalAlign: 'middle'}}></i>&nbsp;&nbsp;
                        <div className="col">
                            <div className="card-block px-1">
                                <h4 className="card-title small">Card Items: (3)</h4>
                                <p className="card-text small">Total: $345</p>
                            </div>
                        </div>
                    </div>
                </div>
              <button type="button" className="btn  dropdown-toggle px-3"  aria-haspopup="true" href="#/"
                aria-expanded="false">
              </button>
            </div>
        </div>
    </div>
</React.Fragment>
)

export default CategoryBar
