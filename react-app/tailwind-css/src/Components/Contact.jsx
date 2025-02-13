import React from "react";
import { MailIcon } from "@heroicons/react/solid";

const Contact = () => {
  return (
    <div id="Contact" className="pb-72 mt-36">
      <div className="table mx-12 lg:mx-60">
        <MailIcon className="h-5 w-5 mr-4 text-[#60AEED] text-yellow_vs" />
        <code className="table-cell text-[#60AEED] text-3xl mt-5 whitespace-nowrap">
          Get In Touch
        </code>
        <div className="table-cell border-b border-b-[#e6f1ff] border-opacity-25 w-full"></div>
      </div>
      <div className=" text-lg mt-5 mx-12 lg:mx-60 flex flex-col items-center text-justify">
        <code className="text-[#C477DA]">
          Currently looking for a new opportunity, you can contact me by
          clicking on the button below. <br />
          Whether you have a question or just want to say hi, feel free to
          contact me and I’ll try my best to get back to you!
        </code>
        <button className="text-[#E5C07B] border border-lightblue_vs text-lightblue_vs mt-10 p-3 rounded w-1/2 hover:bg-lightblue_vs hover:bg-opacity-10">
          <a href="mailto:shaswathgiridhran@gmail.com">
            <code>Contact</code>
          </a>
        </button>

      </div>
    </div>
  );
};

export default Contact;
