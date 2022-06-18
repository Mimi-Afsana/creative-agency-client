import { signOut } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import auth from "../firebase.init";
import AllServiceList from "./AllServiceList";
import OrderServiceEmail from "./OrderServiceEmail";

const OrderServiceList = () => {
  const [user, loading] = useAuthState(auth);
  const [servicesList, setServicesList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/bookingService?email=${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        console.log("res", res);
        // if (res.status === 401 || res.status === 403) {
        //   signOut(auth);
        //   localStorage.removeItem("accessToken");
        //   navigate("/");
        // }
        return res.json();
      })

      .then((data) => {
        setServicesList(data);
      });
  }, [servicesList]);
  if (loading) {
    return <p>loading......</p>;
  }
  return (
    <div className="card bg-base-100 mt-10 mb-10">
      <h2 className="text-2xl text-center mt-5 mb-5 font">
        Provide awesome <span className="service-color">services</span> :{" "}
        {servicesList?.length}
      </h2>

      <div className="max-w-7xl mx-auto service-grid">
        {servicesList?.map((service) => (
          <div key={service._id}>
            <OrderServiceEmail serviceList={service}></OrderServiceEmail>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderServiceList;
