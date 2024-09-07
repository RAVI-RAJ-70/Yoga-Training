import React from "react";

import "./YogaTraining.css";

function Secondpage() {
  return (
    <div>
      <div className="training-background">
        <div className="training-container">
          <h1 className="main-heading">
            Siddhi Yoga <span className="highlight">Online Yoga Training</span>
            <br /> Course is Ideal for You, If...
          </h1>

          <div className="grid-container">
            <div className="left-cards">
              <div class="card">
                <div class="card-text">
                  <h3>Card Title</h3>
                  <p>
                    This is some text inside the card. It will be displayed on
                    the left side of the card, while the image is placed on the
                    right side.
                  </p>
                </div>
                <div class="card-image">
                  <img src="images/Rectangle 10.png" alt="Placeholder" />
                </div>
              </div>

              <div class="card">
                <div class="card-text">
                  <h3>Card Title</h3>
                  <p>
                    This is some text inside the card. It will be displayed on
                    the left side of the card, while the image is placed on the
                    right side.
                  </p>
                </div>
                <div class="card-image">
                  <img
                    src="images/sporty-woman-headphones-sitting-mat-home-before-doing-fitness-exercises-looks-camera 1.png"
                    alt="Placeholder"
                  />
                </div>
              </div>

              <div class="card">
                <div class="card-text">
                  <h3>Card Title</h3>
                  <p>
                    This is some text inside the card. It will be displayed on
                    the left side of the card, while the image is placed on the
                    right side.
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
                <img src=" images/Frame 121.png " alt="Yoga" />
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
                  <h3>Card Title</h3>
                  <p>
                    This is some text inside the card. It will be displayed on
                    the left side of the card, while the image is placed on the
                    right side.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="images/Rectangle 12 (1).png" alt="Placeholder" />
                </div>
                <div class="card-text1">
                  <h3>Card Title</h3>
                  <p>
                    This is some text inside the card. It will be displayed on
                    the left side of the card, while the image is placed on the
                    right side.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="card-image">
                  <img src="images/Rectangle 12.png" alt="Placeholder" />
                </div>
                <div class="card-text1">
                  <h3>Card Title</h3>
                  <p>
                    This is some text inside the card. It will be displayed on
                    the left side of the card, while the image is placed on the
                    right side.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secondpage;
