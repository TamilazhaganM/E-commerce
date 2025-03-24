import React from "react";

function Footer() {
  return (
    <div className="bg-gray-100 p-6">
      {/* Footer Main Container */}
      <div className="flex flex-wrap justify-between lg:my-20 lg:mx-20">
        
        {/* Newsletter Section */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-60 p-5">
          <h5 className="font-semibold text-md mt-2">NEWSLETTER</h5>
          <p className="text-sm mt-4">
            Subscribe to our newsletter & be the first to know about new arrivals and exciting launches.
          </p>
          <div className="flex flex-col mt-4">
            <input
              className="border p-2 rounded"
              type="email"
              placeholder="Email Address..."
            />
            <button className="bg-black text-white p-2 mt-2 rounded">
              Subscribe
            </button>
          </div>
        </div>

        {/* Stay Connected */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-60 p-5">
          <h5 className="font-semibold text-md mt-2">STAY CONNECTED</h5>
          <ul className="text-sm mt-4 space-y-2">
            <li><i className="fa-brands fa-facebook mr-2"></i> <a href="#">Facebook</a></li>
            <li><i className="fa-brands fa-instagram mr-2"></i> <a href="#">Instagram</a></li>
            <li><i className="fa-brands fa-linkedin mr-2"></i> <a href="#">LinkedIn</a></li>
            <li><i className="fa-brands fa-youtube mr-2"></i> <a href="#">YouTube</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-56 p-5">
          <h5 className="font-semibold text-md mt-2">CUSTOMER SERVICE</h5>
          <ul className="text-sm mt-4 space-y-2">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Return/Exchange</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Information */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-56 p-5">
          <h5 className="font-semibold text-md mt-2">INFORMATION</h5>
          <ul className="text-sm mt-4 space-y-2">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Stores</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 h-56 p-5">
          <h5 className="font-semibold text-md mt-2">CONTACT</h5>
          <ul className="text-sm mt-4 space-y-2">
            <li>📞 Phone: +2-234-756-4323</li>
            <li>✉️ Email: customer@gmail.com</li>
            <li>📍 Address: No.4 Vivekanadhar Theru, Dubai Kurukku Santhu, Dubai.</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 text-sm text-gray-500">
        <i className="fa-regular fa-copyright"></i> ALL RIGHTS RESERVED BY FASHION PVT LTD
      </div>
    </div>
  );
}

export default Footer;
