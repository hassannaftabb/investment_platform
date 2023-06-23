import React from "react";
import Img1 from "../../../assets/images/about_header_img.png";
import AboutUsComonent from "./AboutUsComonent";
import {
  arr1,
  AboutHeadingArr,
  AboutCardArr1,
  AboutCardArr2,
} from "./AboutConst";
import AboutCard from "./AboutCard";
import AboutHeading from "./AboutHeading";
import CommonLayout from "../../../layouts/Common/CommonLayout";

const About = () => {
  return (
    <CommonLayout>
      <section>
        <div className="pt-[2rem]">
          <img src={Img1} className="w-[100%] h-[100%]" alt=""/>
        </div>
        <div className="p-1 flex flex-col gap-10">
          <h1 className="text-3xl text-[#000000] text-center font-bold mt-10">
            About Us
          </h1>
          <AboutUsComonent
            arrImg={arr1[0].arrImg}
            arrHeading={arr1[0].arrHeading}
            arrText={arr1[0].arrText}
            isReverse={arr1[0].isReverse}
            arrSubHeading={arr1[0].arrSubHeading}
          />
          <AboutUsComonent
            arrImg={arr1[1].arrImg}
            arrHeading={arr1[1].arrHeading}
            arrText={arr1[1].arrText}
            isReverse={arr1[1].isReverse}
            arrSubHeading={arr1[1].arrSubHeading}
          />
          <AboutHeading
            heading={AboutHeadingArr[0].heading}
            subheading={AboutHeadingArr[0].subheading}
            text={AboutHeadingArr[0].text}
          />
          <AboutCard AboutCardArr1={AboutCardArr1} />
          <AboutUsComonent
            arrImg={arr1[2].arrImg}
            arrHeading={arr1[2].arrHeading}
            arrText={arr1[2].arrText}
            isReverse={arr1[2].isReverse}
            arrSubHeading={arr1[2].arrSubHeading}
          />
          <AboutHeading
            heading={AboutHeadingArr[1].heading}
            subheading={AboutHeadingArr[1].subheading}
            text={AboutHeadingArr[1].text}
          />
          <AboutCard AboutCardArr1={AboutCardArr2} />
          <AboutUsComonent
            arrImg={arr1[3].arrImg}
            arrHeading={arr1[3].arrHeading}
            arrText={arr1[3].arrText}
            isReverse={arr1[3].isReverse}
            arrSubHeading={arr1[3].arrSubHeading}
          />
        </div>
      </section>
    </CommonLayout>
  );
};

export default About;
