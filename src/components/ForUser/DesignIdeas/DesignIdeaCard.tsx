import React, { useState } from "react";
import dots from "../../../assets/images/dots.png";
import { useNavigate } from "react-router-dom";
import { GetAllDesignIdeasCategoriesApi } from "../../../services/DesignIdeas/GetAllCategories";

const DesignIdeasCard = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    (async () => {
      const response: any = await GetAllDesignIdeasCategoriesApi();
      setCategories(response.data);
    })();
  }, []);
  return (
    <div className="my-4 font-mulish">
      <div className=" w-full flex flex-wrap sm:flex-col sm:flex-nowrap justify-between">
        {categories.map((item: any) => (
          <div
            className="basis-[23.5%] lg:basis-[30%] m-2 shadow-lg flex flex-col rounded-lg cursor-pointer"
            onClick={() => {
              navigate(`/${item.title}/${item.id}/projects`);
            }}
          >
            <div className="flex-[75%]">
              <img
                src={item.image}
                className="w-[100%] h-[100%]  rounded-t-lg"
                alt=""
              />
            </div>
            <div className="bg-[#fff4f4] flex-[25%] rounded-b-lg p-3 ">
              <h1 className="font-[700] text-[16px]">{item.title}</h1>
              <span className="flex items-center gap-2 mt-1">
                <img src={dots} alt="dots" />
                <p className="font-[500] text-[15px] text-[#ED0641]">
                  {item.totalProjects}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DesignIdeasCard;
