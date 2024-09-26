import React from "react";
import mongodb from "../assets/mongodb.jpg";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.webp";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import github from "../assets/github_PNG89.png";
import react from "../assets/reactjs.png";
import express from "../assets/express.com (1).png";
const Portfolio = () => {
    const projects = [
      {
        id: 1,
        title: "MongoDB Atlas",
        image: mongodb,
        description:
          "A fully functional MongoDB database management system, utilizing MongoDB Atlas for scalability and security.",
        tools: ["MongoDB Atlas", "React", "Node.js", "Express.js", "Tailwind CSS"],
      },
      {
        id: 2,
        title: "JavaScript ",
        image: javascript,
        description:
          "A simple JavaScript game using React and Redux, featuring a character-based adventure.",
        tools: ["React", "Redux", "JavaScript", "HTML", "CSS"],
      },
      {
        id: 3,
        title: "Node.js Server",
        image: nodejs,
        description:
          "A simple Node.js server using Express.js, handling API endpoints for CRUD operations.",
        tools: ["Node.js", "Express.js", "MongoDB", "JavaScript Express Server", 
            "Mongoose"],
      },
      {
        id: 4,
        title: "Python Web Scraper",
        image: python,
        description:
          "A Python web scraper using BeautifulSoup, retrieving data from a given URL.",
        tools: ["Python", "BeautifulSoup", "Requests", "HTML", "CSS"],
      },
      {
        id: 5,
        title: "HTML and CSS Portfolio",
        image: html,
        description:
          "A simple HTML and CSS portfolio showcasing my skills and projects.",
        tools: ["HTML", "CSS", "JavaScript"],
      },
      {
        id: 6,
        title : "CSS Style",
        image: css,
        description: "A simple CSS portfolio around my skills and projects.",
      },
      {
        id: 8,
        title: "React App",
        image: react,
        description:
          "A simple React app showcasing my skills and projects.",
        tools: ["React", "JavaScript", "HTML", "CSS"],
      },
      {
        id: 9,
        title: "Express.js Server",
        image: express,
        description:
          "A simple Express.js server showcasing my skills and projects.",
        tools: ["Express.js", "JavaScript", "HTML", "CSS"],
      }
    ]
  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Project </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-5">
        {
            projects.map(({id, image, title, description})=>{
                return (
                    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg cursor-pointer hover:scale-110 duration-300 " key={id}>
                        <img src={image} className="w-[120px]  h-[120px] p-1 rounded-full border-[2px] " alt="" />
                        <div>
                            <p className=" px-2 font-bold text-xl mb-2">{title}</p>
                            <p className="px-2 text-gray-700 overflow-hidden ">{description}</p>
                        </div> 
                        <div className=" px-6 py-3 justfiy-around">
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded ">Source Code</button>
                            
                        </div>
                    </div>
                );
            })
        }
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Portfolio;
