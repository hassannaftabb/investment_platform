import React from "react";
import { StepsAndAuthLayoutPropsType } from "./types";

const StepsAndAuthLayout = ({ children }: StepsAndAuthLayoutPropsType) => {
  return (
    <section className="bg-[#f3f3f3] w-full h-[100vh] flex items-center justify-center text-secondary-bright font-poppins">
      {children}
    </section>
  );
};

export default StepsAndAuthLayout;
