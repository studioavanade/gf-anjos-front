export interface IDonation {
  id: number;
  angelId: string;
  donatorId: string;
  date: Date;
  type: DonationType;
  value: number;
}

export enum DonationType {
  SINGLE = 0,
  RECURRENT = 1,
}
