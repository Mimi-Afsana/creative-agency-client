import React from "react";

const Review = ({ review }) => {
  const { _id, name, image, description, companyName } = review;
  return (
    <div className="border mt-6 lg:pl-2 pr-3">
      <div class="">
        <div className="flex ">
          <img src={image} class="w-16 lg:mt-4 rounded-full avatar" />

          <div>
            <h4 className="lg:pl-5 lg:mr-8 lg:mt-5 font-bold">{name}</h4>
            <h4 className="lg:pl-5 lg:mr-8 font-medium">{companyName}</h4>
          </div>
        </div>
      </div>

      <p className="lg:pl-2 lg:mt-3 lg:mb-3">{description}</p>
    </div>
  );
};

export default Review;
