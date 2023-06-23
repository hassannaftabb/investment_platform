import React from "react";
import { InfoCorouselListTypes } from "../SubElementTypes/InfoCorouselListTypes";

const InfoCorouselList = ({ icon, title, contents }: InfoCorouselListTypes) => {
  return (
    <div
      className="p-3 pb-5"
      style={{
        border: "1px solid #eceaeb",
        borderRadius: "8px",
        boxShadow: "0 2px 4px 0 rgba(65,48,62,.15)",
      }}
    >
      <div className="flex items-center">
        <img src={icon} alt="" />
        <p className="ml-3 text-[20px] font-[600] text-[#41303e] font-[Roboto]">
          {title}
        </p>
      </div>
      <div>
        <ul className="list-disc ml-10 mt-3 mb-5 mr-3">
          {contents.map((item, index) => (
            <div key={"item" + index}>
              <li className="mb-4">
                <p className="text-[16px] font-[Roboto] text-[#41303e]">
                  {item}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InfoCorouselList;
