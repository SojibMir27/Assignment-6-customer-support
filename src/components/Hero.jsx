import React from "react";
import vImg1 from '../assets/vector1.png'
import vImg2 from '../assets/vector2.png'
const Hero = ({ selectedData, resolvedTask }) => {
  let selectDataLength = selectedData.length;
  let resolvedTaskLength = resolvedTask.length;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px] my-[50px] px-[20px] w-full md:w-[1300px] mx-auto">
        <div className="relative rounded-md p-7 text-white h-[150px] md:h-[200px] flex flex-col items-center justify-center bg-gradient-to-br from-[#632ee3] to-[#9f62f2]">
          <img className="absolute left-0 w-47 md:w-70" src={vImg1} alt="" />
          <img className="absolute right-0 w-47 md:w-70" src={vImg2} alt="" />
          <h2 className="text-[25px]">In-Progress</h2>
          <p className="font-bold text-[30px]">{selectDataLength}</p>
        </div>

        <div className="relative rounded-md p-7 text-white h-[150px] md:h-[200px] 54CF68 bg-gradient-to-br from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center">
          {" "}
          <img className="absolute left-0 w-47 md:w-70" src={vImg1} alt="" />
          <img className="absolute right-0 w-47 md:w-70" src={vImg2} alt="" />
          <h2 className="text-[25px]">Resolved</h2>
          <p className="font-bold text-[30px]">{resolvedTaskLength}</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
