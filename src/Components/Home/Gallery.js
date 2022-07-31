import React from "react";
import gl2 from "../..//Images/gl2.jpeg";
import gl4 from "../..//Images/gl4.jpeg";
import gl9 from "../..//Images/gl9.jpeg";
import gl10 from "../..//Images/gl10.jpeg";
import gl11 from "../..//Images/gl11.jpeg";
import gl12 from "../..//Images/gl12.jpeg";
import gl13 from "../..//Images/gl13.jpeg";
import gl14 from "../..//Images/gl14.jpeg";
import gl17 from "../..//Images/gl17.jpeg";
import gl18 from "../..//Images/gl18.jpeg";
import gl120 from "../..//Images/gl1120.jpeg";
import gl21 from "../..//Images/gl21.jpeg";
import gl24 from "../..//Images/gl24.jpeg";
import gl25 from "../..//Images/gl25.jpeg";
import gl26 from "../..//Images/gl26.jpeg";
import gl27 from "../..//Images/gl27.jpeg";

const Gallery = () => {
  return (
    <div className="my-32">
      {/* heading */}
      <h1 className="text-3xl font-bold my-16">Photo Gallery</h1>
      <div className="main-gallery grid grid-cols-2 lg:grid-cols-4 gap-4 ">
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl24} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl25} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl26} alt="" />
        </div>
        <div className="gallery">
          <img className="w-72 mx-auto rounded" src={gl27} alt="" />
        </div>
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
