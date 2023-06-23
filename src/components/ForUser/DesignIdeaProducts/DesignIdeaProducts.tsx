import React, { useState } from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import ProductCard from "../Landing/SubElements/ProductCard";
import DesignIdeasForm from "../DesignIdeas/DesignIdeaForm";
import { GetAllDesignIdeaProjectsByCategoryIdApi } from "../../../services/DesignIdeas/GetAllDesignIdeaProjectsByCategoryId";
import { useParams } from "react-router-dom";

const DesignIdeaProducts = () => {
  const [projects, setProjects] = useState([]);
  const { categoryId }: any = useParams();
  const { categoryName }: any = useParams();
  React.useEffect(() => {
    (async () => {
      const response: any = await GetAllDesignIdeaProjectsByCategoryIdApi(
        categoryId
      );
      setProjects(response.data);
    })();
  }, [categoryId]);

  return (
    <CommonLayout>
      <div className=" flex flex-col gap-4 mt-6">
        <h1 className="text-3xl font-semibold  pl-2">
          {categoryName} Interior Design
        </h1>
        <p className="font-mulish text-s  leading-[27px] pl-2">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>
        <div className="my-4 font-mulish">
          <div
            className={`w-full flex flex-wrap sm:w-[90%] sm:m-auto sm:flex-col ${
              projects.length > 4
                ? "justify-center gap-[2%]"
                : "justify-start gap-7"
            }`}
          >
            {projects?.map((item: any, index: number) => (
              <ProductCard
                key={index}
                containerId={index}
                homePage
                title={item.title}
                images={item.images}
                redirectUrl={`/design-ideas/${categoryName}/${categoryId}/project/${item.id}`}
                className="basis-[22%] sm:w-full min-w-[240px] rounded-2xl overflow-hidden"
              />
            ))}
          </div>
        </div>
        <DesignIdeasForm />
      </div>
    </CommonLayout>
  );
};

export default DesignIdeaProducts;
