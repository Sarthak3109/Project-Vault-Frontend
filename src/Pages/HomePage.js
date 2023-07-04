import React,{useEffect} from "react";
import Header from "../components/Header";
import cover from "../bgImage.png";

import background from "../homeCoverImage.jpg";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
const HomePage = () => {
  const isLoggedIn = useSelector(state=>state.isLoggedIn)
  return (
    <div  className = 'min-h-[100vh]' style={{ backgroundImage: `url(${cover})` }}>
      <Header />
      <div
        className="h-[70vh] bg-no-repeat bg-cover bg-right sm:bg-center"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      <div className="text- text-center font-serif mt-8 md:mt-10 text-2xl sm:text-3xl md:text-4xl tracking-tight md:tracking-wide">
        SHARE YOUR PROJECTS WITH US
      </div>
      <div className="flex justify-center items-center gap-5 mt-[10px] md:mt-[20px]">
        <Link
          to = {isLoggedIn?`/add`:'/auth'}
          class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white"
        >
          <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
          <span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">
            SHARE
          </span>
        </Link>
        <Link
          to="/posts"
          class="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
        >
          <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
          <span class="relative group-hover:text-white">VIEW PROJECTS</span>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
