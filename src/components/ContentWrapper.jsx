import React from "react";

const ContentWrapper = ({ className, children }) => {
   return (
      <div className="main">
         <div className={`${className}`}>
            <div className="w-full max-w-[900px] mx-auto">{children}</div>
         </div>
      </div>
   );
};

export default ContentWrapper;
