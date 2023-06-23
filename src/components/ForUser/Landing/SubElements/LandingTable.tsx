import React from "react";

const LandingTable = () => {
  const tableArray = [
    {
      title: "Price",
      content:
        "No hiiden costs Quatation shared upfront with no additional shared upfront with no addintional costs added later.",
      description: "30-40% hike between first quote & final cost",
    },
    {
      title: "Convenience",
      content: "One-stop destination for all interior needs",
      description: "Multiple market trips to find and finalize everything",
    },
    {
      title: "Design",
      content: "Personalized designs with 3D visuals",
      description: "Cookie-cutter designs with 2D visuals",
    },
    {
      title: "Timelines",
      content: "45-days installation* Regular updates with project tracking",
      description:
        "Unreliable timelines. Lack of communication on updates/delay",
    },
    {
      title: "Quality",
      content:
        "Branded materials Mutiple quality checks at every stage. 100% In-house team.",
      description:
        "Inferior materials used to cutt costs Minimal quality checks Outsourced to small contractors.",
    },
    {
      title: "Warranty",
      content:
        "Up to 10 years warranty* India's first & only on-site service warranty",
      description:
        "Warranty will be offered up to 2-3 years for produsts or services or not at all.",
    },
    {
      title: "After-Sales Support",
      content: "Dedicated team for prompt response & support",
      description: "No after-sales support",
    },
  ];
  return (
    <div className="w-full my-[10vh] landingTableContainer">
      <table className="w-[80%] m-auto border-t-4 border-secondary-dark font-poppins">
        {tableArray.map((item, index) => (
          <tr
            key={index}
            className={`${
              index % 2 === 0
                ? "bg-secondary-extralight-2"
                : "bg-secondary-bright"
            } h-14`}
          >
            <th className="w-[28%] text-center text-[15px] uppercase">{item.title}</th>
            <td className="w-[35%] text-center text-[13px] p-3">{item.content}</td>
            <td className="w-[35%] text-center text-[13px] p-3">{item.description}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default LandingTable;
