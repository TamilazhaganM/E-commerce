import React from "react";
import Image1 from "../assets/image/CommonSection/CommonImage1.jpg";
import Image2 from "../assets/image/CommonSection/CommonImage2.jpg";
import Image3 from "../assets/image/CommonSection/CommonImage3.jpg";
import Image4 from "../assets/image/CommonSection/CommonAccessories.jpg";

function Common() {
  const Images = [
    { src: Image1, alt: "Formal" },
    { src: Image2, alt: "Social" },
    { src: Image3, alt: "Work" },
  ];
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full gap-5 border">
        {Images.map((image, i) => (
          <div
            key={i}
            className="relative w-full md:w-1/3 h-[750px] overflow-hidden group"
          >
            <img
              className="w-full h-full border-gray-500 border-2 transform transition-transform duration-300 group-hover:scale-110"
              src={image.src}
              alt={image.alt}
            />
            <h2 className="absolute bottom-12 left-1/2 text-5xl text-white font-Bigshoulder transform -translate-x-1/2">
              {image.alt}
            </h2>
          </div>
        ))}
      </div>
      <div className="w-full">
        <img
          className="w-full h-[800px] object-cover border-2 border-gray-500"
          src={Image4}
          alt=""
        />
      </div>
    </div>
  );
  
}

export default Common;
