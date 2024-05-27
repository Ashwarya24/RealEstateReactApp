import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
    <div className="paddings innerWidth flexCenter f-container">
      <div className="flexColStart f-left">
        <img src="./logo2.png" alt="" width={120} />
        <span className='secondaryText'>
          Our vision is to help people <br />
          find their dream home
        </span>
      </div>
      <div className='flexColStart f-right'>
        <span className='primaryText'>Information</span>
        <span className='secondaryText'>Ashwarya Agarwal<br />
        E-mail:ashwarya240@gmail.com <br />
        NSUT,Delhi</span>
        <div className="flexCenter f-menu">
          <span>Property</span>
          <span>Services</span>
          <span>Products</span>
          <span>About Us</span>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Footer