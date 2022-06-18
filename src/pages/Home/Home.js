import React from "react";
import AddReview from "../../DashBoard/AddReview";
import Review from "../../DashBoard/Review";
import ShowReview from "../../DashBoard/ShowReview";
import Banner from "../shared/Banner";
import OurWork from "./OurWork";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <OurWork></OurWork>
      <ShowReview></ShowReview>
    </div>
  );
};

export default Home;
