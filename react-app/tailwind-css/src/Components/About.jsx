import React from "react";
import { IdentificationIcon } from "@heroicons/react/solid";

import PythonLogo from "../assets/logos/PythonLogo.png";
import ReactLogo from "../assets/logos/ReactLogo.png";

import JsLogo from "../assets/logos/JsLogo.png";
import Git from "../assets/logos/Git.png"
import TailwindLogo from "../assets/logos/TailwindLogo.png";
import HtmlLogo from "../assets/logos/Html.png"
import ReduxLogo from "../assets/logos/ReduxLogo.png";

import MongoDBLogo from "../assets/logos/MongoDBLogo.png";
import NodeJSLogo from "../assets/logos/NodeJSLogo.png";


const About = () => {
  return (
    <div
      id="About"
      className="mx-12 mt-60 lg:mx-60 items-center justify-center lg:w-1/2 text-justify"
    >
      <div>
        <div className="table">
          <IdentificationIcon className="h-5 w-5 mr-4 text-[#60AEED] text-yellow_vs" />{" "}
          <code className="table-cell text-[#60AEED] text-3xl mt-5 whitespace-nowrap">
            About Me
          </code>
          <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
        </div>
        <div className="text-lg mt-5">
          <code className="text-[#C477DA]">
            Hello! I'm Shaswath, a passionate Full Stack Developer with a strong
            foundation in web technologies. My journey into the world of coding
            began during my undergraduate studies at Kalvium's UG program in CS,
            where I developed a deep interest in creating dynamic and
            user-friendly web applications.
          </code>
          <br />
          <br />
          <code className="text-[#E5C07B]">
            Throughout my academic and personal projects, I've honed my skills
            in both frontend and backend development. I enjoy working with
            modern JavaScript frameworks like React for building
            responsive and engaging user interfaces. On the backend, I leverage
            the power of Node.js and Express to develop robust and scalable APIs.
            My tech stack also includes working with databases like MongoDB.
          </code>
          <br />
          <br />
          <code className="text-[#C477DA]">
            Beyond coding, I have a keen interest in learning new technologies
            and staying updated with the latest trends in the tech industry. I'm
            a firm believer in continuous learning and I'm always looking for
            opportunities to expand my knowledge and take on new challenges.
          </code>
          <br />
          <br />
          <code className="text-[#E5C07B]">
            Here are some technologies I have been working with recently:
          </code>
          <div className="grid grid-cols-3 gap-2 text-sm mt-5 text-brown_vs">
            <div className="flex flex-row items-center mb-3">
              <img
                src={JsLogo}
                alt="Js Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">JavaScript (ES6+)</code>
            </div>
            
            <div className="flex flex-row items-center mb-3">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">React</code>
            </div>
            
            <div className="flex flex-row items-center mb-3">
              <img
                src={TailwindLogo}
                alt="Tailwind Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">Tailwind CSS</code>
            </div>
            <div className="flex flex-row items-center mb-3">
              <img
                src={ReduxLogo}
                alt="Redux Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">Redux</code>
            </div>
            <div className="flex flex-row items-center mb-3">
              <img
                src={PythonLogo}
                alt="Python Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">Python</code>
            </div>

            <div className="flex flex-row items-center mb-3">
              <img
                src={NodeJSLogo}
                alt="NodeJS Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">Node.js</code>
            </div>
            
            <div className="flex flex-row items-center mb-3">
              <img
                src={MongoDBLogo}
                alt="MongoDB Logo"
                className="h-5 w-5 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">MongoDB</code>
            </div>

            <div className="flex flex-row items-center mb-3">
              <img
                src={HtmlLogo}
                alt="MongoDB Logo"
                className="h-7 w-7 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">HTML</code>
            </div>

            <div className="flex flex-row items-center mb-3">
              <img
                src={Git}
                alt="MongoDB Logo"
                className="h-7 w-7 ml-3 mr-4 text-yellow_vs"
              />
              <code className="text-[#C477DA]">Git</code>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
