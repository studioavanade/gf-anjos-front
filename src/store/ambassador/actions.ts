import AmbassadorService from "../../services/ambassador";
import { AmbassadorActionTypes, IAmbassador } from "./types";
import { showErrorToast } from "./../../utils/toast/index";

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
      });
  };

const createAmbassadorSuccess = (ambassador: IAmbassador) => ({
  payload: ambassador,
  type: AmbassadorActionTypes.CREATE_AMBASSADOR_SUCCESS,
});

const createAmbassadorError = (error: any) => ({
  payload: error,
  type: AmbassadorActionTypes.CREATE_AMBASSADOR_ERROR,
});
