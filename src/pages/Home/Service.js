import React from "react";
import { useNavigate } from "react-router";
import "./Service.css";
const Service = ({ service }) => {
  const { _id, name, image, description } = service;
  const navigate = useNavigate();
  const bookOrder = (id) => {
    navigate(`/dashboard/order/${id}`);
  };
  return (
    <div className="shadow-lg mb-6 mt-6 pb-5 pl-3 pr-3">
      <div class="avatar px-32">
        <div class="w-20 rounded-full">
          <img src={image} />
        </div>
      </div>
      <h4 className="text-center">{name}</h4>
      <p className="text-center pl-8 pr-8">{description}</p>
      <div className="card-actions mt-3">
        <button
          onClick={() => bookOrder(_id)}
          className="w-1/3 mx-auto border rounded-full py-2 bg-orange-300 font-bold"
          service={service}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Service;
