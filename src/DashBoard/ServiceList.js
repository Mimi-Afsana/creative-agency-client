import React, { useEffect, useState } from "react";
import AllServiceList from "./AllServiceList";

const ServiceList = () => {
  const [servicesList, setServicesList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => {
        setServicesList(data);
      });
  }, []);
  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font">
        Provide awesome <span className="service-color">services</span> :{" "}
        {servicesList.length}
      </h2>

      <div className="max-w-7xl mx-auto service-grid">
        {servicesList.map((serviceList) => (
          <div key={serviceList._id}>
            <AllServiceList serviceList={serviceList}></AllServiceList>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
