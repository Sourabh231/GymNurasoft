import React, { useState } from 'react'
import './About.css'
import gym from '../assets/asset 17.webp';
import dr from "../assets/asset 2.webp"
import trainer from '../assets/asset 3.webp'
import exercise from '../assets/asset 4.webp'
import mobileImage from '../assets/asset 20.webp'
import protienCan from '../assets/asset 5.webp'
import shirt from '../assets/asset 8.jpeg';
import Product from '../assets/asset 9.jpeg'
import storesym from '../assets/asset 10.png'
import weighlifter from '../assets/asset 11.jpeg'
import studiosym from '../assets/asset 12.png'
import Carousel from 'react-elastic-carousel';
import Button from "react-bootstrap/Button";
import Item from './Item';
import Item2 from './Item2';
import youtube from '../assets/asset 13.webp'
import insta from '../assets/asset 14.webp'
import facebook from '../assets/asset 15.webp'
import twitter from '../assets/asset 16.png'
function About() {

  return (
    <>
      <div className='about-containt'>
        <div className='about-flex'>
          <div className='img-gym'>
            <img src={gym} height='550px' width='800px' />
          </div>
          <div className='para-container'>
            <h1 className='about-heading'>About Us</h1>
            <p className='line'>We are a fitness brand that welcomes everyone to achieve a well-being program and lead a healthier life at affordable prices.</p>
            <p className='line'>We make it easy to add different workouts that help in muscle and strength building, and toning into your daily routine which can be tailored to your needs with the help of digital classes and training that can be done from your living room as well as in the gym.</p>
            <p className='line'>We have got you covered with supplements, free workouts, group activities, healthy recipes, and wellbeing tips at the gym, App, and on social media.</p>
            <p className='line'>With easy access to an experienced set of gym and passionate trainers, you will have the full assistance you need to reach your goals in one place</p>
          </div>
        </div>
        <div className='services'>
          <h1 className='service-Heading'>Our Services.</h1>
          <p className='service-para'>Urban Fit offers a full range of group fitness activities like HIIT, Zumba, Kickboxing suitable for all levels of<br /> fitness lovers. We also provide personal training sessions at the studio at your convenience.</p>
        </div>
        <div className='card-container'>
          <div className='Card'>
            <div><img src={dr} className='card-img' /></div>
            <div className='Card-info'>
              <h3 className='header-info'>Personal Deitician</h3>
              <p className='cardParaInfo'>Unlock the power of healthy eating with our expert personal dietitian. We'll work with you to create a customized meal plan for Weight Loss, Muscle Gain, PCOD, and much more.</p>
            </div>
          </div>
          <div className='Card'>
            <div><img src={trainer} className='card-img' /></div>
            <div className='Card-info'>
              <h3 className='header-info'>Personal Trainer</h3>
              <p className='cardParaInfo'>Get the support and motivation you need to reach your fitness goals with our personal training services. Get fit at home or Fitness Studio with one-to-one consultation.</p>
            </div>
          </div>
          <div className='Card'>
            <div><img src={exercise} className='card-img' /></div>
            <div className='Card-info'>
              <h3 className='header-info'>Exercise Video</h3>
              <p className='cardParaInfo'>Get fit for free with our workout video! Our expert trainers will guide you through a fun and effective workout that you can do in your own comfort.</p>
            </div>
          </div>
          <div className='Card'>
            <div><img src={protienCan} className='card-img' /></div>
            <div className='Card-info'>
              <h3 className='header-info'>Protein Supplement</h3>
              <p className='cardParaInfo'>Buy 100% Authentic Protein & Healthy Supplements at the best price. Branded Supplements with Free Shipping and COD are available.</p>
            </div>
          </div>
        </div>
        <div className='flexbox'>
          <div className='left-info'>
            <h2 className='headinglbox'>Health & Fitness at your
              Fingertips.</h2>
            <p className='paralbox'>Your Fitness Goals are now achievable with
              Fitness Apps. Personal Dietitian, Personal
              Trainer, Health Supplement, and much more for
              a Healthy Lifestyle.</p>
          </div>
          <div >
            <img src={mobileImage} className='right-image' />
          </div>
        </div>
        <div className='bigImage'>
          <Carousel>
            <Item>
              <div className='leftside'>
                <img src={shirt} width='800px' height='800px' />
              </div>
              <div className='rightside'>
                <div className='span'>
                  <h2 className='headingslider'>Premium & Sporty</h2>
                  <p className='imagepara'>Train in style with our high-performance
                    sports and trendy wears

                  </p>
                  <p>Comming Soon</p>
                </div>

              </div>
            </Item>
            <Item>
              <div className='leftside'>
                <img src={Product} />
              </div>
              <div className='rightside'>
                <img src={storesym} className='studiosym' />
                <div className='span'>
                  <h2 className='headingslider'>Feed your body with Right
                    Nutrition.</h2>
                  <p className='imagepara'>To Genuine Branded Proteins & Health
                    Supplements at discounted prices.

                  </p>
                  <Button className="primary">Visit Now</Button>
                </div>
              </div>
            </Item>

            <Item>
              <div className='leftside'>
                <img src={weighlifter} />
              </div>
              <div className='rightside'>
                <img src={studiosym} className='studiosym' />
                <div className='span'>
                  <h2 className='headingslider'>Personalized Fitness.</h2>
                  <p className='imagepara'>Train under Certified Expert Trainer to
                    achieve your fitness goals fast and easy.
                  </p>
                </div>

                <Button className="primary visit">Visit Now</Button>
              </div>
            </Item>
          </Carousel>
        </div>
        <div className='comments'>
          <Carousel style={{ textAlign: 'center' }}>
            <Item2>
              <div className=''>
                <p className='name'>Priyanka</p>
                <p>The studio is spacious and equipped with the latest equipment
                  Fantastic place to workout.</p>
              </div>
            </Item2>
            <Item2>
              <div className=''>
                <p className='name'>Suvidha Verma</p>
                <p>The fitness trainers at Urban Fit Studio are knowledgeable, helpful
                  and provide amazing training without any doubt. Love the happy
                  vibe.</p>
              </div>
            </Item2>
            <Item2>
              <div className=''>
                <p className='name'>Harshad Shinde</p>

                <p>Urban fit studio is truly an amazing place to start building a fit and
                  healthy body. The studio has a very comfortable and positive vibes.</p>
              </div>
            </Item2>

            <Item2>
              <div className=''>
                <p className='name'>Raj k</p>

                <p>The studio is good with a wide range of equipment in a good
                  location. The staff is also polite and helpful.</p>
              </div>
            </Item2>

            <Item2>
              <div className=''>
                <p className='name'>Ajinkya</p>

                <p>Amazing ambience, absolute cleanliness . I really enjoy the
                  positive vibes in the studio.</p>
              </div>
            </Item2>

          </Carousel>
        </div>
      </div>
      <div className='companyInfo'>
        <div className='form'>
          <h1 style={{ color: '#ffffff' }}>Let's Get Moving</h1>
          <p style={{ color: '#ffffff' }}>Sign Up For Updates</p>
          <label style={{ color: '#ffffff' }}>Full Name</label>
          <br />
          <input type='text' name='full name' />
          <br />
          <br />
          <label style={{ color: '#ffffff' }}>Email Address</label>
          <br />
          <input type='email' name='email' />
          <br />
          <br />
          <label style={{ color: '#ffffff' }}>Phone</label>
          <br />
          <input type='text' name='full name' />
          <br />
          <br />
          <label style={{ color: '#ffffff' }}>Type your message here...</label>
          <br />
          <input type='text' name='full name' />
          <br />
          <br />
          <Button className="btn btn-success">Submit</Button>
        </div>
        <div className='info'>
          <p>We’re here to help and answer any questions you
            might have. We will answer your inquiries in a
            maximum of 48 hours.</p>
          <div className='line'></div>
          <p>Tel: +91 8799952724</p>
          <p>Email: info@urbanfitwellness.com</p>
          <h5>Reach Us : OFFICE NO. 1 D, 2nd Floor, Cerebrum IT Park,
            Kalyani Nagar, Pune - 411014</h5>
          <div className='symbol'>
          <img className='youtube' src={youtube} style={{ marginRight: '10px' , cursor:'pointer'}}/>
          <img className='insta' src={insta} style={{ marginRight: '10px', cursor:'pointer'}}/>
          <img className='facebook' src={facebook} style={{ marginRight: '10px', cursor:'pointer'}}/>
          <img className='twitter' src={twitter} style={{width:'35px',marginRight: '10px', cursor:'pointer'}}/>
          </div>
        </div>
      </div>
      <footer style={{textAlign:'center', backgroundColor:'black', color:'white',marginTop:'15px'}}>
      © 2018-22 by UrbanFit Wellness.
      </footer>
    </>
  )
}

export default About
