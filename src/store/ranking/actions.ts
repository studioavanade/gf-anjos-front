import { RankingTypes } from "./types";
import RankingService from "../../services/ranking";
import { clearLoading } from "../loading-progress/actions";

export const getRanking = () => (dispatch: any) => {
  RankingService()
    .getRanking()
    .then((res) => {
      dispatch(getRankingSuccess(res.data));
    })
    .catch((error) => dispatch(getRankingError(error)))
    .finally(() => {
      dispatch(clearLoading());
    });
};

const getRankingSuccess = (data: any) => ({
  payload: data,
  type: RankingTypes.GET_RANKING_SUCCESS,
});

const getRankingError = (error: any) => ({
  payload: error,
  type: RankingTypes.GET_RANKING_ERROR,
});
