import React from "react";

const ContactUs = () => {
  return (
    <div className="mt-8 ">
      <div
        class="hero min-h-screen"
        style={{
          backgroundImage: ` url(https://thumbs.dreamstime.com/b/contact-us-customer-support-hotline-people-connect-call-custo-130157516.jpg)`,
        }}
      >
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content">
          <div class="max-w-md ">
            <div class="rounded-xl backdrop-blur-2xl  mx-auto lg:w-[480px]  shadow-2xl  hover:shadow-sm">
              <div class="card-body">
                <h2 class="card-title  mb-8 mx-auto font-bold text-2xl">
                  Contact Us with Email
                </h2>
                <input
                  type="text"
                  name="name"
                  placeholder="Type your name"
                  class="input input-success  w-full max-w-sm lg:max-w-lg "
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Type your email"
                  class="input input-success w-full max-w-lg lg:max-w-lg mx-auto"
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Type password"
                  class="input input-success w-full max-w-sm lg:max-w-lg"
                />
                <textarea
                  name="message"
                  rows="4"
                  class="textarea input-success  max-w-sm lg:max-w-lg"
                  placeholder="Type your message"
                ></textarea>
                <div class="card-actions justify-center mt-4">
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
