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
import strength from '../assets/strength.jpg';
import cardio from '../assets/cardio.jpg';
import studiosym from '../assets/asset 12.png'
import Carousel from 'react-elastic-carousel';
import Button from "react-bootstrap/Button";
import Item from './Item';
import Item2 from './Item2';
import youtube from '../assets/asset 13.webp'
import insta from '../assets/asset 14.webp'
import facebook from '../assets/asset 15.webp'
import twitter from '../assets/asset 16.png'
import background from '../assets/country.jpg'
import Gym from '../assets/gold.png'
import India from '../assets/india.png';
import world from '../assets/world.png';
import trainy from '../assets/trainer.png';
import trophy from '../assets/trophy.png';
import stationary from '../assets/stationary-bike.png';
import architecture from '../assets/architecture.png';

function About() {
  return (
    <>
      <div className='about-containt'>
       <section id='About'>
        <div className='about-flex'>
          {/* <div className='img-gym'>
            <img src={gym} height='550px' width='800px' />
          </div> */}
          <div className='para-container'>
            <h1 className='about-heading'>About Us</h1>
            <p className='line'>UrbanFit is not just a gym, it's a way of life. Widely recognized as one of India's premium fitness destinations. UrbanFit is an ISO certified 9001-2008 company, which is endorsed by top Bollywood stars and international athletes.</p>
            <p className='line'>We are a fitness brand that welcomes everyone to achieve a well-being program and lead a healthier life at affordable prices.</p>
            <p className='line'>We make it easy to add different workouts that help in muscle and strength building, and toning into your daily routine which can be tailored to your needs with the help of digital classes and training that can be done from your living room as well as in the gym.</p>
            <p className='line'>We have got you covered with supplements, free workouts, group activities, healthy recipes, and wellbeing tips at the gym, App, and on social media.</p>
            <p className='line'>With easy access to an experienced set of gym and passionate trainers, you will have the full assistance you need to reach your goals in one place</p>
          </div>
        </div>
        <div className='grid-container'>
          <div className='sym'>
             <img src={trainy}  width='200px' height='200px'/>
             <p style={{color:'gold',marginTop:'10px'}} className='symheading'>Certified Trainer</p>
             <p style={{color:'white',width: '450px',fontSize: '20px',marginLeft:'-90px'}}>Provide personalized experience and create a strong sense of belongingness to our guests.</p>
          </div>
          <div className='sym'>
             <img src={trophy}  width='200px' height='200px'/>
             <p style={{color:'gold',marginTop:'10px'}} className='symheading'>Awards & Achievements</p>
             <p style={{color:'white',width: '450px',fontSize: '20px',marginLeft:'-90px'}}>Endorsed by top celebrities and international athletes alike, UrbanFit has won many awards for a best fitness center in India.</p>
          </div>
          <div className='sym'>
             <img src={stationary} width='200px' height='200px'/>
             <p style={{color:'gold',marginTop:'10px'}} className='symheading'>Modern Eqipments</p>
             <p style={{color:'white',width: '450px',fontSize: '20px',marginLeft:'-90px'}}>The same variety of equipment used by the likes of the American Military, and the Manchester United & German football team.</p>
          </div>
          <div className='sym'>
             <img src={architecture}  width='200px' height='200px'/>
             <p style={{color:'gold',marginTop:'10px'}} className='symheading'>Premium Architecture</p>
             <p style={{color:'white' ,width: '450px',fontSize: '20px',marginLeft:'-90px'}}>Standards, look and feel periodically refined to live upto brand’s promise of delivering ultimate luxurious fitness experience.</p>
          </div>
        </div>
        </section>
        <section id='Services'>
        <div className='services'>
          <h1 className='service-Heading'>Discover our services UrbanFit gym membership has to offer:</h1>
          <p className='service-para'>Urban Fit offers a full range of group fitness activities like HIIT, Zumba, Kickboxing suitable for all levels of<br /> fitness lovers. We also provide personal training sessions at the studio at your convenience.</p>

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
            <div className='Card'>
              <div><img src={cardio} className='card-img' /></div>
              <div className='Card-info'>
                <h3 className='header-info'>Cardio</h3>
                <p className='cardParaInfo'>UrbanFit Gym India celebrates 20 th Anniversary this year. The gym community is getting stronger each year while taking forward the legacy in fitness.</p>
              </div>
            </div>
            <div className='Card'>
              <div><img src={strength} className='card-img' /></div>
              <div className='Card-info'>
                <h3 className='header-info'>Protein Supplement</h3>
                <p className='cardParaInfo'>UrbanFit’s gym is a focal point of fitness enthusiasts and body building professionals for all the right reasons.</p>
              </div>
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
        </section>
        <section id='Strength'>
        <div className='strengthofgym'>
          <div>
            <img src={background} width='100%' />
          </div>
          <div className='allcont'>
            <h1 id='strength'>Strength Of The UrbanFit Gym Brand</h1>
            <p style={{fontSize:'22px'}}>UrbanFit Gym has 20 years of history in India. We are the most recognised name in fitness and the largest co-ed gym chain in the world. We have got 50 years of history behind us and a very bright future ahead of us.</p>
            <div className='symbols'>
              <img src={Gym} />
              <img src={India} />
              <img src={world} />
            </div>
            <div className='infosym'>
              <span>130+ Gym</span>
              <span>25 States</span>
              <span>90+ Cities</span>
            </div>
          </div>
        </div>
        </section>
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
        {/* <div className='comments'>
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
        </div> */}
      </div>
      <section id='Testimonial'>
      <div className='Testmonials'>
        <h1 style={{ textAlign: 'center', position: 'relative', top: '20px', color: 'black' }}
        >Testmonials</h1>
        <div className='grid'>
          <div className='box'>
            <h5 className='author'>Rohit Patil- UrbanFit Gym Bandra,Mumbai</h5>
            <p className='authorComm'>"The gym is well equipped with the latest machines and multiple sets of each dumbbell. Good gym in affordable price range nearby. Trainers are quite friendly and nice."</p>
          </div>
          <div className='box'>
            <h5 className='author'>Deepak V R – UrbanFit Gym Varthur, Bangalore</h5>
            <p className='authorComm'>"Perfect place for health and fitness. They have very different kind of fitness machine. Very well-trained trainers, always there to help you. Various facilities like Parking, Steam Bath, Lockers, etc. are available. Must contact Sanjeet Mallik (trainer) for better training."</p>
          </div>
          <div className='box'>
            <h5 className='author'>SANDEEP YADAV – UrbanFit Gym Ganeshguri, Guwahati</h5>
            <p className='authorComm'>"The UrbanFit Gym at Ganeshguri is too good. The staff is very friendly, and the trainers are very well behaved and very helpful. Equipment for exercise is advance. They maintain a proper hygiene. There are two bathrooms one toilet and one room for taking steam bath. There are separate changing rooms for gents and ladies. Overall, I found this Gym the Best in Town."</p>
          </div>
          <div className='box'>
            <h5 className='author'>Imaad Shafat – UrbanFit Gym Srinagar, J&K</h5>
            <p className='authorComm'>"It's one the best fitness centre across India, I always get a different vibe here. If I talk about equipment,  UrbanFit Gym Srinagar has got the best equipment. Infrastructure is also good. The money I invested for workout here is really worth it and good for me. I suggest  UrbanFit Gym Srinagar to everyone as the vibe here is different."</p>
          </div>
          <div className='box'>
            <h5 className='author'>Alan Samuvel Vino – UrbanFit Gym Adyar, Chennai</h5>
            <p className='authorComm'>"They got it all strength, hypertrophy, calisthenics, cardio etc whatever your fitness goals are, they will help you achieve it with the ample equipment and space for not just the traditional way of the gym but also for fun activities such as rock climbing being one of the many."</p>
          </div>
          <div className='box'>
            <h5 className='author'>Aniket Patil- UrbanFit Gym Kolhapur,Maharashtra</h5>
            <p className='authorComm'>"The gym is well equipped with the latest machines and multiple sets of each dumbbell. Good gym in affordable price range nearby. Trainers are quite friendly and nice."</p>
          </div>
        </div>
      </div>
      </section>
      <section id='Contact-Us'>
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
        <div className='links'>
            <h4 style={{fontSize:'40px', marginTop:'50px',color:'gold',marginBottom:'30px'}}>Quick Links</h4>
            <p style={{fontSize:'20px'}}> <a className='' href='#' style={{textDecoration:'none'}}>Terms and Conditions</a></p>
            <p style={{fontSize:'20px'}}> <a className='' href='#' style={{textDecoration:'none'}}>Press & Media</a></p>
            <p style={{fontSize:'20px'}}><a className=''  href='#' style={{textDecoration:'none'}}>Careers</a></p>
            <p style={{fontSize:'20px'}}><a className=''  href='#' style={{textDecoration:'none'}}>Awards & Recognitions</a></p>
            <p style={{fontSize:'20px'}}><a className=''  href='#' style={{textDecoration:'none'}}>Blog</a></p> 
        </div>
        <div className='info'>
          <p style={{fontSize:'20px'}}>We’re here to help and answer any questions you
            might have. We will answer your inquiries in a
            maximum of 48 hours.</p>
          <div className='line'></div>
          <p style={{fontSize:'20px'}}>Tel: +91 8799952724</p>
          <p style={{fontSize:'20px'}}>Email: info@urbanfitwellness.com</p>
          <h5>Reach Us : OFFICE NO. 1 D, 2nd Floor, Cerebrum IT Park,
            Kalyani Nagar, Pune - 411014</h5>
          <div className='symbol'>
            <img className='youtube' src={youtube} style={{ marginRight: '10px', cursor: 'pointer' }} />
            <img className='insta' src={insta} style={{ marginRight: '10px', cursor: 'pointer' }} />
            <img className='facebook' src={facebook} style={{ marginRight: '10px', cursor: 'pointer' }} />
            <img className='twitter' src={twitter} style={{ width: '35px', marginRight: '10px', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
      </section>
      <footer style={{ textAlign: 'center', backgroundColor: 'black', color: 'white', marginTop: '0px' }}>
        © 2018-22 by UrbanFit Wellness.
      </footer>
    </>
  )
}

export default About
