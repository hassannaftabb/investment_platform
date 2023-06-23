import React from "react";
import Footer from "../../components/ForUser/Footer/Footer";
import HeaderTabs from "../../components/ForUser/HeaderTabs/HeaderTabs";
import Nav from "../../components/ForUser/Nav/Nav";
import { CommonLayoutPropsType } from "./types";
import { useNavigate } from "react-router-dom";
import wifiIcon from "../../assets/images/icons/rss_feed.svg";
import lightbulb from "../../assets/images/icons/lightbulb.svg";
import more from "../../assets/images/icons/more.svg";
import account from "../../assets/images/icons/account_box.svg";

const CommonLayout = ({ children, className }: CommonLayoutPropsType) => {
  const navigate = useNavigate();
  const imgArray = [
    { icon: wifiIcon, link: "/" },
    { icon: account, link: "/findprofessional" },
    { icon: lightbulb, link: "/designIdeas" },
    { icon: more, link: "/" },
  ];
  return (
    <div
      className={`flex flex-col items-center justify-between w-full h-full min-h-[100vh] overflow-x-hidden `}
    >
      <Nav />
      {window.innerWidth > 600 && <HeaderTabs />}
      <div className={`w-11/12 relative ` + className}>{children}</div>
      <Footer />
      {window.innerWidth < 600 && (
        <div className="fixed bottom-0 w-full h-[65px] rounded-t-xl bg-[#F5F5F5] shadow-lg px-2 flex items-center justify-around z-30 py-4">
          {imgArray.map((item, idx) => (
            <div onClick={() => navigate(item.link)}>
              <img
                key={idx}
                src={item.icon}
                style={{ width: "24px", filter: "greyscale(1)" }}
                alt=""
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommonLayout;
