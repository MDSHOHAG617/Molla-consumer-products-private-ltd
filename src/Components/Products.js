import React from "react";
import product1 from "../Images/products1.jpeg";
import product2 from "../Images/products2.jpeg";
import product3 from "../Images/products3.jpeg";
import product4 from "../Images/products4.jpeg";
import product5 from "../Images/products5.jpeg";
import product6 from "../Images/products6.jpeg";
import product7 from "../Images/products7.jpeg";
import product8 from "../Images/products8.jpeg";
import product9 from "../Images/products9.jpeg";
import product10 from "../Images/products10.jpeg";
import product11 from "../Images/products11.jpeg";
import product12 from "../Images/products12.jpeg";
import product13 from "../Images/products13.jpeg";
import product14 from "../Images/products14.jpeg";
import product15 from "../Images/products15.jpeg";
import product17 from "../Images/products17.jpeg";
import product18 from "../Images/products18.jpeg";
import bbqcanacur from "../Images/pbbqcanacur.jpeg";
import cocopast from "../Images/pcocopaste.jpeg";
import dairymilk from "../Images/pdairymilk.jpeg";
import licheedrink from "../Images/plicheedrink.jpeg";
import mangojuice from "../Images/pmangojuice.jpeg";
import racingchocolate from "../Images/pracingchocolatecar.jpeg";
import lichesngl from "../Images/plicheedrinksngl.jpeg";

const Products = () => {
  return (
    <div className="">
      <h2 className="mb-8 text-3xl font-bold bg-slate-200 p-8 ">
        Welcome to Products gallery{" "}
      </h2>
      <div className="Products grid grid-cols-1 lg:grid-cols-3   gap-8">
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-48 mt-4" src={product10} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 mt-6" src={product11} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Potato Crackers</h2>
              <p className="justify-center">Our All time best product</p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 mt-8" src={product12} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">lychee </h2>
              <p className="justify-center">Our most delicious product</p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 mt-8" src={product13} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Matar fry</h2>
              <p className="justify-center">
                Our Crispy and spicy product ever
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-52 mt-6" src={product14} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Dal fry</h2>
              <p className="justify-center">Our best reviewed spicy product </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 mt-6" src={product15} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Fruit Pudding </h2>
              <p className="justify-center">
                Our most reviewed delicious product
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 mt-6" src={product17} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">ICE Pop Drinks </h2>
              <p className="justify-center">
                our best selling product for summer
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-96 h-72 p-8" src={product18} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Nacho Cheese </h2>
              <p className="justify-center">
                A tortilla chip is a snack food made from corn tortillas, which
                are cut into triangles and then fried or baked{" "}
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 p-4 mt-6" src={bbqcanacur} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Bar-B-Q Chanachur </h2>
              <p className="justify-center">
                Our most spicy and delicious product for every time
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 p-4 mt-6" src={cocopast} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Choco Paste </h2>
              <p className="justify-center">
                Our chocolaty product, most famous for children
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 h-72 p-4 mt-6" src={dairymilk} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Dairy milk </h2>
              <p className="justify-center">
                Our chocolaty product, most famous for children
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img
                className="w-56 h-72 p-4 mt-6"
                src={licheedrink}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Lichee Drink </h2>
              <p className="justify-center">
                Our best selling product on summer
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img
                className="w-56 h-72 p-4 mt-6"
                src={mangojuice}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Mango Drink </h2>
              <p className="justify-center">
                Our best selling product on summer
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img
                className="w-56 h-72 p-4 mt-6"
                src={racingchocolate}
                alt="Shoes"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Racing Chocolate car </h2>
              <p className="justify-center">
                Our chocolaty product, most famous for children
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="w-56 h-72 p-4 mt-6" src={lichesngl} alt="Shoes" />
            </figure>
            <div class="card-body">
              <h2 class="card-title justify-center ">Lichee Drink </h2>
              <p className="justify-center">
                Our best selling product for summer
              </p>
              <div class="card-actions justify-center">
                <button class=" btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*------------- Others products-------  */}
      <h2 className="text-3xl font-bold bg-slate-200 p-8 mt-32 mb-8 ">
        Others Products gallery{" "}
      </h2>
      <div className="Products grid grid-cols-1 lg:grid-cols-3 mb-8  gap-8">
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="" src={product1} alt="Shoes" />
            </figure>
            <div class="card-body">
              {/* <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p> */}
              <div class="card-actions justify-center">
                <button class="my-4 btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="" src={product2} alt="Shoes" />
            </figure>
            <div class="card-body">
              {/* <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p> */}
              <div class="card-actions justify-center">
                <button class="my-4 btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="" src={product3} alt="Shoes" />
            </figure>
            <div class="card-body">
              {/* <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p> */}
              <div class="card-actions justify-center">
                <button class="my-4 btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="" src={product4} alt="Shoes" />
            </figure>
            <div class="card-body">
              {/* <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p> */}
              <div class="card-actions justify-center">
                <button class="my-4 btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className="" src={product5} alt="Shoes" />
            </figure>
            <div class="card-body">
              {/* <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p> */}
              <div class="card-actions justify-center">
                <button class="my-4 btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div class=" mx-auto  card card-compact w-96 bg-base-100 shadow-xl hover:shadow-[#615855]  hover:shadow-2xl">
            <figure>
              <img className=" " src={product6} alt="Shoes" />
            </figure>
            <div class="card-body">
              {/* <h2 class="card-title justify-center ">ICE Lolly Pop</h2>
              <p className="justify-center">
                Our one of the best product for the summer
              </p> */}
              <div class="card-actions justify-center">
                <button class=" my-4 btn btn-md bg-[#FF8A65] border-none">
                  Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
