import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import picture from "../assets/bipul.jfif";
const Navbar = () => {
  const [menu, SetMenu] = useState(false);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow fixed top-0 left-0 right-0 ">
        <div className="flex justify-between  h-16 items-center ">
          <div className="flex space-x-2 ">
            <img src={picture} className="h-12 w-12 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Bipul Pratap Sing<span className="text-red-500 text-2xl">H</span>
              <p className="text-sm">MERN Stack Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className=" space-x-8   hidden  md:flex">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  {" "}
                  {text}{" "}
                </li>
              ))}
            </ul>
            {/* menu icon */}
            <div className="md:hidden  " onClick={() => SetMenu(!menu)}>
              {menu ? <CiMenuFries size={24} /> : <IoCloseOutline size={24} />}
            </div>
          </div>
        </div>
        {/* moblie navabar */}
        {menu && (
          <div>
            <ul className=" md:hidden flex flex-col items-center justify-center h-screen  space-y-3 text-xl ">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold  cursor-pointer"
                  key={id}
                >
                  {" "}
                  {text}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
