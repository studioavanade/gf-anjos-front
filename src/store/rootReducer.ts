import { combineReducers } from "redux";
import { IAuthStates } from "./auth/types";
import { IAmbassador, IAmbassadorStates } from "./ambassador/types";
import { IPaymentStates } from "./payment/types";
import { ILoadingProgressState } from "./loading-progress/types";
import { ICampaign } from "./campaign/types";

import auth from "./auth/reducer";
import ambassador from "./ambassador/reducer";
import ambassadorEdit from "./ambassador/reducer";
import campaignEdit from "./campaign/reducer";
import payment from "./payment/reducer";
import loading from "./loading-progress/reducer";


export interface ApplicationState {
  auth: IAuthStates;
  ambassador: IAmbassadorStates;
  payment: IPaymentStates;
  loading: ILoadingProgressState;
  ambassadorEdit: IAmbassador;
  campaignEdit: ICampaign;
}

export default combineReducers({ ambassador, auth, payment, loading, ambassadorEdit, campaignEdit});
