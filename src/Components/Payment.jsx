import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeFromcart } from "../Slices/slice";

function Payment() {
  const cartItems=useSelector((state)=>state.Liked.cart)
  const subtotal = cartItems.reduce((acc, item) => acc + item.rate, 0);
  const shipping = cartItems.length > 0 ? 100 : 0; // ₹100 shipping only if items are in cart
  const total = subtotal + shipping;
  const dispatch=useDispatch()

  const handleremove=(itemid)=>{
    dispatch(removeFromcart(itemid))
  }

  return (
    <div className=" flex flex-col md:flex-row  items-center justify-center gap-8 my-12 md:my-32 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-8">
        {/* Left Side - Delivery Form */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-4">Delivery Details</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">
              Contact Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="border border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter full name"
              className="border border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mobile" className="text-sm font-medium">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="Enter mobile number"
              className="border border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="address" className="text-sm font-medium">
              Address
            </label>
            <textarea
              id="address"
              placeholder="Enter delivery address"
              className="border border-gray-300 rounded p-2"
              rows="3"
            ></textarea>
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="city" className="text-sm font-medium">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City name"
                className="border border-gray-300 rounded p-2"
              />
            </div>
            <div className="flex flex-col gap-2 w-1/2">
              <label htmlFor="state" className="text-sm font-medium">
                State
              </label>
              <input
                type="text"
                id="state"
                placeholder="State"
                className="border border-gray-300 rounded p-2"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 w-1/2">
            <label htmlFor="zip" className="text-sm font-medium">
              Zip / Postal Code
            </label>
            <input
              type="text"
              id="zip"
              placeholder="Zip code"
              className="border border-gray-300 rounded p-2"
            />
          </div>

          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="subscribe" />
            <label htmlFor="subscribe" className="text-sm">
              Email me for new offers and news
            </label>
          </div>
        </div>

        {/* Right Side - Price Summary */}
        <div className="md:w-1/3 w-full bg-gray-100 my-24 p-6 rounded shadow-md">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} onClick={()=>handleremove(item.id)} className="flex justify-around h-24 items-center my-10  border-4 rounded-lg cursor-pointer ">
                <div className="w-2/5 ">
                  <img className="rounded-lg h-20" src={item.image} alt="" />
                </div>
                <div>
                  <p className="text-sm">RS.{item.rate}</p>
                </div>
              </div>
            ))
          )}

          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal :</span>
            <span>₹ {subtotal}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>₹ {shipping}</span>
          </div>
          <div className="flex justify-between mb-4 border-t pt-2 font-semibold">
            <span>Total</span>
            <span>₹ {total}</span>
          </div>

          <button
            className={`w-full py-2 rounded transition ${cartItems.length === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 text-white hover:bg-green-600"}`}
            disabled={cartItems.length === 0}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
