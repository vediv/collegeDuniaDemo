import React, { useState } from "react";
import "./starRating.css";

const Star = ({ selected = false }) => (
  <div className={selected ? "outer star selected" : "outer star"}>
    <div className={selected ? "inner star selected" : "inner star"} />
  </div>
);

export const StarRating = ({ totalStars, rating }) => {
  const [starsSelected, setStarSeleced] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={!rating ? i < starsSelected : i < rating}
        />
      ))}
    </div>
  );
};

