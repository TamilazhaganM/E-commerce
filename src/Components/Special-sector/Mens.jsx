import React, { useState } from "react";
import Mens1 from "../../assets/image/Mens-section/mens1.jpg";
import Mens11 from "../../assets/image/Mens-section/mens11.jpg";
import Mens2 from "../../assets/image/Mens-section/mens2.jpg";
import Mens22 from "../../assets/image/Mens-section/mens22.jpg";
import Mens3 from "../../assets/image/Mens-section/mens3.jpg";
import Mens33 from "../../assets/image/Mens-section/mens33.jpg";
import { useDispatch } from "react-redux";
import {incrementHeart,decrementHeart, decrementCard, incrementCart,addToCart,addToWish } from "../../Slices/slice";


export default function Mens() {
  const [liked, setLiked] = useState({});
  const [cardAdded, setCardAdded] = useState({});
  const [zoomImage,setZoomImage]=useState(null)
  const [select,setSelect]=useState([])
  const [wishlist,setWishlist]=useState([])
  const Dispatch=useDispatch()


 function colorCheck(id,visibelImage,rate) {
       setLiked((prev) => {
         const isLiked=prev[id]
         if(isLiked){
           Dispatch(decrementHeart())
         }else{
           Dispatch(incrementHeart())
           const wishProduct ={id,image:visibelImage,rate}
           setWishlist((prev)=>[...prev,wishProduct])
           Dispatch(addToWish(wishProduct))
         }
         return{
           ...prev,
           [id]: !prev[id],
         }
         })
   
     }
    function checkcard(id,visibleImage,rate) {
        setCardAdded((prev) => {
          const isAdded=prev[id]
          if(isAdded){
            Dispatch(decrementCard())
          }else{
            Dispatch(incrementCart())
            const product={id,image:visibleImage,rate};
            setSelect((prev)=>[...prev,product])
            Dispatch(addToCart(product))
          }
          return{
            ...prev,
            [id]: !prev[id],
          }
          })      
      }
  console.log(select)
  function zoomEffect(ImageUrl){
    setZoomImage(ImageUrl)
  }
  function closeZoom(){
    setZoomImage(null)
  }

  const Images = [
    { id: 1, visibleImage: Mens1, rate: 1000 },
    { id: 2, visibleImage: Mens2, rate: 2000 },
    { id: 3, visibleImage: Mens3, rate: 1500 },
    { id: 4, visibleImage: Mens11, rate: 1800 },
    { id: 5, visibleImage: Mens22, rate: 2200 },
    { id: 6, visibleImage: Mens33, rate: 2500 },
  ];

  return (
    <div className="p-5">
      <div className="lg:text-xs font-semibold lg:my-20 bg-white shadow-sm">
        <h2>MEN'S | CLOTHING-SHIRTS</h2>
        <p className="text-center py-5">Showing: 6 Results</p>
      </div>

      <div className="flex flex-wrap gap-5 justify-center lg:justify-around">
        {Images.map((image, index) => {
          return (
            <div
              className="relative w-full lg:w-1/4 group overflow-hidden h-[300px] justify-center"
              key={index}
            >
              <img
                className="w-full md:mx-auto h-full object-cover absolute duration-200 ease-in-out opacity-100 group-hover:opacity-90"
                src={image.visibleImage}
                alt="Default"
              />
              <div className="absolute gap-3 bottom-0 right-0 left-0 flex justify-center py-6 bg-white opacity-0 group-hover:opacity-100 md:opacity-100 transition duration-300 md:flex">
                <button
                  className="group  rounded-full transition-colors 
                  "
                  onClick={() => colorCheck(image.id,image.visibleImage,image.rate)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={liked[image.id] ? "red" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>

                {/* Other buttons */}
                <button className="group" onClick={()=>checkcard(image.id,image.visibleImage,image.rate)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={cardAdded[image.id]?"black":"none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </button>

                <button className="group" onClick={()=>zoomEffect(image.visibleImage)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6"
                    />
                  </svg>
                </button>
              </div>
              <p className="absolute text-xs italic bottom-4 w-18 left-1/2 -translate-x-5 -my-3 mx-auto justify-center">
                RS. {image.rate ?? "N/A"}
              </p>
            </div>
          );
        })}
      </div>
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeZoom}
        >
          <img
            src={zoomImage}
            alt="Zoomed Product"
            className="max-w-full max-h-full rounded-xl shadow-xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={closeZoom}
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
