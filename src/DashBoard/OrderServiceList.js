import { signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import auth from "../firebase.init";
import AllServiceList from "./AllServiceList";
import OrderServiceEmail from "./OrderServiceEmail";

const OrderServiceList = () => {
  const [user, loading] = useAuthState(auth);
  const [servicesList, setServicesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/bookingService?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setServicesList(data));
    }
  }, [user]);

  if (loading) {
    return <p>vhhjj..........</p>;
  }

  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font">
        Provide awesome <span className="service-color">services</span> :{" "}
        {servicesList?.length}
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

export default OrderServiceList;
