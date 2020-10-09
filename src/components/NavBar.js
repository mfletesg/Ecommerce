import React from 'react'

const NavBar = () => (
    <React.Fragment>
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row justify-content-between" >
                <a className="nav-link text-light small" href="#/" >
                    <span  className="fas fa-truck-moving"></span> FreeShipping On Order above $199
                </a>
                <a className="py-2 d-none d-md-inline-block text-light small font-weight-light" href="#/" >
                    <i className="far fa-user"></i>
                    &nbsp; My Account</a>
                <a className="py-2 d-none d-md-inline-block text-light small" href="#/" >Login / Register</a>
            </div>
        </nav>
    </React.Fragment>
)

export default NavBar
