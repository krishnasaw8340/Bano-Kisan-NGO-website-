import React from "react";
import img1 from "../Pages/Assets/Img/IMG20220826102929.jpg";
import social1 from "../Pages/Assets/images/1.png"
import social2 from "../Pages/Assets/images/2.png";
import social3 from "../Pages/Assets/images/3.png";
import social4 from "../Pages/Assets/images/4.png";
import social5 from "../Pages/Assets/images/5.png";
import call from "../Pages/Assets/images/call.png";
import location from "../Pages/Assets/images/location.png";
import mail from "../Pages/Assets/images/mail.png";
import news2 from "../Pages/Assets/images/news2.png";
import "../Pages/Assets/style.css";
import wp from "../Pages/Assets/images/wp.jpg";
import Footer from "./Footer";

export const Joinus = () => {
  return (
    <>
      {/* Section1 */}
      <div className="upperlayer">
        <div className="mar">
          <div className="main-Part">
            <div className="firstPart">
              <div>
                <h1 className="title">Become a volunteer or help out with an event</h1>
                <p className="paraPadding">As an NGO dedicated to promoting sustainable agricultural development and improving the
                  livelihoods of small-scale farmers, BANO KISAN offers several benefits to those who join
                  us as volunteers, donors, or members.</p>
                  <button className="btn">Get in touch!
                  </button>
              </div>
            </div>
            <div className="secondPart">
              <img className="imgSize2" src={img1}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="mar">
        <div className="benefit-bk">
        <h1 className="title">Benefits of joining Bano-Kisan </h1>
            <p>As an NGO dedicated to promoting sustainable agricultural development and improving the 
livelihoods of small-scale farmers, BANO KISAN offers several benefits to those who join 
us as volunteers, donors, or members.</p>

        </div>
            
        <div className="lowerLayer">
          <div>
          </div>
          <div className="second-box">
            <span className="title">Volunteer</span>
            <p>Gain valuable hands-on experience in sustainable agriculture and rural development.
Contribute to a meaningful cause and make a positive impact on the lives of small-scale farmers.
Learn new skills and knowledge related to agriculture, community development, and sustainability.
Build relationships with like-minded individuals and communities.
Enhance their resume and gain professional development opportunities.
            </p>
            <button className="btn">Know More</button>
          </div>

          <div className="second-box">
            <span className="title">Donors</span>
            <p>Make a direct and meaningful impact on the lives of small-scale farmers and rural communities.
Contribute to sustainable agricultural development and food security.
Support innovative and effective programs and interventions that create lasting change.
Receive regular updates and reports on the impact of their donations.
Enjoy tax benefits, as donations to BANO KISAN are tax-deductible.
            </p>
            <button className="btn">Know More</button>
          </div>

          <div className="second-box">
            <span className="title">Members</span>
            <p>Play an active role in shaping the direction and priorities of BANO KISAN.
Have a say in the governance and management of the organization.
Participate in decision-making and contribute their expertise and knowledge.
Stay up-to-date with the latest developments in sustainable agriculture and rural development.
Network with other members and stakeholders in the field.
Overall, joining BANO KISAN as a volunteer, donor, or member provides an opportunity to 
make a tangible and positive impact on the lives of small-scale farmers and rural 
communities, while also gaining valuable experience, knowledge, and connections
            </p>
            <button className="btn">Know More</button>
          </div>
        </div>
      </div>


      <section>
            <div className="container">
                <div className="contactInfo"> 
                    <div>
                        <h2>Contact Info</h2>
                        <ul className="info">
                            <li>
                                <span><img src={location}/></span>
                                <span>48 upar kulhi, Dantoo<br/>
                                Bokaro, jharkhand<br/>
                                    pin-code 829121</span>
                              
                            </li>
                            <li>
                                <span><img src={mail}/></span>
                                
                                <span><a href = "mailto: banokisan@gmail.com">banokisan@gmail.com</a></span>
                            </li>
                            <li>
                                <span><img src={call}/></span>
                                <span>06542238018</span>
                            </li>
                             <li>
                                <span><img src={wp}/></span>
                                <span>+918409038536</span>
                               
                            </li>

                        </ul>
                    </div>
                </div>
                    <div className="contactForm">
                        <h2>Send a Message</h2>
                        <div className="formBox">
                        <div className="inputBox w50">
                            <input type="text" name="" required/>
                            <span>First Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required/>
                            <span>Last Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" required/>
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="text" required/>
                            <span>Mobile Number</span>
                        </div>
                        <div className="inputBox w100">
                            <textarea required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" value="Send"/>
                        </div>
                    </div>
                </div>
                </div>
        </section>
        <Footer></Footer>

    </>
  );
};
