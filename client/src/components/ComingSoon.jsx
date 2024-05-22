import React from "react";
import underConstructionSVG from "../assets/images/under_construction.svg";

export default function ComingSoon() {
  return (
    <div className="w-full min-h-screen p-3 flex gap-2 flex-col justify-center items-center">
      <img className="w-[500px]" src={underConstructionSVG} />
      <p className="text-2xl md:text-5xl uppercase">Coming Soon</p>
    </div>
  );
}
