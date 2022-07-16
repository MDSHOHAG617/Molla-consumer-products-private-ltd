import React from "react";
import product1 from "../Images/products1.jpeg";
import product2 from "../Images/products2.jpeg";
import product3 from "../Images/products3.jpeg";
import product4 from "../Images/products4.jpeg";
import product5 from "../Images/products5.jpeg";
import product6 from "../Images/products6.jpeg";

const Products = () => {
  return (
    <div className="mb-8">
      <h2 className="my-8 text-2xl font-bold">Welcome to Products gallery </h2>
      <div className="  grid grid-cols-1 lg:grid-cols-3   gap-8">
        <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
          <figure>
            <img src={product1} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center ">Goodly</h2>
            <p className="justify-center">Here some of our products details</p>
            <div class="card-actions justify-center">
              <button class=" btn btn-md bg-[#FF8A65] border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
          <figure>
            <img src={product2} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center ">Goodly</h2>
            <p className="justify-center">Here some of our products details</p>
            <div class="card-actions justify-center">
              <button class=" btn btn-md bg-[#FF8A65] border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
          <figure>
            <img src={product3} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center ">Goodly</h2>
            <p className="justify-center">Here some of our products details</p>
            <div class="card-actions justify-center">
              <button class=" btn btn-md bg-[#FF8A65] border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
          <figure>
            <img src={product4} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center ">Goodly</h2>
            <p className="justify-center">Here some of our products details</p>
            <div class="card-actions justify-center">
              <button class=" btn btn-md bg-[#FF8A65]  border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
          <figure>
            <img src={product5} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center ">Goodly</h2>
            <p className="justify-center">Here some of our products details</p>
            <div class="card-actions justify-center">
              <button class=" btn btn-md bg-[#FF8A65] border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
          <figure>
            <img src={product6} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title justify-center ">Goodly</h2>
            <p className="justify-center">Here some of our products details</p>
            <div class="card-actions justify-center">
              <button class=" btn btn-md bg-[#FF8A65] border-none">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
