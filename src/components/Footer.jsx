import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px'}} className='d-flex flex-column justify-content-center align-items-center '>
  <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
    <div className="website" style={{width:'400px'}}>
    <h5><i className="fa-solid fa-cloud-arrow-up "></i>Media player</h5>
<h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6>Code licensed Luminar, docs CC BY 3.0.</h6>
<p>Currently v5.3.2</p>
    </div>
    <div className="links d-flex flex-column" >
      <h5>Links</h5>
      <Link to={'/landingpages'}  style={{textDecoration:"none",color:"white"}}>Landing page</Link>
      <Link to={'/home'}  style={{textDecoration:"none",color:"white"}}>Home</Link>
      <Link to={'/watchhostory'}  style={{textDecoration:"none",color:"white"}}>Watch hostory</Link>

    </div>
    <div className="guids d-flex flex-column">
    <h5>Guids</h5>
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}>React</Link>
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}>React Bootstrap</Link>
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}>Routing</Link>
    </div>
    <div className="contact">
      <h5>Contact us</h5>
      <div className="sub d-flex">
        <input type="text" className="form-control" placeholder='enter your Email id' />
        <button  className='btn btn-primary ms-3'>Subscribe</button>
      </div>
      <div className="icons fs-4 d-flex justify-content-evenly">
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}><i className="fa-solid fa-envelope"></i></Link>
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}><i className="fa-brands fa-twitter"></i></Link>
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}><i className="fa-brands fa-linkedin"></i></Link>
      <Link to={'https://getbootstrap.com/'}  style={{textDecoration:"none",color:"white"}}><i className="fa-brands fa-instagram"></i></Link>
      </div>
    </div>
  </div>
  
  

    <p>Copyright © 2023 media player. Built with react</p>
    </div>
  )
}

export default Footer