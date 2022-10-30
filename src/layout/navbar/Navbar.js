import React from "react";

function Navbar(props) {
  return (
    <div>
      <>
        <div className="fixed top-0 z-10 w-[100%] lg:w-[30%] sm:w-[100%] py-3 border-r border-[#1E1E1E] bg-[#0F0F0F]">
          <div className="px-4">{props.children}</div>
        </div>
      </>
    </div>
  );
}

export default Navbar;
