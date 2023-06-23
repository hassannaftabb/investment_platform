import React, { useEffect, useState } from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import ProductCard from "../Landing/SubElements/ProductCard";
import Categories from "../Categories/Categories";
import { getAllProjectsApi } from "../../../services/Projects/GetAllProjects";

const Home = () => {
  const [allProjects, setAllProjects] = useState([]);

  useEffect(() => {
    (async () => {
      await getAllProjectsApi().then((response: any) =>
        setAllProjects(response.data)
      );
    })();
  }, []);

  console.log(allProjects);

  return (
    <CommonLayout>
      <div className='bg-[#F8F8F8] flex flex-col items-center justify-center'>
        <Categories />

        <div className='flex flex-wrap gap-x-6 w-full justify-center'>
          {allProjects?.map((project: any, index: number) => {
            return (
              <ProductCard
                key={index}
                containerId={index}
                homePage
                userId={project?.user?.id}
                title={project.projectName}
                images={project.projectImages}
                className='basis-[22%] min-w-[240px] sm:basis-[95%] rounded-2xl sm:rounded-xl overflow-hidden'
              />
            );
          })}
          {allProjects.length === 0 && (
            <div className='w-full text-primary font-bold text-center'>
              There are no professional projects for now!
            </div>
          )}
        </div>
      </div>
      <div className='h-[10vh]'></div>
    </CommonLayout>
  );
};

export default Home;
