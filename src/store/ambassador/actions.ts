import AmbassadorService from "../../services/ambassador";
import { AmbassadorActionTypes, IAmbassador } from "./types";
import { showErrorToast } from "./../../utils/toast/index";
import { clearLoading } from "../loading-progress/actions";

// Donator account
export const createAmbassador =
  (ambassador: IAmbassador, successCallback?: any) => (dispatch: any) => {
    AmbassadorService()
      .createAmbassador(ambassador)
      .then((res: any) => {
        const amb = {
          ...ambassador,
          id: res.data.id,
        };
        dispatch(createAmbassadorSuccess(amb));
        if (successCallback) successCallback();
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

// Get Ambassador

export const getAmbassador = (ambassador: IAmbassador) => (dispatch: any) => {
  AmbassadorService()
    .getAmbassador(ambassador)
    .then((res: any) => {
      const getAmb = {
        ...ambassador,
        id: res.data.id,
      };
      dispatch(getAmbassadorSuccess(getAmb));
    })
    .catch((error) => {
      dispatch(getAmbassadorError(error.message));
      showErrorToast(error.message);
    });
};

export const getAmbassadorSuccess = (ambassador: IAmbassador) => ({
  payload: ambassador,
  type: AmbassadorActionTypes.GET_AMBASSADOR,
});

export const getAmbassadorError = (error: any) => ({
  payload: error,
  type: AmbassadorActionTypes.GET_AMBASSADOR_ERROR,
});

// Update Ambassador

export const updateAmbassador =
  (ambassador: IAmbassador) => (dispatch: any) => {
    AmbassadorService()
      .updateAmbassador(ambassador)
      .then((res: any) => {
        const updAmb = {
          ...ambassador,
          id: res.data.id,
        };
        dispatch(updateAmbassadorSuccess(updAmb));
      })
      .catch((error) => {
        dispatch(updateAmbassadorError(error.message));
        showErrorToast(error.message);
      });
  };

export const updateAmbassadorSuccess = (ambassador: IAmbassador) => ({
  payload: ambassador,
  type: AmbassadorActionTypes.UPDATE_AMBASSADOR,
});

export const updateAmbassadorError = (error: any) => ({
  payload: error,
  type: AmbassadorActionTypes.UPDATE_AMBASSADOR_ERROR,
});

export const clearAmbassadorState = () => ({
  type: AmbassadorActionTypes.CLEAR_STATE,
});
