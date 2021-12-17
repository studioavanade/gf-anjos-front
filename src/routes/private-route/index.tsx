import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";
import { AMBASSADOR_STORAGE_KEY } from "../../constants";
import { ApplicationState } from "../../store/rootReducer";
import * as storage from "../../utils/storage";

const PrivateRoute = ({ children, ...rest }: any) => {
  const ambassadorState = useSelector(
    (state: ApplicationState) => state.ambassador
  );

  const isLoggedIn = () => {
    if (
      ambassadorState &&
      ambassadorState.email &&
      ambassadorState.email.length > 0
    )
      return true;

    const ambassadorStored = storage.getStorage(AMBASSADOR_STORAGE_KEY);
    if (ambassadorStored) return true;

    return false;
  };

  return (
    <Route
      {...rest}
      render={({ location }: any) =>
        isLoggedIn() ? children : <Navigate replace to="/" state={location} />
      }
    />
  );
};

export default PrivateRoute;
