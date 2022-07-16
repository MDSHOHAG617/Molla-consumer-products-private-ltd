import React from "react";

const ContactUs = () => {
  return (
    <div className="my-8">
      {/* <h1 className="text-2xl font-bold my-8">Contact </h1> */}
      {/* <div class="card mx-auto w-96 bg-base-100 shadow-2xl">
        <div class="card-body">
          <h2 class="card-title mb-8 mx-auto font-bold text-2xl">
            Contact Us with Email
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Type your name"
            class="input input-bordered input-error w-full max-w-xs"
          />
          <input
            type="text"
            name="email"
            placeholder="Type your email"
            class="input input-bordered input-error w-full max-w-xs"
          />
          <input
            type="password"
            name="password"
            placeholder="Type password"
            class="input input-bordered input-error w-full max-w-xs"
          />
          <div class="card-actions justify-center">
            <button class="btn btn-btn btn-md bg-[#FF8A65] border-none ">
              Send Email
            </button>
          </div>
        </div>
      </div> */}

      <div
        class="hero min-h-screen"
        style={{ backgroundImage: ` url(https://placeimg.com/1000/800/arch)` }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md">
            <div class="card mx-auto w-96 bg-base-100 shadow-2xl">
              <div class="card-body">
                <h2 class="card-title text-black mb-8 mx-auto font-bold text-2xl">
                  Contact Us with Email
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Type your email"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Type password"
                  class="input input-bordered input-error w-full max-w-xs"
                />
                <div class="card-actions justify-center">
                  <button class="btn btn-btn btn-md bg-[#FF8A65] border-none ">
                    Send Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
