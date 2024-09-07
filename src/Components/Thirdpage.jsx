import React, { useState, useEffect } from "react";
import "./InstructorCard.css";

const bullets = {
  backgroundImage: 'url("/images/Group 17.png")',
  marginBottom: "20px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "25px 25px", 
  paddingLeft: "40px", 
  marginRight: "20px", 
  lineHeight: "10px", 
};

function Thirdpage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 720);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 720) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="instructor-container-bg">
        <div className={`instructor-container ${isMobile ? "mobile" : ""}`}>
          <h1 className="title">
            Know More About Our Globally <br />
            <span className="highlight">Recognized Yoga Instructors</span>
          </h1>

          <div className="bord1"></div>
          <div className="bord"></div>

          <div className="instructor-card">
            {/* Left Side: Instructor Image */}
            <div className="instructor-image">
              <div className="img_frame">
                <img src="images/Group 16.jpg" alt="Raaz" />
              </div>
              <br />
              <p className="instructor-name">Dr. Sumit Sharma</p>
            </div>
            {/* Right Side: Instructor Info */}
            <div className="instructor-info">
              <h1>Mastery</h1>
              {/* Mastery Section */}
              <div className="mastery">
                <div className="mastery-item" style={bullets}>
                  Dynamic Anatomy
                </div>
                <div className="mastery-item" style={bullets}>
                  Dynamic Physiology
                </div>
                <div className="mastery-item" style={bullets}>
                  Yoga Therapy
                </div>
                <div className="mastery-item" style={bullets}>
                  Posture Correction
                </div>
                <div className="mastery-item" style={bullets}>
                  Asana Safety
                </div>
                <div className="mastery-item" style={bullets}>
                  Prevention of Injuries
                </div>
                <div className="mastery-item" style={bullets}>
                  Realign Yoga
                </div>
              </div>
              <hr />
              {/* Description Section */}
              <div className="description">
                <p>
                  <strong>
                    Dr. Sumit uses a dynamic and charismatic approach to Anatomy
                    and Physiology training.
                  </strong>
                </p>
                <p>
                  He takes a holistic approach to anatomy and has created a
                  unique way of integrating the human body and yoga asana
                  together to create a deeper understanding of how we move and
                  why we don’t all move in the same way. Based in Rishikesh, Dr.
                  Sumit can be found teaching in a select number of Yoga
                  Schools.
                </p>
                <p>
                  <strong>
                    Dr. Sumit has taken his teachings across the globe including
                    US, Canada, UK, Australia, Dubai, Bali, and South Africa. He
                    holds a master’s Degree in Physical Therapy, a Diploma in
                    Sports Medicine, and is a certified Yoga Alliance Continuing
                    Education Provider (YACEP).
                  </strong>
                </p>
                <p>
                  He manages to lift Anatomy training off the pages of books and
                  makes it come alive in the classroom, specially devised and
                  specific for Yoga Teachers and Yoga Practitioners...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Thirdpage;
