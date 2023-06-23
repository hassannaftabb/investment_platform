import React from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import HeaderImg from "../../../assets/images/HeaderImg.png";
import TextField from "@mui/material/TextField";
import Button from "../../sub-components/shared/Button/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { IoIosArrowDown } from "react-icons/io";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import LandingCompImg_1 from "../../../assets/images/LandingComp_1.avif";
import LandingCompImg_2 from "../../../assets/images/LandingComp_2.avif";
import LandingCompImg_3 from "../../../assets/images/LandingComp_3.avif";
import LandingCompImg_4 from "../../../assets/images/LandingComp_4.avif";
import LandingCompImg_5 from "../../../assets/images/LandingComp_5.avif";
import LandingCompImg_6 from "../../../assets/images/LandingComp_6.avif";
import LandingCompImg_7 from "../../../assets/images/LandingComp_7.avif";
import LandingCompImg_8 from "../../../assets/images/LandingComp_8.avif";
import Landing_1Img from "../../../assets/images/Landing_1Img.avif";
import CorouselContainer from "./SubElements/CorouselContainer";
import HowItWorksComponent from "./HowItWorksComponent";
import WhyChooseUs from "./SubElements/WhyChooseUs";
import LandingTable from "./SubElements/LandingTable";

const Landing = () => {
  const LandingComp_1Ar = [
    {
      image: LandingCompImg_1,
      title: "Personalised designs",
    },
    {
      image: LandingCompImg_2,
      title: "10-year warranty",
    },
    {
      image: LandingCompImg_3,
      title: "Transparent pricing",
    },
  ];

  const question = [
    {
      ques: "How do i pay for the essentials or premium plan?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "We need to add new users to our team. How will that be billed?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "Do you offer discounts for non fropit organizations or educational institutions?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "Can i cancel my essentials or premium plan subscription at anytime?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
    {
      ques: "Can i cancel my essentials or premium plan subscription at anytime?",
      ans: "You can pay with a credit car or via net banking (if you are in Poland). We will renew your subscription automatically at the end of every billing cycle.",
    },
  ];

  const LandingComp_2Ar = [
    {
      image: LandingCompImg_4,
      title: "Meet a designer",
      isClassName: true,
    },
    {
      image: LandingCompImg_5,
      title: "(5% payment) Book a renovation",
      isClassName: true,
    },
    {
      image: LandingCompImg_6,
      title: "(50% payment) Execution begins",
      isClassName: true,
    },
    {
      image: LandingCompImg_7,
      title: "(100% payment) Final installations",
      isClassName: true,
    },
    {
      image: LandingCompImg_8,
      title: "Move in and enjoy!",
      isClassName: true,
    },
  ];

  const handleClick = () => {};

  const [color, setColor] = React.useState(0);
  const handleClick1 = (idx: number) => {
    setColor(idx);
  };

  return (
    <CommonLayout className="w-full">
      <div className="flex flex-col relative my-4">
        <div className="flex top-[-1%] lg:top-0 left-0 py-9 lg:py-0 right-0 justify-center items-center relative lg:relative lg:flex-col lg:px-0 lg:gap-2 mt-10">
          {window.innerWidth > 600 && (
            <div className=" w-[100%] h-[110%] absolute">
              <img src={HeaderImg} className="w-[100%] h-full" alt="" />
            </div>
          )}
          <div className="relative lg:py-5 lg:pl-3 mr-9 lg:mr-0">
            <p className="text-[40px] font-[600] font-poppins text-[#FFFFFF]">
              Bring home beautiful <br /> interiors{" "}
              <span className="text-[#FECC2A]">
                that fit your <br /> budget
              </span>
            </p>
            <p className="text-[20px] font-mulish font-[600] text-[#FFFFFF]">
              Experience unmatched quality & timely delivery with Livspace
            </p>
            {window.innerWidth < 600 && (
              <img
                src={HeaderImg}
                className="h-[100%] absolute left-0 top-0 object-cover z-[-1]"
                alt=""
              />
            )}
          </div>
          <div className="py-10 px-12 w-[400px] lg:w-[100%] bg-[#FFFFFF] z-20 rounded-[8px]">
            <p className="text-[26px] font-[500]">Designs for Every Budget</p>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              size="small"
              style={{ width: "100%", margin: "10px 0px" }}
            />
            <TextField
              id="outlined-basic"
              label="Email ID"
              variant="outlined"
              size="small"
              style={{ width: "100%", margin: "10px 0px" }}
            />
            <FormControlLabel
              value="end"
              control={<Checkbox />}
              label="Send me updates on WhatsApp"
              labelPlacement="end"
            />
            <TextField
              id="outlined-basic"
              label="Property Name"
              variant="outlined"
              size="small"
              style={{ width: "100%", margin: "10px 0px" }}
            />
            <Button
              title="GET FREE QUOTE"
              onClick={handleClick}
              className="!rounded-[25px] mt-3 text-[16px] font-[500]"
            />
            <p className="text-[12.5px] text-left mt-[16px] font-poppins">
              By submitting this form, you agree to the{" "}
              <span className="text-[#EB595F]">
                privacy <br />
                policy
              </span>{" "}
              & <span className="text-[#EB595F]">terms and conditions</span>
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col sm:items-center py-20 justify-center gap-10">
          {LandingComp_1Ar.map((item, index) => (
            <div key={"item" + index}>
              <HowItWorksComponent image={item.image} title={item.title} />
            </div>
          ))}
        </div>
        <div className="py-20 bg-[#F5F5F5] text-center flex flex-col">
          <div className="m-auto max-w-[1150px]">
            <p className="mb-4 font-[700] text-[32px] text-[#41303e]">
              The home design you crave
            </p>
            <p className="text-center max-w-[790px] text-[20px] font-poppins font-[400] text-[#41303e]">
              When you give your home the Livspace touch, you get both beauty
              and functionality. We employ state-of-the-art technology to ensure
              your home features a flawless look that lasts a very long time.
            </p>
            <Button
              title="BOOK FREE CONSULTATION"
              onClick={handleClick}
              className="!rounded-[25px] mt-5 text-[16px] font-[500] max-w-[290px] m-auto"
            />
          </div>
        </div>
        <CorouselContainer />
        <div>
          <WhyChooseUs />
        </div>
        <div>
          <LandingTable />
        </div>
        <div>
          <div
            className="mx-[20px] my-20 flex sm:flex-col bg-[#f9e8bd] items-center"
            style={{ borderRadius: "8px", border: "2px solid #f9e8bd" }}
          >
            <div className="w-[750px] sm:w-[100%] rounded-[8px]">
              <img
                src={Landing_1Img}
                className="w-[100%] rounded-t-[8px] rounded-b-[8px]"
                alt="alt"
              />
            </div>
            <div className="p-[40px]">
              <p className="text-[35px] text-[#41303e] font-[600]">
                Download home interior guide
              </p>
              <p className="text-[16px] text-[#41303e] font-poppins mt-3">
                Don't forget to consider these fundamental design guidelines to
                know before you start interior designing!
              </p>
              <Button
                title="DOWNLOAD NOW"
                onClick={handleClick}
                className="font-[500] max-w-[300px] text-[16px] !rounded-[25px] mt-4"
              />
            </div>
          </div>
        </div>
        <div
          className="py-20 flex flex-col"
          style={{ background: "rgb(245, 245, 245)" }}
        >
          <div className="text-center m-auto min-w-[1150px] sm:w-[100%] sm:min-w-0">
            <p className="text-[35px] font-[700] text-[#41303e] font-poppins">
              How it works
            </p>
            <div>
              <div
                className="w-[85%] m-auto relative top-[78px] sm:hidden"
                style={{ borderTop: "1px dashed #41303e" }}
              ></div>
              <ul className="flex justify-between mt-6 sm:flex-col sm:items-center">
                {LandingComp_2Ar.map((item, index) => (
                  <li key={index}>
                    <HowItWorksComponent
                      image={item.image}
                      title={item.title}
                      isClassName={item.isClassName}
                    />
                  </li>
                ))}
              </ul>
            </div>
            <Button
              title="BOOK FREE CONSULTATION"
              onClick={handleClick}
              className="!rounded-[25px] max-w-[290px] m-auto mt-10 font-[600] text-[16px]"
            />
          </div>
        </div>
        <div className="py-[100px] px-5 text-center">
          <p className="text-[35px] text-[#41303e] font-[700] font-poppins">
            Connect with us
          </p>
          <p className="text-[16px] text-[#41303e] font-[500] font-mulish">
            Reach out on WhatsApp or give us a call for the best home design
            experience.
          </p>
          <div className="flex justify-center gap-5 mt-6">
            <Button
              title="CALL NOW"
              onClick={handleClick}
              className="!bg-[#365677] !rounded-[25px] max-w-[200px] font-[600] text-[16px] !border-[#365677]"
            />
            <Button
              title="WHATSAPP"
              onClick={handleClick}
              className="!rounded-[25px] max-w-[200px] font-[600] text-[16px] !bg-[#365677] !border-[#365677]"
            />
          </div>
        </div>
        <div
          className="py-10"
          style={{ background: "linear-gradient(135deg,#442d43,#73476d)" }}
        >
          <div className="text-center text-[#FFFFFF] flex flex-col">
            <p className="text-[35px] font-[700] font-poppins py-4">
              <span className="text-[#FFCC66]">Your dream home</span> is just a
              click away{" "}
            </p>
            <p className="text-[16px] font-[600] font-mulish">
              Book a free consultation with our expert interior designers.
            </p>
            <Button
              title="START YOUR DESIGN JOURNEY"
              onClick={handleClick}
              className="m-auto max-w-[320px] !rounded-[25px] font-[600] text-[16px] my-5"
            />
          </div>
        </div>
        <div className="w-11/12 m-auto">
          <p className="text-[35px] text-center py-6 text-[#41303e] font-[700] font-poppins">
            FAQs
          </p>
          {question.map((item, idx) => (
            <Accordion
              expanded={idx === color ? true : false}
              onClick={() => {
                handleClick1(idx);
              }}
              style={{
                borderRadius: "12px",
                margin: ".8rem 0",
                background: "inherit",
              }}
              key={idx}
            >
              <AccordionSummary
                style={{
                  borderRadius: "12px 12px 0 0",
                  borderRight:
                    idx === color ? "2px solid #ED0641" : "2px solid #DEDEDE",
                  borderLeft:
                    idx === color ? "2px solid #ED0641" : "2px solid #DEDEDE",
                  borderTop:
                    idx === color ? "2px solid #ED0641" : "2px solid #DEDEDE",
                  padding: ".2rem 1rem .2rem 2rem",
                }}
                expandIcon={<IoIosArrowDown />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  style={{ fontFamily: "Poppins" }}
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "24px",
                    color: idx === color ? "#ED0641" : "#130B01",
                  }}
                  onClick={() => {
                    handleClick1(idx);
                  }}
                >
                  {item.ques}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                style={{
                  borderRadius: "0 0 12px 12px",
                  borderBottom:
                    idx === color ? "2px solid #ED0641" : "2px solid #DEDEDE",
                  borderRight:
                    idx === color ? "2px solid #ED0641" : "2px solid #DEDEDE",
                  borderLeft:
                    idx === color ? "2px solid #ED0641" : "2px solid #DEDEDE",
                }}
              >
                <Typography
                  style={{ fontFamily: "Poppins" }}
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "14px",
                    lineHeight: "24px",
                    padding: ".2rem 1rem .2rem 1rem",
                  }}
                  color="#130B01"
                >
                  {item.ans}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Landing;
