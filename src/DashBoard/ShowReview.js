import React, { useEffect, useState } from "react";
import Review from "./Review";

const ShowReview = () => {
  const [reviewList, setReviewList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviewGet")
      .then((res) => res.json())
      .then((data) => {
        setReviewList(data);
      });
  }, [reviewList]);
  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-xl text-center mt-5 mb-5 font-bold">
        Clients <span className="service-color">Feedback</span>
      </h2>

      <div className="max-w-7xl mx-auto service-grid">
        {reviewList.map((review) => (
          <div key={review._id}>
            <Review review={review}></Review>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowReview;
