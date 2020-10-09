import React from 'react'
import '../styles/NavTitle.css'
const NavTitle = () => (
        <div className="jumbotron mycustom-jumbotron" >

        <div className="d-flex justify-content-center flex-column justify-content-center flex-md-row align-items-center p-3 px-md-4 mb-3">
            <h1 className="w-20 p-3 "><i className="fas fa-shopping-bag"></i>  Company &nbsp;   </h1>

            <div className=" p-3" style={{width: '34%'}} >
                <form>
                    <div className="row">
                        <div className="col">
                            <div className="input-group" >
                                <input type="text" className="form-control serch-input" id="search" placeholder="Search from entire store..." />
                                <div className="input-group-append ">
                                    <button className="btn btn-light dropdown-toggle dropdown_category" id="dropdown_category"  type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</button>
                                    <div className="dropdown-menu">
                                      <a className="dropdown-item" href="#/">Action</a>
                                      <a className="dropdown-item" href="#/">Another action</a>
                                      <a className="dropdown-item" href="#/">Something else here</a>
                                      <div role="separator" className="dropdown-divider"></div>
                                      <a className="dropdown-item" href="#/">Separated link</a>
                                    </div>
                                    <button type="button" className="btn btn-dark">
                                        <i className="fas fa-search small"></i>
                                    </button>
                              </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            <div className="p-3">
                <div className="btn-group ">
                    <button type="button" className="btn btn-light dropdown-toggle dropdown_wishlist" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-heart"></i> <small> WishList </small>
                    </button>
                    <div className="dropdown-menu">
                    </div>
                </div>

                <button type="button" className="btn btn-light dropdown_wishlist" >
                    <i className="fas fa-shopping-bag"></i>
                </button>
            </div>
        </div>
    </div>
)

export default NavTitle
