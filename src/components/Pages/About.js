import React from "react";
import { Slide } from 'react-slideshow-image';
import img1 from "../Pages/Assets/Img/IMG20220823123552.jpg"
import img2 from "../Pages/Assets/Img/IMG20220826102929.jpg";
import img3 from "../Pages/Assets/Img/IMG-20220916-WA0011.jpg";
import Footer from "./Footer";

export const About = () => {
  const images = [
    img1,
    img2,
    img3
  ];
  return (
    <>
      {/* Section1  */}
      <div className="upperlayer">
        <div className="mar">
          <div className="main-Part">
            <div className="firstPart">
              <div>
                <h1 className="title">The Bano-Kisan's tales</h1>
                <p>Bano Kisan is more than just an organisation; it is also a movement with the
                  mission of bringing back to agriculture the people who are leaving it and to
                  improve agriculture by combining traditional and modern farming methods.
                  Prasenjit Kumar launched the Bano Kisan movement in 2019, which included
                  several farmers from the Bokaro area who quit farming and moved to the big
                  cities in order to make a life. They called back and were connected with agricultural
                  labour, given information about government programmes to boost income, and assisted
                  in utilising them.  As soon as Mr. Prasenjit Kumar, the movement's leader, called for
                  it, the procedure to register the movement as an organisation was initiated. And on
                  February 25, 2022, Bano Kisan was accorded the legal status as an organisation under
                  the Indian Societies Registration Act 21, 1860.</p>
              </div>
            </div>
            <div className="secondPart">
              <img className="imgSize" src={img1}></img>
            </div>
          </div>
        </div>
      </div>

      {/* section-2  */}
      <div className="mar">
        <div>
          <h1 className="title">Who we are  </h1>
          <p>Welcome to BANO KISAN, a non-governmental organization committed to promoting
            sustainable agricultural development and improving the livelihoods of small-scale
            farmers in rural communities.</p>
          <p> At BANO KISAN, we believe that agriculture has the potential to be a powerful tool
            for economic growth, poverty reduction, and food security. Our mission is to empower
            small-scale farmers by enhancing their access to knowledge, resources, and markets,
            and to support the development of sustainable and resilient agricultural systems.</p>
          <p>
            Through our programs and interventions, we aim to improve the productivity, profitability,
            and sustainability of smallholder agriculture, while also promoting environmental
            conservation and biodiversity. We work closely with local partners, communities, and
            government institutions to ensure that our interventions are context-specific,
            participatory, and sustainable.</p>
          <p>Our programs cover a range of areas, including crop production, livestock management,
            soil conservation, water management, agroforestry, and value chain development. We also
            prioritize gender equality, social inclusion, and youth empowerment in all of our
            interventions.</p>
          <p> At BANO KISAN, we are committed to continuous learning, innovation, and collaboration,
            and we work closely with academic institutions, research organizations, and other
            stakeholders to stay up-to-date with the latest developments in the field of agricultural
            development.</p>
          <p>

            We invite you to explore our website to learn more about our work, our impact, and how
            you can support our mission to promote sustainable agricultural development and improve
            the lives of small-scale farmers.</p>

        </div>
      </div>
     <div> 

     </div>
      <div className="mar">
        <div>
          <h1 className="title">Bano Kisan Activity in details: </h1>


          <div className="Activity rawe">
            <h3>  RAWE : </h3>
            <p>
              RURAL AGRICULTURAL WORK EXPERIENCE (RAWE) is a program designed to provide hands-on training
              and work experience to agricultural university students in rural areas. The program is typically
              a mandatory requirement for students pursuing agricultural degrees and involves spending several
              weeks to a few months in a rural community, working with local farmers and agricultural practitioners.
            </p>
            <p>
            During the RAWE program, students are exposed to a wide range of agricultural practices and 
            activities, including crop cultivation, livestock management, natural resource conservation,
             and rural entrepreneurship. They work closely with local farmers and extension workers to gain
              practical experience and knowledge of the challenges and opportunities of rural agriculture.
            </p>
            <p>The RAWE program provides students with an opportunity to apply the theoretical knowledge they
               have gained in the classroom to real-life situations, and to learn about the practical aspects of 
               agriculture, such as soil testing, seed selection, crop rotation, pest and disease management, and
                marketing of agricultural products. In addition, the program helps students to develop skills such 
                as communication, teamwork, problem-solving, and decision-making, which are essential for success 
                in the field of agriculture.
              </p>
              <p>
              Overall, the RAWE program plays a crucial role in preparing agricultural university students for their 
              future careers as agricultural professionals and in promoting sustainable agriculture practices in rural 
              communities.
              </p>
              
            <div className="imageSlide">
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
          <div className="Activity kisan-Gosthi">
          <h3>  Kisan-Gosthi: </h3>
            <p>  
            Kisan Gosthi (किसान गोष्ठी) is a Hindi term that refers to a farmers' meeting or discussion group.
             It is a platform for farmers to come together and discuss various issues related to agriculture,
              such as crop cultivation, livestock management, irrigation, natural resource conservation, and 
            market access.
            </p>
            <p>
            Kisan Gosthi is typically organized by agricultural extension workers, government agencies, 
            non-governmental organizations, or community-based organizations. The meetings are usually held 
            in a village or community center, and farmers from nearby areas are invited to participate. The 
            discussions are facilitated by a trained extension worker or an expert in a particular area of 
            agriculture. practical experience and knowledge of the challenges and opportunities of rural agriculture.
            </p>
            <p>The main objectives of Kisan Gosthi are to share knowledge and experiences among farmers, promote 
              innovative and sustainable farming practices, create awareness about new technologies and government 
              schemes, and address the challenges faced by farmers in their daily lives. The meetings also provide an 
              opportunity for farmers to network and establish links with other farmers, researchers, and agricultural 
              service providers.
              </p>
              <p>
              Kisan Gosthi has proven to be an effective mechanism for disseminating agricultural information, building 
              the capacity of farmers, and empowering them to take collective action for their betterment. The approach 
              has been widely used in India and other countries to promote agricultural development and improve the livelihoods 
              of smallholder farmers..
              </p>
              
            <div className="imageSlide">
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
          <div className="Activity kisan-Mela">
          <h3>  Kisan-Mela: </h3>
            <p>  
            Kisan Mela is an agricultural fair or exhibition organized for farmers, agricultural researchers,
             extension workers, and other stakeholders in the agricultural sector. The term "Kisan" means farmer 
             in Hindi, and "Mela" means fair or festival.
            </p>
            <p>
            Kisan Mela is typically organized by agricultural universities, government agencies, or private organizations,
             and is usually held in rural areas to promote awareness about new agricultural technologies, innovations, 
             and best practices. The event provides a platform for farmers to interact with agricultural experts, researchers, 
             and other stakeholders in the sector and to learn about the latest developments in agriculture.
            </p>
            <p>The main objectives of Kisan Mela are to showcase new agricultural technologies, practices, and innovations, provide
               farmers with an opportunity to interact with experts and peers, promote marketing opportunities for farmers and their
                products, and create awareness about government policies and schemes related to agriculture.
              </p>
              <p>
              Kisan Mela plays an important role in promoting agricultural development, facilitating knowledge-sharing among 
              farmers and other stakeholders, and encouraging the adoption of new and innovative agricultural practices. 
              The event has become a popular and effective platform for promoting rural development and improving the livelihoods of farmers.
              </p>
              
            <div className="imageSlide">
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
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
