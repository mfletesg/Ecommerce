import React from 'react'
import Logo1 from '../img/logo_1.jpg'
import Logo2 from '../img/logo_2.jpg'
import Logo3 from '../img/logo_3.jpg'
import Logo4 from '../img/logo_4.jpg'

const PartnersBar = ({title}) => (

<React.Fragment>
    <div className="album py-5 bg-light">
        <div className="container ">
            <nav className="navbar navbar-light bg-light justify-content-between">
                <p className="navbar-brand" >BRANDS</p>
                <form className="form-inline">
                <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-chevron-left"></i></button>&nbsp;&nbsp;
                    <button type="button" className="btn btn-outline-secondary btn-sm"><i className="fas fa-chevron-right"></i></button>
                </form>
            </nav>
        </div>
        <br/>
        <div className="container ">
            <div className="row text-center">
                <div className="col-md-3 " style={{display:'inline'}}>
                    <div className="card mb-4 shadow-sm" >
                            <center><img src={Logo1} className="rounded" alt="Responsive " /></center>
                    </div>
                </div>

                <div className="col-md-3" style={{display:'inline'}}>
                    <div className="card mb-4 shadow-sm">
                        <center><img src={Logo2} className="rounded" alt="Responsive "  /></center>
                    </div>
                </div>

                <div className="col-md-3" style={{display:'inline'}}>
                    <div className="card mb-4 shadow-sm" >
                        <center><img src={Logo3} className="rounded" alt="Responsive" /></center>
                    </div>
                </div>

                <div className="col-md-3" >
                    <div className="card mb-4 shadow-sm " >
                        <center><img src={Logo4} className="rounded" alt="Responsive "/></center>
                    </div>
                </div>
            </div>
        </div>
    </div>
</React.Fragment>
)
export default PartnersBar
