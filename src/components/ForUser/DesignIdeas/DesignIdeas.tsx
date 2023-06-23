import React from "react";
import CommonLayout from "../../../layouts/Common/CommonLayout";
import DesignIdeasCard from "./DesignIdeaCard";
import DesignIdeasForm from "./DesignIdeaForm";

const DesignIdeas = () => {
  return (
    <CommonLayout>
      <div className=" flex flex-col gap-4 mt-6">
        <h1 className="text-3xl font-semibold  pl-2">Home Interior Design</h1>
        <p className="font-mulish text-s  leading-[27px] pl-2">
          We bring you carefully-curated interior design ideas, to give your
          home a brand new look. Explore exclusive interior designs and trends
          that are every bit inspirational as they are practical. Our team of
          interior designers have put together ideas across kitchen, bedroom,
          living room and more, to help you pick a design that will best suit
          your home interior requirements.
        </p>
        <DesignIdeasCard />
        <DesignIdeasForm />
      </div>
    </CommonLayout>
  );
};

export default DesignIdeas;
