import React from "react";
import { Link } from "react-router-dom";

const AllServiceList = ({ serviceList }) => {
  const { _id, name, image, description, price } = serviceList;
  return (
    <div className="shadow-lg mb-6 mt-6 pb-5 pl-3 pr-3">
      <div class="avatar lg:pl-5">
        <div class="w-20 rounded-full">
          <img src={image} />
        </div>
        {serviceList.price && !serviceList.paid && (
          <Link to={`/dashboard/payment/${serviceList._id}`}>
            <button class="btn btn-xs lg:ml-36 lg:mr-3 lg:mt-3">Pay</button>
          </Link>
        )}
        {serviceList.price && serviceList.paid && (
          <span class="text-success lg:ml-36 lg:mr-3 lg:mt-3">Paid</span>
        )}
        <button class="btn btn-xs lg:mt-3">Delete</button>
      </div>

      <h4 className="text-center">{name}</h4>
      <p className="text-center pl-8 pr-8">{description}</p>
      <p className="text-center pl-8 pr-8">Price: ${price}</p>
    </div>
  );
};

export default AllServiceList;
