import React from "react";
import logo from './Assets/original.svg';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../Pages/Assets/Img/IMG20220823123552.jpg'
import img2 from '../Pages/Assets/Img/IMG20220826102929.jpg';
import img3 from '../Pages/Assets/Img/IMG20220826103214.jpg';
import pro1 from '../Pages/Assets/mamu.jpeg';
import pro2 from '../Pages/Assets/shekhar.jpg';
import pro3 from '../Pages/Assets/mossi.jpeg';
import news1 from './Assets/News/1.jpg';
import news2 from './Assets/News/2.jpg';
import news3 from './Assets/News/3.jpg';
import news4 from './Assets/News/4.jpg';
import news5 from './Assets/News/5.jpg';
import news6 from './Assets/News/6.jpg';
import mic from '../Pages/Assets/mic.svg';
import Footer from '../Pages/Footer';
import { NavLink } from "react-router-dom";

export const Home = () => {
  const images = [
    img1,
    img2,
    img3
  ];
  const review = [
    {
      pic: news1
    },
    {
      pic: news2
    },
    {
      pic: news3
    },
  ];
  const review2 = [
    {
      pic: news4
    },
    {
      pic: news5
    },
    {
      pic: news6
    },
  ];
  return (
    <>
      {/* Section 1 */}
      <div className="main">
        <div className="part-1">
          <img className="imglogo2" src={logo}></img>
          <h2 className="head"> <span id="move">Movement</span> <br /> <span id="connect">that Connect </span><br /> <span id="farmer">Farmers</span>.</h2>
        </div>
        <div className="part-2">
          <div className="upper">
            <div >
              <Slide>
                <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                  </div>
                </div>
                <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                  </div>
                </div>
                <div className="each-slide-effect">
                  <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
          <div className="lower">
            <div className="text-part">
              <p>Bano kisan is a non-govermental Organisation founded in 2019
                and incorported in 2022 under the Indian Societies Registration
                Act 21, 1860.</p>
            </div>
            <div className="btn-main">
              <NavLink to="/about"> <button className="btn">Explore More</button></NavLink>
             
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="mar">
        <h1>Bano Kisan's Activity</h1>
        <div className="container-3">
          <div className="second-box">
            <div > <img className="rawe" src={img1} alt="rawepic"></img></div>
            <span className="title">RAWE</span>
            <p>The Rural Agricultural Work Experience (RAWE) provides
              exposure to agricultural students to the natural setting
              of the village situations,figure out their problem and to solve.
            </p>
            <NavLink to="/about">  <button className="btn">Know More</button> </NavLink>
          </div>
          <div className="second-box">
            <div > <img className="rawe" src={img1} alt="rawepic"></img></div>
            <span className="title">Kisan Gosthi</span>
            <p>Kisan Gosthi including “Scientists‐Farmers Interface” is also organised
              for addressing farmers' problems and intensive interactions of farmers with
              agricultural experts from different fields
            </p>
            <NavLink to="/about"> <button className="btn">Know More</button> </NavLink>
          </div>
          <div className="second-box">
            <div > <img className="rawe" src={img1} alt="rawepic"></img></div>
            <span className="title">Kisan-Mela</span>
            <p>Kisan Mela is a farmer-friendly programme. A farmer must visit this annual programme.
              It is necessary for the self development of a farmer by adopting scientific knowledge
              and different advanced tools
            </p>
            <NavLink to="/about"> <button className="btn">Know More</button> </NavLink>
          </div>
        </div>
      </div>

      {/* Section-3  Bano kisan on newspaper  */}
      <div className="mar">
        <h1>Bano Kisan on newspaper</h1>
        <div className="main-paper"> 

          <div className="main-new">
            {review.map((social, idx) => (
              <div >
                <img className="paper-style" src={social.pic}></img>
              </div>
            ))}
          </div>
          <div className="main-new">
            {review2.map((social, idx) => (
              <div >
                <img className="paper-style" src={social.pic}></img>
              </div>
            ))}
          </div>

        </div>
        {/* ******* */}
        </div>

        {/* section4   Meet Our Executives :*/}
        <div className="mar">
        <h1>Meet Our Executives</h1>

        <div className="container-3">
          <div className="section-4">
            <div > <img className="profile" src={pro1} alt="rawepic"></img></div>
            <span className="title">Prasenjeet Kumar</span>
            <p>Director, Bano-Kisan</p>
            <h3>About him</h3>
            <p> CEO Jivanbodh Agrotech, Acting Jivanbodh Industries, Agriculture Scientist,
Invented the process to germinate the <a href="https://en.wikipedia.org/wiki/Morinda_citrifolia" target="_blank">NONI</a> in Non-costal region</p>
            
          </div>
          <div className="section-4">
            <div > <img className="profile" src={pro2} alt="rawepic"></img></div>
            <span className="title">Shekhar Shardendu</span>
            <p>President, Bano-Kisan</p>
            <h3>About him</h3>
            <p> News reporter (Hindustan) Child and Women Rights Activists RTI Activist, Social Activists</p> 
          </div>
          <div className="section-4">
            <div > <img className="profile" src={pro3} alt="rawepic"></img></div>
            <span className="title">Akanksha Kumari</span>
            <p>Secretary, Bano-kisan</p>
             <h3>About her</h3>
            <p> Criminologist (Specialised in Environmental offences and prevention)</p> 
          </div>
        </div>
        </div>
        {/* ********* */}


        {/* Section 5 */}

        <div className="mar"> 
        <div className="section-5">
          <img className="micImg" src={mic}></img>
          <h1 className="title">Invite us to speak at your next event</h1>
          <span className="inviteP"> Want a Bano kisan's speak at your School, College, Organisation? Just Invite us to create a memorable and engaging experience for your attendees.</span>
          <a  href = "mailto: banokisan@gmail.com" target="_blank"><button className="btn">Invite now</button> </a>
        </div>
        </div>

        {/* Section -6 */}
        <Footer></Footer>
    </>
  );
};
