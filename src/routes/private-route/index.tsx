import { useDispatch, useSelector } from "react-redux";
import { Route, Navigate, Outlet } from "react-router-dom";
import { USER_EMAIL_STORAGE_KEY } from "../../constants";
import { saveUserEmail } from "../../store/auth/actions";
import { ApplicationState } from "../../store/rootReducer";
import * as storage from "../../utils/storage";

const PrivateRoute = ({ children, ...rest }: any) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state: ApplicationState) => state.auth.userEmail
  );

  const isLoggedIn = () => {
    console.log("################### 1");
    if (userEmail && userEmail.length > 0) return true;

    console.log("################### 2");
    const userEmailStored = storage.getStorage(USER_EMAIL_STORAGE_KEY);

    if (userEmailStored) {
      dispatch(saveUserEmail(userEmailStored));
      return true;
    }
    console.log("################### 3");

    return false;
  };

  return isLoggedIn() ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
