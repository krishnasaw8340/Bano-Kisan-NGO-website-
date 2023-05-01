import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="main-foot">
                <div className="content">
                <div className="foot1">
                    <span className="footHead">Bano Kisan</span>
                    <p>Bano Kisan is more than just an organisation;
                        it is also a movement <br /> with the mission of
                        bringing back to agriculture the people. <NavLink to="/about"> Read More.</NavLink></p>
                </div>
                <div className="foot2">
                    <span className="footHead">Office</span>
                    <p>Dantoo, Bokaro, Jharkhand pin-code 829121</p>
                </div>
                <div className="foot3">
                    <span className="footHead"> Social</span>
                    <div className="icons">
                        <IconContext.Provider value={{ size: '1.3rem' , color: 'black'}} >
                            <div><a href="https://www.facebook.com/groups/1167213499960220/" target="_blank"> <BsFacebook /> </a></div>
                            <div><a href="https://www.instagram.com/banokisan/" target="_blank"> <BsInstagram /> </a></div>
                            <div><a> <BsTwitter /></a></div>
                        </IconContext.Provider>
                    </div>
                </div>

                </div>
               
            </div>

        </>
    )
}
export default Footer;