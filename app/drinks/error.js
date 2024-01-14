"use client";

import React from "react";

const error = (error) => {
  console.log(error);
  return (
    <div>
      {/* <h2>There was some Error...</h2> */}
      {error.error.message}
    </div>
  );
};

export default error;
