import { ILoadingProgressState, LoadingProgressTypes } from "./types";

const initialState: ILoadingProgressState = {
  loading: false,
};

const paymentReducer = (
  state: ILoadingProgressState = initialState,
  action: any
): ILoadingProgressState => {
  switch (action.type) {
    case LoadingProgressTypes.SET_LOADING:
      return {
        loading: true,
      };
    case LoadingProgressTypes.CLEAR_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default paymentReducer;
