import React, { useEffect, useState } from "react";
import "./Gallery.css";
import NavbarSection from "../NavbarSection/NavbarSection";
import { imgData } from "../../datas";

export default function Gallery() {
  const [imgdatas, setImgdatas] = useState(imgData);
  const [selectedImg, setSelectedImg] = useState(null);

  const showImage = (img) => {
    setSelectedImg(img);
  };

  const closeImage = () => {
    setSelectedImg(null);
  };

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div>
      <NavbarSection />

      <div className="header-gallery">
        <h4>گالری ما </h4>
      </div>

      <div className="container-gallery">
        <div className="img-gallery">
          {imgdatas.map((img) => (
            <div>
              <img
                key={img.id} // اضافه کردن key برای هر تصویر
                src={img.img}
                alt="img Gallery"
                onClick={() => showImage(img)}
              />
            </div>
          ))}
        </div>
      </div>

      {selectedImg && (
        <div className="showImage" onClick={closeImage}>
          <div className="pos-rel">
            <h2 className="closeWindow">X</h2>
            <img src={selectedImg.img} alt="show full img" />

            <h5 className="text-white mt-4 text-center">شهروز تیونینگ</h5>
          </div>
        </div>
      )}
    </div>
  );
}
