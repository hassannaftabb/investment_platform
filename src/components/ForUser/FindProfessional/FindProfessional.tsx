import React, { useState } from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import FindProfessionalCard from "./SubElements/FindProfessionalCard";
import FindProfessionalForm from "./SubElements/FindProfessionalForm";
import { getAllProfessionals } from "../../../services/Professionals/GetAllProfessionals";

const FindProfessional = () => {
  const [professionalsArray, setProfessionalsArray] = useState<Array<any>>([]);
  const [category, setCategory] = useState("");
  const [activeUserId, setActiveUserId] = useState<number | null>(null);

  const [sendMessagePopupOpen, setSendMessagePopupOpen] = useState(false);
  React.useEffect(() => {
    (async () => {
      const response: any = await getAllProfessionals(category || undefined);
      setProfessionalsArray(response.data);
    })();
  }, [category]);

  return (
    <div className='bg-[#F5F5F5]'>
      <CommonLayout className="sm:!w-full">
        <div className='flex flex-col mt-6'>
          <div className='m-auto w-[100%]'>
            {professionalsArray.map((item, index) => (
              <FindProfessionalCard
                key={index}
                image={item.businessDetails?.photo}
                icon={item.businessDetails?.logo}
                heading={item?.basicInfo?.companyName}
                star={0}
                reviews={0}
                content={item.businessDetails?.businessDescription}
                address={item.basicInfo?.address1}
                name={item?.basicInfo?.companyName}
                handleMessege={() => {
                  setSendMessagePopupOpen(true);
                  setActiveUserId(item.id);
                }}
              />
            ))}
            {professionalsArray?.length === 0 && (
              <div className='w-full text-center text-xl text-primary font-bold font-poppins'>
                Unfortunately! No professionals available!
              </div>
            )}
          </div>
        </div>
        {sendMessagePopupOpen && (
          <>
            <FindProfessionalForm
              handleClose={() => setSendMessagePopupOpen(false)}
              professionalId={activeUserId}
            />
            <div
              className='fixed top-0 left-0 right-0 bottom-0 bg-secondary-dark z-20 opacity-60'
              onClick={() => {
                setSendMessagePopupOpen(false);
              }}
            />
          </>
        )}
      </CommonLayout>
    </div>
  );
};

export default FindProfessional;
