import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhoneLogin from "../components/Auth/PhoneLogin";
import SignIn from "../components/Auth/SignIn/SignIn";
import SignUp from "../components/Auth/SignUp/SignUp";
import Home from "../components/ForUser/Home/Home";
import ForgetPassword from "../components/Auth/ForgetPassword/ForgetPassword";
import EmailSetReset from "../components/Auth/Email_set_Reset/EmailSetReset";
import Faq from "../components/ForUser/Faq/Faq";
import Services from "../components/ForUser/Services/Services";
import Terms from "../components/ForUser/Terms/Terms";
import Privacy from "../components/ForUser/Privacy/Privacy";
import Landing from "../components/ForUser/Landing/Landing";
import FindProfessional from "../components/ForUser/FindProfessional/FindProfessional";
import CompanyServices from "../CompanyServices/CompanyServices";
import Contact from "../components/ForUser/Contact/Contact";
import About from "../components/ForUser/About/About";
import CostCalculator from "../components/ForUser/CostCalculator/CostCalculator";
import CostCalculatorDetails from "../components/ForUser/CostCalculator/CostCalculatorDetails";
import DesignIdeas from "../components/ForUser/DesignIdeas/DesignIdeas";
import Profile from "../components/ForUser/profile/Profile";
import Welcome from "../components/ForUser/Welcome/Welcome";
import GetReview from "../components/ForUser/GetReview/GetReview";
import MyProfile from "../components/ForUser/MyProfile/MyProfile";
import DesignIdeaProducts from "../components/ForUser/DesignIdeaProducts/DesignIdeaProducts";
import ProductView from "../components/ForUser/ProductView/ProductView";
import Loader from "../components/sub-components/shared/Loader/Loader";
import DesignIdeaMain from "../components/ForUser/DesignIdeaMain/DesignIdeaMain";
import EditProject from "../components/ForUser/MyProfile/EditForms/EditProject";

const AppRoutes = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  return (
    <BrowserRouter>
      {isLoading && <Loader />}
      <Routes>
        <Route path="/" element={<SignIn setIsLoading={setIsLoading} />} />
        <Route
          path="/sign-up"
          element={<SignUp setIsLoading={setIsLoading} />}
        />
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route
          path="/login-with-phone"
          element={<PhoneLogin setIsLoading={setIsLoading} />}
        />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/emailreset" element={<EmailSetReset />} />
        <Route
          path="/design-ideas/:categoryName/:categoryId/project/:projectId"
          element={<DesignIdeaMain />}
        />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/costcalculator" element={<CostCalculator />} /> */}
        {/* <Route
          path="/CostCalculatordetails"
          element={<CostCalculatorDetails />}
        />
        <Route path="/editProject" element={<EditProject />} />
        <Route
          path="/:categoryName/:categoryId/projects"
          element={<DesignIdeaProducts />}
        />
        <Route path="/designIdeas" element={<DesignIdeas />} />
        <Route path="/productview" element={<ProductView />} />
        <Route path="/companyservices" element={<CompanyServices />} />
        <Route path="/getreview" element={<GetReview />} />
        <Route path="/services" element={<Services />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/vendor/:id" element={<Profile />} />
        <Route path="/findprofessional" element={<FindProfessional />} />
        <Route path="/myprofile" element={<MyProfile />} />
        <Route path="/welcome" element={<Welcome />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
