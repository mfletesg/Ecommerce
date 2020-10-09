import React from 'react'
import '../styles/SubTitle.css'
const SubTitle = ({title}) => (
    <div className="card text-center card-subtitle">
      <div className="card-body card-body-subtitle">
        <h4 className="card-text">{title}</h4>
        <i className="fas fa-grip-lines"></i>
      </div>
    </div>
)
export default SubTitle
