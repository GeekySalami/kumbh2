import React from "react";

const Contributors = ({ imgurl, name, position }) => {
  return (
    <div className="justify-center text-center">
        <img
            src={imgurl}
            alt={name}
            className="w-[8vw] h-[8vw] rounded-full mx-auto"/>
      <p className="text-[1.35vw] font-semibold pt-3">{name}</p>
      <p className="text-[1vw]">{position}</p>
    </div>
  );
};

export default Contributors;
