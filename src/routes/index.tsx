import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTING_PATHS from "./paths";
import Home from "./../modules/pages/home/index";
import PersonalInformation from "../modules/pages/ambassador-register/personal-information/personal-information";
import AmbassadorCreateAccount from "../modules/pages/ambassador-register/create-account/create-account";
import PaymentSteps from "./../modules/pages/payment-steps";
import AmbassadorLogin from "../modules/pages/ambassador-login";
import PhotoUpload from "./../modules/pages/ambassador-register/photo-upload/index";
import LadingPageDonator from "./../modules/pages/landing-pages/donator/index";
import Ranking from "./../modules/pages/ranking/ranking";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*
         * Public routes
         */}
        <Route
          path={ROUTING_PATHS.LadingPageDonator}
          element={<LadingPageDonator />}
        />
        <Route path={ROUTING_PATHS.Root} element={<Ranking />} />
        <Route
          path={ROUTING_PATHS.AmbassadorLogin}
          element={<AmbassadorLogin />}
        />
        <Route
          path={ROUTING_PATHS.AmbassadorCreateAccount}
          element={<AmbassadorCreateAccount />}
        />
        <Route path={ROUTING_PATHS.PaymentSteps} element={<PaymentSteps />} />

        <Route path="*" element={<Home />} />

        <Route path={ROUTING_PATHS.Ranking} element={<Ranking />} />

        {/*
         * Private components
         */}
        <Route
          path={ROUTING_PATHS.PersonalInformations}
          element={<PersonalInformation />}
        />
        <Route path={ROUTING_PATHS.PhotoUpload} element={<PhotoUpload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
