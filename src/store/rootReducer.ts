import { combineReducers } from "redux";
import { IAuthState } from "./auth/types";
import { IAmbassador } from "./amabassador/types";

import auth from "./auth/reducer";
import ambassador from "./amabassador/reducer";

export interface ApplicationState {
  auth: IAuthState;
  ambassador: IAmbassador;
}

export default combineReducers({ ambassador, auth });
