import React, { useState } from "react";
import "./Card.css";
// import ReactStars from "react-rating-stars-component";
// import { render } from "react-dom";
// import image from "../asset/Rectangle 2039.jpg";
import mapicon from "../asset/Vector.svg";
import hearticon from "../asset/Vector (1).svg";
import hearticoncolored from "../asset/Vector (2).svg";
// import star from "../asset/Vector (3).svg";
import stars from "../asset/Vector (4).svg";
import arrowdown from "../asset/Vector (5).svg";
import ReactStars from "react-rating-stars-component";

const Card = (props) => {
  const [isclicked, setIsclicked] = useState(false);
  const [isclicked2, setIsclicked2] = useState(false);

  const like = () => {
    setIsclicked(!isclicked);
  };

  const btn = () => {
    setIsclicked2(!isclicked2);
  };

  return (
    <div id="card">
      <div className="image-content">
        <div
          id="like"
          onClick={like}
          style={isclicked ? { marginLeft: "-10px" } : {}}
        >
          <img
            src={isclicked ? hearticoncolored : hearticon}
            alt="hearticon"
            id="hearticon"
          />
          <p className="image-content-p">{isclicked ? "Saved" : "Save"}</p>
        </div>

        <div className="images hide-scroll-bar">
          {props.cardData.images.map((img) => {
            return <img src={img} alt="mainimage" />;
          })}
        </div>
      </div>
      <div className="content">
        <div className="mobilerating">
          <div className="mobileratingleft">
            <div className="mobileratingleftimage">
              <img src={stars} alt="star" />
            </div>
            <div className="mobilereview">
              <p>4.2</p>
              <p>(29 reviews)</p>
            </div>
          </div>
          <div className="mobileratingright">
            <img src={hearticoncolored} alt="hearticoncolored" />
          </div>
        </div>
        <div className="content-header">
          <h1>{props.cardData.heading}</h1>
          <div className="location">
            <img src={mapicon} alt="mapicon" />
            <span>Alibaug , Maharashtra</span>
            <p className="distance">2 kms from beach</p>
          </div>

          <div className="maindiv">
            <span>Entire Villa</span>
            <span>3 Bedroom</span>
            <span>6 Guests</span>
          </div>
          <div className="type">
            <p>Pet-friendly</p>
            <p>Free Cancellation</p>
          </div>
          <div className="rating">
            <p>{props.cardData.ratingvalue}</p>

            <span className="reactstars">
              {/* <img src={stars} alt="stars" />
              <img src={stars} alt="stars" />
              <img src={stars} alt="stars" />
              <img src={stars} alt="stars" />
              <img src={star} alt="star" /> */}

              <ReactStars
                count={5}
                value={props.cardData.rating}
                size={20}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
                edit={false}
              />
            </span>
            <p className="reviews">{props.cardData.reviews}</p>
          </div>
        </div>
        <div className="content-footer">
          <div className="pricetag">
            <div className="price">
              <p className="mainprice">₹ 1,48,680</p>
              <p className="time">per night</p>
            </div>
            <div className="pastprice">
              <p>₹40,499</p>
            </div>
          </div>

          <button
            id="btn"
            onClick={btn}
            style={
              isclicked2
                ? { backgroundColor: "#3564E2", color: "#FFFFFF" }
                : { backgroundColor: "#fff", color: "#3564E2" }
            }
          >
            View Details
            <img src={arrowdown} alt="arrowdown" className="arrowdown" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
