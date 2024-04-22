import React, { useState } from "react";
import "./App.css";
import { FaComment } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

import { IoMusicalNotesSharp } from "react-icons/io5";
import { FaMobileAlt } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";

import img1 from "./assets/images/prfl1.avif";
import img2 from "./assets/images/prfl2.avif";
import img3 from "./assets/images/prfl3.avif";
import img4 from "./assets/images/prfl4.avif";

import bg1 from "./assets/images/disp1.avif";
import bg2 from "./assets/images/disp2.avif";
import bg3 from "./assets/images/displ3.avif";
import bg4 from "./assets/images/displ4.avif";

const App = () => {
  const users = [
    {
      bgImg: bg1,
      prflImg: img1,
      pendingMessage: 25,
      location: "Lahore,Pakistan",
      name: "Alia",
      age: 20,
      tag1: {
        icon: <IoMusicalNotesSharp />,
        text: "Music",
      },
      tag2: {
        icon: <FaMobileAlt />,
        text: "Technology",
      },
      bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, beatae?",
    },
    {
      bgImg: bg2,
      prflImg: img2,
      pendingMessage: 20,
      location: "Karachi,Pakistan",
      name: "Victoria",
      age: 23,
      tag1: {
        icon: <MdTravelExplore />,
        text: "Travel",
      },
      tag2: {
        icon: <GiWeightLiftingUp />,
        text: "Fitness",
      },
      bio: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      bgImg: bg3,
      prflImg: img3,
      pendingMessage: 33,
      location: "Islamabad,Pakistan",
      name: "Mahira",
      age: 27,
      tag1: {
        icon: <FaBook />,
        text: "Literature",
      },
      tag2: {
        icon: <IoMusicalNotesSharp />,
        text: "Music",
      },
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      bgImg: bg4,
      prflImg: img4,
      pendingMessage: 18,
      location: "SialKot,Pakistan",
      name: "Ishita",
      age: 30,
      tag1: {
        icon: <FaPlane />,
        text: "Exploration",
      },
      tag2: {
        icon: <GiDiamondRing />,
        text: "Fashion",
      },
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const currentObject = users[currentIndex];

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % users.length;
    setCurrentIndex(nextIndex);
  };

  return (
    <div className="forMap">
      <div className="main w-full h-screen">
        <div className="bgImg w-full h-screen bg-[#FC5149] relative">
          <img
            src={currentObject.bgImg}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <div className="aboveStructure w-full h-screen  absolute inset-0 flex flex-col justify-between ">
          <div className="navbar w-full  px-5 py-6 flex justify-between items-center">
            <div className="prflImg w-[3rem] h-[3rem] bg-red-900 rounded-full overflow-hidden">
              <img
                src={currentObject.prflImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text text-white text-2xl tracking-tighter font-medium">
              They liked you.
            </div>
            <div className="chatIcon w-[3rem] h-[3rem] bg-white/20 rounded-full flex justify-center items-center relative">
              <FaComment className="text-white/80" />
              <div className="badge w-5 h-5 bg-[#FC5149] absolute -top-1 right-0 flex justify-center items-center rounded-full">
                <h5 className="text-center translate-y-[1px] leading-none font-medium text-xs">
                  {currentObject.pendingMessage}
                </h5>
              </div>
            </div>
          </div>
          <div className="details w-full px-5 py-6 pb-16 bg-gradient-to-b from-transparent to-black/70">
            <div className="part-1 location flex items-center gap-4">
              <div className="icon bg-white rounded-full w-[1.6rem] h-[1.6rem] py-1 flex justify-center items-center">
                <FaArrowUpLong className=" rotate-[35deg]" />ٖ
              </div>
              <h2 className="text-white translate-y-[2px]">
                {currentObject.location}
              </h2>
            </div>
            <div className="part-2 name text-white flex gap-5 mt-2 ">
              <h1 className="text-7xl tracking-tighter">
                {currentObject.name}
              </h1>
              <h1 className="text-7xl tracking-tighter opacity-40">20</h1>
            </div>
            <div className="part-3 tags flex gap-2 text-white">
              <div className="tag1 flex gap-2 items-center bg-white/30 rounded-full px-3 py-1">
                <span className="text-sm">{currentObject.tag1.icon}</span>
                <h3 className="text-sm tracking-tight translate-y-[1px]">
                  {currentObject.tag1.text}
                </h3>
              </div>
              <div className="tag2 flex gap-2 items-center bg-white/30 rounded-full px-3 py-1">
                <span className="text-sm">{currentObject.tag2.icon}</span>
                <h3 className="text-sm tracking-tight translate-y-[1px]">
                  {currentObject.tag2.text}
                </h3>
              </div>
            </div>
            <div className="part-4 bio ">
              <h2 className="text-xl mt-4 text-white">Bio</h2>
              <p className="text-lg tracking-tight mt-1 leading-tight text-white/90">
                {currentObject.bio}
              </p>
            </div>
            <div className="part-5 btn flex justify-center items-center gap-2 mt-5">
              <button
                onClick={handleClick}
                className="bg-white w-1/2 py-[10px] flex justify-center items-center rounded-xl"
              >
                <AiOutlineClose className="text-3xl  " />
              </button>
              <button
                onClick={handleClick}
                className="bg-[#FC5149] w-1/2 py-[10px] flex justify-center rounded-xl items-center"
              >
                <FaHeart className="text-3xl text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
