import React from "react";
import Image1 from "../assets/image/home1.webp";
import Image2 from "../assets/image/Boysmodel.jpg";
import Image3 from "../assets/image/Kidsmodel.jpg";
import Image4 from "../assets/image/Boysaccessories.jpg";
import { useNavigate } from "react-router-dom";

function Sector() {
  const navigate=useNavigate()
  const Images = [
    { src: Image1, alt: "Women Sector", route:"/home/womens" },
    { src: Image2, alt: "Mens Sector",route:'/home/mens' },
    { src: Image3, alt: "Kids Sector",route:'/home/kids' },
    { src: Image4, alt: "Accessories Sector",route:'/home/accessories' },
  ];
  function handleSpecialSector(route){
    navigate(route)
  }
  return (
    <div id="sector">
      <h1 className="text-7xl text-center mt-10">DRESSES</h1>
      <h5 className="text-xl text-center mb-5">There's One For EveryOne</h5>
      <div className="flex flex-wrap justify-around gap-4 ">
        {Images.map((image, index) => (
            <div key={index}   onClick={()=>handleSpecialSector(image.route)} className="relative group w-[290px] h-[330px] my-10 overflow-hidden cursor-pointer">
            <img
            className="w-full h-full object-cover transition transform duration-300 group-hover:scale-105 "
            src={image.src}
            alt={image.alt}
          
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-white text-2xl font-semibold">{image.alt}</h3>
          </div>
            </div>
         
        ))}
      </div>
    </div>
  );
}

export default Sector;
