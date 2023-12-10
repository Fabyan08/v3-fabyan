import React from "react";
import { Html } from "@react-three/drei";
import load from "../assets/images/load.svg";
const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center">
        <img src={load} className="w-20 h-20  animate-spin" />
        <div>
          <img src="../assets/images/load.svg" alt="" />
          <h1 className="text-blue-500">Wait...</h1>
        </div>
      </div>
    </Html>
  );
};

export default Loader;
