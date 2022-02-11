import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTING_PATHS from "./paths";
import PersonalInformation from "../modules/pages/ambassador-register/personal-information";
import AmbassadorCreateAccount from "../modules/pages/ambassador-register/create-account";
import PaymentSteps from "./../modules/pages/payment-steps";
import AmbassadorLogin from "../modules/pages/ambassador-login";
import PhotoUpload from "./../modules/pages/ambassador-register/photo-upload/";
import LadingPageDonator from "./../modules/pages/landing-pages/donator/";
import Ranking from "../modules/pages/ranking";
import PageNotFound from "./../modules/pages/404/index";
import LoadingProgress from "../modules/components/loading-progress";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <LoadingProgress />
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

        <Route path="*" element={<PageNotFound />} />

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
