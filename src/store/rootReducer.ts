import { combineReducers } from "redux";
import { IAuthStates } from "./auth/types";
import { IAmbassador, IAmbassadorStates } from "./ambassador/types";
import { IPaymentStates } from "./payment/types";
import { ILoadingProgressState } from "./loading-progress/types";

import auth from "./auth/reducer";
import ambassador from "./ambassador/reducer";
import campaign from "./campaign/reducer";
import payment from "./payment/reducer";
import loading from "./loading-progress/reducer";
import ranking from "./ranking/reducer";

import { ICampaignStates } from "./campaign/types";
import { IRankingStates } from "./ranking/types";

export interface IApplicationState {
  auth: IAuthStates;
  ambassador: IAmbassadorStates;
  campaign: ICampaignStates;
  payment: IPaymentStates;
  loading: ILoadingProgressState;
  ranking: IRankingStates;
}

export default combineReducers({
  ambassador,
  auth,
  payment,
  loading,
  campaign,
  ranking,
});
