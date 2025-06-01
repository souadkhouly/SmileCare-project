import React from "react";
import '../about.css';
import imgdoctor from '../Assest/doctor1.jpg';
function about()
{

    return(
        <>
              <div className="about-us-section">
            <div className="top-info">
            <span >We'd Love To</span>
            <strong>See You Smile</strong> 
            </div>
          
            <hr/>
            <div className="info-about-our-site">
            <p className="row-info1">We have established a platform that caters to multiple categories, yet our core inspiration stemmed
                 from the challenges faced by Dentistry students in engaging with patients to address dental cases
                  aligned with their academic curriculum.
            Our platform facilitates the connection between students and patients, providing a valuable
                    opportunity for the patients to receive tailored treatment at no cost, all supervised by 
                    specialized professionals.Students can efficiently locate suitable patients to enhance their
                     practical experience.</p>
            <p className="row-info2">Patients, on the other hand, benefit from swift access to treatment at minimized,
                and often no, costs. Our mission is to ensure every patient receives timely and
                affordable dental care, bridging the gap between academic learning and real-world practice</p>
            <p className="row-info3">" SmileiCare was founded in the first place to create absolutely beautiful smiles"</p>
            </div>
                   
        </div>
        <div className="our-team">
            <div className="our-team-info">
            <span>
            <small>SmileCare</small>
            <strong>Specialized Team</strong>
           </span>
           <p>" We are a team of specialist dentists and student trainees who work together
             to ensure you get the best treatment you need at a time that suits you. "</p>
            </div>

          <div className="our-team-img">
          <img src={imgdoctor} alt="the specialist doctor"/>
            </div>  
        </div>
           
        </>
  

    
  
        ) ;
}

export default about;
