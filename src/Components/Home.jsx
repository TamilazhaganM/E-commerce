import React, { useRef } from "react";
import image1 from "../assets/image/home3.jpg";

function Home() {
  const movecomponent = useRef();
  function handleshop() {
    const shopping = document.getElementById("sector");
    if (shopping) {
      shopping.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className=" lg:h-[912px]" >
      <img className="w-screen h-96 sm:h-auto md:h-auto lg:h-auto  relative" src={image1} alt="Home image" />
      <div className=" w-[150px] h-[150px] bottom-[100px] relative md:w-[200px] md:h-[200px] md:relative md:bottom-[200px]  flex flex-col justify-center items-center lg:w-[300px] lg:h-[400px] lg:relative bg-gray-800 lg:bottom-[400px] left-2">
        <h2 className="lg:text-5xl text-2xl p-2 text-white font-Bigshoulder ">
          NEW COLLECTION
        </h2>
        <button
          onClick={handleshop}
          className="text-md p-3 mt-5 bg-amber-950 text-white  border border-amber-900 transition duration-300 hover:bg-white hover:text-black hover:border-black "
        >
          SHOP NOW
        </button>
      </div>
    </div>
  );
}

export default Home;
