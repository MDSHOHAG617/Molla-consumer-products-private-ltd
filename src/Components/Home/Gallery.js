import React from "react";
import gl1 from "../..//Images/gl1.jpeg";
import gl2 from "../..//Images/gl2.jpeg";
import gl3 from "../..//Images/gl3.jpeg";
import gl4 from "../..//Images/gl4.jpeg";
import gl5 from "../..//Images/gl5.jpeg";
import gl6 from "../..//Images/gl6.jpeg";
import gl7 from "../..//Images/gl7.jpeg";
import gl8 from "../..//Images/gl8.jpeg";
import gl9 from "../..//Images/gl9.jpeg";
import gl10 from "../..//Images/gl10.jpeg";
import gl11 from "../..//Images/gl11.jpeg";
import gl12 from "../..//Images/gl12.jpeg";
import gl13 from "../..//Images/gl13.jpeg";
import gl14 from "../..//Images/gl14.jpeg";
import gl15 from "../..//Images/gl15.jpeg";
import gl16 from "../..//Images/gl16.jpeg";
import gl17 from "../..//Images/gl17.jpeg";
import gl18 from "../..//Images/gl18.jpeg";
import gl19 from "../..//Images/gl19.jpeg";

import gl120 from "../..//Images/gl1120.jpeg";
import gl21 from "../..//Images/gl21.jpeg";
import gl22 from "../..//Images/gl22.jpeg";

const Gallery = () => {
  return (
    <div className="my-32">
      {/* heading */}
      <h1 className="text-3xl font-bold my-16">Photo Gallery</h1>
      <div className="main-gallery grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl21} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl2} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl4} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl9} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl10} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl11} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl12} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl14} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl18} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl13} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl17} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl120} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
