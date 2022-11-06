import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        newestOnTop={false}
        closeOnClick={false}
      />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
