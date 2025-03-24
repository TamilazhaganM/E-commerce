import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
   const favourite =useSelector((state)=>state.Liked.heartcount)
   const cards=useSelector((state)=>state.Liked.cardcount)
   const navigate=useNavigate()
   const [menuOpen, setMenuOpen] = useState(false);
   function handlePayment(){
    navigate('/payment')
   }
  return (
    <div>
     {/* Hamburger for md & sm */}
     <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-amber-950"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 6.75h15m-15 5.25h15m-15 5.25h15"
              />
            </svg>
          </button>
        </div>
         {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-white shadow-lg  w-full p-4 rounded-xl">
          <ul className="flex flex-col gap-4 text-amber-950 font-italic text-sm z-100">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/home/mens">MENS</Link></li>
            <li><Link to="/home/womens">WOMENS</Link></li>
            <li><Link to="/home/kids">KIDS</Link></li>
            <li><Link to="/home/accessories">ACCESSORIES</Link></li>
            <li><Link to="/home/partywears">PARTY WEAR</Link></li>
            <li className="flex gap-2 items-center">
              <span>Favourites: {favourite}</span>
              <span>Cart: {cards}</span>
            </li>
            <li><button onClick={handlePayment} className="w-2/4 bg-amber-950 text-white p-2 rounded">Go to Payment</button></li>
          </ul>
        </div>
      )}
      <nav className="hidden lg:flex fixed top-0 left-0 w-full bg-white z-50 pt-10">
        <div className="flex justify-between p-2 ">
          <div className=" absolute top-0 left-1/2 py-1 mx-6  z-51 transform -translate-x-1/2">
            <h1 className=" text-4xl text-center font-Bigshoulder tracking-widest text-black">ZYRA</h1>
          </div>
          <ul className="flex ml-20 gap-9 text-base my-auto px-10">
            <li className=" text-amber-950 hover:text-amber-400 font-italic text-xs">
              <Link to="/">HOME</Link>
            </li>
            <li className="relative group text-amber-950 font-italic text-xs">
              <Link to={"/home/mens"} className=" hover:text-amber-400 ">
                MENS
              </Link>
              <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg w-[100px] p-2 ">
                <ul className="w-full">
                  <li className="hover:text-amber-400 cursor-pointer p-2 w-full">
                    <Link to={"/home/mens"} className=" hover:text-amber-400 ">
                      SHIRTS
                    </Link>
                  </li>
                  <hr></hr>
                  <li className="hover:text-amber-400 cursor-pointer p-2 w-full">
                    <Link
                      to={"/home/mens-T-shirts"}
                      className=" hover:text-amber-400 "
                    >
                      {" "}
                      T-SHIRTS
                    </Link>
                  </li>
                  <hr></hr>
                </ul>
              </div>
            </li>

            <li className=" text-amber-950 font-italic group relative text-xs">
              <Link to={"/home/womens"} className=" hover:text-amber-400 ">
                WOMENS
              </Link>
              <div className="hidden group-hover:block absolute left-0 bg-white shadow-lg p-2">
                <ul className="w-full">
                  <li className="hover:text-amber-400 cursor-pointer p-2 w-full">
                    <Link
                      to={"/home/womens"}
                      className=" hover:text-amber-400 "
                    >
                      SAREES
                    </Link>
                  </li>{" "}
                  <hr></hr>
                  <li className="hover:text-amber-400 cursor-pointer p-2 w-full">
                    <Link
                      to={"/home/womens-modern"}
                      className=" hover:text-amber-400 "
                    >
                      {" "}
                      MODERN
                    </Link>
                  </li>{" "}
                  <hr></hr>
                </ul>
              </div>
            </li>
            <li className=" text-amber-950 font-italic group relative text-xs">
              <Link to={"/home/kids"} className=" hover:text-amber-400 ">
                KIDS
              </Link>
              <div className="hidden group-hover:block absolute left-0 bg-white shadow-lg p-2">
                <ul className="">
                  <li className="hover:text-amber-400 cursor-pointer p-2 w-full">
                    <Link to={"/home/kids"} className=" hover:text-amber-400 ">
                      PRINCE
                    </Link>
                  </li>{" "}
                  <hr></hr>
                  <li className="hover:text-amber-400 cursor-pointer p-2 w-full">
                    <Link
                      to={"/home/kids-princess"}
                      className=" hover:text-amber-400 "
                    >
                      PRINCESS
                    </Link>
                  </li>{" "}
                  <hr></hr>
                </ul>
              </div>
            </li>
            <li className=" text-amber-950 hover:text-amber-400 font-italic text-xs">
              <Link to={"/home/accessories"} className=" hover:text-amber-400 ">
                ACCESSORIES
              </Link>
            </li>
            <li className=" text-amber-950 hover:text-amber-400 font-italic text-xs">
            <Link to={"/home/partywears"} className=" hover:text-amber-400 ">
                PARTY WEAR
              </Link>
            </li>
          </ul>
          <div className="flex items-center rounded-lg  ml-5   w-40">
            <button className="bg-white text-white px-2 py-1  hover:bg-gray-100 hover:rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 text-amber-950"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search..."
              className="flex-1  bg-white text-gray-700 focus:outline-none border-b-2"
            />
          </div>
          <div className="flex">
          <button className="flex items-center justify-center bg-white-500 text-white px-4 py-2 rounded hover:bg-gray-200 w-30  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-amber-950"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span className="ml-2  text-amber-950 font-italic text-xs">
              LOG IN
            </span>
          </button>
          <button className="flex items-center justify-center  px-4 py-2 rounded hover:bg-gray-200 w-30  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-amber-950"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          {favourite > 0 && (
            <span className="absolute top-12 right-16 bg-red-500 text-white text-xs px-1.5 rounded-full">
              {favourite}
            </span>
          )}
          </button>
          

          <button className="flex  justify-center bg-white-500 text-white px-4 py-2 rounded hover:bg-gray-200 w-30" onClick={handlePayment}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 text-amber-950"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            {cards > 0 && (
            <span className="absolute top-12 right-2 bg-black text-white text-xs px-1.5 rounded-full">
              {cards}
            </span>
          )}
          </button>
          </div>
          
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
