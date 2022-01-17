import { combineReducers } from "redux";
import { IAuthStates } from "./auth/types";
import { IAmbassadorStates } from "./ambassador/types";
import { IPaymentStates } from "./payment/types";
import { ILoadingProgressState } from "./loading-progress/types";

import auth from "./auth/reducer";
import ambassador from "./ambassador/reducer";
import payment from "./payment/reducer";
import loading from "./loading-progress/reducer";

export interface ApplicationState {
  auth: IAuthStates;
  ambassador: IAmbassadorStates;
  payment: IPaymentStates;
  loading: ILoadingProgressState;
}

export default combineReducers({ ambassador, auth, payment, loading });
