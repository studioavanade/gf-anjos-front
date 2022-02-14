import AmbassadorService from "../../services/ambassador";
import { AmbassadorActionTypes, IAmbassador } from "./types";
import { showErrorToast } from "./../../utils/toast/index";
import { clearLoading } from "../loading-progress/actions";
import { AxiosResponse } from "axios";
import { setSessionStorage } from "../../utils/storage";
import { AMBASSADOR_STORAGE_KEY } from "../../constants";

// Donator account
export const createAmbassador =
  (
    ambassador: IAmbassador,
    onSuccessCallback: any = null,
    onErrorCallback: any = null,
    onFinishCallback: any = null
  ) =>
  (dispatch: any) => {
    AmbassadorService()
      .createAmbassador(ambassador)
      .then((res: AxiosResponse) => {
        const amb = {
          ...ambassador,
          id: res.data.id,
        };
        setSessionStorage(AMBASSADOR_STORAGE_KEY, amb);
        dispatch(createAmbassadorSuccess(amb));
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error: any) => {
        const errorMessage = JSON.parse(error.request.response).message;
        console.error("Erro ao cadastrar embaixador: " + errorMessage);
        dispatch(createAmbassadorError(errorMessage));
        showErrorToast(errorMessage || "Erro ao criar embaixador.");
        if (onErrorCallback) onErrorCallback();
      })
      .finally(() => {
        if (onFinishCallback) onFinishCallback();
        dispatch(clearLoading());
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

export const setAmbassadorEmail = (email: string) => ({
  payload: email,
  type: AmbassadorActionTypes.SET_AMBASSADOR_EMAIL,
});

export const getAmbassador =
  (
    cpfCnpj?: string,
    email?: string,
    onSuccessCallback: any = null,
    onErrorCallback: any = null,
    onFinishCallback: any = null
  ) =>
  (dispatch: any) => {
    AmbassadorService()
      .getAmbassador(cpfCnpj, email)
      .then((res: AxiosResponse) => {
        dispatch(getAmbassadorSuccess(res.data));
        setSessionStorage(AMBASSADOR_STORAGE_KEY, res.data);
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error: any) => {
        const errorMessage = JSON.parse(error.request.response).message;
        console.error("Embaixador não localizado: " + errorMessage);
        if (onErrorCallback) onErrorCallback();
      })
      .finally(() => {
        if (onFinishCallback) onFinishCallback();
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

export const updateAmbassador =
  (
    ambassador: IAmbassador,
    onSuccessCallback: any = null,
    onErrorCallback: any = null,
    onFinishCallback: any = null
  ) =>
  (dispatch: any) => {
    AmbassadorService()
      .updateAmbassador(ambassador)
      .then((res: AxiosResponse) => {
        const updatedAmbassador = {
          ...ambassador,
          id: res.data.id,
        };

        setSessionStorage(AMBASSADOR_STORAGE_KEY, updatedAmbassador);
        dispatch(updateAmbassadorSuccess(updatedAmbassador));
        if (onSuccessCallback) onSuccessCallback();
      })
      .catch((error: any) => {
        const errorMessage = JSON.parse(error.request.response).message;
        console.error("Erro ao atualizar embaixador: " + errorMessage);
        dispatch(updateAmbassadorError(error.message));
        showErrorToast(errorMessage || "Erro ao criar embaixador.");
        if (onErrorCallback) onErrorCallback();
      })
      .finally(() => {
        if (onFinishCallback) onFinishCallback();
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

export const setIsEditting = (isEditting: boolean) => ({
  payload: isEditting,
  type: AmbassadorActionTypes.SET_AMBASSADOR_EDITTING,
});

export const saveAmbassadorEmail = (ambassadorEmail: string) => ({
  payload: ambassadorEmail,
  type: AmbassadorActionTypes.SAVE_AMBASSADOR_EMAIL,
});
