import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const Homepage = () => {
    if (email.trim() !== "") {
      navigate("/");
    } else {
      alert("Please enter your email before continuing.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
      <h1 className="text-5xl font-bold text-orange-900 mb-10">ZYRA</h1>

      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Login
        </h2>

        <input
          type="email"
          placeholder="username@gmail.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-orange-500"
        />

        <a
          href="#"
          className="text-sm text-center text-gray-600 mb-6 block hover:underline"
          onClick={()=>setEmail('')}
        >
          Login with another email account
        </a>

        <button
          onClick={Homepage}
          className="w-full bg-orange-800 text-white py-3 rounded-lg hover:bg-orange-900 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Login;
