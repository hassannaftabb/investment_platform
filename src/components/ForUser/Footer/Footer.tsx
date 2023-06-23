import React from "react";
import LogoLight from "../../../assets/images/LogoLight.png";
import { FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaFacebookF } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  interface linksProps {
    title: string;
    subtitle: {
      text: string;
      link?: string;
      icon?: JSX.Element;
    }[];
  }
  const icons = [
    {
      icon: <FaFacebookF fontSize={"1.1rem"} />,
      link: "https://www.facebook.com/amarinteriordesigner/",
    },
    {
      icon: <FaTwitter fontSize={"1.1rem"} />,
      link: "https://twitter.com/amardesigner_",
    },
    {
      icon: <FaYoutube fontSize={"1.1rem"} />,
      link: "https://www.youtube.com/@amardesigner918",
    },
    {
      icon: <FaLinkedin fontSize={"1.1rem"} />,
      link: "https://www.linkedin.com/company/amar-designer/",
    },
    {
      icon: <FaInstagram fontSize={"1.1rem"} />,
      link: "https://www.instagram.com/amarinteriordesigner/?hl=en",
    },
  ];
  const links: linksProps[] = [
    {
      title: "Amar Design",
      subtitle: [
        {
          text: "Privicy Policy",
          link: "/privacy",
        },
        {
          text: "Terms & Condition",
          link: "/terms",
        },
        {
          text: "Products",
          link: "/",
        },
      ],
    },
    {
      title: "Company",
      subtitle: [
        {
          text: "About us",
          link: "/about",
        },
        {
          text: "Contact us",
          link: "/about",
        },
        {
          text: "Login",
          link: "/login",
        },
        {
          text: "Sign Up",
          link: "/signup",
        },
        {
          text: "FAQ",
          link: "/faq",
        },
      ],
    },
    {
      title: "Get in Touch with Us",
      subtitle: [
        {
          text: "650, Astra Building ,J.B. Nagar, Andheri East, Mumbai, Maharashtra 400099",
          icon: <HiLocationMarker className="w-[1.8rem] flex h-[1.3rem]" />,
        },
        {
          text: "+91 74284 30119",
          icon: <BsFillTelephoneFill />,
        },
        {
          text: "heyamardesigner@gmail.com",
          icon: <FaEnvelope className="w-[0.9rem] flex h-[1rem]" />,
        },
      ],
    },
  ];
  const navigate = useNavigate();
  return (
    <footer className="bg-secondary-dark w-[100vw] px-[8%] py-5 text-secondary-bright font-poppins text-sm mt-8">
      <div className="flex justify-between mt-12 mb-16 md:mb-0 md:flex-wrap">
        <div className="w-[42%]">
          <div className="w-full md:flex md:flex-wrap md:w-80">
            <div
              className="flex gap-3 cursor-pointer"
              onClick={() => {
                navigate("/");
              }}
            >
              <div className="w-[50px]">
                <img src={LogoLight} alt="" />
              </div>
              <div>
                <h3 className="font-mulish font-bold text-xl mb-1">
                  Amar Designer
                </h3>
                <p className="text-xs">You Dream, We Design</p>
              </div>
            </div>
            <div className="mt-5 mb-2 text-[0.75rem] w-[95%]">
              We are an Marketplace which helps interior professional to connect
              with the homeowners to provide the fast, better & quality services
              by building the platform between them.
            </div>
            {window.innerWidth > 600 && (
              <div>
                <div className="flex items-center gap-1 mt-2">
                  {icons.map((item, index) => (
                    <div
                      key={index}
                      className="w-[48px] h-[48px] rounded-lg cursor-pointer hover:bg-primary flex items-center justify-center"
                    >
                      <a href={item.link} target="_blank" rel="noreferrer">
                        {item.icon}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex grow justify-between max-w-[645px] xl:pl-[10%] lg:pl-[2%] pl-[0px] md:pl-0 md:flex-wrap md:mt-4">
          {links.map((item, index) => (
            <div
              key={index}
              className={`${index === 2 ? "md:w-3/4 w-[45%]" : ""}`}
            >
              <h4 className="font-bold mb-4 text-base lg:text-[14px]">
                {item.title}
              </h4>
              <div className="flex flex-col">
                {item.subtitle.map((itm, idx) =>
                  itm.link ? (
                    <a
                      key={idx}
                      href={itm.link}
                      className="mb-2 text-[0.8rem] lg:text-[0.7rem]"
                    >
                      {itm.text}
                    </a>
                  ) : (
                    <div
                      key={idx}
                      className={`flex text-[0.8rem] lg:text-[0.7rem] ${
                        idx === 0 ? "items-start" : "items-center"
                      } mb-2 cursor-pointer`}
                      onClick={(e) => {
                        if (idx === 2) {
                          window.location.href =
                            "mailto:gautam@amardesigner.com";
                        } else if (idx === 1) {
                          window.location.href = "tel:900300400";
                        }
                        e.preventDefault();
                      }}
                    >
                      {itm.icon}
                      <p className="ml-2 text-[0.8rem]">{itm.text}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        {window.innerWidth < 600 && (
          <div className="flex items-center gap-1 mt-2">
            {icons.map((item, index) => (
              <div
                key={index}
                className="w-[48px] h-[48px] rounded-lg cursor-pointer hover:bg-primary flex items-center justify-center"
              >
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.icon}
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="text-center font-poppins md:mt-5">
        Amar Designers © 2023. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
