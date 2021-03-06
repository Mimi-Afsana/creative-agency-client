import React from "react";

const OrderServiceEmail = ({ service }) => {
  const { _id, serviceName, image, description } = service;
  return (
    <div className="shadow-lg mb-6 mt-6 pb-5 pl-3 pr-3">
      <div class="avatar px-32">
        <div class="w-20 rounded-full">
          <img src={image} />
        </div>
      </div>
      <h4 className="text-center">{serviceName}</h4>
      <p className="text-center pl-8 pr-8">{description}</p>
    </div>
  );
};

export default OrderServiceEmail;
