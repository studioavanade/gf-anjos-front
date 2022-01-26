import { combineReducers } from "redux";
import { IAuthStates } from "./auth/types";
import { IAmbassadorStates } from "./ambassador/types";
import { IPaymentStates } from "./payment/types";
import { ILoadingProgressState } from "./loading-progress/types";

import auth from "./auth/reducer";
import ambassador from "./ambassador/reducer";
import campaign from "./campaign/reducer";
import payment from "./payment/reducer";
import loading from "./loading-progress/reducer";
import { ICampaignStates } from "./campaign/types";

export interface ApplicationState {
  auth: IAuthStates;
  ambassador: IAmbassadorStates;
  campaign: ICampaignStates;
  payment: IPaymentStates;
  loading: ILoadingProgressState;
}

export default combineReducers({
  auth,
  ambassador,
  campaign,
  payment,
  loading,
});
