import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTING_PATHS from "./paths";
import Home from "./../modules/pages/home/index";
import PersonalInformation from "../modules/pages/ambassador-register/personal-information/personal-information";
import AmbassadorCreateAccount from "../modules/pages/ambassador-register/create-account/create-account";
import PaymentSteps from "./../modules/pages/payment-steps";
import AmbassadorLogin from "../modules/pages/ambassador-login";
import PrivateRoute from "./private-route/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path={ROUTING_PATHS.Root} element={<AmbassadorLogin />} />
        <Route
          path={ROUTING_PATHS.AmbassadorLogin}
          element={<AmbassadorLogin />}
        />
        <Route
          path={ROUTING_PATHS.AmbassadorCreateAccount}
          element={<AmbassadorCreateAccount />}
        />
        <Route path={ROUTING_PATHS.PhotoUpload} element={<Home />} />
        <Route path={ROUTING_PATHS.PaymentSteps} element={<PaymentSteps />} />

        <Route path="*" element={<Home />} />

        {/* Private routes */}
        <Route
          path={ROUTING_PATHS.PersonalInformations}
          element={<PrivateRoute />}
        >
          <Route element={<PersonalInformation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
