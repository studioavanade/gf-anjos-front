import { IDonation } from "../donation/types";

export interface ICampaign {
  soldBaskets: number;
  basketValue: number;
  startDate: Date;
  endDate: Date;
  pictureUrl: string;
  description: string;
  targetBaskets: number;
  donations: IDonation[];
}
