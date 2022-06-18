import React from "react";
import frame from "../../images/logos/Frame.png";

const Banner = () => {
  return (
    <div className='bg-color'>
      <div class="card lg:card-side max-w-6xl mx-auto pb-10">
        <div class="card-body pr-32">
          <h2 class="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
        </div>
        <div className="">
          <img src={frame} alt="Album" width="624px" height="412px" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
