import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-color">
      <div class="lg:pl-80 lg:mt-10 sm:mt-5 lg:pt-10">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="card flex-shrink-0 w-full max-w-sm">
            <div class="card-body">
              <div class="form-control">
                <input
                  type="text"
                  placeholder="email address"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <input
                  type="text"
                  placeholder="name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <textarea
                  className="rounded pl-2"
                  name="textarea"
                  id=""
                  cols="10"
                  rows="5"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div class=" mt-3">
                <button class="btn btn-sm px-4">Send</button>
              </div>
            </div>
          </div>
          <div class="text-center lg:text-left lg:pr-96">
            <h1 class="text-3xl font-bold">Login now!</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <p className="text-center mt-5 lg:pr-64">copyright Orange labs 2020</p>
      </div>
    </div>
  );
};

export default Footer;
