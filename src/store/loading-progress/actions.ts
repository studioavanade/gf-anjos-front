import { LoadingProgressTypes } from "./types";

export const setLoading = () => ({
  type: LoadingProgressTypes.SET_LOADING,
});

export const clearLoading = () => ({
  type: LoadingProgressTypes.CLEAR_LOADING,
});
