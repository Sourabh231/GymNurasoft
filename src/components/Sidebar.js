import React from 'react'
import './sedebar.css'
function Sidebar({ShowMenuBar}) {
  return (
    <div className='sidebar'>
      <div className='cross-btn'
      onClick={ShowMenuBar}>x</div>
      <div>
        <h2>
            <ul>
                <li><a href='#Home' style={{textDecoration:'none'}}>Home</a></li>
                <li><a href='#About' style={{textDecoration:'none'}}>About</a></li>
                <li><a href='#Services' style={{textDecoration:'none'}}>Our Services</a></li>
                <li><a href='#Strength' style={{textDecoration:'none'}}>Strength</a></li>
                <li><a href='#Testimonial' style={{textDecoration:'none'}}>Testmonials</a></li>
                <li><a href='#Contact-Us' style={{textDecoration:'none'}}>Contact Us</a></li>
            </ul>
        </h2>
      </div>
          </div>
  )
}

export default Sidebar
