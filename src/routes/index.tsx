import { BrowserRouter, Route, Routes } from "react-router-dom";
import ROUTING_PATHS from "./paths";
import Home from "./../modules/pages/home/index";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTING_PATHS.Root} element={<Home />} />
        <Route path={ROUTING_PATHS.BasicRegistration} element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
