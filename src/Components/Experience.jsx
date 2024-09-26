import mongodb from "../assets/mongodb.jpg";
import javascript from "../assets/javascript.png";
import nodejs from "../assets/node.png";
import python from "../assets/python.webp";
import html from "../assets/html.png";
import css from "../assets/css.jpg";
import github from "../assets/github_PNG89.png";
import react from "../assets/reactjs.png";
import express from "../assets/express.com (1).png";
const Experience = () => {
  const experiance = [
    {
      id: 1,
      title: "MongoDB ",
      image: mongodb,
    },
    {
      id: 2,
      title: "JavaScript",
      image: javascript,
    },
    {
      id: 3,
      title: "Node.js ",
      image: nodejs,
    },
    {
      id: 4,
      title: "Python ",
      image: python,
    },
    {
      id: 5,
      title: "HTML",
      image: html,
    },
    {
      id: 6,
      title: "CSS ",
      image: css,
    },
    {
      id: 7,
      title: "GitHub ",
      image: github,
    },
    {
      id: 8,
      title: "Reactjs",
      image: react,
    },
    {
      id: 9,
      title: "Express.js ",
      image: express,
    },
  ];
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <span className="font-semibold">
          {" "}
          I 've more then 2 years of experiance in below techonlogies.{" "}
        </span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3">
          {experiance.map(({ id, image, title }) => {
            return (
              <div
                className="flex flex-col items-center justify-center border-[2px] rounded-full  md:w-[200px] md:h[200px] cursor-pointer hover:scale-110 duration-300 "
                key={id}
              >
                <img src={image} className="w-[150px]  rounded-full  " alt="" />
                <div>
                  <p className=" px-2 font-bold text-xl mb-2">{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
