import { combineReducers } from "redux";
import { IAuthStates } from "./auth/types";
import { IAmbassador, IAmbassadorStates } from "./ambassador/types";
import { IPaymentStates } from "./payment/types";
import { ILoadingProgressState } from "./loading-progress/types";

import auth from "./auth/reducer";
import ambassador from "./ambassador/reducer";
import campaign from "./campaign/reducer";
import ambassadorEdit from "./ambassador/reducer";
import payment from "./payment/reducer";
import loading from "./loading-progress/reducer";
import { ICampaignStates } from "./campaign/types";

export interface ApplicationState {
  auth: IAuthStates;
  ambassador: IAmbassadorStates;
  campaign: ICampaignStates;
  payment: IPaymentStates;
  loading: ILoadingProgressState;
  ambassadorEdit: IAmbassador;
}

export default combineReducers({
  ambassador,
  auth,
  payment,
  loading,
  ambassadorEdit,
  campaign,
});
