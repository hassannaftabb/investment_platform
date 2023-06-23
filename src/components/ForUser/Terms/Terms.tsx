import React from "react";
import StaticBox from "../../sub-components/shared/StaticBox/StaticBox";
import CommonLayout from "../../../layouts/Common/CommonLayout";

const Terms = () => {
  const termsAr = [
    {
      title: "User agreement",
      contents: [
        "Welcome to website! By accessing and using our website, you agree to be bound by these terms and conditions. If you do not agree with any of these terms, please do not use our website.",
        "Use of this website is subject to the following terms and conditions:",
        "1. Accuracy of information: Our website contains information about interior design, including but not limited to images, descriptions, and pricing of products and services. While we make every effort to ensure that the information on our website is accurate and up-to-date, we cannot guarantee its completeness or accuracy.",
        "2. Intellectual property rights: All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of [Interior Design Website Name] or its licensors and is protected by intellectual property laws. You may not use, reproduce, modify, distribute, or display any content without our prior written consent.",
        "3. Limitation of liability: [Interior Design Website Name] will not be liable for any damages or losses arising from your use of this website, including but not limited to indirect, incidental, special, punitive, or consequential damages.",
        "4. User conduct: You agree not to use this website for any illegal or unauthorized purposes, including but not limited to sending spam messages, infringing on the intellectual property rights of others, or transmitting viruses or malicious code.",
        "5. Changes to terms and conditions: [Interior Design Website Name] reserves the right to modify these terms and conditions at any time, and your continued use of this website following any changes constitutes your acceptance of the new terms.",
        "6. Governing law: These terms and conditions will be governed by and construed in accordance with the laws of",
        "By using this website, you represent that you have read and understand these terms and conditions, and that you agree to be bound by them. If you have any questions or concerns about these terms, please contact us.",
      ],
      gapTrue: true,
      index: [0, 1, 8],
    },
    {
      title: "Previous terms & condition version",
      contents: ["1. January 01, 2019", "2. January 01, 2018"],
      isBackground: false,
      gapTrue: true,
      isColor: true,
    },
  ];

  return (
    <CommonLayout>
      <div className="px-[8%] font-mulish mt-6">
        <p className="text-[30px] font-semibold ">
          Terms & <span className="text-[#ED0641]">condition</span>
        </p>
        <p className="text-[14px]">Last modified: January 01, 2020</p>
        <div>
          {termsAr.map((item, idx) => (
            <StaticBox
              title={item.title}
              contents={item.contents}
              isBackground={item.isBackground}
              gapTrue={item.gapTrue}
              index={item.index}
              isColor={item.isColor}
            />
          ))}
        </div>
      </div>
    </CommonLayout>
  );
};

export default Terms;
