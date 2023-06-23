import React from "react";
import SubElement_2Img from "../../../../assets/images/SubElement_2Img.avif";
import ProductCard from "../../Landing/SubElements/ProductCard";
import { Button } from "@mui/material";
import { IoMdRemoveCircle } from "react-icons/io";

const ProjectsForm = () => {
  const [ProductData, setProductData] = React.useState([
    {
      title: "Monochromatic Grey 1 BHK",
      img: [SubElement_2Img, SubElement_2Img, SubElement_2Img],
      content: "Add the cloudy hues to your space.",
      save: 25,
      address: "Kanpur,Uttar Pradesh",
      category: ["Category"],
      saved: false,
    },
    {
      title: "Monochromatic Grey 2 BHK",
      img: [SubElement_2Img, SubElement_2Img, SubElement_2Img],
      content: "Add the cloudy hues to your space.",
      save: 25,
      address: "Kanpur,Uttar Pradesh",
      category: ["Category"],
      saved: false,
    },
    {
      title: "Monochromatic Grey 2 BHK",
      img: [SubElement_2Img, SubElement_2Img, SubElement_2Img],
      content: "Add the cloudy hues to your space.",
      save: 25,
      address: "Kanpur,Uttar Pradesh",
      category: ["Category"],
      saved: false,
    },
  ]);
  const handleSaveClick = (index: number) => {
    let copied = [...ProductData];
    copied[index].saved = !copied[index].saved;
    if (copied[index].saved) {
      copied[index].save = copied[index].save + 1;
    } else {
      copied[index].save = copied[index].save - 1;
    }
    setProductData(copied);
  };
  const handleDelete = (index: number) => {
    setProductData([...ProductData].filter((v, idx) => index !== idx));
  };
  return (
    <div className="w-[80%] sm:w-full m-auto">
      <h2 className=" text-2xl my-3 font-mulish font-bold text-center">
        Update Projects
      </h2>
      <div className="flex justify-end">
        <Button
          variant="outlined"
          className=" 
              !border-dotted 
              !rounded-none 
              !border-secondary-light 
              !text-secondary-light 
              !font-poppins 
              border 
              min-h-[40px] 
              px-5
            "
        >
          + ADD
        </Button>
      </div>
      <div className="flex gap-[1.5rem] overflow-x-auto scroll-smooth scrollbar-hide myProjectEditProjectContainer">
        {ProductData.length < 1 && (
          <div className="flex items-center justify-center h-60 w-[80%] rounded-xl border border-secondary-extralight text-2xl font-poppins font-semibold text-center mt-5">
            Nothing To Show <br /> Add Project
          </div>
        )}
        {ProductData.map((item, index) => (
          <div key={index} className="relative max-w-[250px] flex">
            <ProductCard
              save={item.save}
              handleSave={() => handleSaveClick(index)}
              saved={item.saved}
              homePage
              title={item.title}
              content={item.content}
              images={item.img}
              className=" basis-[23%] min-w-[250px] rounded-2xl overflow-hidden"
            />
            <IoMdRemoveCircle
              className=" text-primary absolute top-0 right-[-15px] text-3xl z-10 cursor-pointer"
              onClick={() => {
                handleDelete(index);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsForm;
