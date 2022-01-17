export enum LoadingProgressTypes {
  SET_LOADING = "@loadingProgress/SET_LOADING",
  CLEAR_LOADING = "@loadingProgress/CLEAR_LOADING",
}

export interface ILoadingProgressState {
  loading: boolean;
}
