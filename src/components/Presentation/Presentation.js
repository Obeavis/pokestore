import React from "react";

const Presentation = ({ onClick }) => (
  <div className="fixed z-40" onClick={() => onClick()}>
    <div
      className="fixed flex items-center justify-center bg-black top-0 left-0 right-0 bottom-0 bg-opacity-40"
      aria-hidden="true"
    ></div>
  </div>
);

export default Presentation;
