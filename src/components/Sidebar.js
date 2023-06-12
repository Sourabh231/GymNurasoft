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
                <li>Home</li>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Career</li>
                <li>Contact Us</li>
            </ul>
        </h2>
      </div>
          </div>
  )
}

export default Sidebar
