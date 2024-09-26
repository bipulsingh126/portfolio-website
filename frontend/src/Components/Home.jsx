import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { FaGit } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import picture from "../assets/bipul.jfif";
const Home = () => {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container max-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 md:mt-24  mt-12 space-y-2 order-2  md:order-1">
            <span className="text-xl">Welcome In My Feed </span>
            <div className=" flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a </h1>

              <ReactTyped
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                className=" text-red-700 font-bold"
              />
            </div>
            <br />
            <p className="text-sm md:text-md  text-justify">
              I specialize in developing full-stack solutions using MongoDB,
              Express.js, React, and Node.js. Skilled in creating efficient
              APIs, implementing RESTful services, and managing state with
              Redux, I have successfully developed and deployed scalable
              applications. My strong problem-solving skills and knowledge of
              JavaScript, database management, and cloud deployment allow me to
              deliver high-performance solutions tailored to business needs.
            </p>
            <br />
            {/* socail media icon */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0 space-x-4 md:space-x-16">
              <div className="space-y-2">
                <h1 className="text-bold text-center text-xl">Avaliable on</h1>
                <ul className="flex space-x-4 md:space-x-5">
                  <a
                    href="https://www.linkedin.com/in/bipul-pratap-singh-83b06624a"
                    target="blank"
                  >
                    {" "}
                    <li>
                      <FaLinkedin className="text-2xl cursor-pointer" />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/heyyy_riyanshh?igsh=MXNhbWYzbDB2NjFyZw=="
                    target="blank"
                  >
                    <li>
                      <FaInstagram className="text-2xl cursor-pointer" />
                    </li>
                  </a>
                  <a href="https://github.com/bipulsingh126" target="blank">
                    <li>
                      <FaGithub className="text-2xl cursor-pointer" />
                    </li>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100047806642809&mibextid=ZbWKwL"
                    target="blank"
                  >
                    <li>
                      <FaSquareFacebook className="text-2xl cursor-pointer" />
                    </li>
                  </a>
                  <a href="http://t.me/iam_riyanshthakur" target="blank">
                    {" "}
                    <li>
                      <FaTelegramPlane className="text-2xl cursor-pointer" />
                    </li>
                  </a>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="text-bold text-xl">Currently Working on</h1>
                <ul className="flex space-x-4 md:space-x-5">
                  <li>
                    <BiLogoMongodb className="text-3xl cursor-pointer hover:scale-110 duration-200 rounded-full border-[2px]" />
                  </li>
                  <li>
                    <SiExpress className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <IoLogoReact className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaNodeJs className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <RiNextjsLine className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaGit className="text-2xl cursor-pointer" />
                  </li>
                  <li>
                    <FaFigma className="text-2xl cursor-pointer" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20  mt-8 order-1">
            <img
              src={picture}
              alt=""
              className="rounded-full h-[450px] w-[450px]"
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Home;
