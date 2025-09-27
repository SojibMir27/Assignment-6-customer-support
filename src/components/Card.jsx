import React from "react";
import calendarIcon from "../assets/calendar.png";

const Card = ({ supportData, handleAdd }) => {
  const date = new Date().toLocaleDateString();

  return (
    <>
      {supportData.map((card) => (
        <div
          onClick={() => handleAdd(card)}
          key={card.id}
          className="shadow-[0_4px_16px_4px_rgba(0,0,0,0.09)] rounded-md bg-white p-5 md:w-full w-[390px] mx-auto h-fit"
        >
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-[12px] md:text-xl text-[#34485a]">
              {card.title}
            </h2>
            <button type="button"
              
              className="py-0.5 px-3 cursor-pointer flex justify-center items-center rounded-[400px] font-bold text-[#109709] bg-[#b9f8cf]"
            >
              <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
              {card.status}
            </button>
          </div>

          <p className="text-[14px] py-1 text-[#627382]">{card.description}</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center my-2">
              <p className="font-medium text-[#627382]">#AC0{card.id}</p>
              <span
                className={`
            ml-3 font-medium text-[12px] md:text-[16px]
            ${
              card.priority == "high"
                ? "text-red-500"
                : card.priority == "medium"
                ? "text-yellow-500"
                : card.priority == "low"
                ? "text-green-500"
                : ""
            }`}
              >
                {card.priority} priority
              </span>
            </div>
            <div className="flex">
              <div className="flex justify-between items-center">
                <span className="mr-3 text-[14px] text-[#627382]">
                  {card?.customer}
                </span>
                <img className="mr-1 w-5" src={calendarIcon} alt="" />
                <span className="text-[14px] text-[#627382] ">{date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
