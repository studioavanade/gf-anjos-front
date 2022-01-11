import { combineReducers } from "redux";
import { IAuthStates } from "./auth/types";
import { IAmbassadorStates } from "./ambassador/types";
import { IPaymentStates } from "./payment/types";

import auth from "./auth/reducer";
import ambassador from "./ambassador/reducer";
import payment from "./payment/reducer";

export interface ApplicationState {
  auth: IAuthStates;
  ambassador: IAmbassadorStates;
  payment: IPaymentStates;
}

export default combineReducers({ ambassador, auth, payment });
