import { combineReducers } from "redux";
import { IAmbassador } from "./amabassador/types";

import ambassador from "./amabassador/reducer";

export interface ApplicationState {
  ambassador: IAmbassador;
}

export default combineReducers({ ambassador });
