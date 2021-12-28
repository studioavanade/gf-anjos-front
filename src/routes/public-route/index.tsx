import { Route } from "react-router-dom";

const PublicRoute = ({ children, ...rest }: any) => {
  return <Route {...rest} component />;
};

export default PublicRoute;
