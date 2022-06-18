import React from "react";
import "./OurWork.css";
const OurWork = () => {
  return (
    <div className="our-work mx-auto">
      <h3 className="text-white text-2xl text-center mb-10 pt-16">
        Here are some of our works
      </h3>

      <div className=" min-h-screen mimi">
        <div class="carousel lg:w-2/4 mx-auto">
          <div id="item1" class="carousel-item w-full">
            <img src="https://i.ibb.co/6RZ1vYY/carousel-1.png" />
          </div>
          <div id="item2" class="carousel-item w-full">
            <img src="https://i.ibb.co/3R06pkh/carousel-3.png" />
          </div>
          <div id="item3" class="carousel-item w-full">
            <img src="https://i.ibb.co/X84Z2VB/carousel-5.png" />
          </div>
        </div>
        <div class="flex justify-center w-full py-2 gap-2">
          <a href="#item1" class="btn btn-xs">1</a>
          <a href="#item2" class="btn btn-xs">2</a>
          <a href="#item3" class="btn btn-xs">3</a>
        </div>
      </div>
    </div>
  );
};

export default OurWork;
