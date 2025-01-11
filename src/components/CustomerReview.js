import React from "react";
import "../styles/CustomerReview.css";

const CustomerReview = () => {
  const reviews = [
    {
      name: "Hiba Katlin",
      username: "@hibahatlin",
      review:
        "This website helps me check the weather in each city before I travel.",
      rating: 5,
    },
    {
      name: "Safouane Lasmar",
      username: "@safouanelasmar",
      review:
        "Excellent, i need this while traveling",
      rating: 4,
    },
    {
      name: "Mohamed Achbad",
      username: "@mohamedachbad",
      review:
        "wow it's really cold in agadir !!",
      rating: 4,
    },
    {
      name: "Youssef El Ksir",
      username: "@youssefelksir",
      review:
        "boring website , work more in the user experience !",
      rating: 3,
    },
  ];

  return (
    <section className="customer-review-section">
      <h2 className="section-title">Customer Reviews</h2>
      <div className="review-container">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="profile">
              <img
                src={`https://i.pravatar.cc/60?img=${index + 1}`}
                alt="Avatar"
                className="avatar"
              />
              <div>
                <h3 className="name">{review.name}</h3>
                <p className="username">{review.username}</p>
              </div>
            </div>
            <p className="review-text">{review.review}</p>
            <div className="rating">
              {"★".repeat(review.rating)}{" "}
              {"☆".repeat(5 - review.rating)} 
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;
