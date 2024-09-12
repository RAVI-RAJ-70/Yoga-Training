import React from "react";
import "./YogaTrainingCard.css";

const bullets = {
  backgroundImage: 'url("/images/Group 17.png")',
  marginBottom: "1px",
};

function firstpage() {
  return (
    <div>
      <h1 className="main-heading01">
        Pricing <span className="highlight">Options</span>
      </h1>

      <div className="App">
        <div className="yoga-card" id="card1">
          <div className="card-header">
            <div className="card-header-img">
              <img
                src="images/offer.png"
                alt="Placeholder"
                className="resized-image"
              />
            </div>
            <div className="header1">
              <h2>Yoga Teacher Training</h2>
            </div>
            <p className="price">
              <hr className="divider" />
              <span className="old-price">₹32,995</span> ₹23,995
            </p>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment200" /> Full Payment
              </label>
              <label>
                <input type="radio" name="payment200" /> Easy Installments
              </label>
            </div>
            <p className="freebie">
              FREE{" "}
              <span className="highlight-white">
                {" "}
                Restorative Yoga Teacher Training{" "}
              </span>{" "}
              (worth $147)
            </p>
            <hr className="divider" />
          </div>
          <ul className="features-list">
            <li style={bullets}>Full Payment</li>
            <br />
            <li style={bullets}>Certification Available</li>
            <br />
            <li style={bullets}>200 Hour Yoga Teacher Training</li>
            <br />
            <li style={bullets}>Digital Training Manual</li>
            <br />
            <li style={bullets}>Life Long Access</li>
            <br />
            <li style={bullets}>
              Restorative Yoga Teacher Training worth $147 (FREE)
            </li>
            <br />
            <li style={bullets}>
              30-Days Access to Virtual Studio worth $39 (FREE)
            </li>
            <br />
            <li style={bullets}>24 Months of Teachers Support</li>
          </ul>

          <button className="buy-button">Buy Now</button>
        </div>

        <div className="yoga-card">
          <div className="card-header">
            <div className="card-header-img">
              <img
                src="images/Frame 9116 (3).png"
                alt="Placeholder"
                className="resized-image"
              />
            </div>
            <div className="header1">
              <h2>Yoga Teacher Training</h2>
            </div>
            <p className="price">
              <hr className="divider" />
              <span className="old-price">₹69,995</span> ₹55,995
            </p>
            <div className="payment-options">
              <label> Full Payment</label>
            </div>
            <p className="freebie">
              FREE{" "}
              <span className="highlight-black">
                Restorative Yoga Teacher Training{" "}
              </span>{" "}
              (worth $147)
            </p>
            <p className="freebie">
              FREE{" "}
              <span className="highlight-black">
                {" "}
                Ayurvedic Certification Course{" "}
              </span>{" "}
              (worth $247)
            </p>
            <hr className="divider" />
          </div>
          <ul className="features-list">
            <li style={bullets}>Full Payment</li>
            <br />
            <li style={bullets}>Certification Available</li>
            <br />
            <li style={bullets}>200 Hour Yoga Teacher Training</li>
            <br />
            <li style={bullets}>300 Hour Yoga Teacher Training</li>
            <br />
            <li style={bullets}>Digital Training Manual</li>
            <br />
            <li style={bullets}>Life Long Access</li>
            <br />
            <li style={bullets}>
              Restorative Yoga Teacher Training worth $147 (FREE)
            </li>
            <br />
            <li style={bullets}>
              Ayurveda Certification Course worth $247 (FREE)
            </li>
            <br />
            <li style={bullets}>
              60-Days Access to Virtual Studio worth $78 (FREE)
            </li>
            <br />
            <li style={bullets}>24 Months of Teachers Support</li>
          </ul>
          <button className="buy-button">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default firstpage;
