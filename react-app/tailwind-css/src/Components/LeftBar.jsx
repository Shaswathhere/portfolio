import React, { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

import GitLogo from "../assets/logos/GitLogo.png";
import LinkedinLogo from "../assets/logos/LinkedinLogo.png";

import ReactLogo from "../assets/logos/ReactLogo.png"
import MailLogo from "../assets/logos/MailLogo.png";


const LeftBar = () => {
  const [showWebList, setShowWebList] = useState(true);
  const [showProjectsList, setShowProjectsList] = useState(true);

  const WebList = () => (
    <div>
      <a href="https://github.com/kalviumcommunity/S51_Shaswath_ExpenseManager" className="block mb-2">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={ReactLogo}
            alt="JS Icon"
            className="w-7 mr-1 ml-5 text-yellow_vs"
          />
          <p>Expense Vault</p>
        </div>
      </a>
      <a href="https://github.com/Shaswathhere/FEWD-CA3-and-DFD-CA2" className="block mb-2">
        <div className="ml-12 flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] w-60">
          <img
            src={ReactLogo}
            alt="TS Icon"
            className="w-7 mr-1 ml-5 text-yellow_vs"
          />
          <p>Recipe Radar</p>
        </div>
      </a>
      <a href="https://github.com/Shaswathhere/RollAndHold" className="block mb-2">
        <div className="flex whitespace-nowrap items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] focus:bg-slate-300 ml-12 w-60">
          <img
            src={ReactLogo}
            alt="JS Icon"
            className="w-7 mr-1 ml-5 text-yellow_vs"
          />
          <p>Roll And Hold</p>
        </div>
      </a>
    </div>
  );

  return (
    <div className="text-[#a2aabc] text-lg mt-5 flex bg-[#262526] h-full">
      <div>
        <div
          className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
          onClick={() => setShowProjectsList(!showProjectsList)}
        >
          {showProjectsList ? (
            <ChevronDownIcon className="w-7 mr-1" />
          ) : (
            <ChevronRightIcon className="w-7 mr-1" />
          )}
          <p>Projects</p>
        </div>
        {showProjectsList ? (
          <>
            <div
              className="flex items-center hover:cursor-pointer hover:bg-opacity-80 hover:bg-[#2b2a2a] font-bold w-72"
              onClick={() => setShowWebList(!showWebList)}
            >
              {showWebList ? (
                <ChevronDownIcon className="w-7 mr-1 ml-5" />
              ) : (
                <ChevronRightIcon className="w-7 mr-1 ml-5" />
              )}

              <p>Web</p>
            </div>
            {showWebList ? <WebList /> : null}
          </>
        ) : null}
        <div className="absolute inset-x-0 bottom-10">
          <div className="flex px-5 space-x-14">
            <a href="https://github.com/Shaswathhere" className="block">
              <img
                src={GitLogo}
                alt="Git Logo"
                className="h-10 w-10 text-yellow_vs"
              />
            </a>
            <a href="https://www.linkedin.com/in/shaswath-kattalai-govardhanagiritharan-09b93721a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="block">
              <img
                src={LinkedinLogo}
                alt="Linkedin Logo"
                className="h-10 w-10 text-yellow_vs"
              />
            </a>
            <a href="mailto:shaswathgiridhran@gmail.com" className="block">
              <img
                src={MailLogo}
                alt="Mail Logo"
                className="h-10 w-10 text-yellow_vs"
              />
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
