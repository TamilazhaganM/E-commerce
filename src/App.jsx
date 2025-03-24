import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home.jsx";
import Sector from "./Components/Sector.jsx";
import Arrivals from "./Components/Arrivals.jsx";
import Common from "./Components/Common.jsx";
import Footer from "./Components/Footer.jsx";
import Womens from "./Components/Special-sector/Womens.jsx";
import Mens from "./Components/Special-sector/Mens.jsx";
import Kids from "./Components/Special-sector/Kids.jsx";
import Accessories from "./Components/Special-sector/Accessories.jsx";
import Tshirt from "./Components/Special-sector/Tshirt.jsx";
import Modern from "./Components/Special-sector/Modern.jsx";
import Princess from "./Components/Special-sector/Princess.jsx";
import Partywear from "./Components/Special-sector/Partywear.jsx";
import Payment from "./Components/payment.jsx";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Sector />
              <Arrivals />
              <Common />
            </>
          }
        />
         <Route path="/payment" element={<Payment/>}/>
        <Route path="/home/womens" element={<Womens />} />
        <Route path="/home/womens-modern" element={<Modern />} />
        <Route path="/home/mens" element={<Mens />} />
        <Route path="/home/mens-T-shirts" element={<Tshirt />} />
        <Route path="/home/kids" element={<Kids />} />
        <Route path="/home/kids-princess" element={<Princess />} />
        <Route path="/home/accessories" element={<Accessories />} />
        <Route path="/home/partywears" element={<Partywear />} />
      </Routes>
      <Footer />

    </Router>
  );
};

export default App;
