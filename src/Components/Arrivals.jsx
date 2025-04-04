import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Girl1 from "../assets/image/CarouselModels/modelgirl1.jpg";
import Girl2 from "../assets/image/CarouselModels/modelgirl2.jpg";
import Girl3 from "../assets/image/CarouselModels/modelgirl3.jpg";
import Girl4 from "../assets/image/CarouselModels/modelgirl4.jpg";
import men1 from "../assets/image/CarouselModels/modelmen1.jpg";
import men2 from "../assets/image/CarouselModels/modelmen2.jpg";
import men3 from "../assets/image/CarouselModels/modelmen3.jpg";
import men4 from "../assets/image/CarouselModels/modelmen4.jpg";
import kid1 from "../assets/image/CarouselModels/modelkids1.jpg";
import kid2 from "../assets/image/CarouselModels/modelkids2.jpg";
import mode1blur from "../assets/image/CarouselModels/modelmen1-blur.jpg"
import Girl1blur from "../assets/image/CarouselModels/modelgirl1-blur.jpg";
import Girl2blur from "../assets/image/CarouselModels/modelgirl2-blur.jpg";
import Girl3blur from "../assets/image/CarouselModels/modelgirl3-blur.jpg";
import Girl4blur from "../assets/image/CarouselModels/modelgirl4-blur.jpg";
import men1blur from "../assets/image/CarouselModels/modelmen1-blur.jpg";
import men2blur from "../assets/image/CarouselModels/modelmen2-blur.jpg";
import men3blur from "../assets/image/CarouselModels/modelmen3-blur.jpg";
import men4blur from "../assets/image/CarouselModels/modelmen4-blur.jpg";
import kid1blur from "../assets/image/CarouselModels/modelkids1-blur.jpg";
import kid2blur from "../assets/image/CarouselModels/modelkids2-blur.jpg";

function Arrivals() {
  const images = [
    { src: Girl1, alt: "Girl-1", dressModel: "Striped", price: 1500,placeholderSrc:Girl1blur },
    { src: men1, alt: "Mens-1", dressModel: "Jacket", price: 2000,placeholderSrc:men1blur },
    { src: Girl2, alt: "Girl-2", dressModel: "T-shirt", price: 1200,placeholderSrc:Girl2blur},
    { src: men2, alt: "Mens-2", dressModel: "Sweat-shirt", price: 1000,placeholderSrc:men2blur },
    { src: kid1, alt: "Kid-1", dressModel: "Denim", price: 500,placeholderSrc:kid1blur },
    { src: Girl3, alt: "Girl-3", dressModel: "Tops", price: 1500,placeholderSrc:Girl3blur },
    { src: men3, alt: "Mens-3", dressModel: "Shirts", price: 1200,placeholderSrc:men3blur },
    { src: kid2, alt: "Kid-2", dressModel: "Angels", price: 1500,placeholderSrc:kid2blur },
    { src: Girl4, alt: "Girl-4", dressModel: "Pants", price: 2500,placeholderSrc:Girl4blur },
    { src: men4, alt: "Mens-4", dressModel: "Denim", price: 3000,placeholderSrc:men4blur },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2500,
    cssEase: "ease-in-out",
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="text-center px-4 py-8 w-4/5 mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4 font-Bigshoulder">
        NEW ARRIVALS
      </h1>
      <Slider {...settings}>
        {images.map((image, i) => (
          <div key={i} className="p-2">
            <div className="border rounded-lg bg-white shadow-lg">
              <LazyLoadImage
                className="h-56 w-full object-cover rounded-t-lg"
                src={image.src}
                alt={image.alt}
                effect="blur"
                placeholderSrc={image.placeholderSrc}
              />
              <div className="p-2">
                <p className="italic text-sm text-center">{image.dressModel}</p>
                <p className="italic text-md text-center">Rs.{image.price}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Arrivals;
