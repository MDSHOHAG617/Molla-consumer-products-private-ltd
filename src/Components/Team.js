import React from "react";
import md from "../Images/Md.png";
import chairman from "../Images/chairman.jpeg";
import ed from "../Images/Ed.jpeg";
import chemist from "../Images/teamM1.jpg";
import nsm from "../Images/nsm.jpeg";
import ceo from "../Images/ceo.jpeg";
import adminOfficer from "../Images/adminofficer.jpeg";
import admin from "../Images/admin.jpeg";

const Team = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="top-team flex justify-center gap-8">
        <div className="propretor">
          <div class="avatar ">
            <div class="w-28  rounded">
              <img src={chairman} />
            </div>
          </div>
          <h2 className=" font-bold">Mr. Salim Molla</h2>
          <span className="">Honorable Chairman</span>
          {/* <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div> */}
        </div>
        <div className="propretor">
          <div class="avatar ">
            <div class="w-28  rounded">
              <img src={md} />
            </div>
          </div>
          <h2 className=" font-bold">Mr. Abu Taleb</h2>
          <span className="">Managing Director</span>
          {/* <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div> */}
        </div>
      </div>
      <hr />

      <div className="team mt-8 grid gap-8 grid-cols-2 lg:grid-cols-4 mx-12 lg:mx-72">
        <div className="team-members">
          <div class="avatar">
            <div class="w-28 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={ceo} alt="img" />
            </div>
          </div>
          <h2 className=" font-bold">Kazi Arifur Rahman</h2>
          <span className="">CEO</span>
          <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="team-members">
          <div class="avatar">
            <div class="w-28 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={ed} />
            </div>
          </div>
          <h2 className=" font-bold">Saiful Islam</h2>
          <span className="">Executive Director </span>
          <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="team-members">
          <div class="avatar">
            <div class="w-28 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={chemist} />
            </div>
          </div>
          <h2 className=" font-bold">Md. ENAMUL HAQUE</h2>
          <span className="">Chemist </span>
          <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="team-members">
          <div class="avatar">
            <div class="w-28 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={nsm} />
            </div>
          </div>
          <h2 className=" font-bold">KAMAL Merdha</h2>
          <span className="">NSM</span>
          <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="team-members hidden lg:block">
          <div class="avatar">
            <div class="">{/* <img src="" alt="" /> */}</div>
          </div>
          <h2 className=" font-bold"></h2>
          <span className=""></span>
          <div className="media flex justify-center items-center">
            {/* <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a> */}
          </div>
        </div>
        <div className="team-members">
          <div class="avatar">
            <div class="w-28 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={adminOfficer} alt="img" />
            </div>
          </div>
          <h2 className=" font-bold">Hemal Islam</h2>
          <span className="">Admin Officer</span>
          <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="team-members ">
          <div class="avatar">
            <div class="w-28 rounded-full ring  ring-offset-base-100 ring-offset-2">
              <img src={admin} alt="img" />
            </div>
          </div>
          <h2 className=" font-bold">Mobia Hasan (Niyat)</h2>
          <span className="">Admin </span>
          <div className="media flex justify-center items-center">
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/facebook-new.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2 "
                src="https://img.icons8.com/ios-filled/344/twitter-circled--v1.png"
                alt=""
              />
            </a>
            <a href="">
              <img
                className=" w-8 m-2"
                src="https://img.icons8.com/ios-filled/344/linkedin-circled.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
