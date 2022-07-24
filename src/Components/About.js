import React from "react";
import industry from "../Images/industry.jpeg";
import concern from "../Images/concern.png";
import mission from "../Images/mission.png";
import vision from "../Images/vision.png";

const About = () => {
  return (
    <div className="mb-16">
      {/* top section */}
      <img className=" w-full h-96" src={industry} alt="" />

      {/* mid section */}

      <div className="mid-section grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        <div class="card vision w-96 mx-auto bg-base-100  hover:shadow-2xl">
          <figure class="px-10 pt-10">
            <img className="" src={vision} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">OUR VISION </h2>
            <p className="text-justify">
              Our vision is to be one of the leading Food manufacturers in the
              country through acquiring remarkable position to the World Food
              Market.
            </p>
          </div>
        </div>
        <div class="card mission w-96 mx-auto bg-base-100  hover:shadow-2xl">
          <figure class="px-10 pt-10">
            <img className="" src={mission} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">OUR MISSION </h2>
            <p className="text-justify">
              Our mission is to produce quality food products that ensure 100%
              hygiene for the consumer’s health through state-of-the-art
              technology with dynamic and expertise management to serve all
              level consumers of home and abroad with the best quality products
              & services with reasonable price.
            </p>
          </div>
        </div>
        <div class="card concern mx-auto w-96 bg-base-100  hover:shadow-2xl">
          <figure class="px-10 pt-10">
            <img className="" src={concern} alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title">OUR CONCERN </h2>
            <p className="text-justify">
              To make sure about the nutrition available in our product.
              Consumers always want products that have minimal impact on the
              land, water, and air, so that it's also our concern
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
