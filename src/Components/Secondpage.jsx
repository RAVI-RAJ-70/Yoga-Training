import React from "react";

import "./YogaTraining.css";

function Secondpage() {
  return (
    <div>
      <div className="training-background">
        <div className="training-container">
          <h1 className="main-heading02">
            Siddhi Yoga <span className="highlight">Online Yoga Training</span>
            <br /> Course is Ideal for You, If...
          </h1>

          <div className="grid-container">
            <div className="left-cards">
              <div class="card">
                <div class="card-text">
                  <h3>You are Overwhelmed by Busy Schedules</h3>
                  <p>
                    You can manage your learning with our self-paced modules,
                    ensuring you grasp each concept thoroughly and grow
                    professionally at your own speed.
                  </p>
                </div>
                <div class="card-image">
                  <img src="images/Rectangle 10.png" alt="Placeholder" />
                </div>
              </div>
              <div class="card-shadow">
                <div class="card">
                  <div class="card-text">
                    <h3>You have Limited Access to Expertise</h3>
                    <p>
                      Join our vibrant online community of fellow learners and
                      experienced instructors, and build connections,
                      collaboration, and continuous support.
                    </p>
                  </div>
                  <div class="card-image">
                    <img src="images/Mask group.png" alt="Placeholder" />
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-text">
                  <h3>You are Worried about the Financial Burden</h3>
                  <p>
                    We provide you cost-effective training with our affordable
                    course, which removes the financial strain associated with
                    in-person courses.
                  </p>
                </div>
                <div class="card-image">
                  <img src="images/Rectangle 13.png" alt="Placeholder" />
                </div>
              </div>
            </div>

            {/* Center Button */}

            <div className="cta-button">
              <div className="cta-image">
                <img
                  src=" images/Frame 121.png "
                  alt="Yoga"
                  className="resized-image02"
                />
              </div>
              <button>
                Start Your <br /> Training Now <br /> →{" "}
              </button>
            </div>

            {/* Right Column */}
            <div className="right-cards">
              <div class="card">
                <div class="card-image">
                  <img src="images/Rectangle 11.png" alt="Placeholder" />
                </div>
                <div class="card-text1">
                  <h3>You Need Personalized Learning</h3>
                  <div class="card-para">
                    <p>
                      You can manage your learning with our self-paced modules,
                      ensuring you grasp each concept thoroughly and grow
                      professionally at your own speed.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card-shadow">
                <div class="card">
                  <div class="card-image">
                    <img src="images/Rectangle 12 (1).png" alt="Placeholder" />
                  </div>
                  <div class="card-text1">
                    <h3>You Crave Community and Support</h3>
                    <p>
                      Join our vibrant online community of fellow learners and
                      experienced instructors, and build connections,
                      collaboration, and continuous support.
                    </p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="images/Rectangle 12.png" alt="Placeholder" />
                </div>
                <div class="card-text1">
                  <h3>You are Seeking Accreditation for Career Growth</h3>
                  <p>
                    Earn a Yoga Alliance-approved certification through our
                    comprehensive program, which opens up diverse opportunities
                    in yoga teaching worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="card-mob">
        <div class="card">
          <div class="card-header-mob">
            <img
              src="images/Rectangle 10.png"
              alt="place-holder"
              class="card-image-mob"
            />
            <div class="card-title-mob">
              {" "}
              <h3>You are Overwhelmed by Busy Schedules </h3>
            </div>
          </div>
          <div class="card-text-mob">
            You can manage your learning with our self-paced modules, ensuring
            you grasp each concept thoroughly and grow professionally at your
            own speed.
          </div>
        </div>

        <div class="card">
          <div class="card-header-mob">
            <img
              src="images/Mask group.png"
              alt="place-holder"
              class="card-image-mob"
            />
            <div class="card-title-mob">
              {" "}
              <h3>You have Limited Access to Expertise</h3>
            </div>
          </div>
          <div class="card-text-mob">
            Join our vibrant online community of fellow learners and experienced
            instructors, and build connections, collaboration, and continuous
            support.
          </div>
        </div>

        <div class="card">
          <div class="card-header-mob">
            <img
              src="images/Rectangle 12.png"
              alt="place-holder"
              class="card-image-mob"
            />
            <div class="card-title-mob">
              {" "}
              <h3>You are Worried about the Financial Burden</h3>
            </div>
          </div>
          <div class="card-text-mob">
            We provide you cost-effective training with our affordable course,
            which removes the financial strain associated with in-person
            courses.
          </div>
        </div>

        <div class="card">
          <div class="card-header-mob">
            <img
              src="images/Rectangle 11.png"
              alt="place-holder"
              class="card-image-mob"
            />
            <div class="card-title-mob">
              {" "}
              <h3>You Need Personalized Learning</h3>
            </div>
          </div>
          <div class="card-text-mob">
            You can manage your learning with our self-paced modules, ensuring
            you grasp each concept thoroughly and grow professionally at your
            own speed.
          </div>
        </div>

        <div class="card">
          <div class="card-header-mob">
            <img
              src="images/Rectangle 12 (1).png"
              alt="place-holder"
              class="card-image-mob"
            />
            <div class="card-title-mob">
              {" "}
              <h3>You Crave Community and Support </h3>
            </div>
          </div>
          <div class="card-text-mob">
            Join our vibrant online community of fellow learners and experienced
            instructors, and build connections, collaboration, and continuous
            support.
          </div>
        </div>

        <div class="card">
          <div class="card-header-mob">
            <img
              src="images/Rectangle 13.png"
              alt="place-holder"
              class="card-image-mob"
            />
            <div class="card-title-mob">
              {" "}
              <h3>You are Seeking Accreditation for Career </h3>
            </div>
          </div>
          <div class="card-text-mob">
            Earn a Yoga Alliance-approved certification through our
            comprehensive program, which opens up diverse opportunities in yoga
            teaching worldwide.
          </div>
        </div>
        <button className="mob-button"> Start Your Training Now →</button>
      </div>
      <br />
    </div>
  );
}

export default Secondpage;
