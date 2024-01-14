"use client";

import React from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }) => {
  return (
    <React.Fragment>
      <Toaster />
      {children}
    </React.Fragment>
  );
};

export default Providers;
