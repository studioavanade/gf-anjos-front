import { BrowserRouter, Routes } from "react-router-dom";
import PublicRoute from "./public-route";
import ROUTING_PATHS from "./paths";
import Home from "./../modules/pages/home/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <PublicRoute exact path={ROUTING_PATHS.Root}>
          <Home /> teste
        </PublicRoute>

        <PublicRoute path="*">
          <Home />
        </PublicRoute>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
