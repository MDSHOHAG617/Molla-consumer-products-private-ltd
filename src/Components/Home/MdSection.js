import React from "react";
import Md from "../../Images/Md.png";

const MdSection = () => {
  return (
    <div>
      <div class="hero min-h-screen mx-auto ">
        <div class="hero-content flex-col lg:flex-row-reverse  mx-auto">
          <div>
            <img alt="" src={Md} class="max-w-sm rounded-lg shadow-2xl" />
            <h2 className="mt-4 text-xl font-bold">Mr. Abu Taleb</h2>
          </div>
          <div className="mx-auto">
            <h1 class="text-2xl font-bold">
              Messages from (Md) Managing Director
            </h1>
            <p class="py-6 text-justify">
              In the emergence of 21st century, consumer consciousnesses are
              ameliorated day by day. Now their product selection is in the term
              of quality rather than quantity & price. They are always looking
              forward to safer & security of their regular product. Considering
              above Molla Consumer Products( pvt).Ltd. engages in the field of
              food industry since March 2008. The Management of Molla Consumer
              Products( pvt).Ltd is a nwide growth of Molla Consumer Products(
              pvt).Ltd network & supply Chain only due to our customers.
              Presently we are having 150 dealers, more than dozens of chain
              shops, eight numbers of branches & residential offices to serve
              you. More than 50 products option to your wide variety choice. 24
              hour supervision of foreign technician for producing quality,
              imported Taiwan, Italian machinery, good quality raw materials
              confirming your satisfaction. Very near future we are stepping in
              for beverage products. Hope all of you will like it. We are
              committed to your better health providing, hygienic & fresh
              product, sufficient food values for your nutrition and taste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MdSection;
