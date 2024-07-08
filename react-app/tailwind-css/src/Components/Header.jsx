import React from "react";

function Header() {
  return (
    <div id="Header" className="mx-12 lg:mx-60 pt-60 items-center justify-center lg:w-1/2 text-justify">
      <div className="flex flex-col">
        <code className="text-[#C477DA]">Hi, my name is</code>
        <code className="text-[#60AEED] text-7xl mt-5">Shaswath</code>
      </div>
      <br />
      <code className="text-[#E5C07B] mt-10">
        Welcome to my portfolio! Here you will find a collection of my projects showcasing my skills and expertise in full stack development. Feel free to explore and learn more about my work.
      </code>
    </div>
  );
}

export default Header;
