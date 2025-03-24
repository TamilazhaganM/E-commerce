import React from "react";

function Payment() {
  return (
    <div className="flex flex-col items-center my-32 px-4">
      <div className="flex w-full max-w-5xl gap-8">
        {/* Left Side - Delivery Form */}
        <div className="w-2/3 flex flex-col gap-4">
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
        <div className="w-1/3 bg-gray-100 p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <input className="border  border-black" type="phone"/>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>₹ 100</span>
          </div>
          <div className="flex justify-between mb-4 border-t pt-2 font-semibold">
            <span>Total</span>
            <input className="border  border-black" type="phone"/>
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
