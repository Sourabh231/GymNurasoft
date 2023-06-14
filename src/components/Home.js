import React, { useState } from 'react';
import logo from '../assets/asset0.png';
import menu from '../assets/asset 1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from "react-bootstrap/Button";
import './Home.css';
import About from './About';
import Sidebar from './Sidebar';
import exersise from '../assets/exercise-video.mp4'

function Home() {
  const [showmenubar, setshowmenubar] = useState(false)
  const ShowMenuBar = () => {
    setshowmenubar(false);
  }
  return (
    <>
    <section id='Home'>
      <div className='section-1'>
        <div className='logo-menu flex jusify-content'>
          <div className='logo-container'>
            <img src={logo} width='150px' height='170px' className='logo' />
          </div>
          {!showmenubar &&
            <div>
              <img className='menubar' src={menu}
                onClick={() => { setshowmenubar(true) }} />
            </div>}
          {showmenubar && <div><Sidebar ShowMenuBar={ShowMenuBar} /></div>}
        </div>
        <div className='f-containt'>
          <div className='main-content'>
            <div className='fleft'>

              <h1 className='headingf'>Make Fitness your<br />Ultimate Goal.</h1>

              <p className='about-header'>
                Knocking out troubles like "bad quality of service" and "adulterated
                products," UrbanFit is now re-purposed to solve every problem in the
                relatives of the health fragment, nourishments, and personal fitness industry.
              </p>

              <Button className="primary commit_today">Commit Today</Button>
              <Button className="btn btn-success Learn_More">Learn More</Button>

            </div>
            <div className='fright'>

              <video style={{ width: '800px', height: '800px' }} autoPlay loop muted>
                <source src={exersise} type="video/mp4" />
                {/* Add additional <source> elements for other video formats if needed */}
              </video>
            </div>

          </div>

        </div>

      </div>
      </section>
      <About />

    </>
  );
}

export default Home;
