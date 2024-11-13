import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
