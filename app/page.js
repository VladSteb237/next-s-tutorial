import Link from "next/link";
import React from "react";

const HomePage = () => {
  //console.log("server component");
  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Next.JS Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        Get started
      </Link>
    </div>
  );
};

export default HomePage;
