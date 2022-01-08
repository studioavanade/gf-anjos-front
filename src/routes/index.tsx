import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTING_PATHS from "./paths";
import Home from "./../modules/pages/home/index";
import PersonalInformation from "../modules/pages/ambassador-register/personal-information/personal-information";
import BasicRegistration from "./../modules/pages/ambassador-register/email/email";
import PaymentSteps from "./../modules/pages/payment-steps";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTING_PATHS.Root} element={<Home />} />
        <Route
          path={ROUTING_PATHS.BasicRegistration}
          element={<BasicRegistration />}
        />
        <Route
          path={ROUTING_PATHS.PersonalInformations}
          element={<PersonalInformation />}
        />
        <Route path={ROUTING_PATHS.PhotoUpload} element={<Home />} />
        <Route path={ROUTING_PATHS.PaymentSteps} element={<PaymentSteps />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
