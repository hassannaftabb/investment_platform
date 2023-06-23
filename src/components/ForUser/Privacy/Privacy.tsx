import React from "react";
import StaticBox from "../../sub-components/shared/StaticBox/StaticBox";
import CommonLayout from "../../../layouts/Common/CommonLayout";

const Privacy = () => {
  const privacyAr = [
    {
      title: "Introduction",
      contents: [
        "Sed non dui aliquam, ullamcorper est non, aliquet mauris. Quisque lacus ligula, dapibus nec dignissim non, tincidunt vel quam. Etiam porttitor iaculis odio.",
        "Cras sagittis nunc lectus, in condimentum ligula ornare at. Etiam sagittis malesuada nisl. Duis volutpat ligula ante. Sed cursus, tortor a pellentesque pulvinar, lorem ipsum gravida elit, id posuere elit neque in est. Mauris ex justo, tincidunt at suscipit quis, pretium a mi.",
      ],
    },
    {
      title: "Using our services",
      contents: [
        "Sed non dui aliquam, ullamcorper est non, aliquet mauris. Quisque lacus ligula, dapibus nec dignissim non, tincidunt vel quam. Etiam porttitor iaculis odio.",
        "Cras sagittis nunc lectus, in condimentum ligula ornare at. Etiam sagittis malesuada nisl. Duis volutpat ligula ante. Sed cursus, tortor a pellentesque pulvinar, lorem ipsum gravida elit, id posuere elit neque in est. Mauris ex justo, tincidunt at suscipit quis, pretium a mi.",
      ],
    },
    {
      title: "Privacy and copyright protection",
      contents: [
        "Duis ultrices augue id feugiat commodo. Vivamus eu elit convallis, posuere neque at, ultricies tortor. Donec eleifend tortor vel laoreet convallis.",
        "Aliquam fermentum velit nunc, quis tristique neque imperdiet in. Etiam pretium fermentum eros vitae scelerisque.",
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam dignissim urna eget dictum congue.",
      ],
    },
    {
      title: "Your content in our service",
      contents: [
        "Aenean id placerat tortor. Ut vel interdum odio. Mauris vitae tortor augue. Sed tincidunt, metus id venenatis dictum, nisi felis suscipit neque, pharetra consectetur nibh eros et lorem. Suspendisse potenti. ",

        "Vivamus eu massa gravida, facilisis mauris vel, sodales diam. Phasellus at nisi condimentum, bibendum lacus eu, suscipit erat. Mauris fringilla laoreet tristique. Sed eleifend tincidunt erat, in cursus felis fringilla sit amet. Morbi commodo est dapibus metus tincidunt pellentesque.",
      ],
    },
  ];

  return (
    <CommonLayout>
      <div className="px-[8%] font-mulish mt-6">
        <p className="text-[30px] font-semibold ">
          Privacy & <span className="text-[#ED0641]">Policy</span>
        </p>
        <p className="text-[14px]">Last modified: January 01, 2020</p>
        <div className="my-10">
          {privacyAr.map((item, key) => (
            <div key={"item" + key}>
              <StaticBox title={item.title} contents={item.contents} />
            </div>
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Privacy;
