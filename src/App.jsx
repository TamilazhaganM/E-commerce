import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";

const Payment = lazy(() => import("./Components/Payment.jsx"));
const Sector = lazy(() => import("./Components/Sector.jsx"));
const Arrivals = lazy(() => import("./Components/Arrivals.jsx"));
const Common = lazy(() => import("./Components/Common.jsx"));
const Womens = lazy(() => import("./Components/Special-sector/Womens.jsx"));
const Mens = lazy(() => import("./Components/Special-sector/Mens.jsx"));
const Kids = lazy(() => import("./Components/Special-sector/Kids.jsx"));
const Accessories = lazy(() => import("./Components/Special-sector/Accessories.jsx"));
const Tshirt = lazy(() => import("./Components/Special-sector/Tshirt.jsx"));
const Modern = lazy(() => import("./Components/Special-sector/Modern.jsx"));
const Princess = lazy(() => import("./Components/Special-sector/Princess.jsx"));
const Partywear = lazy(() => import("./Components/Special-sector/Partywear.jsx"));

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <BeatLoader color="#5b0a24" size={15} />
  </div>
);

const AppContent = () => {
  const location = useLocation();

  const showNavAndFooter = location.pathname !== "/login";

  return (
    <>
      {showNavAndFooter && <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<><Home /><Sector /><Arrivals /><Common /></>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home/womens" element={<Womens />} />
          <Route path="/home/womens-modern" element={<Modern />} />
          <Route path="/home/mens" element={<Mens />} />
          <Route path="/home/mens-T-shirts" element={<Tshirt />} />
          <Route path="/home/kids" element={<Kids />} />
          <Route path="/home/kids-princess" element={<Princess />} />
          <Route path="/home/accessories" element={<Accessories />} />
          <Route path="/home/partywears" element={<Partywear />} />
        </Routes>
      </Suspense>
      {showNavAndFooter && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
