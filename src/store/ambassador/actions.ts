import AmbassadorService from "../../services/ambassador";
import { AmbassadorActionTypes, IAmbassador } from "./types";
import { showErrorToast } from "./../../utils/toast/index";
import { clearLoading } from "../loading-progress/actions";

// Donator account
export const createAmbassador =
  (ambassador: IAmbassador) => (dispatch: any) => {
    console.log("creating ambassador");
    AmbassadorService()
      .createAmbassador(ambassador)
      .then((res: any) => {
        const amb = {
          ...ambassador,
          id: res.data.id,
        };
        console.log("created ambassador");
        dispatch(createAmbassadorSuccess(amb));
      })
      .catch((error) => {
        dispatch(createAmbassadorError(error.message));
        showErrorToast(error.message);
      })
      .finally(() => dispatch(clearLoading()));
  };

const createAmbassadorSuccess = (ambassador: IAmbassador) => ({
  payload: ambassador,
  type: AmbassadorActionTypes.CREATE_AMBASSADOR_SUCCESS,
});

const createAmbassadorError = (error: any) => ({
  payload: error,
  type: AmbassadorActionTypes.CREATE_AMBASSADOR_ERROR,
});

export const setAmbassadorEmail = (email: string) => ({
  payload: email,
  type: AmbassadorActionTypes.SET_AMBASSADOR_EMAIL,
});

 export const getAmbassador = (ambassador: IAmbassador) => ({
   payload: ambassador, 
   type: AmbassadorActionTypes.GET_AMBASSADOR,
 });