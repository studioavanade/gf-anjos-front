import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { USER_EMAIL_STORAGE_KEY } from "../../../constants";
import { saveUserEmail } from "../../../store/auth/actions";
import { IApplicationState } from "../../../store/rootReducer";
import * as storage from "../../../utils/storage";

const PrivateComponentVerifier = ({ children }: any) => {
  const dispatch = useDispatch();
  const userEmail = useSelector(
    (state: IApplicationState) => state.auth.userEmail
  );

  const isLoggedIn = () => {
    if (userEmail && userEmail.length > 0) return true;

    const userEmailStored = storage.getStorage(USER_EMAIL_STORAGE_KEY);

    if (userEmailStored) {
      dispatch(saveUserEmail(userEmailStored));
      return true;
    }

    return false;
  };

  return !isLoggedIn() ? <Navigate to="/" /> : <></>;
};

export default PrivateComponentVerifier;
