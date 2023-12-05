import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="main">
      <div className="mx-5 ">
        <div className="w-full max-w-[900px] mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default ContentWrapper;
