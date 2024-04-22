import React from "react";
import "./App.css";
import prflImg from "./assets/images/prflImg.avif";
import girl1 from "./assets/images/girl1.avif";
import { FaComment } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { IoMusicalNotesSharp } from "react-icons/io5";

const App = () => {
  return (
    <div className="main w-full h-screen bg-black overflow-hidden">
      <div className="imageContainer w-full h-screen relative">
        <div className="mainCard z-[3] w-full h-screen absolute bg-orange-600">
          <img src={girl1} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="incomingCard z-[2] w-full h-screen absolute bg-green-600"></div>
      </div>
      <div className="structure w-full h-screen absolute top-0 left-0 z-[4]  px-5 py-6 flex flex-col justify-between">
        <div className="navbar flex justify-between items-center text-white">
          <div className="prflImg w-[3rem] h-[3rem] bg-red-900 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover object-top scale-105"
              src={prflImg}
              alt=""
            />
          </div>
          <h3 className="font-medium text-2xl tracking-tighter">
            They liked you.
          </h3>
          <div className="chatIcon w-[3rem] h-[3rem] bg-white/20 rounded-full flex justify-center items-center relative">
            <FaComment className="opacity-80" />
            <div className="badge w-5 h-5 bg-red-900 absolute -top-1 right-0 flex justify-center items-center rounded-full">
              <h5 className="text-center translate-y-[1px] leading-none font-medium text-xs">
                5
              </h5>
            </div>
          </div>
        </div>
        <dvi className="details w-full ">
          <div className="part-1 flex items-center gap-4">
            <div className="icon bg-white rounded-full w-[1.6rem] h-[1.6rem] py-1 flex justify-center items-center">
              <FaArrowUpLong className=" rotate-[35deg]" />ٖ
            </div>
            <h2 className="text-white translate-y-[2px]">USA, California</h2>
          </div>
          <div className="part-2 text-white flex gap-4 mt-2">
            <h1 className="text-7xl tracking-tighter">Victoria</h1>
            <h1 className="text-7xl tracking-tighter opacity-50">20</h1>
          </div>
          <div className="part-3 tags flex gap-2 text-white mt-2">
            <div className="tag flex gap-2 items-center bg-white/30 rounded-full px-3 py-1">
              <IoMusicalNotesSharp className="text-sm" />
              <h3 className="text-sm tracking-tight translate-y-[1px]">
                Music
              </h3>
            </div>
            <div className="tag flex gap-2 items-center bg-white/30 rounded-full px-3 py-1">
              <IoMusicalNotesSharp className="text-sm" />
              <h3 className="text-sm tracking-tight translate-y-[1px]">
                Music
              </h3>
            </div>
            <div className="tag flex gap-2  items-center bg-white/30 rounded-full px-3 py-1">
              <IoMusicalNotesSharp className="text-sm" />
              <h3 className="text-sm tracking-tight translate-y-[1px]">
                Music
              </h3>
            </div>
          </div>
          {/* bio */}



          
        </dvi>
      </div>
    </div>
  );
};

export default App;
