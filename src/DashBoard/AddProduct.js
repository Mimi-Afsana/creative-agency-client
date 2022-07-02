import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddProduct = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const clickHome = () => {
    navigate("/home");
  };
  if (loading) {
    return <p>fgggh....</p>;
  }
  const addProducts = async (event) => {
    event.preventDefault();
    const email = user.email;
    const image = event.target.image.value;
    const name = event.target.name?.value;
    const service = event.target.service?.value;
    const description = event.target.description.value;
    const price = event.target.price.value;

    const addProduct = {
      email,
      image,
      name,
      description,
      price,
    };
    // console.log(addProduct);
    const url = `http://localhost:5000/addItem`;
    const { data } = await axios.post(url, addProduct, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      
    });
    console.log(data)
    toast.success("Product added Successfully");
    event.target.reset();
  };
  return (
    <div>
      <h3 className="text-xl lg:pl-96 lg:ml-28 lg:mt-16">Add Product</h3>
      <form onSubmit={addProducts}>
        <div class=" sm:mt-5">
          <div class="hero-content flex-col lg:flex-row-reverse">
            <div class="card flex-shrink-0 w-full max-w-sm">
              <div class="card-body">
                <div class="form-control"></div>
                
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
                  <label htmlFor="" className="font-bold mb-2">
                    Product Title
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Title"
                    class="input input-bordered"
                  />
                </div>
                <div className="flex">
                  <div class="">
                    <label htmlFor="" className="font-bold mb-2">
                      Price
                    </label>
                    <input
                      name="price"
                      type="number"
                      placeholder="Price"
                      class="input input-bordered w-36 lg:mr-3"
                    />
                  </div>
                  <div class="">
                    <label htmlFor="" className="font-bold mb-2">
                      Image
                    </label>
                    <input
                      name="image"
                      type="text"
                      placeholder="Upload image"
                      class="input input-bordered w-40"
                    />
                  </div>
                </div>
                <div class="form-control">
                  <label htmlFor="" className="font-bold mb-2">
                    Product Description
                  </label>
                  <textarea
                    className=" pl-2 border"
                    name="description"
                    id=""
                    cols="10"
                    rows="5"
                    placeholder="Product details"
                  ></textarea>
                </div>
                <div class=" mt-3">
                  <button class="btn btn-sm px-8">Add New product</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
