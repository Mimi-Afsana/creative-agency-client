import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router";
import auth from "../firebase.init";
import { toast } from "react-toastify";

const Orders = () => {
  const { Id } = useParams();
  const [user, loading] = useAuthState(auth);
  console.log(Id);
  const [services, setServices] = useState({});

  useEffect(() => {
    if (Id) {
      const url = `http://localhost:5000/service/${Id}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setServices(data));
    }
  }, [services]);

  // useEffect(() => {
  //   const url = `http://localhost:5000/serviceEmail/${user?.email}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [services]);

  if (loading) {
    return <p>loading.....</p>;
  }

  const handleBooking = (event) => {
    event.preventDefault();

    const userName = event.target.name.value;
    const email = event.target.email.value;
    const serviceName = event.target.serviceName.value;
    const price = event.target.price.value;
    const image = event.target.image.value;
    const description = event.target.description.value;

    const booking = {
      price,
      userName,
      email,
      image,
      serviceName,
      description,
    };
    console.log(booking);
    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("booking added successfully");
      });
  };

  return (
    <div>
      <h3 className="text-xl lg:pl-96 lg:ml-28 lg:mt-16">
        Order for {services?.name || ""}
      </h3>
      <form onSubmit={handleBooking}>
        <div class=" sm:mt-5">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-full max-w-sm">
              <div class="card-body">
                <div class="form-control">
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name/ company's name"
                    class="input input-bordered"
                    value={user?.displayName || ""}
                    disabled
                  />
                </div>
                <div class="form-control">
                  <input
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    class="input input-bordered"
                    value={user?.email || ""}
                    disabled
                  />
                </div>
                <div class="form-control">
                  <input
                    name="serviceName"
                    type="text"
                    placeholder="Graphic Design"
                    class="input input-bordered"
                    value={services?.name || ""}
                    disabled
                  />
                </div>
                <div className="flex">
                  <div class="">
                    <input
                      name="price"
                      type="number"
                      placeholder="Price"
                      class="input input-bordered w-36 lg:mr-3"
                      value={services?.price || ""}
                      disabled
                    />
                  </div>
                  <div class="">
                    <input
                      name="image"
                      type="text"
                      placeholder="Upload image"
                      class="input input-bordered w-40"
                      value={services?.image || ""}
                      disabled
                    />
                  </div>
                </div>
                <div class="form-control">
                  <textarea
                    className=" pl-2 border"
                    name="description"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="Product details"
                    value={services?.description || ""}
                    disabled
                  ></textarea>
                </div>
                <div class=" mt-3">
                  <button class="btn btn-sm px-8">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Orders;
