import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../firebase.init";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  const handleReview = (event) => {
    event.preventDefault();
    const description = event.target.description.value;
    const companyName = event.target.companyName.value;
    const image = event.target.image.value;
    const name = event.target.name.value;

    const review = {
      description,
      companyName,
      image,
      name,
    };
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("review added successfully");
        event.target.reset();
      });
  };
  if (loading) {
    return <p>loading.....</p>;
  }
  return (
    <div>
      <h3 className="text-xl lg:pl-96 lg:ml-28 lg:mt-16">Review</h3>
      <form onSubmit={handleReview}>
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
                    name="companyName"
                    type="text"
                    placeholder="Company's name Desigation"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
                  <input
                    name="image"
                    type="text"
                    placeholder="Upload Your image"
                    class="input input-bordered"
                  />
                </div>
                <div class="form-control">
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
                  <button class="btn btn-sm px-8">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
