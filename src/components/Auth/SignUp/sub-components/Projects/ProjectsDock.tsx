import React, { useState } from "react";
import CommonLayout from "../../../../../layouts/Common/CommonLayout";
import CreateProject from "./CreateProject";
import { useFormik } from "formik";
import { Project } from "./types";
import { IoMdAddCircle } from "react-icons/io";
import {
  addProject,
  getNextID,
  getProjectById,
  projects,
} from "./repo/ProjectRepo";
import ProjectCard from "./ProjectCard";
import * as yup from "yup";
import Button from "../../../../sub-components/shared/Button/Button";

const ProjectsDock = ({ submit }: any) => {
  const [isAddProjectEnabled, setIsAddProjectEnabled] =
    React.useState<boolean>(false);
  const [activeProjectId, setActiveProjectId] = React.useState<null | number>(
    null
  );

  const setAddProjectFormToEnable = (id: number) => {
    setIsAddProjectEnabled(true);
    setActiveProjectId(id);
  };

  const backToDock = () => {
    setIsAddProjectEnabled(false);
    setActiveProjectId(null);
  };

  let project: any;
  if (activeProjectId) {
    project = getProjectById(activeProjectId);
  }

  const formik = useFormik({
    initialValues: {
      projectAddress: project?.projectAddress || "",
      projectCategory: project?.projectCategory || "",
      projectCost: project?.projectCost || "",
      projectImages: project?.projectImages || [],
      projectName: project?.projectName || "",
      projectYear: project?.projectYear || "",
    } as Project,
    validationSchema: yup.object({
      projectAddress: yup.string().required("Project address is required!"),
      projectCategory: yup.string().required("Project category is required!"),
      projectCost: yup.string().required("Project cost is required!"),
      projectImages: yup
        .array()
        .min(1, "Add at least 1 image of your project!")
        .required("Project cost is required!"),
      projectName: yup.string().required("Project name is required!"),
      projectYear: yup
        .string()
        .min(4, "Incorrect year")
        .max(4, "Incorrect year")
        .required("Project year is required!"),
    }),
    onSubmit: (values) => {
      addProject({ ...values, id: getNextID() });
      afterSavedFunc();
    },
  });
  const afterSavedFunc = () => {
    setIsAddProjectEnabled(false);
    setActiveProjectId(null);
    formik.resetForm();
  };

  const [allProjects, setAllProjects] = useState<any>(projects);

  console.log(projects);

  const index = localStorage.getItem("index");

  const photoArr = Array.from({ length: Number(index) }).map((item, index) => {
    let thumbnail = localStorage.getItem(`thumbnail${index}`) as string;

    return thumbnail;
  });
  console.log(formik.values);

  return (
    <CommonLayout>
      {!isAddProjectEnabled ? (
        <div className="flex flex-col font-mulish space-y-3 my-8">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between w-full items-center">
              <h3 className="font-semibold text-[41px] leading-[51.6px] text-secondary-dark">
                Add Your Amazing Projects
              </h3>
            </div>
            <p className="font-semibold text-base text-secondary-extralight w-3/5">
              A Project is a collection of photos and videos of your own work or
              products. Projects are usually best organized by client, job site,
              or product line.
            </p>
            <div className="flex flex-wrap gap-6">
              {allProjects?.length > 0 ? (
                <>
                  {allProjects?.map((project: Project) => {
                    return (
                      <ProjectCard
                        title={project.projectName}
                        cost={project.projectCost}
                        category={project.projectCategory}
                        id={project.id}
                        address={project.projectAddress}
                        images={photoArr}
                        fileImages={project.projectImages}
                        homePage
                        setAllProjects={setAllProjects}
                        className="!max-w-[400px] basis-1/3"
                      />
                    );
                  })}
                  <div
                    className="w-full h-32 border-4 border-dashed border-[#DCDBDDD6] flex items-center justify-center cursor-pointer  hover:shadow-md hover:shadow-secondary-extralight rounded-lg"
                    onClick={() => setAddProjectFormToEnable(getNextID())}
                  >
                    <div className="flex space-x-2 text-4xl text-[#DCDBDDD6]">
                      <IoMdAddCircle />
                      <span>Add</span>
                    </div>
                  </div>
                </>
              ) : (
                <div
                  className="w-full h-32 border-4 border-dashed border-[#DCDBDDD6] flex items-center justify-center cursor-pointer  hover:shadow-md hover:shadow-secondary-extralight rounded-lg"
                  onClick={() => setAddProjectFormToEnable(getNextID())}
                >
                  <div className="flex space-x-2 text-4xl text-[#DCDBDDD6]">
                    <IoMdAddCircle />
                    <span>Add</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="w-full flex justify-end">
            <div className="w-2/6">
              <Button title="Continue" onClick={submit} />
            </div>
          </div>
        </div>
      ) : (
        <CreateProject formik={formik} backToDock={backToDock} />
      )}
    </CommonLayout>
  );
};

export default ProjectsDock;
