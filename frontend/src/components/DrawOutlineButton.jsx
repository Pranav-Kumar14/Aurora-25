import React from "react";

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group relative px-6 py-4 font-bold text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300 text-xl sm:text-2xl lg:text-3xl w-full max-w-[400px] mx-auto"
      onClick={() => {
        console.log("Outline button clicked!"); 
        if (rest.onClick) rest.onClick(); 
      }}
    >
      <span>{children}</span>

      <span className="absolute left-0 top-0 h-[3px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

      <span className="absolute right-0 top-0 h-0 w-[3px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

      <span className="absolute bottom-0 right-0 h-[3px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

      <span className="absolute bottom-0 left-0 h-0 w-[3px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
    </button>
  );
};

export default DrawOutlineButton;
