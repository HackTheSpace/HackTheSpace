import React from "react";
import StarsCanvas from "./Stars";

import { logoMain, constellation1, constellation2, planet1 } from "../assets";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";

const Home = () => {
  return (
    <div className="h-screen relative flex flex-col items-center justify-center">
      <img
        className="aspect-auto w-3/5 lg:w-1/3"
        src={logoMain}
        alt="hackTheSpace"
      />

      <div className="-mt-8 lg:-mt-10 w-full flex flex-col lg:flex-row gap-5 lg:gap-12 items-center justify-center ">
        <button
          type="button"
          className="group relative h-12 w-7/12 lg:w-1/5 overflow-hidden rounded-lg bg-gradient-to-l from-zinc-800 text-lg shadow active:scale-95"
        >
          <div className="absolute inset-0 w-10 black-gradient transition-all duration-[250ms] ease-out group-hover:w-full "></div>

          <AiOutlineRocket className="absolute inset-0 left-2.5 top-3.5 text-xl" />

          <span className="relative text-violet-400 group-hover:text-white">
            Devfolio placeholder
          </span>
        </button>
        <button
          type="button"
          className="group relative h-12 w-7/12 lg:w-1/5 overflow-hidden rounded-lg bg-gradient-to-l from-zinc-800 text-lg shadow active:scale-95"
        >
          <div className="absolute inset-0 w-10 bg-gradient-to-l from-blue-800 to-blue-400  transition-all duration-[250ms] ease-out group-hover:w-full "></div>

          <BsDiscord className="absolute inset-0 left-2.5 top-3.5 text-xl" />

          <span className="relative text-violet-400 group-hover:text-white">
            Join Discord
          </span>
        </button>
      </div>

      <StarsCanvas />
    </div>
  );
};

export default Home;
