import React, { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  const items = [...services];
  const newServices = items.reverse();
  const sliceServices = newServices.slice(0, 3);

  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font">
        Provide awesome <span className="service-color">services</span> :{" "}
        {sliceServices.length}
      </h2>

      <div className="max-w-7xl mx-auto service-grid">
        {sliceServices.map((service) => (
          <div key={service._id}>
            <Service service={service}></Service>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
