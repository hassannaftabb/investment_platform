import React from "react";
import ProfileForm from "./EditForms/ProfileForm";
import ProjectsForm from "./EditForms/ProjectsForm";
import SocialMediaForm from "./EditForms/SocialMediaForm";
import BusinessForm from "./EditForms/BusinessForm";
import PasswordForm from "./EditForms/PasswordForm";

const EditProfile = () => {
  const profileMenus = [
    "Profile",
    "Projects",
    "Social Media",
    "Bussiness",
    "Password",
  ];
  const [menuOpened, setMenuOpened] = React.useState<number>(0);
  const FormSelected = (index: number) => {
    switch (index) {
      case 0:
        return <ProfileForm />;
      case 1:
        return <ProjectsForm />;
      case 2:
        return <SocialMediaForm />;
      case 3:
        return <BusinessForm />;
      case 4:
        return <PasswordForm />;
      default:
        return <ProfileForm />;
    }
  };
  return (
    <div className="flex mt-9 justify-between sm:flex-col sm:px-[8%] sm:gap-y-7">
      <div className="basis-[22%] min-w-[240px]">
        <div className="flex w-[88%] ml-[8%] sm:ml-0 flex-col border border-secondary-extralight-2 gap-2 rounded-lg p-3 pb-9">
          {profileMenus.map((item, index) => (
            <div
              key={index}
              className={`
                          min-h-[50px] 
                          font-mulish 
                          cursor-pointer 
                          hover:font-semibold hover:text-primary 
                          border-b border-secondary-extralight-2 
                          w-[70%] ml-[8%] pl-[6%] 
                          flex items-center
                          ${
                            menuOpened === index
                              ? "text-primary font-semibold"
                              : ""
                          }
                      `}
              onClick={() => {
                setMenuOpened(index);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="basis-[75%] pl-3%">{FormSelected(menuOpened)}</div>
    </div>
  );
};

export default EditProfile;
