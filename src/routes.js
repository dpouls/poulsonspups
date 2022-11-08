import React from "react";

import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Puppies from "./Components/Puppies/Puppies";
import Parents from "./Components/Parents/Parents";
import ContactPage from "./Components/Contact/ContactPage";
import About from "./Components/About/About";

// import MyMiniFactoryScraper from "./Components/Admin/MyMiniFactoryScraper";

export default (
  <Routes>
    <Route exact path="/" element={<Landing />} />
    <Route exact path="/puppies" element={<Puppies />} />
    <Route exact path="/parents" element={<Parents />} />

    <Route exact path="/contact" element={<ContactPage />} />
    <Route exact path="/about" element={<About />} />

    {/* <Route exact path="/mmf" element={<MyMiniFactoryScraper />} /> */}
  </Routes>
);
