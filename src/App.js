import React from "react";
import "./assets/output.css";
import Navbar from "./layouts/navbar";
import Footer from "./layouts/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Shop from "./pages/shop";
import Product from "./pages/product";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import { GlobalContextProvider } from "./context/globalContext";

function App() {
  return (
    <Router>
      <GlobalContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:slug" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footer />
      </GlobalContextProvider>
    </Router>
  );
}

export default App;
